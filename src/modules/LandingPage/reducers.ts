/* eslint-disable no-unused-vars */
import { Reducer } from 'redux';
import Keys from './actionTypeKeys';
import ActionTypes from './actionTypes';
import * as IActions from './IActions';
import { ILandingPageState, initialState } from './model/ILandingPageState';

export const name = 'LandingPage';

export const reducer: Reducer<ILandingPageState, any> = (
	state: ILandingPageState = initialState,
	action: ActionTypes
): ILandingPageState => {
	switch (action.type) {
		case Keys.SELECT_LANGUAGE:
			return onSelectLanguage(state, action);
		case Keys.TOGGLE_MODAL_LOGIN:
			return onToggleModalLogin(state, action);
		case Keys.TOGGLE_MODAL_LOCATION_STORE:
			return onToggleModalLocationStore(state, action);

		default:
			return state;
	}
};

// IActions: the interface of current action

//#region SELECT_LANGUAGE
const onSelectLanguage = (state: ILandingPageState, action: IActions.ISelectLanguage) => {
	const { lang } = action.payload;
	return {
		...state,
		currentLanguage: lang,
	};
};
//#endregion

//#region TOGGLE_MODAL_LOGIN
const onToggleModalLogin = (state: ILandingPageState, action: IActions.IToggleModalLogin) => {
	const { toggleModalLogin } = state;
	return {
		...state,
		toggleModalLogin: !toggleModalLogin,
	};
};
//#endregion

//#region TOGGLE_MODAL_LOCATION_STORE
const onToggleModalLocationStore = (state: ILandingPageState, action: IActions.IToggleModalLocationStore) => {
	const { toggleModalLocationStore } = state;
	return {
		...state,
		toggleModalLocationStore: !toggleModalLocationStore,
	};
};
//#endregion
