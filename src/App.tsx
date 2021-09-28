import { ConfigProvider } from 'antd';
import locale from 'antd/es/locale/vi_VN';
import 'moment/locale/vi';
import React from 'react';
import { connect } from 'react-redux';
import {
	BrowserRouter as Router
} from 'react-router-dom';
import { LoadingScreen } from './components';
import LandingPage from './modules/LandingPage/components/LandingPageContainer';
import { ILogInState } from './modules/LoginPage';
import IStore from './redux/store/IStore';
import './services/switchLanguage';
interface IProps {
	LoginState: ILogInState;
	router: any;
}


const App: React.FC<IProps> = () => {
	// const { isLoading, accessToken } = props.LoginState;
	return (
		<React.Fragment>
			<ConfigProvider locale={locale}>
				<Router>
					<React.Suspense fallback={<LoadingScreen size="large" />}>
						{/* {isLoading ? (
							<LoadingScreen size="large" />
						) : accessToken !== null ? (
							<DashboardLayout routes={DashboardRoutes} />
						) : (
							<AuthLayout routes={authRoutes} />
						)} */}
						{/* <Switch>
							<Route
								path={dashboardRoutes[0].path}
								component={dashboardRoutes[0].component}
								exact={dashboardRoutes[0].exact}
							/>
							<Redirect from="*" to={dashboardRoutes[0].path} />
						</Switch> */}
						<LandingPage />
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
