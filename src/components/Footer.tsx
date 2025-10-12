import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
	return (
		<footer className="fixed bottom-0 left-0 right-0 z-50 text-center text-sm text-base-content/40 bg-base-100/50 backdrop-blur-md">
			<nav className="mx-auto">
				<Link to="/">
					<p>Built by Rodo</p>
				</Link>
			</nav>
		</footer>
	)
}

export default Footer
