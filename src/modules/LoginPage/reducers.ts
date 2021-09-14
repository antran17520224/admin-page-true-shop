/* eslint-disable no-unused-vars */
import { Reducer } from 'redux';
import Keys from './actionTypeKeys';
import ActionTypes from './actionTypes';
import * as IActions from './IActions';
import { ILogInState, initialState } from './model/ILoginState';

export const name = 'LoginPage';

export const reducer: Reducer<ILogInState, any> = (
	state: ILogInState = initialState,
	action: ActionTypes
): ILogInState => {
	switch (action.type) {
		case Keys.ADMIN_LOGIN:
			return onAdminLogin(state, action);
		case Keys.ADMIN_LOGIN_SUCCESS:
			return onAdminLoginSuccess(state, action);
		case Keys.ADMIN_LOGIN_FAIL:
			return onAdminLoginFail(state, action);

		default:
			return state;
	}
};

// IActions: the interface of current action

const onAdminLogin = (state: ILogInState, action: IActions.IAdminLogin) => {
	return {
		...state,
		isProcessing: true,
	};
};
const onAdminLoginSuccess = (
	state: ILogInState,
	action: IActions.IAdminLoginSuccess
) => {
	const { accessToken } = action.payload;
	return {
		...state,
		accessToken,
		isProcessing: false,
	};
};
const onAdminLoginFail = (state: ILogInState, action: IActions.IAdminLoginFail) => {
	return {
		...state,
		isProcessing: false,
	};
};


