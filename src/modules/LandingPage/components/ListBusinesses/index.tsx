import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import shop1 from '../../../../assets/images/LandingPage/shop/1.png';
import shop2 from '../../../../assets/images/LandingPage/shop/2.png';
import shop3 from '../../../../assets/images/LandingPage/shop/3.png';
import shop4 from '../../../../assets/images/LandingPage/shop/4.jpg';
import shop5 from '../../../../assets/images/LandingPage/shop/5.jpg';
import shop6 from '../../../../assets/images/LandingPage/shop/6.png';
import './index.scss';

const ListBusinesses = () => {
	const listSort = (
		<Menu>
			<Menu.Item key="0">Name</Menu.Item>
			<Menu.Item key="1">Popularity</Menu.Item>
			<Menu.Item key="2">Most Read</Menu.Item>
			<Menu.Item key="3">Most View</Menu.Item>
		</Menu>
	);

	return (
		<>
			<div className="wrapper-list-businesses" id="list-businesses">
				<div className="list-businesses">
					<span className="subtitle">Danh sách cửa hàng</span>

					<div className="dropdown-box">
						<span>Sort </span>
						by
						<div className="dropdown">
							<Dropdown overlay={listSort} trigger={['click']} placement="bottomLeft">
								<a className="ant-dropdown-link">
									Popularity
									<DownOutlined />
								</a>
							</Dropdown>
						</div>
					</div>

					<div className="list">
						<div className="wrapper-item">
							<div className="item">
								<div className="image-item">
									<img src={shop1} alt="shop1" />
								</div>
								<div className="info-detail">
									<div className="name-address">
										<span>Tạp hóa cô Nga</span>
										<p>55 Trần Phú, Linh Trung, Thủ Đức, TP.HCM</p>
									</div>
									<div className="btn-modal-map">
										<i className="fas fa-map-marker-alt"></i>
									</div>
								</div>
							</div>
						</div>
						<div className="wrapper-item">
							<div className="item">
								<div className="image-item">
									<img src={shop2} alt="shop1" />
								</div>
								<div className="info-detail">
									<div className="name-address">
										<span>Tạp hóa cô Nga</span>
										<p>55 Trần Phú, Linh Trung, Thủ Đức, TP.HCM</p>
									</div>
									<div className="btn-modal-map">
										<i className="fas fa-map-marker-alt"></i>
									</div>
								</div>
							</div>
						</div>
						<div className="wrapper-item">
							<div className="item">
								<div className="image-item">
									<img src={shop3} alt="shop1" />
								</div>
								<div className="info-detail">
									<div className="name-address">
										<span>Tạp hóa cô Nga</span>
										<p>55 Trần Phú, Linh Trung, Thủ Đức, TP.HCM</p>
									</div>
									<div className="btn-modal-map">
										<i className="fas fa-map-marker-alt"></i>
									</div>
								</div>
							</div>
						</div>
						<div className="wrapper-item">
							<div className="item">
								<div className="image-item">
									<img src={shop4} alt="shop1" />
								</div>
								<div className="info-detail">
									<div className="name-address">
										<span>Tạp hóa cô Nga</span>
										<p>55 Trần Phú, Linh Trung, Thủ Đức, TP.HCM</p>
									</div>
									<div className="btn-modal-map">
										<i className="fas fa-map-marker-alt"></i>
									</div>
								</div>
							</div>
						</div>
						<div className="wrapper-item">
							<div className="item">
								<div className="image-item">
									<img src={shop5} alt="shop1" />
								</div>
								<div className="info-detail">
									<div className="name-address">
										<span>Tạp hóa cô Nga</span>
										<p>55 Trần Phú, Linh Trung, Thủ Đức, TP.HCM</p>
									</div>
									<div className="btn-modal-map">
										<i className="fas fa-map-marker-alt"></i>
									</div>
								</div>
							</div>
						</div>
						<div className="wrapper-item">
							<div className="item">
								<div className="image-item">
									<img src={shop6} alt="shop1" />
								</div>
								<div className="info-detail">
									<div className="name-address">
										<span>Tạp hóa cô Nga</span>
										<p>55 Trần Phú, Linh Trung, Thủ Đức, TP.HCM</p>
									</div>
									<div className="btn-modal-map">
										<i className="fas fa-map-marker-alt"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="category">
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
				</div>
			</div>
		</>
	);
};

export default ListBusinesses;
