//styles
//library
import { useTranslation } from 'react-i18next';
import './index.scss';
const Banner = () => {
	const { t } = useTranslation();
	return (
		<div className="wrapper-banner">
			<div className="wrapper-content">
				<span className="subtitle">{t('_giaiphap')}</span>
				<h2 className="title">
					{t('_inventive')}{' '}
					<span>
						{t('_solution')} <br /> {t('_for')}
					</span>{' '}
					{t('_store_management')}
				</h2>
				<div className="scroll-down-top"></div>
				<div className="scroll-down-bottom"></div>
			</div>
		</div>
	);
};

export default Banner;
