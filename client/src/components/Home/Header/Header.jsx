import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/style/Images/header-page-logo.png'
import classes from './Header.module.css'

function Header() {
	const [scroll, setScroll] = useState(0)

	console.log(`scroll = ${scroll}`)

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const handleScroll = () => {
		setScroll(window.scrollY)
	}

	return (
		<header className={classes.header}>
			<div
				className={
					scroll > 250 ? classes.header__top_fixed : classes.header__top
				}
			>
				<a href='/'>
					<img
						src={logo}
						alt='logo'
						className={
							scroll > 250 ? classes.header__logo_fixed : classes.header__logo
						}
					></img>
				</a>

				<nav className={classes.header__nav}>
					<ul className={classes.header__list}>
						<li className={classes.header__li}>
							<Link to='/' className={classes.header__link}>
								Hauptseite
							</Link>
						</li>

						<li className={classes.header__li}>
							<Link to='/prices' id='0' className={classes.header__link}>
								Preise
							</Link>
						</li>

						<li className={classes.header__li}>
							<Link to='/rules' className={classes.header__link}>
								Regeln
							</Link>
						</li>
						<li className={classes.header__li}>
							<Link to='/contacts' className={classes.header__link}>
								Kontakte
							</Link>
						</li>
						<li className={classes.header__li}>
							<a href='tel:+4915209782051' className={classes.header__link}>
								+4915209782051
							</a>
						</li>
					</ul>
				</nav>
			</div>

			<div
				className={
					scroll > 250 ? classes.header__inner_fixed : classes.header__inner
				}
			>
				<div className={classes.header__content}>
					<h1 className={classes.header__title}>
						Computerclub <br></br>{' '}
						<p className={classes.header__secondTitle}>Idealer Ort für Gamer</p>
					</h1>
				</div>
				<div className={classes.header__advantages}>
					<div className={classes.header__advantages_box}>
						<h2 className={classes.advantages__h2}>24+</h2>
						<p className={classes.advantages__description}>
							Leistungsstarke Gaming-Computer in einem Club
						</p>
					</div>
					<div className={classes.header__advantages_box}>
						<h2 className={classes.advantages__h2}>50+</h2>
						<p className={classes.advantages__description}>Moderne Spiele</p>
					</div>
					<div className={classes.header__advantages_box}>
						<h2 className={classes.advantages__h2}>24/7</h2>
						<p className={classes.advantages__description}>
							Computerclubs sind 24 Stunden am Tag, 7 Tage die Woche geöffnet
						</p>
					</div>
					<div className={classes.header__advantages_box}>
						<h2 className={classes.advantages__h2}>200+</h2>
						<p className={classes.advantages__description}>
							Im Laufe des nächsten Jahres sind Turniere in Computerclubs
							geplant
						</p>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
