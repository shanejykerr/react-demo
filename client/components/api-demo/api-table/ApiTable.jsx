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
        console.log('Data being filtered:', data.map((item) => ({
            'Date': item.date,
            'ID': item.identifier,
            'Latitude': item.centroid_coordinates.lat,
            'Longitude': item.centroid_coordinates.lon,
            'Image': this.getImageSrc(item.image)
        })));

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
        console.log(`this.props.currentViewDate IN FETCH: ${this.getFetchEndpoint()}`)
        fetch(this.getFetchEndpoint())
            .then((res) => {
                return res.json();
            })
            .then(data => {
                const filteredData = this.filterData(data);    
                console.log(`Current Data:`, filteredData);

                this.setState({
                    data: filteredData,
                    headerList: Object.keys(filteredData[0]),
                }, () => {
                console.log(`State Data:`, this.state.data);
                })
            })
            .catch((err) => {
                console.log('Ya done goofed!', err);
            })
    }

    componentDidUpdate(prevProps) {
        console.log('========================== I AM UPDATING! ==========================');
        console.log(`componentDidUpdate prevProps Date:`, prevProps.currentViewDate);
        console.log(`componentDidUpdate props Date:`, this.props.currentViewDate);
        console.log(`componentDidUpdate State:`, this.state.data);
        this.fetchData();
        console.log(`componentDidUpdate prevProps Date POST FETCH:`, prevProps.currentViewDate);    
        console.log(`componentDidUpdate props POST FETCH:`, this.props.currentViewDate);    
        console.log(`componentDidUpdate State POST FETCH:`, this.state.data);    
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('========================== I AM CHECKING! ==========================');
        console.log(`this.props.currentViewDate: ${this.props.currentViewDate}`);
        console.log(`nextProps.currentViewDate: ${nextProps.currentViewDate}`);
        console.log(`This State Data:`, this.state.data);
        console.log(`Next State Data:`, nextState.data);
        if (
            this.props.currentViewDate === '' ||
            nextProps.currentViewDate !== this.props.currentViewDate ||
            this.state.data.length === 0 ||
            JSON.stringify(this.state.data) !== JSON.stringify(nextState.data)
        ) {
            console.log('========================== RETURNING TRUE! ==========================');
            return true
        }
        console.log('========================== RETURNING FALSE! ==========================');
        return false;
    }

    render() {
        console.log('========================== I AM RENDERING! ==========================');
        console.log('State Data on RENDER:', this.state.data);
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