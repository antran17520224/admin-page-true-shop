// import { message } from 'antd';
// import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
// import * as actions from '../actions';
// import Keys from '../actionTypeKeys';

//#region Handle GET All AboutUss
// function* handleGetAllAboutUss(action: any) {
// 	try {
// 		const res = yield call(AboutUsApi.getAllAboutUs);
// 		if (res.status === 200) {
// 			yield put(actions.getAllAboutUssSuccess(res.data));
// 		} else {
// 			yield put(actions.getAllAboutUssFail(res));
// 		}
// 	} catch (error) {
// 		message.error('Lấy danh sách rạp thất bại')
// 		yield put(actions.getAllAboutUssFail(error));
// 	}
// }
//#endregion



/*-----------------------------------------------------------------*/

/*-----------------------------------------------------------------*/

const sagas: any[] = [];
export default sagas;
