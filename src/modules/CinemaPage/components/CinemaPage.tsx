import { Button, Divider, Input } from 'antd';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { CustomBreadCrumb } from '../../../components';
import { ICinemaProps } from '../model/ICinemaProps';
import { PlusOutlined } from '@ant-design/icons';
import { CINEMAS_MODAL } from '../model/ICinemaState';

const { Search } = Input;
interface IProps extends RouteComponentProps, ICinemaProps {}

const CinemaPage: React.FC<IProps> = (props) => {
	// const { keyword, provinceRecords, isLoading } = props.store.CinemaPage;

	React.useEffect(() => {
		props.actions.getAllCinemas();
	}, []);

	const onSearch = (value: any) => {
		// props.actions.searchCinemas({
		// 	page: 0,
		// 	limit: 3,
		// 	keyword: value,
		// });
	};

	return (
		<React.Fragment>
		
		</React.Fragment>
	);
};

export default CinemaPage;
