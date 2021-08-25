import { Reducer } from 'redux';
import Keys from './actionTypeKeys';
import ActionTypes from './actionTypes';
import * as IActions from './IActions';
import { IMainLayoutState, initialState } from './model/IMainLayoutState';

export const name = 'MainLayout';

export const reducer: Reducer<IMainLayoutState, any> = (
	state: IMainLayoutState = initialState,
	action: ActionTypes
): IMainLayoutState => {
	switch (action.type) {
		case Keys.COLLAPSED_NAVIGATION:
			return onCollapsedNavigation(state);
			case Keys.CLOSE_NAVIGATION:
			return onCloseNavigation(state);

		default:
			return state;
	}
};

// IActions: the interface of current action
const onCollapsedNavigation = (state: IMainLayoutState) => {
	const collapsed = state.collapsed;
	return {
		...state,
		collapsed : !collapsed,
	};
};
const onCloseNavigation = (state: IMainLayoutState) => {
	const closeNavigation = state.closeNavigation;
	return {
		...state,
		closeNavigation : !closeNavigation,
	};
};


