import { useTranslation } from 'react-i18next';
import { ILandingPageProps } from '../../model/ILandingPageProps';
import cls from 'classnames';
//styles
import './index.scss';
//interface
interface IProps extends ILandingPageProps {}

const News: React.FC<IProps> = (props) => {
	const { t } = useTranslation();
	const { currentLanguage } = props.store.LandingPage;
	return (
		<div className="wrapper-list-news">
			<span className="subtitle">{t('_news')} & {t('_company')}</span>
			<div className="list-news">
				<div className="news-column">
					<h4 className={cls('headline', currentLanguage === 'vn' && 'fw700')}>
						{t('_domestic')}
						{currentLanguage === 'en' && <span> {t('_news')}</span>}
					</h4>
					<div className="box-news-item">
						<div className="image-news">
							<a href="https://www.google.com" target="_blank">
								<img src="http://jthemes.org/html/reactjs/genius/assets/img/blog/lb-1.jpg" alt="" />
							</a>
						</div>
						<div className="details-news">
							<a href="https://www.google.com" target="_blank" className="title">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, quidem.
							</a>
							<p className="summary">
								Lorem ipsum olor sit amet consectetur adipisicing elit. Doloribus aliquid tempora
								laborum quasi adipsci quibusdam iusto voluptas quae sint corrupti?
							</p>
							<p className="date">
								<i className="fas fa-calendar-alt"></i>
								26 April 2018
							</p>
						</div>
					</div>

					<div className="box-news-item">
						<div className="image-news">
							<img src="http://jthemes.org/html/reactjs/genius/assets/img/blog/lb-1.jpg" alt="" />
						</div>
						<div className="details-news">
							<p className="title">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, quidem.
							</p>
							<p className="summary">
								Lorem ipsum olor sit amet consectetur adipisicing elit. Doloribus aliquid tempora
								laborum quasi adipsci quibusdam iusto voluptas quae sint corrupti?
							</p>
							<p className="date">
								<i className="fas fa-calendar-alt"></i>
								26 April 2018
							</p>
						</div>
					</div>
				</div>
				<div className="news-column">
					<h4 className={cls('headline', currentLanguage === 'vn' && 'fw700')}>
						{t('_international')}
						{currentLanguage === 'en' && <span> {t('_news')}</span>}
					</h4>
					<div className="box-news-item">
						<div className="image-news">
							<a href="https://www.google.com" target="_blank">
								<img src="http://jthemes.org/html/reactjs/genius/assets/img/blog/lb-1.jpg" alt="" />
							</a>
						</div>
						<div className="details-news">
							<a href="https://www.google.com" target="_blank" className="title">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, quidem.
							</a>
							<p className="summary">
								Lorem ipsum olor sit amet consectetur adipisicing elit. Doloribus aliquid tempora
								laborum quasi adipsci quibusdam iusto voluptas quae sint corrupti?
							</p>
							<p className="date">
								<i className="fas fa-calendar-alt"></i>
								26 April 2018
							</p>
						</div>
					</div>

					<div className="box-news-item">
						<div className="image-news">
							<img src="http://jthemes.org/html/reactjs/genius/assets/img/blog/lb-1.jpg" alt="" />
						</div>
						<div className="details-news">
							<p className="title">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, quidem.
							</p>
							<p className="summary">
								Lorem ipsum olor sit amet consectetur adipisicing elit. Doloribus aliquid tempora
								laborum quasi adipsci quibusdam iusto voluptas quae sint corrupti?
							</p>
							<p className="date">
								<i className="fas fa-calendar-alt"></i>
								26 April 2018
							</p>
						</div>
					</div>
				</div>
				<div className="news-column">
					<h4 className={cls('headline', currentLanguage === 'vn' && 'fw700')}>
						{t('_stock')}
						{currentLanguage === 'en' && <span> {t('_news')}</span>}
					</h4>
					<div className="box-news-item">
						<div className="image-news">
							<a href="https://www.google.com" target="_blank">
								<img src="http://jthemes.org/html/reactjs/genius/assets/img/blog/lb-1.jpg" alt="" />
							</a>
						</div>
						<div className="details-news">
							<a href="https://www.google.com" target="_blank" className="title">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, quidem.
							</a>
							<p className="summary">
								Lorem ipsum olor sit amet consectetur adipisicing elit. Doloribus aliquid tempora
								laborum quasi adipsci quibusdam iusto voluptas quae sint corrupti?
							</p>
							<p className="date">
								<i className="fas fa-calendar-alt"></i>
								26 April 2018
							</p>
						</div>
					</div>

					<div className="box-news-item">
						<div className="image-news">
							<img src="http://jthemes.org/html/reactjs/genius/assets/img/blog/lb-1.jpg" alt="" />
						</div>
						<div className="details-news">
							<p className="title">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, quidem.
							</p>
							<p className="summary">
								Lorem ipsum olor sit amet consectetur adipisicing elit. Doloribus aliquid tempora
								laborum quasi adipsci quibusdam iusto voluptas quae sint corrupti?
							</p>
							<p className="date">
								<i className="fas fa-calendar-alt"></i>
								26 April 2018
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default News;
