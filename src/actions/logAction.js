import axios from 'axios';

export const types = {
    LOAD_COUNTRIES: 'LOAD_COUNTRIES',
    LOAD_USERS: 'LOAD_USERS',

    CHANGE_LODING_FLAG: 'CHANGE_LODING_FLAG',
    CHANGE_LODED_FLAG: 'CHANGE_LODED_FLAG',

    LOAD_LOG_RESULTS: 'LOAD_LOG_RESULTS'
};

export function loadCountries(dispatch) {
    axios.get('http://localhost/smsedge/api/countries.php').then( (response) => {
        dispatch({type: types.LOAD_COUNTRIES, countries: response.data});
    },  (error) => {
        console.log(error);
    });
}

export function loadUsers(dispatch) {
    axios.get('http://localhost/smsedge/api/users.php').then( (response) => {
        dispatch({type: types.LOAD_USERS, users: response.data});
    },  (error) => {
        console.log(error);
    });
}

export function searchLogs(dispatch, filters) {
    dispatch({type: types.CHANGE_LODING_FLAG, flag: true});
    dispatch({type: types.CHANGE_LODED_FLAG, flag: false});

    axios({
        url: 'http://localhost/smsedge/api/logs.php',
        method: "get",
        params: filters
    }).then(function (result) {
        dispatch({type: types.LOAD_LOG_RESULTS, logResult: result.data});

        dispatch({type: types.CHANGE_LODING_FLAG, flag: false});
        dispatch({type: types.CHANGE_LODED_FLAG, flag: true});
    }, function (error) {
        dispatch({type: types.CHANGE_LODING_FLAG, flag: false});
    });
}