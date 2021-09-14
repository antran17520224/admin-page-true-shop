//components
import {
	BellOutlined,
	HomeOutlined,
	MailOutlined,
	MenuOutlined,
	TranslationOutlined
} from '@ant-design/icons';
import { Breadcrumb, Dropdown, Menu } from 'antd';
//lib
import i18next from 'i18next';
import cookies from 'js-cookie';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import avatar from '../../../../../assets/images/avatar.jpg';
import { IDashboardLayoutProps } from '../../../model/IDashboardLayoutProps';
//styles
import './index.scss';

export const HeaderBar: React.FC<IDashboardLayoutProps> = React.memo((props) => {
	const { t } = useTranslation();

	const currentLanguageCode = cookies.get('i18next') || 'vn';
	const menu = (
		<Menu>
			<Menu.Item
				key={1}
				disabled={currentLanguageCode === 'vn'}
				onClick={() => i18next.changeLanguage('vn')}
			>
				VN
			</Menu.Item>
			<Menu.Item
				key={2}
				disabled={currentLanguageCode === 'en'}
				onClick={() => i18next.changeLanguage('en')}
			>
				EN
			</Menu.Item>
		</Menu>
	);

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
						<Link to="/dashboard">{t('_dashboard')}</Link>
					</li>
					<li className="item-header">
						<Link to="/user">{t('_user')}</Link>
					</li>
					<li className="item-header">
						<Link to="/setting">{t('_setting')}</Link>
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

				<Dropdown overlay={menu} placement="bottomLeft">
					<TranslationOutlined style={{ cursor: 'pointer' }} />
				</Dropdown>
			</div>
		</div>
	);
});
