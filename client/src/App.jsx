import { Route, Routes } from 'react-router-dom'
import Contacts from './pages/Contacts/Contactspage'
import Home from './pages/Home/Homepage'
import Prices from './pages/Prices/Pricespage'
import Rules from './pages/Rules/Rulespage'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />}></Route>
			<Route path='/prices' element={<Prices />}></Route>
			<Route path='/rules' element={<Rules />}></Route>
			<Route path='/contacts' element={<Contacts />}></Route>
		</Routes>
	)
}

export default App
