import React from 'react';

const ApiTableHeader = (props) => {
    const generateHeaders = (headerList) => {
        return headerList.map((item, idx) => (
            <th scope="col" colSpan="1" key={idx} className="table-header">{item}</th>
        ));
    }

    return (
        <tr>
            {generateHeaders(props.headerList)}
        </tr>
    )
}

export default ApiTableHeader;