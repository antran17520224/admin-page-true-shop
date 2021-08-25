/**
 * @file root sagas
 */

import { all } from 'redux-saga/effects';

// Place for sagas' app
import { sagas as LoginSaga } from '../modules/LoginPage';
import { sagas as MainLayout } from '../layouts/MainLayout';


/*----Sagas List-----------------*/
export default function* rootSaga() {
	yield all([
		LoginSaga(),
		MainLayout(),
	]);
}
