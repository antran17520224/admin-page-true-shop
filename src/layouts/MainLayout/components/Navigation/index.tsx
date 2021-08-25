//lib
import classnames from 'classnames';
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
//interface
import { IMainLayoutProps } from '../../model/IMainLayoutProps';
//component
import { Menu } from 'antd';
import logo from '../../../../assets/images/logo/logo.png';
import {
	DashboardOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	PieChartOutlined,
	ShopOutlined,
	TeamOutlined,
	UserOutlined,
} from '@ant-design/icons';
//style
import './index.scss';

interface IMenuItem {
	key: string;
	path: string;
	title: string;
	icon?: React.ReactNode;
}

const menuList: IMenuItem[] = [
	{
		key: '1',
		path: '/content1',
		icon: <TeamOutlined />,
		title: 'Cập nhật thông tin giới thiệu',
	},
	{
		key: '2',
		path: '/content2',
		icon: <ShopOutlined />,
		title: 'Cập nhật thông tin cửa hàng',
	},
	{
		key: '3',
		path: '/content3',
		icon: <UserOutlined />,
		title: 'Quản lý user',
	},
	{
		key: '4',
		path: '/content4',
		icon: <i className="fas fa-bullhorn"></i>,
		title: 'Quản lý quảng cáo NPP',
	},
];

export const NavigationBar: React.FC<IMainLayoutProps> = React.memo((props) => {
	const { collapsed, closeNavigation } = props.store.MainLayout;
	const { path } = useRouteMatch();
	const renderMenuItem = () => {
		return menuList.map((item) => {
			return (
				<Menu.Item key={item.key} icon={item.icon}>
					<Link to={`${path}${item.path}`}>{item.title}</Link>
				</Menu.Item>
			);
		});
	};

	return (
		<div
			className={classnames(
				'navigation',
				collapsed && 'w-80',
				closeNavigation && 'w-0'
			)}
		>
			<div
				className={classnames(
					'logo',
					collapsed && 'justify-content-center pl-0'
				)}
			>
				<img src={logo} alt="logo-trueshop" />
				{!collapsed && <h2>TrueShop</h2>}
			</div>
			<div className="menu-nav">
				{/* <div className="title-list-menu">
					<DashboardOutlined />
					<span>Dashboard</span>
				</div> */}
				<Menu
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					mode="inline"
					theme="dark"
					inlineCollapsed={collapsed}
				>
					{renderMenuItem()}
				</Menu>
			</div>
			<div
				className={classnames(
					'wrapper-btn',
					collapsed && 'text-align-center'
				)}
			>
				<button onClick={() => props.actions.toggleCollapsed()}>
					{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
				</button>
			</div>
		</div>
	);
});
