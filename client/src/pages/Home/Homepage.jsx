import Footer from '../../components/Home/Footer/Footer'
import Header from '../../components/Home/Header/Header'
import Main from '../../components/Home/Main/Main'
import classes from './Home.module.css'

function Home() {
	return (
		<div className={classes.home_page}>
			<Header />
			<Main />
			<Footer />
		</div>
	)
}

export default Home
