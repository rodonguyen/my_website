import NavBar from '../components/NavBar'
import List100 from './List100'
import Home from './Home'
import TimeIHaveLeft from './TimeIHaveLeft'
import NotFound from './NotFound'
import Apps from './Apps'
import Footer from '../components/Footer'
import '../stylesheets/App.css'

import { Outlet, BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
	const AppConstantElements = (
		<div className="App">
			{/* <NavBar /> */}
			<Outlet />
		</div>
	)

	return (
		<div className="App flex flex-col min-h-screen pb-12">
			<div className="flex-grow">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={AppConstantElements}>
							<Route index element={<Home />} />
							<Route path="list-100" element={<List100 />} />
							<Route path="apps/timeihaveleft" element={<TimeIHaveLeft />} />
							<Route path="apps" element={<Apps />}></Route>
							<Route path="*" element={<NotFound />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</div>
			<Footer />
		</div>
	)
}

export default App
