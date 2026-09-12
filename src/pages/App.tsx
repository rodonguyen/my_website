import NavBar from '../components/NavBar'
import List100 from './List100'
import Home from './Home'
import TimeIHaveLeft from './TimeIHaveLeft'
import NotFound from './NotFound'
import SideProjects from './SideProjects'
import Footer from '../components/Footer'
import Career from './Career'
import Visitors from './Visitors'
import '../stylesheets/App.css'

import { Outlet, BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'

function AppShell() {
	const showNav = useLocation().pathname !== '/'

	return (
		<div className={`flex min-h-screen flex-col${showNav ? ' pt-12' : ''}`}>
			{showNav ? <NavBar /> : null}
			<div className="flex min-h-0 flex-1 flex-col">
				<div className="flex-1">
					<Outlet />
				</div>
				<Footer />
			</div>
		</div>
	)
}

function App() {
	return (
		<div className="App flex min-h-screen flex-col">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<AppShell />}>
						<Route index element={<Home />} />
						<Route path="list100" element={<List100 />} />
						<Route path="list-100" element={<Navigate to="/list100" replace />} />
						<Route path="career" element={<Career />} />
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
