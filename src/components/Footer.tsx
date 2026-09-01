import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SocialIcons from './SocialIcons'

const pageColumns = [
	[
		{ to: '/', key: 'nav.home' },
		{ to: '/list-100', key: 'nav.list100' },
		{ to: '/visitors', key: 'footer.visitors' }
	],
	[
		{ to: '/apps', key: 'nav.apps' },
		{ to: '/career', key: 'nav.career' }
	]
] as const

const Footer = () => {
	const { t } = useTranslation()

	return (
		<footer className="mt-auto bg-base-100 pt-16 text-base-content">
			<div className="border-t border-gray-200">
				<div className="container flex flex-col gap-10 py-6 md:flex-row md:items-start md:justify-between">
					<div className="flex flex-col items-start gap-3 text-left">
						<Link to="/" className="flex items-center gap-2 text-lg font-semibold text-base-content">
							<img src="/favicon.png" alt="" width={32} height={32} className="h-8 w-8 rounded-sm" />
							Rodo
						</Link>
						<p className="text-sm text-base-content/70">{t('homeIntro.tagline')}</p>
						<div className="flex flex-wrap gap-4 text-base-content/80">
							<SocialIcons className="text-xl hover:text-rose-500 transition-colors duration-200" />
						</div>
					</div>

					<nav aria-label={t('footer.pages')} className="text-left">
						<p className="mb-2 text-xs font-semibold uppercase tracking-wide text-base-content/50">
							{t('footer.pages')}
						</p>
						<div className="grid grid-cols-2 gap-x-8 gap-y-1">
							{pageColumns.map((column) => (
								<ul key={column[0].to} className="flex flex-col gap-1">
									{column.map((page) => (
										<li key={page.to}>
											<Link to={page.to} className="link link-hover text-sm text-base-content/80">
												{t(page.key)}
											</Link>
										</li>
									))}
								</ul>
							))}
						</div>
					</nav>
				</div>
			</div>
		</footer>
	)
}

export default Footer
