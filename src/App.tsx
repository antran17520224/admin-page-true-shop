import { connect } from 'react-redux';
import { ConfigProvider } from 'antd';
// import { validateMessages } from './common/constants';
import { LoadingScreen } from './components';
import { AuthLayout } from './layouts/index';
import { mainRoutes, authRoutes } from './routes';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/components/MainLayoutContainer';
import { ILogInState } from './modules/LoginPage';
import locale from 'antd/es/locale/vi_VN';
import IStore from './redux/store/IStore';
import 'moment/locale/vi';
import React from 'react';

interface IProps {
	LoginState: ILogInState;
	router: any;
}
const App: React.FC<IProps> = (props) => {
	const { isLoading, accessToken } = props.LoginState;
	return (
		<React.Fragment>
			<ConfigProvider locale={locale}>
				<Router>
					<React.Suspense fallback={<LoadingScreen size="large" />}>
						{/* {isLoading ? (
							<LoadingScreen size="large" />
						) : accessToken !== null ? (
							<MainLayout routes={mainRoutes} />
						) : (
							<AuthLayout routes={authRoutes} />
						)} */}
						<Switch>
							<Route
								path={mainRoutes[0].path}
								component={mainRoutes[0].component}
								exact={mainRoutes[0].exact}
							/>
						</Switch>
						<Redirect from="*" to={mainRoutes[0].path} />
					</React.Suspense>
				</Router>
			</ConfigProvider>
		</React.Fragment>
	);
};

const mapStateToProps = (store: IStore) => ({
	LoginState: store.LoginPage,
	router: store.router,
});
export default connect(mapStateToProps)(App);
