import IStore from '../../../redux/store/IStore';
import * as Actions from '../actions';

export interface IDashboardLayoutProps {
	store: IStore;
	actions: typeof Actions;
}
