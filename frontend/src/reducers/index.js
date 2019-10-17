import actionTypes from '../actions/actionTypes';
const {
    LOGIN_SUCCESSFUL,
    LOGIN_FAILED,
    LOGOUT,
    REGISTER_FAILED,
    INCREASE_SUCCESSFUL,
    INCREASE_FAILED,
    DECREASE_SUCCESSFUL,
    DECREASE_FAILED,
} = actionTypes;

const initState = () => ({
    loggedin: false,
    user: null,
    errors: [],
});

const rootReducer = (state = initState(), action) => {
    console.log('reducer state:');
    console.log(state);

    switch (action.type) {
        case LOGIN_SUCCESSFUL:
            localStorage.setItem('token', action.payload.token);

            return {
                ...state,
                loggedin: true,
                user: action.payload.user,
                errors: [],
            };

        case LOGIN_FAILED:
            return {
                ...state,
                errors: [...action.payload.errors, action.payload.message],
            };

        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                loggedin: false,
                user: null,
                errors: [],
            };

        case REGISTER_FAILED:
            return {
                ...state,
                loggedin: false,
                user: null,
                errors: [...action.payload.errors, action.payload.message],
            };

        case INCREASE_SUCCESSFUL:
            // Nothing to do here
            return state;

        case INCREASE_FAILED:
            return {
                ...state,
                errors: [...action.payload.errors, action.payload.message],
            };

        case DECREASE_SUCCESSFUL:
            // Nothing to do here
            return state;

        case DECREASE_FAILED:
            return {
                ...state,
                errors: [...action.payload.errors, action.payload.message],
            };

        default:
            return state;

        case FETCH_SALESPERFORMANCES_SUCCESSFUL:
            return state;

        case FETCH_SALESPERFORMANCES_FAILED:
            return state;
    }
};

export default rootReducer;
