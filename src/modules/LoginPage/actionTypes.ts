/**
 * @file Type of actions will be listed here
 */

import * as IActions from './IActions';

type ActionTypes =
	| IActions.IHandleClear
	| IActions.IAdminLogin
	| IActions.IAdminLoginSuccess
	| IActions.IAdminLoginFail

export default ActionTypes;
