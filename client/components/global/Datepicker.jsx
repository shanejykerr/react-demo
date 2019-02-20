import React from 'react';

const Datepicker = (props) => {
    const renderDateSelects = (dates) => {
        return dates.map((date, idx) => (
            <button 
                className="date-select" 
                onClick={(ev) => props.handleClick(ev.target.value)}
                key={idx}
                value={date}
            >
                {date}
            </button>
        ));
    }

    return (
        <details className="date-picker" open>
            <summary className="date-picker-description"><h3 className="date-picker-header">Select a date: </h3></summary>
            <section className="date-container">
                {renderDateSelects(props.dates)}
            </section>
        </details>
    )
}

export default Datepicker;