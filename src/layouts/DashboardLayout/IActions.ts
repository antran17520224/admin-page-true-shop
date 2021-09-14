/**
 * @file All actions interface will be listed here
 */

import { Action } from 'redux';
import Keys from './actionTypeKeys';
// import { IDashboardLayoutState } from './model/IDashboardLayoutState';
// import { IError } from '../../common/interfaces';

export interface ICollapsedNavigation extends Action {
	readonly type: Keys.COLLAPSED_NAVIGATION;
}
export interface ICloseNavigation extends Action {
	readonly type: Keys.CLOSE_NAVIGATION;
}
// export interface IHandleLogout extends Action {
// 	readonly type: Keys.HANDLE_LOGOUT;
// }
