import { Link } from 'react-router-dom'
import firstIcon from '../../../../assets/style/Images/first_icon_price.png'
import fourthIcon from '../../../../assets/style/Images/fourth_icon_price.png'
import secondIcon from '../../../../assets/style/Images/second_icon_price.png'
import thirdIcon from '../../../../assets/style/Images/third_icon_price.png'
import classes from './Price.module.css'

function Price() {
	return (
		<section className={classes.price}>
			<div className={classes.price__innerBox}>
				<div className={classes.price__content}>
					<div className={classes.price__heading}>
						<h2 className={classes.heading__h2}>Стоимость игры</h2>
					</div>

					<div className={classes.price__text}>
						<p>
							Очень скоро у нас появится программа лояльности и ты сможешь
							прикоснуться к закрытому и уникальному сообществу
							единомышленников, где тебя ждёт океан эмоций, огромное количество
							новых знакомств, ценные призы, приглашения на закрытые мероприятия
							и скидки. Ты станешь одним из вдохновителей и творцов киберспорта
							в России!
						</p>
					</div>

					<div className={classes.price__button}>
						<Link to='/prices' className={classes.price__button_a}>
							Прайс-лист
						</Link>
					</div>
				</div>

				<div className={classes.price__table}>
					<div className={classes.price__table_row}>
						<div className={classes.price__table_cell}>
							<div className={classes.price__table_icon}>
								<img src={firstIcon}></img>
							</div>

							<div className={classes.price__table_descr}>
								<span>Час</span>
								<b>59-89 рублей</b>
							</div>
						</div>

						<div className={classes.price__table_cell}>
							<div className={classes.price__table_icon}>
								<img src={secondIcon}></img>
							</div>

							<div className={classes.price__table_descr}>
								<span>Ночь</span>
								<b>399 рублей</b>
							</div>
						</div>
					</div>

					<div className={classes.price__table_row}>
						<div className={classes.price__table_cell}>
							<div className={classes.price__table_icon}>
								<img src={thirdIcon}></img>
							</div>

							<div className={classes.price__table_descr}>
								<span>Пакетные предложения</span>
								<b>от 150 рублей</b>
							</div>
						</div>

						<div className={classes.price__table_cell}>
							<div className={classes.price__table_icon}>
								<img src={fourthIcon}></img>
							</div>

							<div className={classes.price__table_descr}>
								<span>Скидки и бонусы</span>
								<b>постоянным клиентам</b>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Price
