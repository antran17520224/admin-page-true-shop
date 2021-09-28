import { Modal, Tabs } from 'antd';
import { useTranslation } from 'react-i18next';
import smallLogo from '../../../../assets/images/logo/small-logo.png';
import { ILandingPageProps } from '../../model/ILandingPageProps';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';
//style
import './index.scss';

const { TabPane } = Tabs;
//interface

const ModalLogin: React.FC<ILandingPageProps> = (props) => {
	const { toggleModalLogin } = props.store.LandingPage;
	const { t } = useTranslation();

	function callback(key: string) {
		return key;
	}
	return (
		<div className="wrapper-modal-login">
			<Modal
				getContainer={false}
				width={400}
				visible={toggleModalLogin}
				onCancel={() => {
					// formInstance.resetFields();
					// props.actions.handleClear(SHOP_EMPLOYEE_CLEAR.CLEAR_STATE_SHOP_EMPLOYEE_UPDATED);
					props.actions.toggleModalLogin();
					// }}
				}}
				maskClosable={true}
				footer={null}
				closable={false}
			>
				<div className="modal-content">
					<div className="title-modal">
						<img src={smallLogo} alt="logo-true-shop" />
						True<span>Shop</span>
					</div>
					<p>{t('_description_form_login')}</p>
					<div className="tabs">
						<Tabs defaultActiveKey="1" onChange={callback}>
							<TabPane tab={t('_login')} key="1">
								<FormLogin />
							</TabPane>
							<TabPane tab={t('_register')} key="2">
								<FormRegister />
							</TabPane>
						</Tabs>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default ModalLogin;
