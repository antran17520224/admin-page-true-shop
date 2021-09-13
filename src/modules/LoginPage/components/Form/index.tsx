//components
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
//styles
import './index.scss';

// interface IProps {}

const LoginForm: React.FC = (props) => {
	const onFinish = (values: any) => {
		console.log('Received values of form: ', values);
	};
	return (
		<Form
			name="normal_login"
			className="login-form"
			initialValues={{ remember: true }}
			onFinish={onFinish}
		>
			<Form.Item
				name="username"
				hasFeedback={true}
				rules={[
					{ required: true, message: 'Please input your Username!' },
				]}
			>
				<Input
					prefix={<UserOutlined className="site-form-item-icon" />}
					placeholder="Username"
				/>
			</Form.Item>
			<Form.Item
				name="password"
				hasFeedback={true}
				rules={[
					{ required: true, message: 'Please input your Password!' },
				]}
			>
				<Input
					prefix={<LockOutlined className="site-form-item-icon" />}
					type="password"
					placeholder="Password"
				/>
			</Form.Item>
			<div className="group-button-form">
				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						className="login-form-button"
					>
						Log in
					</Button>
				</Form.Item>
				<Form.Item>
					<a className="login-form-forgot" href="">
						Forgot password
					</a>
				</Form.Item>
			</div>
		</Form>
	);
};

export default LoginForm;
