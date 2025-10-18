import { changeWindowTitle } from '../utils/utils'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const NotFound = () => {
	const { t } = useTranslation()
	changeWindowTitle(t('errors.notFound'))

	return (
		<div className="container flex flex-col mx-auto py-8">
			<Link to="/" className="custom-card">
				<div className="card-body text-center">
					<h2 className="card-title mx-auto">
						{t('errors.notFound')} <br /> {t('errors.clickToGoHome')}
					</h2>
				</div>
			</Link>
		</div>
	)
}

export default NotFound
