/**
 * @file Root reducers
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

// Place for reducers' app
import LoginPage, { name as nameOfLoginPage } from '../modules/LoginPage';
import MainLayout, { name as nameOfMainLayout } from '../layouts/MainLayout';

// import UserPage, {
// 	name as nameOfUserPage,
// } from '../modules/UserPage';

/*----Reducers List-----------------*/
const reducers = {
	[nameOfMainLayout]: MainLayout,
	[nameOfLoginPage]: LoginPage,
};

const rootReducer = (history: History<any>) =>
	combineReducers({
		...reducers,
		router: connectRouter(history),
	});

export default rootReducer;
