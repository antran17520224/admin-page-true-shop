import React from 'react';
import { IInputs } from './IInputs';
import { Button, Col, DatePicker, Divider, Form, Input, Radio, Row, Space, Typography } from 'antd';
import './index.scss';
const { Text } = Typography;

const AboutUsInfoUpdateForm = () => {
	const [formInstance] = Form.useForm();

	const onFinish = (data: IInputs) => {
		return null;
	};

	return (
		<React.Fragment>
			<div className="wrapper-about-us-page">
				<Text>Thông tin giới thiệu công ty</Text>
				<div className="wrapper-form">
					<Form form={formInstance} layout="vertical" onFinish={onFinish}>
						<Row gutter={[16, 0]}>
							<Col span={12}>
								<Form.Item
									label="Họ và tên"
									name="name"
									rules={[
										{
											required: true,
											message: 'Vui lòng nhập họ và tên!',
										},
										{
											max: 256,
											message: 'Vượt quá số kí tự cho phép',
										},
									]}
								>
									<Input placeholder="Nhập họ và tên" />
								</Form.Item>
								<Form.Item
									label="Ngày sinh"
									name="dateOfBirth"
									rules={[
										{
											required: true,
											message: 'Vui lòng nhập ngày sinh!',
										},
									]}
								>
									<DatePicker style={{ width: '100%' }} placeholder="Chọn ngày sinh" />
								</Form.Item>
								<Form.Item
									label="Điện thoại"
									name="phone"
									rules={[
										{
											required: true,
											message: 'Vui lòng nhập số điện thoại!',
										},
										{
											pattern: /^[0-9]*$/,
											message: 'Vui lòng nhập số',
										},
										{
											len: 10,
											message: 'Số điện thoại không hợp lệ!',
										},
									]}
								>
									<Input placeholder="Nhập số điện thoại" />
								</Form.Item>
								<Form.Item
									label="Giới tính"
									name="gender"
									rules={[
										{
											required: true,
											message: 'Vui lòng nhập giới tính!',
										},
									]}
								>
									<Radio.Group name="gender">
										<Radio value={'male'}>Nam</Radio>
										<Radio value={'female'}>Nữ</Radio>
										<Radio value={'other'}>Khác</Radio>
									</Radio.Group>
								</Form.Item>
								<Divider />
								<Form.Item
									label="CMND"
									name="identityNumber"
									rules={[
										{
											required: true,
											message: 'Vui lòng nhập chứng minh nhân dân!',
										},
										{
											pattern: /^[0-9]*$/,
											message: 'Vui lòng nhập số',
										},
										{
											len: 9,
											message: 'Chứng minh nhân dân không hợp lệ!',
										},
									]}
								>
									<Input placeholder="Nhập chứng minh nhân dân" />
								</Form.Item>
								<Form.Item
									label="Ngày cấp CMND"
									name="dateOfIssue"
									rules={[
										{
											required: true,
											message: 'Vui lòng nhập ngày cấp CMND!',
										},
									]}
								>
									<DatePicker className="w-100" placeholder="Chọn ngày cấp CMND" />
								</Form.Item>
								{/* <Form.Item
									label="Nơi cấp CMND"
									name="placeOfIssue"
									rules={[
										{
											required: true,
											message: 'Vui lòng nhập nơi cấp CMND!',
										},
									]}
								>
									<Select
										showSearch={true}
										style={{ width: '100%' }}
										optionLabelProp="label"
										optionFilterProp="children"
										placeholder="Tìm kiếm"
										filterOption={(input: any, option: any) =>
											option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
										}
										
									>
										{provinceRecords &&
											provinceRecords.map((item) => {
												return (
													<Option key={item.code} value={item.code} label={item.fullName}>
														{item.fullName}
													</Option>
												);
											})}
									</Select>
								</Form.Item> */}
							</Col>
							<Col span={12}>
								{/* <Form.Item
									label="Địa chỉ thường trú ( Tinh/thành phố - Quận/Huyện - Phường/xã )"
									name="permanentAddress"
									rules={[
										{
											required: true,
											message: 'Vui lòng chọn nơi chốn!',
										},
									]}
								>
									<Cascader
										expandIcon={<RightOutlined />}
										fieldNames={{
											label: 'fullName',
											value: 'code',
											children: 'children',
										}}
										options={provinceRecords}
										loadData={loadData}
										placeholder="Địa chỉ"
										
									/>
								</Form.Item> */}
								<Form.Item
									label="Địa chỉ thường trú ( số nhà, tên đường )"
									name="homePermanent"
									rules={[
										{
											required: true,
											message: 'Vui lòng nhập địa chỉ nhà!',
										},
										{
											max: 100,
											message: 'Vượt quá số kí tự cho phép',
										},
									]}
								>
									<Input placeholder="Nhập địa chỉ thường trú" />
								</Form.Item>

								<Form.Item
									label="Địa chỉ tạm trú ( số nhà,tên đường )"
									name="homeTemporary"
									rules={[
										{
											required: true,
											message: 'Vui lòng nhập địa chỉ nhà!',
										},
										{
											max: 100,
											message: 'Vượt quá số kí tự cho phép',
										},
									]}
								>
									<Input placeholder="Nhập địa chỉ tạm trú" />
								</Form.Item>
								<Divider />
							</Col>
						</Row>
						<div className="d-flex justify-content-end">
							<Space>
								<Button type="default" className="w-120px">
									Hủy
								</Button>
								<Button type="primary" htmlType="submit" className="w-120px">
									{true ? 'Cập nhật' : 'Tạo'}
								</Button>
							</Space>
						</div>
					</Form>
				</div>
			</div>
		</React.Fragment>
	);
};

export default AboutUsInfoUpdateForm;
