export interface IMainLayoutState {
	collapsed: boolean;
	closeNavigation: boolean;
}

// InitialState
export const initialState: IMainLayoutState = {
	collapsed: false,
	closeNavigation: false,
};
