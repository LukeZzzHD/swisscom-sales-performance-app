import actionTypes from './actionTypes';

const LOGIN = (username, password) => ({
    type: actionTypes.LOGIN,
    payload: {
        username,
        password
    }
});

const LOGOUT = () => ({
    type: actionTypes.LOGOUT
});

const REGISTER = (username, firstName, lastName, password, password2, oeDescription) => ({
    type: actionTypes.REGISTER,
    payload: {
        username,
        firstName,
        lastName,
        password,
        password2,
        oeDescription
    }
});

const INCREMENT_WEEKLY = (performance_name, username) => ({
    type: actionTypes.INCREMENT_WEEKLY,
    payload: {
        performance_name,
        username
    }
});

const INCREMENT_MONTHLY = (performance_name, username) => ({
    type: actionTypes.INCREMENT_MONTHLY,
    payload: {
        performance_name,
        username
    }
});

const INCREMENT_YEARLY = (performance_name, username) => ({
    type: actionTypes.INCREMENT_YEARLY,
    payload: {
        performance_name,
        username
    }
});

const DECREMENT_WEEKLY = (performance_name, username) => ({
    type: actionTypes.DECREMENT_WEEKLY,
    payload: {
        performance_name,
        username
    }
});

const DECREMENT_MONTHLY = (performance_name, username) => ({
    type: actionTypes.DECREMENT_MONTHLY,
    payload: {
        performance_name,
        username
    }
});

const DECREMENT_YEARLY = (performance_name, username) => ({
    type: actionTypes.DECREMENT_YEARLY,
    payload: {
        performance_name,
        username
    }
});

export {
    LOGIN,
    LOGOUT,
    REGISTER,
    INCREMENT_WEEKLY,
    INCREMENT_MONTHLY,
    INCREMENT_YEARLY,
    DECREMENT_WEEKLY,
    DECREMENT_MONTHLY,
    DECREMENT_YEARLY
};
