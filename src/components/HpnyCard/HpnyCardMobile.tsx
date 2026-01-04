import { useCallback, useMemo, useState } from 'react'
import type { KeyboardEventHandler } from 'react'
import styles from './HpnyCardMobile.module.css'
import type { HpnyCardContent } from '../../pages/Hpny/hpnyContent'
import signatureImage from '../../assets/hpny/signature.png'
import { getHpnyImageUrls } from '../../api/hpny.images'

type HpnyCardMobileProps = {
	content: HpnyCardContent
	initialState?: 'closed' | 'openPage1' | 'openPage2'
}

type CardState = 'closed' | 'openPage1' | 'openPage2'

const HpnyCardMobile = ({ content, initialState = 'closed' }: HpnyCardMobileProps) => {
	const [state, setState] = useState<CardState>(initialState)

	const handleNext = useCallback(() => {
		setState((current) => {
			if (current === 'closed') return 'openPage1'
			if (current === 'openPage1') return 'openPage2'
			return 'closed'
		})
	}, [])

	const ariaLabel = useMemo(() => {
		if (state === 'closed') return 'Open card'
		if (state === 'openPage1') return 'Go to next page'
		return 'Close card'
	}, [state])

	const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault()
			handleNext()
		}
	}

	return (
		<div className={styles.wrapper}>
			<div
				className={`${styles.scene} ${styles[state]}`}
				role="button"
				tabIndex={0}
				aria-label={ariaLabel}
				onClick={handleNext}
				onKeyDown={onKeyDown}
			>
				<div className={styles.card}>
					<div className={styles.hinge} aria-hidden="true" />

					<div className={styles.leftPage}>
						{content.images && content.images.length >= 2 ? (
							<div className={styles.imagesContainer}>
								<img
									className={styles.image}
									src={getHpnyImageUrls(content.images)[0]}
									alt=""
									crossOrigin="anonymous"
								/>
								<img
									className={styles.image}
									src={getHpnyImageUrls(content.images)[1]}
									alt=""
									crossOrigin="anonymous"
								/>
							</div>
						) : null}
					</div>

					<div className={styles.rightPage}>
						<div className={styles.rightPageContent}>
							{content.insideTitle ? <div className={styles.sectionTitle}>{content.insideTitle}</div> : null}
							<div className={styles.body}>{content.insideBody}</div>
							{content.signature ? <div className={styles.signature}>{content.signature}</div> : null}
							<img className={styles.signatureImage} src={signatureImage} alt="Signature" />
						</div>
					</div>

					<div className={styles.cover}>
						<div className={styles.coverFrontFace}>
							<div>
								<div className={styles.title}>{content.coverTitle}</div>
								{content.coverSubtitle ? <div className={styles.subtitle}>{content.coverSubtitle}</div> : null}
							</div>
						</div>
						<div className={styles.coverBackFace}>
							{content.images && content.images.length >= 2 ? (
								<div className={styles.imagesContainer}>
									<img
										className={styles.image}
										src={getHpnyImageUrls(content.images)[0]}
										alt=""
										crossOrigin="anonymous"
									/>
									<img
										className={styles.image}
										src={getHpnyImageUrls(content.images)[1]}
										alt=""
										crossOrigin="anonymous"
									/>
								</div>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HpnyCardMobile
