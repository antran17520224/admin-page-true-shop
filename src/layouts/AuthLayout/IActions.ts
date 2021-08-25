/**
 * @file All actions interface will be listed here
 */

import { Action } from 'redux';
import Keys from './actionTypeKeys';
// import { IError } from '../../common/interfaces';

export interface IToggleModal extends Action {
	readonly type: Keys.TOGGLE_MODAL;
	payload: {
		type: number;
	};
}
