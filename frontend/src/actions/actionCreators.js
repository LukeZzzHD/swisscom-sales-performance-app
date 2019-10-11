import actionTypes from './actionTypes';
import API from '../api';
import axios from 'axios';

const LOGIN_SUCCESSFUL = (token, user) => ({
    type: actionTypes.LOGIN_SUCCESSFUL,
    payload: {
        token,
        user
    }
});

const LOGIN_FAILED = message => ({
    type: actionTypes.LOGIN_FAILED,
    payload: {
        message
    }
});

const LOGIN_REQUESTED = (username, password) => {
    return async dispatch => {
        axios
            .post(
                API.USERS.SIGNIN,
                {
                    username,
                    password
                },
                {
                    'Content-Type': 'application/json'
                }
            )
            .then(res => {
                if (res.data.ok) {
                    dispatch(LOGIN_SUCCESSFUL(res.data.token, res.data.user));
                } else {
                    dispatch(LOGIN_FAILED(res.data.message));
                }
            });
    };
};

const LOGOUT = () => ({
    type: actionTypes.LOGOUT
});

const REGISTER_FAILED = (message, errors) => ({
    type: actionTypes.REGISTER_FAILED,
    payload: {
        message,
        errors
    }
});

const REGISTER_REQUESTED = (username, firstName, lastName, password, password2, oeDescription) => {
    return async dispatch => {
        axios
            .post(
                API.USERS.SIGNUP,
                {
                    username,
                    firstName,
                    lastName,
                    password,
                    password2,
                    oeDescription
                },
                {
                    'Content-Type': 'application/json'
                }
            )
            .then(res => {
                if (res.data.ok) {
                    dispatch(LOGIN_SUCCESSFUL(res.data.token, res.data.user));
                } else {
                    dispatch(REGISTER_FAILED(res.data.message, res.data.errors));
                }
            });
    };
};

const INCREASE_SUCCESSFUL = () => ({
    type: actionTypes.INCREASE_SUCCESSFUL
});

const INCREASE_FAILED = message => ({
    type: actionTypes.INCREASE_FAILED,
    payload: {
        message
    }
});

const INCREASE_REQUESTED = (token, performance_name, username) => {
    return async dispatch => {
        axios
            .post(
                API.SALESPERFORMANCE.INCREASE(performance_name),
                {
                    token
                },
                {
                    'Content-Type': 'application/json'
                }
            )
            .then(res => {
                if (res.data.ok) {
                    dispatch(INCREASE_SUCCESSFUL());
                } else {
                    dispatch(INCREASE_FAILED(res.data.message));
                }
            });
    };
};

const DECREASE_SUCCESSFUL = () => ({
    type: actionTypes.DECREASE_SUCCESSFUL
});

const DECREASE_FAILED = message => ({
    type: actionTypes.DECREASE_FAILED,
    payload: {
        message
    }
});

const DECREASE_REQUESTED = (token, performance_name, username) => {
    return async dispatch => {
        axios
            .post(
                API.SALESPERFORMANCE.DECREASE(performance_name),
                {
                    token
                },
                {
                    'Content-Type': 'application/json'
                }
            )
            .then(res => {
                if (res.data.ok) {
                    dispatch(DECREASE_SUCCESSFUL());
                } else {
                    dispatch(DECREASE_FAILED(res.data.message));
                }
            });
    };
};

export { LOGIN_REQUESTED, LOGOUT, REGISTER_REQUESTED, INCREASE_REQUESTED, DECREASE_REQUESTED };
