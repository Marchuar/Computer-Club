import { useEffect, useState } from 'react'
import Header from '../../components/Rules/Header/Header'
import Main from '../../components/Rules/Main/Main'
import classes from './Rules.module.css'

function Rules() {
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
		<div className={classes.rules__page}>
			<Header scroll={scroll} />
			<Main scroll={scroll} />
		</div>
	)
}

export default Rules
