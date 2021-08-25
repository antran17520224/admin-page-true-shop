import IStore from '../../../redux/store/IStore';
import * as CinemaActions from '../actions';

export interface ICinemaProps {
	store: IStore;
	actions: typeof CinemaActions;
}
