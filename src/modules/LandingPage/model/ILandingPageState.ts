import cookies from 'js-cookie';



export interface ILandingPageState {
	currentLanguage: string | undefined;
	isProcessing: boolean;
	isLoading: boolean;
}

// InitialState
export const initialState: ILandingPageState = {
	currentLanguage: cookies.get('i18next') || 'vn',
	isLoading: false,
	isProcessing: false,
};
