import { combineReducers } from "redux";
import filterUsersReducer from '../directory/filterUsersReducer.js';
import {routerReducer} from 'react-router-redux';

export default combineReducers({filterUsersReducer, routing: routerReducer});
