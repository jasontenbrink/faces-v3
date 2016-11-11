import React from 'react'
import {Router, Route, IndexRoute, BrowserHistory} from 'react-router';
import {Component} from 'react';
import AppView from './AppView.js';
import FilterUsers from '../directory/FilterUsers.js';
import RegisterMember from '../admin/RegisterMember.js';
import Directory from '../directory/Directory.js'

export default(
    <Route path='/' component={AppView}>
        <IndexRoute component={FilterUsers} />
        <Route path="register" component={RegisterMember} />
        <Route path="directory" component={Directory} />
    </Route>
  );
