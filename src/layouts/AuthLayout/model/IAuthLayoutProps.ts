import IStore from '../../../redux/store/IStore';
import * as Actions from '../actions';

export interface IBankCardProps {
	store: IStore;
	actions: typeof Actions;
}
