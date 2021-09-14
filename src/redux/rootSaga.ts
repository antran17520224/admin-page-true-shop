/**
 * @file root sagas
 */

import { all } from 'redux-saga/effects';

// Place for sagas' app
import { sagas as LoginSaga } from '../modules/LoginPage';
import { sagas as DashboardLayout } from '../layouts/DashboardLayout';
import { sagas as AboutUsPage } from '../modules/AboutUsPage';


/*----Sagas List-----------------*/
export default function* rootSaga() {
	yield all([
		LoginSaga(),
		DashboardLayout(),
		AboutUsPage(),
	]);
}
