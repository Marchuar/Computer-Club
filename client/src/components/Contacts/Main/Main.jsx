import secondIcon from '../../../assets/style/Images/contacts_email_icon.png'
import firstIcon from '../../../assets/style/Images/contacts_phone_icon.png'
import thirdIcon from '../../../assets/style/Images/contacts_time_icon.png'
import classes from './Main.module.css'

function Main({ scroll }) {
	return (
		<main
			className={scroll > 250 ? classes.main__page_fixed : classes.main__page}
		>
			<section className={classes.main__section}>
				<div className={classes.main__container}>
					<div className={classes.main__container}>
						<div className={classes.main__heading}>
							<h1 className={classes.main__heading_title}>Kontakte</h1>
						</div>
					</div>

					<div className={classes.main__contacts}>
						<div className={classes.contacts__container}>
							<ul className={classes.contacts__list}>
								<li className={classes.contacts__item}>
									<img
										src={firstIcon}
										className={classes.contacts__icon_phone}
									></img>
									<a className={classes.contacts__link} href='tel:+74950152662'>
										+49 152 09782055
									</a>
								</li>
								<li className={classes.contacts__item}>
									<img
										src={secondIcon}
										className={classes.contacts__icon_email}
									></img>
									<a
										className={classes.contacts__link}
										href='mailto:info@cyberloga.ru'
									>
										info@cyberloga.ru
									</a>
								</li>
								<li className={classes.contacts__item}>
									<img
										src={thirdIcon}
										className={classes.contacts__icon_time}
									></img>
									<span className={classes.contacts__text}>
										Mo. - So.: rund um die Uhr
									</span>
								</li>
							</ul>
							<p className={classes.content__info}>
								Für Anregungen und Fragen zur Zusammenarbeit im Bereich
								Marketing und PR schreiben Sie an{' '}
								<a href='mailto:gilioko195@gmail.com'>gilioko195@gmail.com</a>
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Main
