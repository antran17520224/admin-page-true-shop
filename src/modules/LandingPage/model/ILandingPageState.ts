import cookies from 'js-cookie';



export interface ILandingPageState {
	currentLanguage: string | undefined;
	toggleModalLogin: boolean;
	toggleModalLocationStore: boolean;
	isProcessing: boolean;
	isLoading: boolean;
}

// InitialState
export const initialState: ILandingPageState = {
	currentLanguage: cookies.get('i18next') || 'vn',
	toggleModalLogin: false,
	toggleModalLocationStore: false,
	isLoading: false,
	isProcessing: false,
};
