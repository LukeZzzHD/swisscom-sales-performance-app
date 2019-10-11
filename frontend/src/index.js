import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

let store;
if (document.location.hostname.indexOf('localhost') > -1 && window.__REDUX_DEVTOOLS_EXTENSION__) {
    store = createStore(
        rootReducer,
        compose(
            applyMiddleware(thunkMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
} else {
    store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
