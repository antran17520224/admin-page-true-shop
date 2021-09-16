import IStore from './IStore';
import { initialState as LoginInitialState, name as LoginPage } from '../../modules/LoginPage';

import { initialState as DashboardLayoutInitialState, name as DashboardLayout } from '../../layouts/DashboardLayout';

import { initialState as AboutUsInitialState, name as AboutUs } from '../../modules/AboutUsPage';

import { initialState as LandingPageInitialState, name as LandingPage } from '../../modules/LandingPage';

export const initialState: IStore = {
	[LoginPage]: LoginInitialState,
	[DashboardLayout]: DashboardLayoutInitialState,
	[AboutUs]: AboutUsInitialState,
	[LandingPage]: LandingPageInitialState,
	router: null,
};

export default initialState;
