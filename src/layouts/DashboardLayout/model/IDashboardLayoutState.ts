export interface IDashboardLayoutState {
	collapsed: boolean;
	closeNavigation: boolean;
}

// InitialState
export const initialState: IDashboardLayoutState = {
	collapsed: false,
	closeNavigation: false,
};
