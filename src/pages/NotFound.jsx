import { changeWindowTitle } from '../utils/utils'
import { Link } from 'react-router-dom'

const NotFound = () => {
	changeWindowTitle('Not found...')

	return (
		<div className="container flex flex-col mx-auto py-8">
			<Link to="/" className="custom-card">
				<div className="card-body text-center">
					<h2 className="card-title mx-auto">
						Page Not Found... <br /> Click here to go back to Home Page
					</h2>
				</div>
			</Link>
		</div>
	)
}

export default NotFound
