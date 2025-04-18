import { Link } from 'react-router-dom'
import { useRef } from 'react'

const NavBar = () => {
	const navbarItemsRef = useRef(null)

	return (
		<>
			<div className="navbar-container">
				<div className="standard-width">
					<nav>
						<Link to="/" className="navbar-item brand text-align-left">
							Rodo
						</Link>
						<ul className="navbar-items ml-auto" ref={navbarItemsRef}>
							<li>
								<Link to="/list-100" className="navbar-item">
									List 100
								</Link>
							</li>
							<li>
								<Link to="/apps" className="navbar-item">
									Amazing Apps
								</Link>
							</li>
						</ul>
						<button
							className="hamburger-menu ml-auto"
							onClick={() => {
								;(navbarItemsRef.current as unknown as HTMLElement)?.classList.toggle(
									'display-vertical-nav-items'
								)
							}}
						></button>
					</nav>
				</div>
			</div>
		</>
	)
}

export default NavBar
