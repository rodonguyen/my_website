import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Hyperlink } from '../utils/utils'

const SUBSTACK_SUBSCRIBE_URL = 'https://rodonguyen.substack.com/api/v1/free?nojs=true'
const IFRAME_NAME = 'substack-subscribe-frame'

const SubstackSubscribe = () => {
	const { t } = useTranslation()
	const [submitted, setSubmitted] = useState(false)
	const pageUrl = window.location.href

	return (
		<div className="mt-3 w-full max-w-md mx-auto">
			<iframe name={IFRAME_NAME} title="Substack subscribe" className="hidden" />
			{submitted && <p className="text-sm text-base-content/70">{t('homeOthers.subscribeSuccess')}</p>}
			<form
				action={SUBSTACK_SUBSCRIBE_URL}
				method="post"
				target={IFRAME_NAME}
				onSubmit={() => setSubmitted(true)}
				className={submitted ? 'hidden' : 'join w-full'}
			>
				<input type="hidden" name="source" value="embed" />
				<input type="hidden" name="current_url" value={pageUrl} />
				<input type="hidden" name="first_url" value={pageUrl} />
				<input
					type="email"
					name="email"
					required
					autoComplete="email"
					placeholder={t('homeOthers.subscribePlaceholder')}
					aria-label={t('homeOthers.subscribePlaceholder')}
					className="input input-bordered join-item bg-white text-neutral-800 flex-1 min-w-0"
				/>
				<button type="submit" className="btn join-item border-none text-white bg-[#FF6719] hover:bg-[#ff5600]">
					{t('homeOthers.subscribeButton')}
				</button>
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
