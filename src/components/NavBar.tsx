import { Link, useLocation } from 'react-router-dom'
import rodoImage from '../assets/home/Rodo.jpg'

const NavBar = () => {
	const location = useLocation()
	const hideNavBar = location.pathname === '/'

	return (
		<div
			className={
				'navbar fixed top-0 left-0 right-0 z-10 min-h-6 bg-base-100 shadow-sm p-0 text-base-content/60' +
				(hideNavBar ? ' hidden' : '')
			}
		>
			<div className="flex-1">
				<Link to="/" className="btn btn-ghost py-0 text-xl">
					<img className="rounded-full w-6 h-6" src={rodoImage}></img>
					Rodo
				</Link>
			</div>
			<div className="ml-auto gap-2 hidden md:flex">
				<Link to="/list-100" className="btn btn-ghost py-0  text-xl">
					List 100
				</Link>
				<Link to="/apps" className="btn btn-ghost py-0  text-xl">
					Amazing Apps
				</Link>
			</div>
			<div className="md:hidden flex justify-end">
				<div className="dropdown dropdown-end">
					<button tabIndex={0} className="btn btn-ghost py-0 text-xl">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							className="inline-block h-5 w-5 stroke-current"
						>
							{' '}
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							></path>{' '}
						</svg>
					</button>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-left"
					>
						<li>
							<Link to="/list-100">List 100</Link>
						</li>
						<li>
							<Link to="/apps">
								Amazing Apps <span className="badge">New</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default NavBar
