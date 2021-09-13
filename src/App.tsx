import { connect } from 'react-redux';
import { ConfigProvider } from 'antd';
// import { validateMessages } from './common/constants';
import { LoadingScreen } from './components';
import { mainRoutes, authRoutes } from './routes';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout/components/AuthLayoutContainer';
import { ILogInState } from './modules/LoginPage';
import locale from 'antd/es/locale/vi_VN';
import IStore from './redux/store/IStore';
import 'moment/locale/vi';
import React from 'react';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
interface IProps {
	LoginState: ILogInState;
	router: any;
}

i18n.use(initReactI18next)
	.use(LanguageDetector)
	.use(HttpApi)
	.init({
		// the translations
		// (tip move them in a JSON file and import them,
		// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
		supportedLngs: ['en','vn'],
		fallbackLng: 'vn',
		detection: {
			order: ['cookie','htmlTag','querystring','localStorage', 'sessionStorage'],
			caches: ['cookie']
		},
		backend: {
			loadPath: '/locales/{{lng}}/translation.json'
		}
	});

const App: React.FC<IProps> = (props) => {
	// const { isLoading, accessToken } = props.LoginState;
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
							<Redirect from="*" to={mainRoutes[0].path} />
						</Switch>
						{/* <AuthLayout routes={authRoutes} /> */}
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
