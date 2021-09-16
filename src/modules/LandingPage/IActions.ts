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