import IStore from './IStore';
import {
	initialState as LoginInitialState,
	name as LoginPage,
} from '../../modules/LoginPage';

import {
	initialState as DashboardLayoutInitialState,
	name as DashboardLayout,
} from '../../layouts/DashboardLayout';

import {
	initialState as AboutUsInitialState,
	name as AboutUs,
} from '../../modules/AboutUsPage';

export const initialState: IStore = {
	[LoginPage]: LoginInitialState,
	[DashboardLayout]: DashboardLayoutInitialState,
	[AboutUs]: AboutUsInitialState,
	router: null,
};

export default initialState;
