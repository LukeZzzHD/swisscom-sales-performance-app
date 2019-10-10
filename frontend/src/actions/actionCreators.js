import actionTypes from './actionTypes';

const LOGIN = (username, password) => ({
    type: actionTypes.LOGIN,
    payload: {
        username,
        password,
    },
});

const LOGOUT = () => ({
    type: actionTypes.LOGOUT,
});

const REGISTER = (
    username,
    firstName,
    lastName,
    password,
    password2,
    oeDescription,
) => ({
    type: actionTypes.REGISTER,
    payload: {
        username,
        firstName,
        lastName,
        password,
        password2,
        oeDescription,
    },
});

const INCREASE = (performance_name, username) => ({
    type: actionTypes.INCREMENT_WEEKLY,
    payload: {
        performance_name,
        username,
    },
});

const DECREASE = (performance_name, username) => ({
    type: actionTypes.INCREMENT_MONTHLY,
    payload: {
        performance_name,
        username,
    },
});

export { LOGIN, LOGOUT, REGISTER, INCREASE, DECREASE };
