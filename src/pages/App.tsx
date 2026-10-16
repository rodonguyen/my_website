import NavBar from '../components/NavBar'
import Home from './Home'
import Footer from '../components/Footer'
import InkFlowAtmosphere from '../components/PageAtmosphere/InkFlowAtmosphere'
import '../stylesheets/App.css'

import { Suspense, lazy } from 'react'
import { Outlet, BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
const List100 = lazy(() => import('./List100'))
const TimeIHaveLeft = lazy(() => import('./TimeIHaveLeft'))
const NotFound = lazy(() => import('./NotFound'))
const SideProjects = lazy(() => import('./SideProjects'))
const Career = lazy(() => import('./Career'))
const Visitors = lazy(() => import('./Visitors'))

function RouteFallback() {
	return (
		<div className="flex min-h-[60vh] items-center justify-center" role="status" aria-live="polite">
			<span className="loading loading-spinner loading-lg" />
			<span className="sr-only">Loading…</span>
		</div>
	)
}

function AppShell() {
	const showNav = useLocation().pathname !== '/'

	return (
		<div className={`app-shell relative isolate flex min-h-screen flex-col${showNav ? ' pt-12' : ''}`}>
			<InkFlowAtmosphere />
			{showNav ? <NavBar /> : null}
			<div className="relative z-1 flex min-h-0 flex-1 flex-col">
				<div className="flex-1">
					<Suspense fallback={<RouteFallback />}>
						<Outlet />
					</Suspense>
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
