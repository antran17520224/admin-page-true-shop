/**
 * @file All actions interface will be listed here
 */

import { Action } from 'redux';
// import { IError } from '../../common/interfaces';
import Keys from './actionTypeKeys';


//#region Get Introductory Info
export interface IGetIntroductoryInfo extends Action {
	readonly type: Keys.GET_INTRODUCTORY_INFO;
}
//#endregion


// //#region GET All Cinemas IActions
// export interface IGetAllCinemas extends Action {
// 	readonly type: Keys.GET_ALL_CINEMAS;
// }
// export interface IGetAllCinemasSuccess extends Action {
// 	readonly type: Keys.GET_ALL_CINEMAS_SUCCESS;
// 	payload: any;
// }
// export interface IGetAllCinemasFail extends Action {
// 	readonly type: Keys.GET_ALL_CINEMAS_FAIL;
// 	payload: IError[];
// }
// //#endregion
// export interface IToggleModal extends Action {
// 	readonly type: Keys.TOGGLE_MODAL;
// 	payload : {
// 		type : CINEMAS_MODAL
// 	}
// }

// //#region HandleCurCinema
// export interface IHandleCurrentCinema extends Action {
// 	readonly type: Keys.HANDLE_CURRENT_CINEMA;
// 	payload: {
// 		type: 'update' | 'delete';
// 		cinema: ICinema;
// 	};
// }
// //#endregion

// //#region DELETE Cinema IActions
// export interface IDeleteCinema extends Action {
// 	readonly type: Keys.DELETE_CINEMA;
// 	payload: {
// 		_id: string;
// 	};
// }
// export interface IDeleteCinemaSuccess extends Action {
// 	readonly type: Keys.DELETE_CINEMA_SUCCESS;
// }
// export interface IDeleteCinemaFail extends Action {
// 	readonly type: Keys.DELETE_CINEMA_FAIL;
// 	payload: IError[];
// }
// //#endregion

// //#region CREATE Cinema IActions
// export interface ICreateCinema extends Action {
// 	readonly type: Keys.CREATE_CINEMA;
// 	payload: ICinema
// }
// export interface ICreateCinemaSuccess extends Action {
// 	readonly type: Keys.CREATE_CINEMA_SUCCESS;
// 	payload : any;
// }
// export interface ICreateCinemaFail extends Action {
// 	readonly type: Keys.CREATE_CINEMA_FAIL;
// 	payload: IError[];
// }
// //#endregion
// export interface IHandleClear extends Action {
// 	readonly type: Keys.HANDLE_CLEAR;
// 	payload :{
// 		type : CINEMAS_CLEAR
// 	}
// }

// //#region UPDATE Cinema IActions
// export interface IUpdateCinema extends Action {
// 	readonly type: Keys.UPDATE_CINEMA;
// 	payload: {
// 		_id : string;
// 		cinema : ICinema
// 	}
// }
// export interface IUpdateCinemaSuccess extends Action {
// 	readonly type: Keys.UPDATE_CINEMA_SUCCESS;
// 	payload : any;
// }
// export interface IUpdateCinemaFail extends Action {
// 	readonly type: Keys.UPDATE_CINEMA_FAIL;
// 	payload: IError[];
// }
// //#endregion

export {};