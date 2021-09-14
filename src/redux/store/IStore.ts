import { ILogInState, name as LoginPageState } from './../../modules/LoginPage';

import {
	IDashboardLayoutState,
	name as DashboardLayoutState,
} from '../../layouts/DashboardLayout';

import {
	IAboutUsState,
	name as AboutUstState,
} from '../../modules/AboutUsPage';


export default interface IStore {
	[LoginPageState]: ILogInState;
	[DashboardLayoutState]: IDashboardLayoutState;
	[AboutUstState]: IAboutUsState;
	router: any;
}
