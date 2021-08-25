export enum CINEMAS_MODAL {
	ADD_EDIT_CINEMAS = 0,
}

export enum CINEMAS_CLEAR {
	CLEAR_STATE_CINEMAS_UPDATED = 0,
}

export interface ICinema {
	key?: number;
	_id? : string;
	cinema_Name : string;
	address : string;
	lat : number;
	lng : number;
}

export interface ICinemaState {
	toggleModalAddEditCinema: boolean;
	isUpdatingCinema: boolean;
	isProcessing: boolean;
	cinemaRecords: ICinema[];
	currentCinema: ICinema | null;
	totalPage: number;
	keyword: string;
	isSearching: boolean;
}

// InitialState
export const initialState: ICinemaState = {
	cinemaRecords: [],
	toggleModalAddEditCinema: false,
	isUpdatingCinema: false,
	isProcessing: false,
	currentCinema: null,
	totalPage: 0,
	keyword: '',
	isSearching: false,
};
