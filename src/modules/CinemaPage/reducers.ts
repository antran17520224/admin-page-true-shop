import { Reducer } from 'redux';
import Keys from './actionTypeKeys';
import ActionTypes from './actionTypes';
import * as IActions from './IActions';
import {
	ICinemaState,
	initialState,
	CINEMAS_CLEAR,
	CINEMAS_MODAL,
} from './model/ICinemaState';

export const name = 'CinemaPage';

export const reducer: Reducer<ICinemaState, any> = (
	state: ICinemaState = initialState,
	action: ActionTypes
): ICinemaState => {
	switch (action.type) {
		case Keys.GET_ALL_CINEMAS:
			return onGetAllCinemas(state, action);
		case Keys.GET_ALL_CINEMAS_SUCCESS:
			return onGetAllCinemasSuccess(state, action);
		case Keys.GET_ALL_CINEMAS_FAIL:
			return onGetAllCinemasFail(state, action);

		case Keys.TOGGLE_MODAL:
			return onToggleModal(state, action);

		case Keys.DELETE_CINEMA:
			return onDeleteCinema(state, action);
		case Keys.DELETE_CINEMA_SUCCESS:
			return onDeleteCinemaSuccess(state, action);
		case Keys.DELETE_CINEMA_FAIL:
			return onDeleteCinemaFail(state, action);

		case Keys.CREATE_CINEMA:
			return onCreateCinema(state, action);
		case Keys.CREATE_CINEMA_SUCCESS:
			return onCreateCinemaSuccess(state, action);
		case Keys.CREATE_CINEMA_FAIL:
			return onCreateCinemaFail(state, action);

		case Keys.UPDATE_CINEMA:
			return onUpdateCinema(state, action);
		case Keys.UPDATE_CINEMA_SUCCESS:
			return onUpdateCinemaSuccess(state, action);
		case Keys.UPDATE_CINEMA_FAIL:
			return onUpdateCinemaFail(state, action);

		case Keys.HANDLE_CLEAR:
			return onHandleClear(state, action);

		case Keys.HANDLE_CURRENT_CINEMA:
			return onHandleCurrentCinema(state, action);
		default:
			return state;
	}
};

const onHandleClear = (state: ICinemaState, action: IActions.IHandleClear) => {
	const { type } = action.payload;
	switch (type) {
		case CINEMAS_CLEAR.CLEAR_STATE_CINEMAS_UPDATED:
			return {
				...state,
				currentCinema: null,
				isUpdatingCinema: false,
			};
	}
};
//#region onHandleCurrentCinema
const onHandleCurrentCinema = (
	state: ICinemaState,
	action: IActions.IHandleCurrentCinema
) => {
	const { type, cinema } = action.payload;
	switch (type) {
		case 'update':
			return {
				...state,
				isUpdatingCinema: true,
				currentCinema: cinema,
				toggleModalAddEditCinema: true,
			};
		default:
			return {
				...state,
			};
	}
};
//#endregion
// // IActions: the interface of current action
const onToggleModal = (state: ICinemaState, action: IActions.IToggleModal) => {
	const { type } = action.payload;
	switch (type) {
		case CINEMAS_MODAL.ADD_EDIT_CINEMAS:
			return {
				...state,
				toggleModalAddEditCinema: !state.toggleModalAddEditCinema,
			};
	}
};
//#region GetAllCinemas
const onGetAllCinemas = (
	state: ICinemaState,
	action: IActions.IGetAllCinemas
) => {
	return {
		...state,
		isProcessing: true,
	};
};
const onGetAllCinemasSuccess = (
	state: ICinemaState,
	action: IActions.IGetAllCinemasSuccess
) => {
	const { data, total_page } = action.payload;
	if (data !== undefined) {
		data.forEach((item: { [x: string]: any }, index: number) => {
			item['key'] = index + 1;
		});
	}

	return {
		...state,
		isProcessing: false,
		totalPage: total_page,
		isSearching: false,
		cinemaRecords: data,
	};
};
const onGetAllCinemasFail = (
	state: ICinemaState,
	action: IActions.IGetAllCinemasFail
) => {
	return {
		...state,
		isProcessing: false,
	};
};
//#endregion

//#region DeleteCinema
const onDeleteCinema = (
	state: ICinemaState,
	action: IActions.IDeleteCinema
) => {
	return {
		...state,
		isProcessing: true,
	};
};
const onDeleteCinemaSuccess = (
	state: ICinemaState,
	action: IActions.IDeleteCinemaSuccess
) => {
	return {
		...state,
		isProcessing: false,
	};
};
const onDeleteCinemaFail = (
	state: ICinemaState,
	action: IActions.IDeleteCinemaFail
) => {
	return {
		...state,
		isProcessing: false,
	};
};
//#endregion

//#region Create Cinema
const onCreateCinema = (
	state: ICinemaState,
	action: IActions.ICreateCinema
) => {
	return {
		...state,
		isProcessing: true,
	};
};
const onCreateCinemaSuccess = (
	state: ICinemaState,
	action: IActions.ICreateCinemaSuccess
) => {
	return {
		...state,
		isProcessing: false,
		toggleModalAddEditCinema: false,
	};
};
const onCreateCinemaFail = (
	state: ICinemaState,
	action: IActions.ICreateCinemaFail
) => {
	return {
		...state,
		isProcessing: false,
	};
};
//#endregion

//#region Update Cinema
const onUpdateCinema = (
	state: ICinemaState,
	action: IActions.IUpdateCinema
) => {
	return {
		...state,
		isProcessing: true,
	};
};
const onUpdateCinemaSuccess = (
	state: ICinemaState,
	action: IActions.IUpdateCinemaSuccess
) => {
	return {
		...state,
		isProcessing: false,
		toggleModalAddEditCinema: false,
		currentCinema: null,
		isUpdatingCinema: false,
	};
};
const onUpdateCinemaFail = (
	state: ICinemaState,
	action: IActions.IUpdateCinemaFail
) => {
	return {
		...state,
		isProcessing: false,
	};
};
//#endregion
