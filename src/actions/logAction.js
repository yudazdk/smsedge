import axios from 'axios';

export const types = {
    LOAD_COUNTRIES: 'LOAD_COUNTRIES',
    LOAD_USERS: 'LOAD_USERS',

    CHANGE_LODING_FLAG: 'CHANGE_LODING_FLAG',
    CHANGE_LODED_FLAG: 'CHANGE_LODED_FLAG',

    LOAD_LOG_RESULTS: 'LOAD_LOG_RESULTS'
};

export const apiUrl = 'http://localhost/smsedge/api';

/**
 * This function loads the
 * countries from server.
 *
 * @param dispatch
 * @returns {Promise.<void>}
 */
export async function loadCountries(dispatch) {
    try {
        const response = await axios.get(apiUrl + '/countries.php');
        dispatch({type: types.LOAD_COUNTRIES, countries: response.data});
    } catch(error) {
        console.log(error);
    }
}

/**
 * This function load the
 * users from server.
 *
 * @param dispatch
 * @returns {Promise.<void>}
 */
export async function loadUsers(dispatch) {
    try {
        const response = await axios.get(apiUrl + '/users.php');
        dispatch({type: types.LOAD_USERS, users: response.data});
    } catch(error) {
        console.log(error);
    }
}

/**
 * This function searches logs
 * according to filters.
 *
 * @param dispatch
 * @param filters
 */
export async function searchLogs(dispatch, filters) {
    dispatch({type: types.CHANGE_LODING_FLAG, flag: true});
    dispatch({type: types.CHANGE_LODED_FLAG, flag: false});

    try {
        const result = await axios({
            url: apiUrl + '/logs.php',
            method: "get",
            params: filters
        });

        dispatch({type: types.LOAD_LOG_RESULTS, logResult: result.data});

        dispatch({type: types.CHANGE_LODING_FLAG, flag: false});
        dispatch({type: types.CHANGE_LODED_FLAG, flag: true});
    } catch(error) {
        dispatch({type: types.CHANGE_LODING_FLAG, flag: false});
    }
}