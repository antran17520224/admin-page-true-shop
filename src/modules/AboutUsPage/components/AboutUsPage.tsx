import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { IAboutUsProps } from '../model/IAboutUsProps';
import AboutUsInfoUpdateForm from './Form';

interface IProps extends RouteComponentProps, IAboutUsProps {}

const AboutUsPage: React.FC<IProps> = () => {

	return (
		<React.Fragment>
			<AboutUsInfoUpdateForm />
		</React.Fragment>
	);
};

export default AboutUsPage;
