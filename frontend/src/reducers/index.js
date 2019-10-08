import API from '../api';
import axios from 'axios';
import actionTypes from '../actions/actionTypes';
const {
    LOGIN,
    LOGOUT,
    REGISTER,
    INCREMENT_WEEKLY,
    INCREMENT_MONTHLY,
    INCREMENT_YEARLY,
    DECREMENT_WEEKLY,
    DECREMENT_MONTHLY,
    DECREMENT_YEARLY
} = actionTypes;

const initState = () => ({
    loggedin: false,
    user: null,
    errors: []
});

const rootReducer = (state = initState(), action) => {
    var newState, data, config;

    switch (action.type) {
        case LOGIN:
            // Get email and password from payload
            data = { ...action.payload };

            config = {
                'Content-Type': 'application/json'
            };

            // Initialize a newState object
            newState = {
                loggedin: false,
                user: null,
                errors: []
            };

            // Make a post request with axios to the sigin-api-route
            axios
                .post(API.USERS.SIGNIN, data, config)
                .then(res => {
                    if (res.ok) {
                        localStorage.setItem('token', res.token);
                        console.log('Successfully stored JWT in localStorage');
                        newState.loggedin = true;
                        newState.user = res.user;
                    } else {
                        console.log('Error with login call, errors are in the state.errors array');
                        newState.errors.push(res.message);
                    }
                })
                .catch(err => console.log(err));

            return {
                ...state,
                ...newState
            };

        case LOGOUT:
            newState = {
                loggedin: false,
                user: null,
                errors: []
            };

            localStorage.removeItem('token');
            return {
                ...state,
                ...newState
            };

        case REGISTER:
            data = { ...action.payload };

            config = {
                'Content-Type': 'application/json'
            };

            newState = {
                loggedin: false,
                user: null,
                errors: []
            };

            axios
                .post(API.USERS.SIGNUP, data, config)
                .then(res => {
                    if (res.ok) {
                        localStorage.setItem('token', res.token);
                        console.log('Successfully stored JWT in localStorage');
                        newState.loggedin = true;
                        newState.user = res.user;
                    } else {
                        if (res.errors.length > 0) {
                            newState.errors = res.errors;
                        } else {
                            // Error while creating user, log on backend
                            console.log(res.message);
                        }
                    }
                })
                .catch(err => console.log(err));

            return newState;

        case INCREMENT_WEEKLY:
            // axios request ->
            break;

        case INCREMENT_MONTHLY:
            // axios request ->
            break;

        case INCREMENT_YEARLY:
            // axios request ->
            break;

        case DECREMENT_WEEKLY:
            // axios request ->
            break;

        case DECREMENT_MONTHLY:
            // axios request ->
            break;

        case DECREMENT_YEARLY:
            // axios request ->
            break;

        default:
            return state;
    }
};

export default rootReducer;
