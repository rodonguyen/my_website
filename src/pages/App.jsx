import NavBar from "../components/NavBar"
import ContactMe from "./ContactMe"
import List100 from "./List100"
import Home from "./Home"
import TimeIHaveLeft from "./TimeIHaveLeft"
import NotFound from "./NotFound"
import Apps from "./Apps"
import "../stylesheets/App.css"

import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
	const AppConstantElements = (
		<div className="App">
			<NavBar />
			<Outlet />
		</div>
	)

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={AppConstantElements}>
						<Route index element={<Home />} />
						<Route path="contactme" element={<ContactMe />} />
						<Route path="list-100" element={<List100 />} />
						<Route path="apps" element={<Apps />}>
							<Route path="timeihaveleft" element={<TimeIHaveLeft />} />
						</Route>
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
