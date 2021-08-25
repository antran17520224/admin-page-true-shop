import IStore from '../../../redux/store/IStore';
import * as mainLayoutActions from '../actions';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainLayout from './MainLayout';

function mapStateToProps(store: IStore) {
	return {
		store: store,
	};
}

function mapDispatchToProps(dispatch: Dispatch) {
	const allActions = {
		...mainLayoutActions,
	};
	return {
		actions: bindActionCreators(allActions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
