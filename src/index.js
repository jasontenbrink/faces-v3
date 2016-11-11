import React from 'react';
import {ReactDom, render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './app/store.js';
import { createStore, combineReducers } from 'redux';
import filterUsersReducer from './directory/filterUsersReducer.js';
import routes from './app/routes.js'
import {Router, browserHistory, hashHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
window.React = React;

console.log('index.js says hello');
const app = document.getElementById('app');

const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, app
);
