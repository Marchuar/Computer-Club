import { useEffect, useState } from 'react'
import Header from '../../components/Contacts/Header/Header'
import Main from '../../components/Contacts/Main/Main'
import classes from './Contacts.module.css'

function Contacts() {
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
		<div className={classes.contacts__page}>
			<Header scroll={scroll} />
			<Main scroll={scroll} />
		</div>
	)
}

export default Contacts
