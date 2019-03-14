import * as logAction from '../actions/logAction';

const initialState = {
    countries: [],
    users: [],

    loadingFlag: false,
    loadedFlag: false,

    logResult: []
};

const reducer = (state = initialState, action) => {
    let newState = { ...state };

    switch (action.type) {
        case logAction.types.LOAD_COUNTRIES:
            newState.countries = action.countries;
            break;

        case logAction.types.LOAD_USERS:
            newState.users = action.users;
            break;

        case logAction.types.CHANGE_LODING_FLAG:
            newState.loadingFlag = action.flag;
            break;

        case logAction.types.CHANGE_LODED_FLAG:
            newState.loadedFlag = action.flag;
            break;

        case logAction.types.LOAD_LOG_RESULTS:
            newState.logResult = action.logResult;
            break;

        default:
            break;
    }

    return newState;
};

export default reducer;