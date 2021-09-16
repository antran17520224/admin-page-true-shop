import IStore from '../../../redux/store/IStore';
import * as Actions from '../actions';

export interface ILandingPageProps {
	store: IStore;
	actions: typeof Actions;
}
