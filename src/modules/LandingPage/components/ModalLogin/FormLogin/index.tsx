import { Button, Checkbox, Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import './index.scss';
const FormLogin = () => {
	const { t } = useTranslation();
	const onFinish = (data: any) => {
		return null;
	};
	return (
		<Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
			<Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
				<Input placeholder="Username" />
			</Form.Item>
			<Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
				<Input.Password placeholder="Password" />
			</Form.Item>
			<Form.Item>
				<Form.Item name="remember" valuePropName="checked" noStyle>
					<Checkbox>{t('_remember_me')}</Checkbox>
				</Form.Item>

				<a className="login-form-forgot" href="">
					{t('_forgot_password')}
				</a>
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit" className="login-form-button">
					{t('_login')}
				</Button>
			</Form.Item>
		</Form>
	);
};

export default FormLogin;
