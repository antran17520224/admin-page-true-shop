/**
 * @file All actions interface will be listed here
 */

import { Action } from 'redux';
import Keys from './actionTypeKeys';
import { IError } from '../../common/interfaces';
import { IAdminInfo } from './model/ILoginState';

export interface IHandleClear extends Action {
	readonly type: Keys.HANDLE_CLEAR;
	payload: {
		type: string;
	};
}

//#region POST Employee Login IActions
export interface IAdminLogin extends Action {
	readonly type: Keys.ADMIN_LOGIN;
	payload: IAdminInfo;
}

export interface IAdminLoginSuccess extends Action {
	readonly type: Keys.ADMIN_LOGIN_SUCCESS;
	payload: {
		accessToken: string;
	};
}

export interface IAdminLoginFail extends Action {
	readonly type: Keys.ADMIN_LOGIN_FAIL;
	payload: IError[];
}
//#endregion