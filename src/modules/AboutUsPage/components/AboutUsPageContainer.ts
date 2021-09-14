import IStore from '../../../redux/store/IStore';
import * as AboutUsActions from '../actions';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AboutUsPage from './AboutUsPage';
import { withRouter } from 'react-router-dom';

function mapStateToProps(store: IStore) {
	return {
		store: store,
	};
}

function mapDispatchToProps(dispatch: Dispatch) {
	const allActions = {
		...AboutUsActions,
	}; 
	return {
		actions: bindActionCreators(allActions, dispatch),
	};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AboutUsPage));
