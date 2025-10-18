import { useTranslation } from 'react-i18next'

const LanguageSwitcher = ({ className }: { className: string }) => {
	const { i18n } = useTranslation()

	const isEnglish = i18n.language.startsWith('en')

	const toggleLanguage = () => {
		const newLang = isEnglish ? 'vi' : 'en'
		i18n.changeLanguage(newLang)
	}

	return (
		<button onClick={toggleLanguage} className={`btn btn-sm rounded-md ${className}`}>
			{isEnglish ? (
				<>EN</>
			) : (
				<>
					<svg className="w-[1.5rem] h-[1.5rem] inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
						<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
						<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
						<g id="SVGRepo_iconCarrier">
							<path fill="#DA251D" d="M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"></path>
							<path
								fill="#FF0"
								d="M19.753 16.037L18 10.642l-1.753 5.395h-5.672l4.589 3.333l-1.753 5.395L18 21.431l4.589 3.334l-1.753-5.395l4.589-3.333z"
							></path>
						</g>
					</svg>
				</>
			)}
		</button>
	)
}

export default LanguageSwitcher
