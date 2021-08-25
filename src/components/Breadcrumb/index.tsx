import { Breadcrumb, PageHeader } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';

interface ICustomBreadCrumbProps {
	title: string;
	path: string;
	routeName?: string;
}

export const CustomBreadCrumb = ({
	title,
	path,
	routeName,
}: ICustomBreadCrumbProps) => {
	return (
		<React.Fragment>
			<PageHeader title={title} className="p-0" />
			<Breadcrumb className="mb-2">
				<Breadcrumb.Item>
					<Link to="/">
						<HomeOutlined className="text-primary" />
					</Link>
				</Breadcrumb.Item>
				{routeName !== undefined && (
					<Breadcrumb.Item>
						<Link to={path}>{routeName}</Link>
					</Breadcrumb.Item>
				)}
				<Breadcrumb.Item>{title}</Breadcrumb.Item>
			</Breadcrumb>
		</React.Fragment>
	);
};
