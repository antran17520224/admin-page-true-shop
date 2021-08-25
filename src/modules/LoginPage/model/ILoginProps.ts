import IStore from '../../../redux/store/IStore';
import * as Actions from '../actions';

export interface ILogInProps {
	store: IStore;
	actions: typeof Actions;
}
