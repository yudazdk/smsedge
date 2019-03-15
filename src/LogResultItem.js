import React from 'react';

const LogResultItem = (props) => {
    const {logItem} = props;

    return (
        <tr>
            <td>{logItem.log_date}</td>
            <td>{logItem.sent_succeessfully}</td>
            <td>{logItem.sent_failed}</td>
        </tr>
    );
};

export default LogResultItem;