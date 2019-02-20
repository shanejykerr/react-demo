import React from 'react';
import ApiTableHeader from './api-table-header/ApiTableHeader.jsx';
import ApiTableRow from './api-table-row/ApiTableRow.jsx';

class ApiTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            headerList: [],
        };
    }

    getImageSrc(imageName) {
        const formattedDate = this.props.currentViewDate.split('-').join('/');

        return `https://epic.gsfc.nasa.gov/archive/natural/${formattedDate}/png/${imageName}.png`;
    }

    getFetchEndpoint() {
        return `https://api.nasa.gov/EPIC/api/natural/date/${this.props.currentViewDate}?api_key=2Jz8k4sBDasuVSwydA7u0pxm13rozN7Qmzsy4rl3`;
    }

    filterData(data) {
        return data.map((item) => ({
            'Date': item.date,
            'ID': item.identifier,
            'Latitude': item.centroid_coordinates.lat,
            'Longitude': item.centroid_coordinates.lon,
            'Image': this.getImageSrc(item.image)
        }));
    }

    renderRows(data) {
        return data.map((item, idx) => (
            <ApiTableRow 
                key={idx}
                data={item}
                isAlternateRow={(idx % 2 === 1)}
            />
        ));
    }

    fetchData() {
        fetch(this.getFetchEndpoint())
            .then((res) => {
                return res.json();
            })
            .then(data => {
                const filteredData = this.filterData(data);

                this.setState({
                    data: filteredData,
                    headerList: Object.keys(filteredData[0]),
                }, () => {
                })
            })
            .catch((err) => {
                console.log('Ya done goofed!', err);
            })
    }

    componentDidUpdate(prevProps) {
        this.fetchData();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (
            this.props.currentViewDate === '' ||
            nextProps.currentViewDate !== this.props.currentViewDate ||
            this.state.data.length === 0 ||
            JSON.stringify(this.state.data) !== JSON.stringify(nextState.data)
        ) {
            return true
        }
        return false;
    }

    render() {
        return(
            <table className="api-table">
                <thead>
                    <ApiTableHeader headerList={this.state.headerList}/>
                </thead>
                <tbody>
                    {this.renderRows(this.state.data)}
                </tbody>
            </table>
        )
    }
}

export default ApiTable;