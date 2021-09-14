import { Reducer } from 'redux';
// import Keys from './actionTypeKeys';
import ActionTypes from './actionTypes';
// import * as IActions from './IActions';
import {
	IAboutUsState,
	initialState,
} from './model/IAboutUsState';

export const name = 'AboutUsPage';

export const reducer: Reducer<IAboutUsState, any> = (
	state: IAboutUsState = initialState,
	action: ActionTypes
): IAboutUsState => {
	switch (action.type) {
		
		default:
			return state;
	}
};

// const onHandleClear = (state: IAboutUsState, action: IActions.IHandleClear) => {
// 	const { type } = action.payload;
// 	switch (type) {
// 		case AboutUsS_CLEAR.CLEAR_STATE_AboutUsS_UPDATED:
// 			return {
// 				...state,
// 				currentAboutUs: null,
// 				isUpdatingAboutUs: false,
// 			};
// 	}
// };
// //#region onHandleCurrentAboutUs
// const onHandleCurrentAboutUs = (
// 	state: IAboutUsState,
// 	action: IActions.IHandleCurrentAboutUs
// ) => {
// 	const { type, AboutUs } = action.payload;
// 	switch (type) {
// 		case 'update':
// 			return {
// 				...state,
// 				isUpdatingAboutUs: true,
// 				currentAboutUs: AboutUs,
// 				toggleModalAddEditAboutUs: true,
// 			};
// 		default:
// 			return {
// 				...state,
// 			};
// 	}
// };
// //#endregion
// // // IActions: the interface of current action
// const onToggleModal = (state: IAboutUsState, action: IActions.IToggleModal) => {
// 	const { type } = action.payload;
// 	switch (type) {
// 		case AboutUsS_MODAL.ADD_EDIT_AboutUsS:
// 			return {
// 				...state,
// 				toggleModalAddEditAboutUs: !state.toggleModalAddEditAboutUs,
// 			};
// 	}
// };
// //#region GetAllAboutUss
// const onGetAllAboutUss = (
// 	state: IAboutUsState,
// 	action: IActions.IGetAllAboutUss
// ) => {
// 	return {
// 		...state,
// 		isProcessing: true,
// 	};
// };
// const onGetAllAboutUssSuccess = (
// 	state: IAboutUsState,
// 	action: IActions.IGetAllAboutUssSuccess
// ) => {
// 	const { data, total_page } = action.payload;
// 	if (data !== undefined) {
// 		data.forEach((item: { [x: string]: any }, index: number) => {
// 			item['key'] = index + 1;
// 		});
// 	}

// 	return {
// 		...state,
// 		isProcessing: false,
// 		totalPage: total_page,
// 		isSearching: false,
// 		AboutUsRecords: data,
// 	};
// };
// const onGetAllAboutUssFail = (
// 	state: IAboutUsState,
// 	action: IActions.IGetAllAboutUssFail
// ) => {
// 	return {
// 		...state,
// 		isProcessing: false,
// 	};
// };
// //#endregion

// //#region DeleteAboutUs
// const onDeleteAboutUs = (
// 	state: IAboutUsState,
// 	action: IActions.IDeleteAboutUs
// ) => {
// 	return {
// 		...state,
// 		isProcessing: true,
// 	};
// };
// const onDeleteAboutUsSuccess = (
// 	state: IAboutUsState,
// 	action: IActions.IDeleteAboutUsSuccess
// ) => {
// 	return {
// 		...state,
// 		isProcessing: false,
// 	};
// };
// const onDeleteAboutUsFail = (
// 	state: IAboutUsState,
// 	action: IActions.IDeleteAboutUsFail
// ) => {
// 	return {
// 		...state,
// 		isProcessing: false,
// 	};
// };
// //#endregion

// //#region Create AboutUs
// const onCreateAboutUs = (
// 	state: IAboutUsState,
// 	action: IActions.ICreateAboutUs
// ) => {
// 	return {
// 		...state,
// 		isProcessing: true,
// 	};
// };
// const onCreateAboutUsSuccess = (
// 	state: IAboutUsState,
// 	action: IActions.ICreateAboutUsSuccess
// ) => {
// 	return {
// 		...state,
// 		isProcessing: false,
// 		toggleModalAddEditAboutUs: false,
// 	};
// };
// const onCreateAboutUsFail = (
// 	state: IAboutUsState,
// 	action: IActions.ICreateAboutUsFail
// ) => {
// 	return {
// 		...state,
// 		isProcessing: false,
// 	};
// };
// //#endregion

// //#region Update AboutUs
// const onUpdateAboutUs = (
// 	state: IAboutUsState,
// 	action: IActions.IUpdateAboutUs
// ) => {
// 	return {
// 		...state,
// 		isProcessing: true,
// 	};
// };
// const onUpdateAboutUsSuccess = (
// 	state: IAboutUsState,
// 	action: IActions.IUpdateAboutUsSuccess
// ) => {
// 	return {
// 		...state,
// 		isProcessing: false,
// 		toggleModalAddEditAboutUs: false,
// 		currentAboutUs: null,
// 		isUpdatingAboutUs: false,
// 	};
// };
// const onUpdateAboutUsFail = (
// 	state: IAboutUsState,
// 	action: IActions.IUpdateAboutUsFail
// ) => {
// 	return {
// 		...state,
// 		isProcessing: false,
// 	};
// };
// //#endregion
