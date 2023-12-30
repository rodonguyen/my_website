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
								<Link to="/resume" className="navbar-item">
									Resume
								</Link>
							</li>
							<li>
								<Link to="/list-100" className="navbar-item">
									List 100
								</Link>
							</li>
							<li>
								<Link to="/contactme" className="navbar-item">
									Contact me
								</Link>
							</li>
							{/* <li>
								<a
									href="https://rodonguyen.medium.com/"
									className="navbar-item"
									target="_blank"
									rel="noopener noreferrer"
								>
									Blog
								</a>
							</li> */}
						</ul>
						<button
							class="hamburger-menu"
							onClick={() => {
								navbarItemsRef.current.classList.toggle(
									"display-vertical-nav-items"
								)
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


