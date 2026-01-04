import { useCallback, useMemo, useState } from 'react'
import type { KeyboardEventHandler } from 'react'
import styles from './HpnyCard.module.css'
import type { HpnyCardContent } from '../../pages/Hpny/hpnyContent'
import fireworksImage from '../../assets/hpny/fireworks.jpg'
import signatureImage from '../../assets/hpny/signature.png'

type HpnyCardProps = {
	content: HpnyCardContent
	initialOpen?: boolean
}

const HpnyCard = ({ content, initialOpen = false }: HpnyCardProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(initialOpen)

	const toggle = useCallback(() => {
		setIsOpen((v) => !v)
	}, [])

	const openLabel = useMemo(() => (isOpen ? 'Close card' : 'Open card'), [isOpen])

	const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault()
			toggle()
		}
	}

	return (
		<div className={styles.wrapper}>
			<div
				className={`${styles.scene} ${isOpen ? styles.open : styles.closed}`}
				role="button"
				tabIndex={0}
				aria-label={openLabel}
				onClick={toggle}
				onKeyDown={onKeyDown}
			>
				<div className={styles.card}>
					<div className={styles.hinge} aria-hidden="true" />

					<div className={styles.insidePage}>
						{content.insideTitle ? <div className={styles.sectionTitle}>{content.insideTitle}</div> : null}
						<div className={styles.body}>{content.insideBody}</div>
						{content.signature ? <div className={styles.signature}>{content.signature}</div> : null}
						<img className={styles.signatureImage} src={signatureImage} alt="Signature" />
					</div>

					<div className={styles.cover}>
						<div className={styles.coverFrontFace}>
							<div>
								<div className={styles.title}>{content.coverTitle}</div>
								{content.coverSubtitle ? <div className={styles.subtitle}>{content.coverSubtitle}</div> : null}
							</div>
						</div>

						<div className={styles.coverBackFace}>
							<div className={styles.imageFrame}>
								<img className={styles.image} src={fireworksImage} alt="Fireworks" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HpnyCard
