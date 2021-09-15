import Banner from './components/Banner';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import './LandingPage.scss';

const LandingPage = () => {
	return (
		<div className="wrapper-landing-page">
			<Header />
			<Banner />
			<AboutUs />
		</div>
	);
};

export default LandingPage;
