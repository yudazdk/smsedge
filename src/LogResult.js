import React, { Component } from 'react';

import LogResultItem from './LogResultItem';

/**
 * This component renders the
 * log result table.
 */
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