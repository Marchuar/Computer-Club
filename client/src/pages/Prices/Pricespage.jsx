import { useEffect, useState } from 'react'
import Header from '../../components/Prices/Header/Header'
import Main from '../../components/Prices/Main/Main'
import classes from './Prices.module.css'

function Prices() {
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
		<div className={classes.prices__page}>
			<Header scroll={scroll} />
			<Main scroll={scroll} />
		</div>
	)
}

export default Prices
