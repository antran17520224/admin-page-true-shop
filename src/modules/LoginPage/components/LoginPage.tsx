import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ILogInProps } from '../model/ILoginProps';
import { Row, Divider } from 'antd';

interface IProps extends RouteComponentProps, ILogInProps {}

export const LoginPage: React.FC<IProps> = (props) => {
	return (
		<>
		</>
	);
};
