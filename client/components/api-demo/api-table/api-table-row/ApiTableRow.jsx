import React from 'react';

const renderDataCells = (dataList) => {
    if (!dataList) return;

    return Object.values(dataList).map((item, idx) => (
        <td className="table-item" key={idx}>
            {idx === 4 ? <img className="table-image" src={item} /> : item}
        </td>
    ))
}

const ApiTableRow = (props) => (
    <tr className={props.isAlternateRow ? "alternate-table-row" : ""}>
        {renderDataCells(props.data)}
    </tr>
);

export default ApiTableRow;