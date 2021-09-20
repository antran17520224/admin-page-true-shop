import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import smallLogo from '../../../../assets/images/logo/small-logo.png';
import './index.scss';
const Footer = () => {
	const { t } = useTranslation();
	return (
		<div className="wrapper-footer">
			<Row gutter={[48,8]} justify="space-between">
				<Col className="gutter-row footer-about" xl={6} >
					<div className="navbar-header">
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
					<p className="description-1">
						We take our mission of increasing global access to quality education seriously. We connect
						learners to the best universities and institutions from around the world.
					</p>
					<p className="description-2">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, optio blanditiis temporibus
						obcaecati quod enim quibusdam expedita dicta totam velit?
					</p>
				</Col>
				<Col className="gutter-row middle-col" xl={10}  >
					<Row justify="center">
						<Col span={12} className="col-useful">
							<h4 className="headline">{t('_useful_link')}</h4>
							<ul>
								<li>
									<a href="#">
										<i className="fas fa-caret-right"></i>{t('_home')}
									</a>
								</li>
								<li>
									<a href="#about-us">
										<i className="fas fa-caret-right"></i>
										{t('_about_us')}
									</a>
								</li>
								<li>
									<a href="#list-businesses">
										<i className="fas fa-caret-right"></i>
										{t('_shop')}
									</a>
								</li>
								<li>
									<a href="#news">
										<i className="fas fa-caret-right"></i>
										{t('_news')}
									</a>
								</li>
								<li>
									<a href="#company">
										<i className="fas fa-caret-right"></i>
										{t('_company')}
									</a>
								</li>
								<li>
									<a href="#contact">
										<i className="fas fa-caret-right"></i>
										{t('_contact')}
									</a>
								</li>
							</ul>
						</Col>
						<Col span={12} className="col-account-info">
							<h4 className="headline">{t('_account_info')}</h4>
							<ul>
								<li>
									<a href="#">
										<i className="fas fa-caret-right"></i>
										{t('_setting_account')}
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fas fa-caret-right"></i>
										{t('_login_register')}
									</a>
								</li>
								<li>
									<a href="#shops">
										<i className="fas fa-caret-right"></i>
										{t('_contact_us')}
									</a>
								</li>
								<li>
									<a href="#news">
										<i className="fas fa-caret-right"></i>
										{t('_mobile_apps')}
									</a>
								</li>
								<li>
									<a href="#company">
										<i className="fas fa-caret-right"></i>
										{t('_support')}
									</a>
								</li>
							</ul>
						</Col>
					</Row>
				</Col>
				<Col className="gutter-row" xl={7}  >
					<h4 className="headline">{t('_quick_contact')}</h4>
					<ul>
						<li>
							<a href="#">
								<i className="fas fa-caret-right"></i>
								{/* {t('_phone')} */}
								0789 763 373
							</a>
						</li>
						<li>
							<a href="#">
								<i className="fas fa-caret-right"></i>
								{/* {t('_email')} */}
								truedatasolution@gmail.com
							</a>
						</li>
						<li>
							<a href="#shops">
								<i className="fas fa-caret-right"></i>
								{/* {t('_address')} */}
								E40, Đường C3, P.Tân Thới Nhất, Q.12
							</a>
						</li>
					</ul>
				</Col>
			</Row>
			<div className="copy-right-menu">
				<p>
					© 2021 - Designed & Developed by <span><a href="#">TrueShop</a></span>. All rights reserved
				</p>
				<ul className="copy-right-menu-item">
					<li><a href="#">License</a></li>
					<li><a href="#">Privacy & Policy</a></li>
					<li><a href="#">Term Of Service</a></li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
