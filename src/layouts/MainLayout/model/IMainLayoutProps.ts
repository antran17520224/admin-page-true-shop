import IStore from '../../../redux/store/IStore';
import * as Actions from '../actions';

export interface IMainLayoutProps {
	store: IStore;
	actions: typeof Actions;
}
