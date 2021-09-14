import IStore from '../../../redux/store/IStore';
import * as DashboardLayoutActions from '../actions';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DashboardLayout from './DashboardLayout';

function mapStateToProps(store: IStore) {
	return {
		store: store,
	};
}

function mapDispatchToProps(dispatch: Dispatch) {
	const allActions = {
		...DashboardLayoutActions,
	};
	return {
		actions: bindActionCreators(allActions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardLayout);
