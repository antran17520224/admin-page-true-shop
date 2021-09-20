import Keys from './actionTypeKeys';
import * as IActions from './IActions';

//#region SELECT_LANGUAGE Actions
export const selectLanguage = (lang: string | undefined): IActions.ISelectLanguage => {
	return {
		type: Keys.SELECT_LANGUAGE,
		payload: {
			lang,
		},
	};
};
//#endregion

//#region TOGGLE_MODAL_LOGIN Actions
export const toggleModalLogin = (): IActions.IToggleModalLogin => {
	return {
		type: Keys.TOGGLE_MODAL_LOGIN,
	};
};
//#endregion

//#region TOGGLE_MODAL_LOCATION_STORE Actions
export const toggleModalLocationStore = (): IActions.IToggleModalLocationStore => {
	return {
		type: Keys.TOGGLE_MODAL_LOCATION_STORE,
	};
};
//#endregion
