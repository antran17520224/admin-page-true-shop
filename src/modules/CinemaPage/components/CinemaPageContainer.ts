import IStore from '../../../redux/store/IStore';
import * as CinemaActions from '../actions';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CinemaPage from './CinemaPage';
import { withRouter } from 'react-router-dom';

function mapStateToProps(store: IStore) {
	return {
		store: store,
	};
}

function mapDispatchToProps(dispatch: Dispatch) {
	const allActions = {
		...CinemaActions,
	}; 
	return {
		actions: bindActionCreators(allActions, dispatch),
	};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CinemaPage));
