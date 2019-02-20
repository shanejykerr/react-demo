import React from 'react';
import Datepicker from '../global/Datepicker.jsx';
import ApiTable from './api-table/ApiTable.jsx';

class ApiDemo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentViewDate: '',
            dates: [],
        }
    }

    componentDidMount() {
        const dates = this.getRecentDates();

        this.setState({
            currentViewDate: dates[0],
            dates
        })
    }

    setViewDate(date) {
        console.log('========================== NEW DATE BEING SET! ==========================');
        console.log(`${date} vs ${this.state.currentViewDate}`);
        if (date === this.state.currentViewDate) return;

        this.setState({
            currentViewDate: date,
        });
    }

    getRecentDates() {
        const dates = [];

        for (let daysAgo = 2; daysAgo < 10; daysAgo++) {
            const currentDate = new Date();

            currentDate.setDate(currentDate.getDate() - daysAgo);

            dates.push(currentDate.toJSON().slice(0, 10));
        }
        return dates;
    }

    render() {
        return (
            <main className="api-demo">
                <section className="api-description">
                    This is a table that pulls from a public API in order to render a certain number of rows based on the query. 
                    A pagination component is automatically generated to match the number of entries that are retrieved from 
                    the public database.
                </section>
                <Datepicker dates={this.state.dates} handleClick={(ev) => this.setViewDate(ev)}/>
                <ApiTable currentViewDate={this.state.currentViewDate} />
            </main>
        )
    }
}

export default ApiDemo;