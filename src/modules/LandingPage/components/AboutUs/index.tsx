//styles
import React from 'react';
import './index.scss';
import appTrueShopImage from '../../../../assets/images/LandingPage/phone-app-true-shop.png';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'antd';

const AboutUs = () => {
	const { t } = useTranslation();
	return (
		<div className="wrapper-about-us" id="about-us">
			<Row gutter={{ xxl: 42, xl: 42, lg: 42, md: 0 }}>
				<Col xl={9} xxl={9} lg={8} md={24} sm={24} xs={24} className="justify-content-center d-flex mb-100">
					<div className="image-app-true-shop">
						<img src={appTrueShopImage} alt="appTrueShopImage" />
					</div>
				</Col>
				<Col xl={15} xxl={15} lg={16} md={24} sm={24} xs={24} className="description-app-true-shop">
					<span className="subtitle">{t('_sort_about_us')}</span>
					<h1>
						We are <span>Genius Coursework</span> since 1980.
					</h1>
					<h5>
						We take our mission of increasing global access to quality education seriously. We connect
						learners to the best universities and institutions from around the world.
					</h5>
					<span></span>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
						tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam. magna aliquam
						volutpat. Ut wisi enim ad minim veniam.
					</p>
					<ul>
						<li>Professional And Experienced Since 1980</li>
						<li>We Connect Learners To The Best Universities From Around The World</li>
						<li>Our Mission Increasing Global Access To Quality Aducation</li>
						<li>100K Online Available Courses</li>
					</ul>
					<a className="contact btn btn-contact" href="#contact">
						{t('_contact_us')}
					</a>
				</Col>
			</Row>
		</div>
	);
};

export default AboutUs;
