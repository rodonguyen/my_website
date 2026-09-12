import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SocialIcons from './SocialIcons'

const linkRows = [
	[
		{ to: '/', key: 'nav.home' },
		{ to: '/list100', key: 'nav.list100' },
		{ to: '/apps', key: 'nav.apps' }
	],
	[
		{ to: '/career', key: 'nav.career' },
		{ to: '/visitors', key: 'footer.visitors' }
	]
] as const

const linkClass =
	'inline-flex min-h-9 items-center text-sm text-base-content/70 transition-colors hover:text-base-content focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current md:min-h-0 md:py-0.5'
const iconClass =
	'inline-flex h-11 w-11 items-center justify-center text-xl text-base-content/80 transition-colors hover:text-rose-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current md:h-9 md:w-9'

const Footer = () => {
	const { t } = useTranslation()
	const year = new Date().getFullYear()

	return (
		<footer className="mt-auto bg-page pt-8 text-base-content">
			<div className="border-t border-[var(--page-rule)]">
				<div className="container py-8 md:py-10">
					<div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-12">
						<div className="order-2 flex min-w-0 flex-col items-start gap-5 text-left md:order-1">
							<nav aria-label={t('footer.pages')} className="flex flex-col gap-1">
								{linkRows.map((row) => (
									<div key={row[0].to} className="flex flex-wrap gap-x-5">
										{row.map((page) => (
											<Link key={page.to} to={page.to} className={linkClass}>
												{t(page.key)}
											</Link>
										))}
									</div>
								))}
							</nav>
							<nav aria-label={t('footer.socialMedia')} className="flex max-w-full flex-wrap gap-2">
								<SocialIcons className={iconClass} />
							</nav>
						</div>

						<div className="order-1 flex shrink-0 flex-col items-start gap-1 md:order-2 md:items-end">
							<Link
								to="/"
								className="text-4xl font-bold text-base-content focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current md:text-5xl"
							>
								Rodo
							</Link>
							<p className="text-sm text-base-content/60">{t('footer.copyright', { year })}</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
