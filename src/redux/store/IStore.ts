import { ILogInState, name as LoginPageState } from './../../modules/LoginPage';

import { IDashboardLayoutState, name as DashboardLayoutState } from '../../layouts/DashboardLayout';

import { IAboutUsState, name as AboutUstState } from '../../modules/AboutUsPage';

import { ILandingPageState, name as LandingPageState } from '../../modules/LandingPage';

export default interface IStore {
	[LoginPageState]: ILogInState;
	[DashboardLayoutState]: IDashboardLayoutState;
	[AboutUstState]: IAboutUsState;
	[LandingPageState]: ILandingPageState;
	router: any;
}
