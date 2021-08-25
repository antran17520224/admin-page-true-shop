import IStore from './IStore';
import {
	initialState as LoginInitialState,
	name as LoginPage,
} from '../../modules/LoginPage';

import {
	initialState as MainLayoutInitialState,
	name as MainLayout,
} from '../../layouts/MainLayout';


export const initialState: IStore = {
	[LoginPage]: LoginInitialState,
	[MainLayout]: MainLayoutInitialState,
	router: null,
};

export default initialState;
