//library
//components
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import cls from 'classnames';
import i18next from 'i18next';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import smallLogo from '../../../../assets/images/logo/small-logo.png';
import { ILandingPageProps } from '../../model/ILandingPageProps';
//styles
import './index.scss';
//interface
// interface IProps extends ILandingPageProps {}

const Header: React.FC<ILandingPageProps> = (props) => {
	const [triggerScroll, setTriggerScroll] = useState<boolean>(false);
	const [openSearchBox, setOpenSearchBox] = useState<boolean>(false);
	const [toggleMobileMenu, setToggleMobileMenu] = useState<boolean>(false);
	const { currentLanguage } = props.store.LandingPage;
	const prevScrollY = useRef(0);
	useEffect(() => {
		const currentScrollY = window.scrollY;
		prevScrollY.current = currentScrollY;
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			prevScrollY.current = currentScrollY;
			if (prevScrollY.current > 0) {
				setTriggerScroll(true);
			}
			if (prevScrollY.current === 0) {
				setTriggerScroll(false);
			}
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [triggerScroll]);

	const { t } = useTranslation();
	const handleChangeLanguage = (str: string) => {
		i18next.changeLanguage(str);
		props.actions.selectLanguage(str);
	};

	const menuLang = (
		<Menu>
			<Menu.Item key="0" onClick={() => handleChangeLanguage('vn')}>
				VN
			</Menu.Item>
			<Menu.Item key="1" onClick={() => handleChangeLanguage('en')}>
				EN
			</Menu.Item>
			<Menu.Item key="2" onClick={() => handleChangeLanguage('jp')}>
				JP
			</Menu.Item>
		</Menu>
	);

	return (
		<div className="wrapper-header">
			<header className={cls('d-flex align-items-center', triggerScroll ? 'header-scroll' : 'header')}>
				<div className="navbar-brand">
					<div className="logo">
						<img src={smallLogo} alt="logo TrueShop" />
					</div>
					<div className="brand">
						<div className="name-brand">
							True<span>Shop</span>
						</div>
						<div className="link-website">www.trueshop.gov.com</div>
					</div>
				</div>
				<div className="select-lang">
					<Dropdown overlay={menuLang} trigger={['click']}>
						<a
							style={{ textTransform: 'uppercase' }}
							className="ant-dropdown-link"
							onClick={(e) => e.preventDefault()}
						>
							{currentLanguage}
							<DownOutlined />
						</a>
					</Dropdown>
				</div>
				<div className="navbar-menu menu-text">
					<ul>
						<li>
							<a href="#">{t('_home')}</a>
						</li>
						<li>
							<a href="#about-us">{t('_about_us')}</a>
						</li>
						<li>
							<a href="#list-businesses">{t('_shop')}</a>
						</li>
						<li>
							<a href="#news">{t('_news')}</a>
						</li>
						<li>
							<a href="#company">{t('_company')}</a>
						</li>
						<li>
							<a href="#contact">{t('_contact')}</a>
						</li>
					</ul>
				</div>
				<ul className="navbar-menu menu-icon d-flex">
					<li className="search-icon">
						<i className="fas fa-search" onClick={() => setOpenSearchBox(!openSearchBox)}></i>
						<div className={cls('search-body', openSearchBox && 'search-open')}>
							<div className="search-form">
								<form action="">
									<input className="search-input" placeholder="Tìm kiếm..." type="search" />
									<span className="close-form">
										<i className="fas fa-times" onClick={() => setOpenSearchBox(false)}></i>
									</span>
								</form>
							</div>
						</div>
					</li>
					<li onClick={() => props.actions.toggleModalLogin()}>
						<i className="fas fa-user"></i>
					</li>
				</ul>
				<div
					className={cls('icon-mobile-menu', toggleMobileMenu && 'toggle')}
					onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
				>
					<div id="icon-expand">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</header>
			<ul className={cls('mobile-menu', toggleMobileMenu && 'mobile-menu-show')}>
				<a href="#">{t('_home')}</a>
				<a href="#about-us">{t('_about_us')}</a>
				<a href="#list-businesses">{t('_shop')}</a>
				<a href="#news">{t('_news')}</a>
				<a href="#company">{t('_company')}</a>
				<a href="#contact">{t('_contact')}</a>
			</ul>
		</div>
	);
};

export default Header;
