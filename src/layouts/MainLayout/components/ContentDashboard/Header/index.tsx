//components
import {
	BellOutlined,
	HomeOutlined,
	MailOutlined,
	MenuOutlined,
	SettingOutlined,
} from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import avatar from '../../../../../assets/images/avatar.jpg';
import { IMainLayoutProps } from '../../../model/IMainLayoutProps';
//styles
import './index.scss';
//lib

export const HeaderBar: React.FC<IMainLayoutProps> = React.memo((props) => {
	const { pathname } = useLocation();
	const lastSubRoute = pathname.split('/').pop();
	return (
		<div className="header">
			<header className="header_container">
				<button
					className="close-navigation"
					onClick={() => props.actions.toggleCloseNavigation()}
				>
					<MenuOutlined />
				</button>
				<ul className="menu-header">
					<li className="item-header">
						<Link to="/dashboard">Dashboard</Link>
					</li>
					<li className="item-header">
						<Link to="/user">User</Link>
					</li>
					<li className="item-header">
						<Link to="/setting">Setting</Link>
					</li>
				</ul>
				<ul className="menu-header-right">
					<li>
						<button>
							<BellOutlined />
							<span className="badge noti">5</span>
						</button>
					</li>
					<li>
						<button>
							<MailOutlined />
							<span className="badge mail">5</span>
						</button>
					</li>
					<li>
						<button className="btn-account">
							<img src={avatar} alt="AVATAR" />
						</button>
					</li>
				</ul>
			</header>
			<div className="sub-header">
				<Breadcrumb>
					<Breadcrumb.Item href="/">
						<HomeOutlined />
					</Breadcrumb.Item>
					<Breadcrumb.Item href="/dashboard">
						<span>Dashboard</span>
					</Breadcrumb.Item>
					<Breadcrumb.Item>
						{/* <span>{lastSubRoute}</span> */}
						<span>About Us</span>
					</Breadcrumb.Item>
				</Breadcrumb>
				<button>
					<SettingOutlined /> Setting
				</button>
			</div>
		</div>
	);
});
