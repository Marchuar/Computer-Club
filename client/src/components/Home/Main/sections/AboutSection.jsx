import BGAbout from '../../../../assets/style/Images/background_img_about.png'
import firstIcon from '../../../../assets/style/Images/first_icon_about.png'
import fourthIcon from '../../../../assets/style/Images/fourth_icon_about.png'
import secondIcon from '../../../../assets/style/Images/second_icon_about.png'
import thirdIcon from '../../../../assets/style/Images/third_icon_about.png'
import classes from './About.module.css'

function About() {
	return (
		<section className={classes.about}>
			<div className={classes.about__innerBox}>
				<div className={classes.about__content}>
					<div className={classes.about__heading}>
						<h2 className={classes.heading__h2}>
							Du möchtest Teil des modernen E-Sports in der realen und
							virtuellen Welt gleichzeitig werden?
						</h2>
					</div>
					<p className={classes.about__subtitle}>
						Wir laden Sie an einen Ort ein, an dem Sie bestimmt Gleichgesinnte{' '}
						<br></br> treffen werden - Computerclub "GamingGladius"!
					</p>
					<div className={classes.about__descr}>
						<p>
							Computerclubs werden zum Kultort für jeden Gamer. Hier kannst du:
						</p>
					</div>
					<ul className={classes.about__feature}>
						<li className={classes.about__feature_item}>
							<div className={classes.about__feature_icon}>
								<img max-width='100%' src={firstIcon}></img>
							</div>

							<div className={classes.about__feature_text}>
								<p>Knüpfen Sie neue Bekanntschaften mit eSport-Fans</p>
							</div>
						</li>

						<li className={classes.about__feature_item}>
							<div className={classes.about__feature_icon}>
								<img max-width='100%' src={secondIcon}></img>
							</div>

							<div className={classes.about__feature_text}>
								<p>
									Drücken Sie Ihre Emotionen in Wettbewerben mit virtuellen
									Gegnern aus
								</p>
							</div>
						</li>

						<li className={classes.about__feature_item}>
							<div className={classes.about__feature_icon}>
								<img max-width='100%' src={thirdIcon}></img>
							</div>

							<div className={classes.about__feature_text}>
								<p>
									Treten Sie einer geschlossenen Community mit einzigartigen
									Gaming-Turnieren bei
								</p>
							</div>
						</li>

						<li className={classes.about__feature_item}>
							<div className={classes.about__feature_icon}>
								<img max-width='100%' src={fourthIcon}></img>
							</div>
							<div className={classes.about__feature_text}>
								<p>
									Werden Sie ein echter eSport-Spieler und erhalten Sie
									wertvolle Preise
								</p>
							</div>
						</li>
					</ul>
				</div>

				<div className={classes.about__image}>
					<img src={BGAbout}></img>
				</div>
			</div>
		</section>
	)
}

export default About
