//styles
import React from 'react';
import './index.scss';
import appTrueShopImage from '../../../../assets/images/LandingPage/phone-app-true-shop.png';
const AboutUs = () => {
	return (
		<div className="wrapper-about-us" id="about-us">
			<div className="image-app-true-shop">
				<img src={appTrueShopImage} alt="appTrueShopImage" />
			</div>
			<div className="description-app-true-shop">
				<span className="subtitle">SORT ABOUT US</span>
				<h1>
					We are <span>Genius Coursework</span> since 1980.
				</h1>
				<h5>
					We take our mission of increasing global access to quality education seriously. We connect learners
					to the best universities and institutions from around the world.
				</h5>
				<span></span>
				<p>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
					laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam. magna aliquam volutpat. Ut wisi
					enim ad minim veniam.
				</p>
				<ul>
					<li>Professional And Experienced Since 1980</li>
					<li>We Connect Learners To The Best Universities From Around The World</li>
					<li>Our Mission Increasing Global Access To Quality Aducation</li>
					<li>100K Online Available Courses</li>
				</ul>
				<div className="btn btn-contact">
					<a className="contact" href="#contact">Contact Us</a>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
