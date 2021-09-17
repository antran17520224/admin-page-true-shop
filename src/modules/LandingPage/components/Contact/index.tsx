import { useTranslation } from 'react-i18next';
import './index.scss';
const Contact = () => {
	const { t } = useTranslation();
	return (
		<div className="wrapper-contact" id="contact">
			<div className="wrapper-info-true-shop">
				<span className="subtitle">{t('_contact_us')}</span>
				<h3>{t('_get_in_touch')}</h3>
				<p className="description">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, doloribus odit eveniet
					expedita molestiae quos molestias incidunt pariatur deleniti amet! Repellendus id unde sequi
					voluptate reprehenderit quis et ipsa ea.
				</p>
				<div className="box-info">
					<div className="details-info">
						<div className="icon">
							<i className="fas fa-map-marker-alt" />
						</div>
						<div className="details">
							<p>
								<span>Primary: </span>
								E40 Đường C3, P Tân Thới Nhất, Q.12
							</p>
							<p>
								<span>Second: </span>
								E40 Đường C3, P Tân Thới Nhất, Q.12
							</p>
						</div>
					</div>
					<div className="details-info">
						<div className="icon">
							<i className="fas fa-phone" />
						</div>
						<div className="details">
							<p>
								<span>Primary: </span>
								truedatasolution@gmail.com
							</p>
							<p>
								<span>Second: </span>
								truedatasolution@gmail.com
							</p>
						</div>
					</div>
					<div className="details-info none-border">
						<div className="icon">
							<i className="fas fa-envelope" />
						</div>
						<div className="details">
							<p>
								<span>Primary: </span>
								0789 763 373
							</p>
							<p>
								<span>Second: </span>
								0789 763 373
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="wrapper-maps">
				<div className="maps">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d817.9091116740852!2d106.62253598210663!3d10.82304964281973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b72bdb52f27%3A0xbe624f4a7a52c112!2sC%C3%B4ng%20ty%20TNHH%20OneBox!5e0!3m2!1svi!2shk!4v1628484798025!5m2!1svi!2shk"
						width="100%"
						height="100%"
						frameBorder={0}
						style={{ border: 0 }}
						allowFullScreen
					/>
				</div>
			</div>
		</div>
	);
};

export default Contact;
