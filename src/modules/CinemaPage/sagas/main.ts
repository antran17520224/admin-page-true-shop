import { message } from 'antd';
import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';
import Keys from '../actionTypeKeys';

//#region Handle GET All Cinemas
// function* handleGetAllCinemas(action: any) {
// 	try {
// 		const res = yield call(CinemaApi.getAllCinema);
// 		if (res.status === 200) {
// 			yield put(actions.getAllCinemasSuccess(res.data));
// 		} else {
// 			yield put(actions.getAllCinemasFail(res));
// 		}
// 	} catch (error) {
// 		message.error('Lấy danh sách rạp thất bại')
// 		yield put(actions.getAllCinemasFail(error));
// 	}
// }
//#endregion



/*-----------------------------------------------------------------*/

/*-----------------------------------------------------------------*/

const sagas: any[] = [];
export default sagas;
