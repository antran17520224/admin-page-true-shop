import Slider from '@ant-design/react-slick';
import './index.scss';
import { useTranslation } from 'react-i18next';

import test1 from '../../../../assets/images/1.png';
import test2 from '../../../../assets/images/2.png';
import test3 from '../../../../assets/images/3.png';

const Company = () => {
	const { t } = useTranslation();

	const NextArrow = ({ style, onClick }: any) => {
		return (
			<div className="arrow next" style={{ ...style }} onClick={onClick}>
				<i className="fas fa-chevron-right"></i>
			</div>
		);
	};
	const PrevArrow = ({ style, onClick }: any) => {
		return (
			<div className="arrow prev" style={{ ...style }} onClick={onClick}>
				<i className="fas fa-chevron-left"></i>
			</div>
		);
	};
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: <PrevArrow />,
		nextArrow: <NextArrow />,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 567,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			
		],
	};

	return (
		<div className="wrapper-company" id="company">
			<h4 className="headline">{t('_company')}</h4>
			<div className="wrapper-slider">
				<Slider {...settings}>
					<div className="box-image-company">
						<img src={test1} alt="" />
					</div>
					<div className="box-image-company">
						<img src={test2} alt="" />
					</div>
					<div className="box-image-company">
						<img src={test3} alt="" />
					</div>
					<div className="box-image-company">
						<img src={test1} alt="" />
					</div>
					<div className="box-image-company">
						<img src={test2} alt="" />
					</div>
					<div className="box-image-company">
						<img src={test3} alt="" />
					</div>
					<div className="box-image-company">
						<img src={test1} alt="" />
					</div>
					<div className="box-image-company">
						<img src={test2} alt="" />
					</div>
					<div className="box-image-company">
						<img src={test3} alt="" />
					</div>
				</Slider>
			</div>
		</div>
	);
};

export default Company;
