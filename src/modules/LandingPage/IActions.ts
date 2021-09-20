/**
 * @file All actions interface will be listed here
 */

import { Action } from 'redux';
import Keys from './actionTypeKeys';


//#region SELECT_LANGUAGE
export interface ISelectLanguage extends Action {
	readonly type: Keys.SELECT_LANGUAGE;
	payload: {
		lang: string | undefined;
	};
}
//#endregion

//#region TOGGLE_MODAL_LOGIN
export interface IToggleModalLogin extends Action {
	readonly type: Keys.TOGGLE_MODAL_LOGIN;
}
//#endregion

//#region TOGGLE_MODAL_LOCATION_STORE
export interface IToggleModalLocationStore extends Action {
	readonly type: Keys.TOGGLE_MODAL_LOCATION_STORE;
}
//#endregion
