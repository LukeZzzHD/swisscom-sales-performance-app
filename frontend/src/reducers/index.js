import API from '../api';
import axios from 'axios';
import actionTypes from '../actions/actionTypes';
const { LOGIN, LOGOUT, REGISTER, INCREASE, DECREASE } = actionTypes;

const initState = () => {
    let state = {
        loggedin: false,
        user: null,
        errors: [],
    };

    console.log('initState called!');
    console.log(state);

    return state;
};

const rootReducer = async (state = initState(), action) => {
    switch (action.type) {
        case LOGIN:
            // Get email and password from payload
            let loginData = { ...action.payload };

            let loginConfig = {
                'Content-Type': 'application/json',
            };

            let newState = {};

            // Make a post request with axios to the sigin-api-route
            let loginRes = await axios.post(
                API.USERS.SIGNIN,
                loginData,
                loginConfig,
            );
            if (loginRes.data.ok) {
                localStorage.setItem('token', loginRes.data.token);
                console.log('Successfully stored JWT in localStorage');
                return {
                    loggedin: true,
                    user: loginRes.data.user,
                    errors: [],
                };
            } else {
                console.log(
                    'Error with login call, errors are in the state.errors array',
                );

                return {
                    ...state,
                    loggedin: false,
                    user: null,
                    errors: [loginRes.data.message],
                };
            }

        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                loggedin: false,
                user: null,
                errors: [],
            };

        case REGISTER:
            let registerData = { ...action.payload };

            let registerConfig = {
                'Content-Type': 'application/json',
            };

            let registerRes = axios.post(
                API.USERS.SIGNUP,
                registerData,
                registerConfig,
            );
            if (registerRes.data.ok) {
                localStorage.setItem('token', registerRes.data.token);
                console.log('Successfully stored JWT in localStorage');

                return {
                    ...state,
                    loggedin: true,
                    user: registerRes.data.user,
                    errors: [],
                };
            } else {
                if (registerRes.data.errors.length > 0) {
                    return {
                        ...state,
                        loggedin: false,
                        user: null,
                        errors: [...registerRes.data.errors],
                    };
                } else {
                    // Error while creating user, log on backend
                    console.log(registerRes.data.message);
                    return state;
                }
            }

        case INCREASE:
            let increaseData = { ...action.payload };
            let increaseConfig = { 'Content-Type': 'application/json' };
            let increaseRes = await axios.post(
                API.SALESPERFORMANCE.INCREASE,
                increaseData,
                increaseConfig,
            );
            if (increaseRes.data.ok) {
            } else {
                return state;
            }
            break;

        case DECREASE:
            // axios request ->
            break;

        default:
            return state;
    }
};

export default rootReducer;
