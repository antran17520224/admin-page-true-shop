import Keys from './actionTypeKeys';
import * as IActions from './IActions';
import { ICinema, CINEMAS_CLEAR, CINEMAS_MODAL } from './model/ICinemaState';

export const toggleModal = (data : {
	type : CINEMAS_MODAL
}): IActions.IToggleModal => {
	return {
		type: Keys.TOGGLE_MODAL,
		payload : {
			...data 
		}
	};
};

//#region GET All Cinemas Actions
export const getAllCinemas = (): IActions.IGetAllCinemas => {
	return {
		type: Keys.GET_ALL_CINEMAS,
	};
};

export const getAllCinemasSuccess = (res: any): IActions.IGetAllCinemasSuccess => {
	return {
		type: Keys.GET_ALL_CINEMAS_SUCCESS,
		payload: res,
	};
};

export const getAllCinemasFail = (res: any): IActions.IGetAllCinemasFail => {
	return {
		type: Keys.GET_ALL_CINEMAS_FAIL,
		payload: res,
	};
};
//#endregion

//#region HandleCurrentCinema
export const handleCurrentCinema = (data: {
	type: 'update' | 'delete';
	cinema: ICinema;
}): IActions.IHandleCurrentCinema => {
	return {
		type: Keys.HANDLE_CURRENT_CINEMA,
		payload: {
			...data,
		},
	};
};
//#endregion

//#region DELETE Cinema Actions
export const deleteCinema = (data: any): IActions.IDeleteCinema => {
	return {
		type: Keys.DELETE_CINEMA,
		payload: {
			...data,
		},
	};
};

export const deleteCinemaSuccess = (): IActions.IDeleteCinemaSuccess => {
	return {
		type: Keys.DELETE_CINEMA_SUCCESS,
	};
};

export const deleteCinemaFail = (res: any): IActions.IDeleteCinemaFail => {
	return {
		type: Keys.DELETE_CINEMA_FAIL,
		payload: res,
	};
};
//#endregion

//#region CREATE Cinema Actions
export const createCinema = (data: any): IActions.ICreateCinema => {
	return {
		type: Keys.CREATE_CINEMA,
		payload: {
			...data,
		},
	};
};

export const createCinemaSuccess = (res : any): IActions.ICreateCinemaSuccess => {
	return {
		type: Keys.CREATE_CINEMA_SUCCESS,
		payload : res
	};
};

export const createCinemaFail = (res: any): IActions.ICreateCinemaFail => {
	return {
		type: Keys.CREATE_CINEMA_FAIL,
		payload: res,
	};
};
//#endregion

export const handleClear = (data : {
	type : CINEMAS_CLEAR
}): IActions.IHandleClear => {
	return {
		type: Keys.HANDLE_CLEAR,
		payload : {
			...data
		}
	};
};

//#region UPDATE Cinema Actions
export const updateCinema = (data: {
	_id : string;
	cinema : any
}): IActions.IUpdateCinema => {
	return {
		type: Keys.UPDATE_CINEMA,
		payload: {
			...data,
		},
	};
};

export const updateCinemaSuccess = (res : any): IActions.IUpdateCinemaSuccess => {
	return {
		type: Keys.UPDATE_CINEMA_SUCCESS,
		payload : res
	};
};

export const updateCinemaFail = (res: any): IActions.IUpdateCinemaFail => {
	return {
		type: Keys.UPDATE_CINEMA_FAIL,
		payload: res,
	};
};
//#endregion