import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { connect } from "react-redux";
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import LogResult from './LogResult';

import * as logAction from './actions/logAction';

const TIME_FORMAT = 'YYYY-MM-DD';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filters: {
                from_date: null,
                to_date: null,
                user_id: '',
                country_id: ''
            }
        };

        this.fromDateChange = this.fromDateChange.bind(this);
        this.toDateChange = this.toDateChange.bind(this);
    }

    componentDidMount() {
        logAction.loadCountries(this.props.dispatch);
        logAction.loadUsers(this.props.dispatch);
    }

    /**
     * This function updates the
     * from date variable in the
     * state.
     *
     * @param date
     */
    fromDateChange(date) {
        let {filters} = this.state;
        filters.from_date = date;

        this.setState({filters });
    }

    /**
     * This function updates the
     * to date variable in the
     * state.
     *
     * @param date
     */
    toDateChange(date) {
        let {filters} = this.state;
        filters.to_date = date;

        this.setState({filters});
    }

    /**
     * This function updates the
     * country filter in the state.
     *
     * @param event
     */
    countryChange = (event) => {
        let {filters} = this.state;
        filters.country_id = event.target.value;

        this.setState({filters});
    };

    /**
     * This function updates the
     * select options of the country
     * field.
     *
     * @param event
     */
    renderCountryOptions() {
        return this.props.countries.map( (item) => {
            return <option key={item.cnt_id} value={item.cnt_id}>{item.cnt_title}</option>;
        });
    }

    /**
     * This function updates the
     * user filter in the state.
     *
     * @param event
     */
    userChange = (event) => {
        let {filters} = this.state;
        filters.user_id = event.target.value;

        this.setState({filters});
    };

    /**
     * This function updates the
     * select options of the user
     * field.
     *
     * @param event
     */
    renderUserOptions() {
        return this.props.users.map( (item) => {
            return <option key={item.usr_id} value={item.usr_id}>{item.usr_name}</option>;
        });
    }

    /**
     * This function sends filters
     * for the server to get logs.
     *
     * @param event
     */
    searchLog = (event) => {
        event.preventDefault();

        let stateFilters = this.state.filters;
        let fromDate = moment(stateFilters.from_date).format(TIME_FORMAT);
        let toDate = moment(stateFilters.to_date).format(TIME_FORMAT);

        let filters = {
            from_date: fromDate,
            to_date: toDate
        };

        if ( stateFilters.country_id !== '' ) {
            filters.country_id = this.state.filters.country_id;
        }

        if ( stateFilters.user_id !== '' ) {
            filters.user_id = this.state.filters.user_id;
        }

        logAction.searchLogs(this.props.dispatch, filters);
    };

    validateDate(dateValue) {
        return moment(dateValue,TIME_FORMAT).isValid();
    }

    validateVariables() {
        this.validInput = true;
        this.fromDateClass = "form-control";
        this.toDateClass = "form-control";

        if ( !this.validateDate(this.state.filters.from_date) ) {
            this.validInput = false;
            this.fromDateClass += " error";
        }

        if ( !this.validateDate(this.state.filters.to_date) ) {
            this.validInput = false;
            this.toDateClass += " error";
        }
    }

    render() {
        let {props, state} = this; // shortcut for state and props

        this.validateVariables();

        return (
            <div className="container">
                <h1>Practical Test</h1>

                <div className="form-group row">
                    <label className="col-md-2">From Date:</label>
                    <div className="col-md-3">
                        <DatePicker
                            selected={ state.filters.from_date }
                            onChange={ this.fromDateChange}
                            name="from_date"
                            dateFormat="YYYY-MM-dd"
                            className={this.fromDateClass}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-2">To Date:</label>
                    <div className="col-md-3">
                        <DatePicker
                            selected={ state.filters.to_date }
                            onChange={ this.toDateChange}
                            name="to_date"
                            dateFormat="YYYY-MM-dd"
                            className={this.toDateClass}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-2">Country:</label>
                    <div className="col-md-3">
                        <select className="form-control" value={state.filters.country_id}
                                onChange={this.countryChange}>
                            <option key={0} value=''>None</option>
                            {this.renderCountryOptions()}
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-md-2">User:</label>
                    <div className="col-md-3">
                        <select className="form-control" value={state.filters.user_id}
                                onChange={this.userChange}>
                            <option key={0} value=''>None</option>
                            {this.renderUserOptions()}
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary button-style" onClick={this.searchLog} disabled={!this.validInput}>Search</button>
                </div>

                { props.loadingFlag &&
                    <i className="fa fa-spinner fa-spin"/>
                }

                { props.loadedFlag &&
                    <LogResult logResult={props.logResult}/>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        countries: state.countries,
        users: state.users,

        loadingFlag: state.loadingFlag,
        loadedFlag: state.loadedFlag,

        logResult: state.logResult
    };
};

export default connect(mapStateToProps)(App);
