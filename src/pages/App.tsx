import NavBar from '../components/NavBar'
import List100 from './List100'
import Home from './Home'
import TimeIHaveLeft from './TimeIHaveLeft'
import NotFound from './NotFound'
import SideProjects from './SideProjects'
import Footer from '../components/Footer'
import Career from './Career'
import Housemate from './Housemate'
import Visitors from './Visitors'
import '../stylesheets/App.css'

import { Outlet, BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
	const AppConstantElements = (
		<div className="flex min-h-[calc(100vh-3rem)] flex-col">
			<NavBar />
			<div className="flex-1">
				<Outlet />
			</div>
			<Footer />
		</div>
	)

	return (
		<div className="App flex min-h-screen flex-col pt-12">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={AppConstantElements}>
						<Route index element={<Home />} />
						<Route path="list-100" element={<List100 />} />
						<Route path="career" element={<Career />} />
						<Route path="housemate" element={<Housemate />} />
						<Route path="apps/timeihaveleft" element={<TimeIHaveLeft />} />
						<Route path="apps" element={<SideProjects />}></Route>
						<Route path="visitors" element={<Visitors />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
