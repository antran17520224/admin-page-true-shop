import Keys from './actionTypeKeys';
import * as IActions from './IActions';
import { IAdminInfo } from './model/ILoginState';

//#region POST Employee Login Actions
export const adminLogin = (data: IAdminInfo): IActions.IAdminLogin => {
	return {
		type: Keys.ADMIN_LOGIN,
		payload: {
			...data,
		},
	};
};
export const adminLoginSuccess = (res: any): IActions.IAdminLoginSuccess => {
	return {
		type: Keys.ADMIN_LOGIN_SUCCESS,
		payload: {
			...res,
		},
	};
};
export const adminLoginFail = (res: any): IActions.IAdminLoginFail => {
	return {
		type: Keys.ADMIN_LOGIN_FAIL,
		payload: res,
	};
};
//#endregion


