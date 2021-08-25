import { ILogInState, name as LoginPageState } from './../../modules/LoginPage';


import {
	IMainLayoutState,
	name as MainLayoutState,
} from '../../layouts/MainLayout';

export default interface IStore {
	[LoginPageState]: ILogInState;
	[MainLayoutState]: IMainLayoutState;
	router: any;
}
