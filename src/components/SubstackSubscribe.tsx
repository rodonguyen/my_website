import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Hyperlink } from '../utils/utils'
import posthog from '../posthog'

const SUBSTACK_SUBSCRIBE_URL = 'https://rodonguyen.substack.com/api/v1/free?nojs=true'

const SubstackSubscribe = () => {
	const { t } = useTranslation()
	const [submitted, setSubmitted] = useState(false)
	const pageUrl = window.location.href

	return (
		<div className="mt-3 w-full max-w-[384px] mx-auto">
			{submitted && <p className="text-sm text-base-content/70">{t('homeOthers.subscribeSuccess')}</p>}
			<form
				action={SUBSTACK_SUBSCRIBE_URL}
				method="post"
				target="_blank"
				rel="noopener noreferrer"
				onSubmit={() => {
					posthog.capture('newsletter_subscription_submitted')
					setSubmitted(true)
				}}
				className={submitted ? 'hidden' : 'w-full'}
			>
				<input type="hidden" name="source" value="embed" />
				<input type="hidden" name="current_url" value={pageUrl} />
				<input type="hidden" name="first_url" value={pageUrl} />
				<div className="join w-full">
					<input
						type="email"
						name="email"
						required
						autoComplete="email"
						placeholder={t('homeOthers.subscribePlaceholder')}
						aria-label={t('homeOthers.subscribePlaceholder')}
						className="input input-bordered join-item h-11 min-h-11 bg-white text-[#3a342e] placeholder:text-[#3a342e]/55 flex-1 min-w-0 border-[#d2c0ae] focus:border-[#ff6719]"
					/>
					<button
						type="submit"
						className="btn join-item h-11 min-h-11 border-none text-white bg-[#FF6719] hover:bg-[#ff5600]"
					>
						{t('homeOthers.subscribeButton')}
					</button>
				</div>
			</form>
			{!submitted && (
				<p className="mt-2 text-xs text-base-content/50">
					{t('homeOthers.subscribeTerms')}{' '}
					<Hyperlink href="https://substack.com/tos" className="underline">
						{t('homeOthers.termsOfUse')}
					</Hyperlink>
					{' / '}
					<Hyperlink href="https://substack.com/privacy" className="underline">
						{t('homeOthers.privacyPolicy')}
					</Hyperlink>
				</p>
			)}
		</div>
	)
}

export default SubstackSubscribe
