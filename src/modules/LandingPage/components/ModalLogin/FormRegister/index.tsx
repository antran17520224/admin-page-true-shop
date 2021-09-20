import { Button, Form, Input, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import './index.scss';
const { Option } = Select;

const FormRegister = () => {
	const { t } = useTranslation();
	const onFinish = (data: any) => {
		return null;
	};
	const prefixSelector = (
		<Form.Item name="prefix" noStyle initialValue="+84">
			<Select
				style={{
					width: 70,
				}}
			>
				<Option value="84">+84</Option>
				<Option value="85">+85</Option>
			</Select>
		</Form.Item>
	);
	return (
		<Form name="normal_register" className="register-form" initialValues={{ remember: true }} onFinish={onFinish}>
			<Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
				<Input placeholder="Username" />
			</Form.Item>
			
			<Form.Item
				name="password"
				rules={[
					{
						required: true,
						message: 'Please input your password!',
					},
				]}
				hasFeedback
			>
				<Input.Password placeholder="Password" />
			</Form.Item>

			<Form.Item
				name="confirm"
				dependencies={['password']}
				hasFeedback
				rules={[
					{
						required: true,
						message: 'Please confirm your password!',
					},
					({ getFieldValue }) => ({
						validator(_, value) {
							if (!value || getFieldValue('password') === value) {
								return Promise.resolve();
							}

							return Promise.reject(new Error('The two passwords that you entered do not match!'));
						},
					}),
				]}
			>
				<Input.Password placeholder="Confirm password" />
			</Form.Item>
			<Form.Item
				name="phone"
				rules={[
					{
						required: true,
						message: 'Please input your phone number!',
					},
				]}
			>
				<Input
					addonBefore={prefixSelector}
					style={{
						width: '100%',
					}}
                    placeholder="Phone number"
				/>
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit" className="register-form-button">
					{t('_register')}
				</Button>
			</Form.Item>
		</Form>
	);
};

export default FormRegister;
