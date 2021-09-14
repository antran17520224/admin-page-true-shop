import { Reducer } from 'redux';
import Keys from './actionTypeKeys';
import ActionTypes from './actionTypes';
// import * as IActions from './IActions';
import { IDashboardLayoutState, initialState } from './model/IDashboardLayoutState';

export const name = 'DashboardLayout';

export const reducer: Reducer<IDashboardLayoutState, any> = (
	state: IDashboardLayoutState = initialState,
	action: ActionTypes
): IDashboardLayoutState => {
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
const onCollapsedNavigation = (state: IDashboardLayoutState) => {
	const collapsed = state.collapsed;
	return {
		...state,
		collapsed : !collapsed,
	};
};
const onCloseNavigation = (state: IDashboardLayoutState) => {
	const closeNavigation = state.closeNavigation;
	return {
		...state,
		closeNavigation : !closeNavigation,
	};
};


