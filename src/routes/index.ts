import React, {
	ComponentClass,
	FunctionComponent,
	LazyExoticComponent,
} from 'react';
import Content2 from '../modules/Content2';
import Content3 from '../modules/Content3';
import { routeName } from './routes-name';

const DashboardLayout = React.lazy(
	() => import('../layouts/DashboardLayout/components/DashboardLayoutContainer')
);
const LoginPage = React.lazy(
	() => import('../modules/LoginPage/components/LoginPageContainer')
);

const AboutUsPage = React.lazy(
	() => import('../modules/AboutUsPage/components/AboutUsPageContainer')
);

export interface RouteConfig {
	path: string;
	exact: boolean;
	component:
		| ComponentClass
		| FunctionComponent<any>
		| LazyExoticComponent<any>;
	permission?: string;
}

export const authRoutes: RouteConfig[] = [
	{
		path: routeName.login,
		exact: true,
		component: LoginPage,
	},
];

export const dashboardRoutes: RouteConfig[] = [
	{
		path: routeName.dashboard,
		exact: false,
		component: DashboardLayout,
		permission: '',
	},
];

export const contentRoutes: RouteConfig[] = [
	{
		path: routeName.aboutUs,
		exact: true,
		component: AboutUsPage,
		permission: '',
	},
	{
		path: routeName.content2,
		exact: true,
		component: Content2,
		permission: '',
	},
	{
		path: routeName.content3,
		exact: true,
		component: Content3,
		permission: '',
	},
];

export const otherRoutes: RouteConfig[] = [
	// {
	// 	path: routeName.notAccept,
	// 	exact: true,
	// 	component: NotAcceptPage,
	// },
];
