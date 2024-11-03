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
						<h2 className={classes.heading__h2}>Spielkosten</h2>
					</div>

					<div className={classes.price__text}>
						<p>
							Sie können eine geschlossene und einzigartige Gemeinschaft von
							Gleichgesinnten berühren, in der ein Ozean an Emotionen, eine
							Vielzahl neuer Bekanntschaften, wertvolle Preise und Einladungen
							zu geschlossenen Veranstaltungen zu geringen Kosten auf Sie
							warten. Sie werden einer der Inspiratoren und Schöpfer des
							eSports!
						</p>
					</div>

					<div className={classes.price__button}>
						<Link to='/prices' className={classes.price__button_a}>
							Preisliste
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
								<span>Stunde</span>
								<b>2,99-4,99 Euro</b>
							</div>
						</div>

						<div className={classes.price__table_cell}>
							<div className={classes.price__table_icon}>
								<img src={secondIcon}></img>
							</div>

							<div className={classes.price__table_descr}>
								<span>Nacht</span>
								<b>12,99 Euro</b>
							</div>
						</div>
					</div>

					<div className={classes.price__table_row}>
						<div className={classes.price__table_cell}>
							<div className={classes.price__table_icon}>
								<img src={thirdIcon}></img>
							</div>

							<div className={classes.price__table_descr}>
								<span>Paketangebote</span>
								<b>ab 7,99 Euro</b>
							</div>
						</div>

						<div className={classes.price__table_cell}>
							<div className={classes.price__table_icon}>
								<img src={fourthIcon}></img>
							</div>

							<div className={classes.price__table_descr}>
								<span>Rabatte und Boni</span>
								<b>für Stammkunden</b>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Price
