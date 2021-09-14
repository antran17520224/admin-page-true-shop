import Keys from './actionTypeKeys';
import * as IActions from './IActions';

export const toggleCollapsed = (): IActions.ICollapsedNavigation => {
	return {
		type: Keys.COLLAPSED_NAVIGATION,
	};
};

export const toggleCloseNavigation = (): IActions.ICloseNavigation => {
	return {
		type: Keys.CLOSE_NAVIGATION,
	};
};
