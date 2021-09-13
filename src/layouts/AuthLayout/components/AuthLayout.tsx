import * as React from 'react';
import { Layout } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RouteConfig } from '../../../routes';

const { Content } = Layout;
interface IProps {
	routes: RouteConfig[];
}

export const AuthLayout: React.FC<IProps> = (props) => {
	return (
		<React.Fragment>
			<Switch>
				{props.routes.map((item: { path: string; component: any }) => (
					<Route
						key={item.path}
						path={item.path}
						component={item.component}
					/>
				))}

				<Redirect to={props.routes[0].path} />
			</Switch>

			{props.children}
		</React.Fragment>
	);
};
