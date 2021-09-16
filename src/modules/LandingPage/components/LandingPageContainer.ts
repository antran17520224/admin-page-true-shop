import IStore from '../../../redux/store/IStore';
import * as Actions from '../actions';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LandingPage from './LandingPage';

function mapStateToProps(store: IStore) {
	return {
		store: store,
	};
}

function mapDispatchToProps(dispatch: Dispatch) {
	const allActions = {
		...Actions,
	};
	return {
		actions: bindActionCreators(allActions, dispatch),
	};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LandingPage));
