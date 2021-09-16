// import { call, put, takeEvery, delay } from 'redux-saga/effects';
// import * as actions from '../actions';
// import Keys from '../actionTypeKeys';
// import * as AuthApi from '../../../api/auth';

// import { message } from 'antd';
// Handle Admin Login
// function* handleAdminLog(action: any) {
// 	try {
// 		yield delay(500);
// 		if (res.data.message !== undefined) {
// 			const { token } = res.data;
// 			localStorage.setItem('accessToken', token);
// 			message.success('Đăng nhập thành công', 1);
// 			yield put(actions.adminLoginSuccess(res.data));
// 		} else {
// 			throw res.data.error
// 		}
// 	} catch (errors) {
// 		message.error('Đăng nhập thất bại', 1);
// 		yield put(actions.adminLoginFail(errors));
// 	}
// }


/*-----------------------------------------------------------------*/
// function* watchPostEmployeeLogin() {
// 	yield takeEvery(Keys.ADMIN_LOGIN, handleAdminLog);
// }

/*-----------------------------------------------------------------*/
const sagas: any[] = [];
export default sagas;
