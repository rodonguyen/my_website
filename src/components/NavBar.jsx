import { Link } from "react-router-dom"
import { useRef } from "react"
import HamburgerMenuSvg from "./HamburgerMenuSvg"
import ThemeIcon from "./ThemeIcon"

/**
 * Source:
 * - Hamburger Menu: https://www.youtube.com/watch?v=HQopEEurQYE
 */
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
						<ThemeIcon />
						<ul className="navbar-items" ref={navbarItemsRef}>
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
							className="hamburger-menu"
							onClick={() => {
								navbarItemsRef.current.classList.toggle("display-vertical-nav-items")
							}}
						>
							<HamburgerMenuSvg />
						</button>
					</nav>
				</div>
			</div>
		</>
	)
}

export default NavBar
