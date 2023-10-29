import classes from './Main.module.css'
import About from './sections/AboutSection'
import Price from './sections/PriceSection'

function Main() {
	return (
		<main className={classes.main__page}>
			<About />
			<Price />
		</main>
	)
}

export default Main
