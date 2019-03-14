import React, { Component } from 'react';

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

class LogResult extends Component {
    renderRows() {
        return this.props.logResult.map( (logItem, index) => {
            return <LogResultItem key={index} logItem={logItem}/>
        });
    }

    render() {
        return (
            <table className="table-striped">
                <thead>
                    <tr className="first-row">
                        <th>Date</th>
                        <th>Successfully sent</th>
                        <th>Failed</th>
                    </tr>
                </thead>

                <tbody>{this.renderRows()}</tbody>
            </table>
        );
    }
}

export default LogResult;