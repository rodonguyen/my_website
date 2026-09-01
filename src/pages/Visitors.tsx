import { changeWindowTitle } from '../utils/utils'
import { useTranslation } from 'react-i18next'
import MapMyVisitors from '../components/MapMyVisitors'

const Visitors = () => {
	const { t } = useTranslation()
	changeWindowTitle('/visitors')

	return (
		<div className="container mt-8">
			<h1 className="h1 text-center">{t('visitors.pageTitle')}</h1>
			<MapMyVisitors />
		</div>
	)
}

export default Visitors
