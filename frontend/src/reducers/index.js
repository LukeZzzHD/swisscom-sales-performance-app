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

const rootReducer = async (state = initState, action) => {
    switch (action.type) {
        case LOGIN:
            // Get email and password from payload
            let loginData = { ...action.payload };

            let loginConfig = {
                'Content-Type': 'application/json'
            };

            let newState = {};

            // Make a post request with axios to the sigin-api-route
            let res = await axios.post(API.USERS.SIGNIN, loginData, loginConfig);
            if (res.data.ok) {
                localStorage.setItem('token', res.data.token);
                console.log('Successfully stored JWT in localStorage');
                newState.loggedin = true;
                newState.user = res.data.user;
                newState.errors = [];
            } else {
                console.log('Error with login call, errors are in the state.errors array');
                newState.errors.push(res.data.message);
            }

            return Object.assign({}, state, {
                loggedin: newState.loggedin,
                user: newState.user,
                errors: newState.errors
            });

        case LOGOUT:
            let newLogoutState = {
                loggedin: false,
                user: null,
                errors: []
            };

            localStorage.removeItem('token');
            return {
                ...state,
                ...newLogoutState
            };

        case REGISTER:
            let registerData = { ...action.payload };

            let registerConfig = {
                'Content-Type': 'application/json'
            };

            let newRegisterState = {
                loggedin: false,
                user: null,
                errors: []
            };

            axios
                .post(API.USERS.SIGNUP, registerData, registerConfig)
                .then(res => {
                    if (res.data.ok) {
                        localStorage.setItem('token', res.data.token);
                        console.log('Successfully stored JWT in localStorage');
                        newRegisterState.loggedin = true;
                        newRegisterState.user = res.data.user;
                    } else {
                        if (res.data.errors.length > 0) {
                            newRegisterState.errors = res.data.errors;
                        } else {
                            // Error while creating user, log on backend
                            console.log(res.data.message);
                        }
                    }
                })
                .catch(err => console.log(err));

            return newRegisterState;

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
