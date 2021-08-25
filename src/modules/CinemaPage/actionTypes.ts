/**
 * @file Type of actions will be listed here
 */

import * as IActions from './IActions';

type ActionTypes =
	| IActions.IGetAllCinemas
	| IActions.IGetAllCinemasSuccess
	| IActions.IGetAllCinemasFail
	| IActions.IToggleModal
	| IActions.IHandleCurrentCinema
	| IActions.IDeleteCinema
	| IActions.IDeleteCinemaSuccess
	| IActions.IDeleteCinemaFail
	| IActions.ICreateCinema
	| IActions.ICreateCinemaSuccess
	| IActions.ICreateCinemaFail
	| IActions.IHandleClear
	| IActions.IUpdateCinema
	| IActions.IUpdateCinemaSuccess
	| IActions.IUpdateCinemaFail
export default ActionTypes;
