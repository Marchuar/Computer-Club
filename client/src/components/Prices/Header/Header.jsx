import { Link } from 'react-router-dom'
import logo from '../../../assets/style/Images/header-page-logo.png'
import classes from './Header.module.css'

function Header({ scroll }) {
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
		</header>
	)
}

export default Header
