import * as React from 'react';
import { contentRoutes } from '../../../routes';
import { IDashboardLayoutProps } from '../model/IDashboardLayoutProps';

//component
import ContentDashboard from './ContentDashboard';
//style
import './DashboardLayout.scss';
import { NavigationBar } from './Navigation';



const DashboardLayout: React.FC<IDashboardLayoutProps> = React.memo((props) => {
	return (
		<React.Fragment>
			<div className="dashboard">
				<NavigationBar {...props} />
				<ContentDashboard routes={contentRoutes} {...props} />
			</div>
		</React.Fragment>
	);
})

export default DashboardLayout;
