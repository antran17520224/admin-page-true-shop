import { DownOutlined } from '@ant-design/icons';
import { Col, Dropdown, Menu, Row, Input } from 'antd';
import shop1 from '../../../../assets/images/LandingPage/shop/1.png';
import shop2 from '../../../../assets/images/LandingPage/shop/2.png';
import shop3 from '../../../../assets/images/LandingPage/shop/3.png';
import shop4 from '../../../../assets/images/LandingPage/shop/4.jpg';
import shop5 from '../../../../assets/images/LandingPage/shop/5.jpg';
import shop6 from '../../../../assets/images/LandingPage/shop/6.png';
import { ILandingPageProps } from '../../model/ILandingPageProps';
import './index.scss';

const { Search } = Input;

const ListBusinesses: React.FC<ILandingPageProps> = (props) => {
	const listSort = (
		<Menu>
			<Menu.Item key="0">Name</Menu.Item>
			<Menu.Item key="1">Popularity</Menu.Item>
			<Menu.Item key="2">Most Read</Menu.Item>
			<Menu.Item key="3">Most View</Menu.Item>
			<Menu.Item key="4">TP. Hồ Chí Minh</Menu.Item>
			<Menu.Item key="5">Đồng Nai</Menu.Item>
			<Menu.Item key="6">Vũng Tàu</Menu.Item>
			<Menu.Item key="7">Nha Trang</Menu.Item>
		</Menu>
	);

	const arrayShops = [shop1, shop2, shop3, shop4, shop5, shop6, shop1, shop2, shop3];
	const renderShop = (arrayShops: string[]) => {
		return arrayShops.map((shop, index) => {
			return (
				<Col key={index} xl={8} lg={8} md={24} sm={24} xs={24}  className="wrapper-item justify-content-center">
					<div className="item">
						<div className="image-item">
							<img src={shop} alt="shop1" />
						</div>
						<div className="info-detail">
							<div className="name-address">
								<span>Tạp hóa cô Nga</span>
								<p>55 Trần Phú, Linh Trung, Thủ Đức, TP.HCM</p>
							</div>
							<div className="btn-modal-map" onClick={() => props.actions.toggleModalLocationStore()}>
								<i className="fas fa-map-marker-alt"></i>
							</div>
						</div>
					</div>
				</Col>
			);
		});
	};
	const onSearch = (value: any) => {
		return value;
	};
	return (
		<div className="wrapper-list-businesses" id="list-businesses">
			<Row id="list-businesses" gutter={32}>
				<Col className="list-businesses" xxl={18} xl={18} lg={18} md={24} sm={24} xs={24}>
					<span className="subtitle">Danh sách cửa hàng</span>

					<div className="tools-box">
						<div className="dropdown">
							<span>Sort </span>
							by
							<Dropdown overlay={listSort} trigger={['click']} placement="bottomLeft">
								<a className="ant-dropdown-link">
									Popularity
									<DownOutlined />
								</a>
							</Dropdown>
						</div>
					</div>
					<Row
						gutter={[
							{ lg: 24, md: 24, sm: 16, xs: 8 },
							{ lg: 24, md: 24, sm: 16, xs: 8 },
						]}
						className="list"
					>
						{renderShop(arrayShops)}
					</Row>
				</Col>
				<Col className="category" xxl={6} xl={6} lg={6} md={24} sm={24} xs={24}>
					<span className="title">Categories.</span>
					<Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
						<Menu.Item key="1" icon={<i className="fas fa-chevron-right"></i>}>
							Cửa hàng tạp hóa
						</Menu.Item>
						<Menu.Item key="2" icon={<i className="fas fa-chevron-right"></i>}>
							Nhà thuốc
						</Menu.Item>
						<Menu.Item key="3" icon={<i className="fas fa-chevron-right"></i>}>
							Nhà Phân phối
						</Menu.Item>
						<Menu.Item key="4" icon={<i className="fas fa-chevron-right"></i>}>
							Lorem, ipsum dolor.
						</Menu.Item>
						<Menu.Item key="5" icon={<i className="fas fa-chevron-right"></i>}>
							Lorem, ipsum dolor.
						</Menu.Item>
						<Menu.Item key="6" icon={<i className="fas fa-chevron-right"></i>}>
							Lorem, ipsum dolor.
						</Menu.Item>
					</Menu>
				</Col>
			</Row>
		</div>
	);
};

export default ListBusinesses;
