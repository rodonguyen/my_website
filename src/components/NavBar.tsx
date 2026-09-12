import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const NavBar = () => {
	const { t } = useTranslation()

	return (
		<div className="navbar site-nav fixed top-0 left-0 right-0 z-10 md:px-6 min-h-6 shadow-sm p-0 text-base-content/80">
			<div className="flex-1">
				<Link
					to="/"
					className="inline-flex min-h-11 items-center px-4 font-bold text-xl text-base-content focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current md:px-2"
				>
					Rodo
				</Link>
			</div>
			<div className="hidden md:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link to="/list-100">{t('nav.list100')}</Link>
					</li>
					<li>
						<Link to="/apps">{t('nav.apps')}</Link>
					</li>
					<li>
						<Link to="/career">{t('nav.career')}</Link>
					</li>
				</ul>
			</div>

			<div className="md:hidden flex justify-end">
				<div className="dropdown dropdown-end">
					<button tabIndex={0} title="Menu" className="btn btn-ghost py-0 text-xl">
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
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-left text-2xl"
					>
						<li>
							<Link to="/list-100" className="text-lg">
								{t('nav.list100')} <span className="badge bg-blue-100">Updated</span>
							</Link>
						</li>
						<li>
							<Link to="/apps" className="text-lg">
								{t('nav.apps')}
							</Link>
						</li>
						<li>
							<Link to="/career" className="text-lg">
								{t('nav.career')}
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default NavBar
