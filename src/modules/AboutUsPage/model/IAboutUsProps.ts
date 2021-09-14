import IStore from '../../../redux/store/IStore';
import * as AboutUsActions from '../actions';

export interface IAboutUsProps {
	store: IStore;
	actions: typeof AboutUsActions;
}
