import React from 'react';
import { Result } from 'antd';
import { Link } from 'react-router-dom';

export const NotAcceptPage = () => (
	<Result
		title="KYC của bạn được chưa xác thực!"
		subTitle="Bạn không có quyền truy cập trang này"
		extra={
			<Link to="/user/account" className="ant-btn btn-danger text-capitalize">
				Xác thực ngay
			</Link>
		}
	/>
);
