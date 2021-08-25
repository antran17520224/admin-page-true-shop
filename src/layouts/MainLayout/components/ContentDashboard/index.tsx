//components
import { HeaderBar } from './Header';
//library
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import classnames from 'classnames';
//styles
import './index.scss';
//interface
import { IMainLayoutProps } from '../../model/IMainLayoutProps';
import { RouteConfig } from '../../../../routes';

interface IProps extends IMainLayoutProps {
	routes: RouteConfig[];
}

const ContentDashboard: React.FC<IProps> = (props) => {
	const { routes } = props;
	const { collapsed, closeNavigation } = props.store.MainLayout;
	const { path } = useRouteMatch();

	return (
		<div
			className={classnames(
				'wrapper-dashboard',
				closeNavigation && 'ml-0',
				collapsed && !closeNavigation && 'ml-80',
			)}
		>
			<HeaderBar {...props} />
			<div className="wrapper-content">
				<div className="content">
					{
						<Switch>
							{routes.map((item) => {
								return (
									<Route
										key={item.path}
										path={`${path}${item.path}`}
										component={item.component}
										exact={item.exact}
									/>
								);
							})}
							<Redirect to={`${path}${props.routes[0].path}`} />;
							{/* <Redirect from="*" to="/404" /> */}
						</Switch>
					}
				</div>
			</div>
		</div>
	);
};

export default ContentDashboard;
