/* eslint-disable no-unused-vars */
import { Reducer } from 'redux';
import Keys from './actionTypeKeys';
import ActionTypes from './actionTypes';
import * as IActions from './IActions';
import { ILandingPageState, initialState } from './model/ILandingPageState';

export const name = 'LandingPage';

export const reducer: Reducer<ILandingPageState, any> = (
	state: ILandingPageState = initialState,
	action: ActionTypes
): ILandingPageState => {
	switch (action.type) {
		case Keys.SELECT_LANGUAGE:
			return onSelectLanguage(state, action);
	

		default:
			return state;
	}
};

// IActions: the interface of current action

const onSelectLanguage = (state: ILandingPageState, action: IActions.ISelectLanguage) => {
	const {lang} = action.payload;
	return {
		...state,
		currentLanguage  : lang
	};
};



