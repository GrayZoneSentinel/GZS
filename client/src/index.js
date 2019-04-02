import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/styles.css';
// import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import PromiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import Reducer from './Reducers';

const createStoreWithMiddleware = applyMiddleware(PromiseMiddleware, ReduxThunk) (createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
         <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
 document.getElementById('root'));
