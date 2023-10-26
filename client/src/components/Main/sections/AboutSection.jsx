import BGAbout from '../../../assets/style/Images/background_img_about.png'
import firstIcon from '../../../assets/style/Images/first_icon_about.png'
import fourthIcon from '../../../assets/style/Images/fourth_icon_about.png'
import secondIcon from '../../../assets/style/Images/second_icon_about.png'
import thirdIcon from '../../../assets/style/Images/third_icon_about.png'
import classes from './About.module.css'

function About() {
	return (
		<section className={classes.about}>
			<div className={classes.about__innerBox}>
				<div className={classes.about__content}>
					<div className={classes.about__heading}>
						<h2 className={classes.heading__h2}>
							Хотите стать частью современного киберспорта одновременно в
							реальном и виртуальном мирах?
						</h2>
					</div>
					<p className={classes.about__subtitle}>
						Мы приглашаем вас в место, где вы обязательно встретите <br></br>{' '}
						единомышленников - компьютерный клуб NAME!
					</p>
					<div className={classes.about__descr}>
						<p>
							Крупнейшая сеть игровых компьютерных клубов в Москве становится
							культовым местом для каждого геймера. Здесь можно:
						</p>
					</div>
					<ul className={classes.about__feature}>
						<li className={classes.about__feature_item}>
							<div className={classes.about__feature_icon}>
								<img max-width='100%' src={firstIcon}></img>
							</div>

							<div className={classes.about__feature_text}>
								<p>
									Завести новые знакомства с вдохновителями/любителями
									киберспорта
								</p>
							</div>
						</li>

						<li className={classes.about__feature_item}>
							<div className={classes.about__feature_icon}>
								<img max-width='100%' src={secondIcon}></img>
							</div>

							<div className={classes.about__feature_text}>
								<p>
									Выплеснуть свои эмоции в состязаниях с виртуальными
									противниками
								</p>
							</div>
						</li>

						<li className={classes.about__feature_item}>
							<div className={classes.about__feature_icon}>
								<img max-width='100%' src={thirdIcon}></img>
							</div>

							<div className={classes.about__feature_text}>
								<p>
									Войти в закрытое сообщество с уникальными игровыми турнирами
								</p>
							</div>
						</li>

						<li className={classes.about__feature_item}>
							<div className={classes.about__feature_icon}>
								<img max-width='100%' src={fourthIcon}></img>
							</div>
							<div className={classes.about__feature_text}>
								<p>Стать настоящим киберспортсменом и получить ценные призы</p>
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
