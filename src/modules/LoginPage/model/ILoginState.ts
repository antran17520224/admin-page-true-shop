
export interface IAdminInfo {
	email: string;
	password: string;
}

export interface ILogInState {
	accessToken: string | null;
	isProcessing: boolean;
	isLoading: boolean;
}

// InitialState
export const initialState: ILogInState = {
	accessToken: null || localStorage.getItem('accessToken'),
	isLoading: false,
	isProcessing: false,
};
