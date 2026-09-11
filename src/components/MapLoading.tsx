import { useTranslation } from 'react-i18next'

const MapLoading = () => {
	const { t } = useTranslation()

	return (
		<div className="visitors-map-loader" role="status" aria-live="polite">
			<svg className="visitors-map-loader__art" viewBox="0 0 280 140" aria-hidden="true">
				<ellipse cx="70" cy="62" rx="50" ry="34" />
				<ellipse cx="148" cy="72" rx="38" ry="40" />
				<ellipse cx="216" cy="58" rx="44" ry="30" />
				<g transform="translate(168 78)">
					<circle className="visitors-map-loader__ripple" r="14" />
					<circle className="visitors-map-loader__dot" r="5" />
				</g>
			</svg>
			<p className="visitors-map-loader__label">{t('visitors.loading')}</p>
		</div>
	)
}

export default MapLoading
