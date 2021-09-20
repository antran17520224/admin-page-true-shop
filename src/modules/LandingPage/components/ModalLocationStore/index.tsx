import { Modal } from 'antd';
import { ILandingPageProps } from '../../model/ILandingPageProps';
//styles
import './index.scss';
//interface
interface IProps extends ILandingPageProps {}

const ModalLocationStore: React.FC<IProps> = (props) => {
	const { toggleModalLocationStore } = props.store.LandingPage;

	return (
		<Modal
			getContainer={false}
			width={900}
			visible={toggleModalLocationStore}
			onCancel={() => {
				// formInstance.resetFields();
				// props.actions.handleClear(SHOP_EMPLOYEE_CLEAR.CLEAR_STATE_SHOP_EMPLOYEE_UPDATED);
				props.actions.toggleModalLocationStore();
				// }}
			}}
			maskClosable={true}
			footer={null}
			closable={false}
			className="modal-location-store"
		>
			<div className="modal-content">
				<div className="map">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d817.9091116740852!2d106.62253598210663!3d10.82304964281973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b72bdb52f27%3A0xbe624f4a7a52c112!2sC%C3%B4ng%20ty%20TNHH%20OneBox!5e0!3m2!1svi!2shk!4v1628484798025!5m2!1svi!2shk"
						width="100%"
						height="100%"
						frameBorder={0}
						style={{ border: 0 }}
						allowFullScreen
					/>
				</div>
				<div className="info-store">
					<h2 className="name-store">Tạp hóa cô Nga</h2>
					<p className="address-store">55 Trần Phú, Linh Trung, Thủ Đức, TP.HCM</p>
					<p>
						<span>Người đại diện:</span>Nguyễn Thị Nga
					</p>
					<p className="phone-store">
						<span>Số điện thoại:</span>0784 873 876
					</p>
					<p className="phone-store">
						<span>Số điện thoại:</span>0784 873 876
					</p>
					<p className="post-code">
						<span>Mã đăng ký:</span>AAA-DDD-29927
					</p>
					<p className="registration-date">
						<span>Ngày đăng ký:</span>25-3-2021
					</p>
					<p className="place-of-registration">
						<span>Nơi đăng ký:</span>55 Trần Phú, Linh Trung, Thủ Đức, TP.HCM
					</p>
				</div>
			</div>
		</Modal>
	);
};

export default ModalLocationStore;
