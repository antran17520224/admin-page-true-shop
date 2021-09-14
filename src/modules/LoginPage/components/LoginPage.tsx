import { Col, Row } from 'antd';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ILogInProps } from '../model/ILoginProps';
import LoginForm from './Form';
//styles
import './LoginPage.scss';
interface IProps extends RouteComponentProps, ILogInProps {}

export const LoginPage: React.FC<IProps> = () => {
	return (
		<div className="wrapper-login-page">
			<Row align="middle" justify="center" className="row">
				<Col className="gutter-row wrapper-login-form" span={9}>
					<h1>Login</h1>
					<p>Sign In to your account</p>
					<LoginForm />
				</Col>
				<Col className="gutter-row  welcome-form" span={9}>
					<h1>TrueShop</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Cupiditate aut non hic ipsam dicta possimus in
						natus, eveniet dolore voluptas?
					</p>
					<span>Welcome !</span>
				</Col>
			</Row>
		</div>
	);
};
