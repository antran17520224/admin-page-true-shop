import { useEffect } from 'react';
import { ILandingPageProps } from '../model/ILandingPageProps';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Company from './Company';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import './LandingPage.scss';
import ListBusinesses from './ListBusinesses';
import ModalLocationStore from './ModalLocationStore';
import ModalLogin from './ModalLogin';
import News from './News';

// interface IProps extends ILandingPageProps {}

const LandingPage: React.FC<ILandingPageProps> = (props) => {
	const { currentLanguage } = props.store.LandingPage;

	useEffect(() => {
		document.title =
			currentLanguage === 'vn' ? 'TrueShop | Giải pháp công nghệ' : 'TrueShop | Technology Solutions';
	}, [currentLanguage]);
	return (
		<div className="wrapper-landing-page">
			<Header {...props} />
			<Banner />
			<AboutUs />
			<ListBusinesses {...props} />
			<News {...props} />
			<Company />
			<Contact />
			<Footer />
			<ModalLogin {...props} />
			<ModalLocationStore {...props} />
		</div>
	);
};

export default LandingPage;
