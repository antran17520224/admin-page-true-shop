import Keys from './actionTypeKeys';
import * as IActions from './IActions';

export const toggleModal = (type: number): IActions.IToggleModal => {
	return {
		type: Keys.TOGGLE_MODAL,
		payload: {
			type,
		},
	};
};
