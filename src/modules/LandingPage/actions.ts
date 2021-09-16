import Keys from './actionTypeKeys';
import * as IActions from './IActions';


//#region SELECT_LANGUAGE Actions
export const selectLanguage = (lang : string | undefined): IActions.ISelectLanguage => {
	return {
		type: Keys.SELECT_LANGUAGE,
		payload: {
			lang
		},
	};
};

//#endregion


