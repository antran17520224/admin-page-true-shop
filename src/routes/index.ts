import React, {
	ComponentClass,
	FunctionComponent,
	LazyExoticComponent
} from 'react';
import Content1 from '../modules/Content1';
import Content2 from '../modules/Content2';
import Content3 from '../modules/Content3';
import { routeName } from './routes-name';


const MainLayout = React.lazy(
	() => import('./../layouts/MainLayout/components/MainLayoutContainer')
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
	// 	{
	// 		path: routeName.login,
	// 		exact: true,
	// 		component: LoginPage,
	// 	},
];

export const mainRoutes: RouteConfig[] = [
	{
		path: routeName.dashboard,
		exact: false,
		component: MainLayout,
		permission: '',
	},
];

export const contentRoutes: RouteConfig[] = [
	{
		path: routeName.content1,
		exact: true,
		component: Content1,
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
