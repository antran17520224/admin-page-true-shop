import * as React from 'react';
import { contentRoutes } from '../../../routes';
import { IMainLayoutProps } from '../model/IMainLayoutProps';

//component
import ContentDashboard from './ContentDashboard';
//style
import './MainLayout.scss';
import { NavigationBar } from './Navigation';



const MainLayout: React.FC<IMainLayoutProps> = React.memo((props) => {
	return (
		<React.Fragment>
			<div className="dashboard">
				<NavigationBar {...props} />
				<ContentDashboard routes={contentRoutes} {...props} />
			</div>
		</React.Fragment>
	);
})

export default MainLayout;
