import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';

let store;
if (document.location.hostname.indexOf('localhost') > -1 && window.__REDUX_DEVTOOLS_EXTENSION__) {
    store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__(), loadState());
} else {
    store = createStore(rootReducer, loadState());
}

store.subscribe(() => saveState({ ...store.getState() }));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
