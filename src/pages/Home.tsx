import { changeWindowTitle } from '../utils/utils'
import rodoImage from '../assets/home/Rodo.jpg'
import SocialIcons from '../components/SocialIcons'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../components/LanguageSwitcher'
import FeaturedMedia from '../components/FeaturedMedia/FeaturedMedia'
import ScrambleText from '../components/ScrambleText'
import SubstackSubscribe from '../components/SubstackSubscribe'
import ThoughtBubble from '../components/ThoughtBubble'

const Home = () => {
	const { t } = useTranslation()
	changeWindowTitle(window.location.pathname)

	return (
		<>
			<LanguageSwitcher className="absolute top-4 right-4 z-20" />
			<div className="container flex flex-col items-center text-center ">
				<div className="avatar-stage">
					<div className="avatar">
						<div className="rounded-full md:w-48 w-24">
							<img src={rodoImage} alt="Rodo Avatar" className="rounded-full" />
						</div>
					</div>
					<ThoughtBubble text={t('homeIntro.thought')} />
				</div>
				<h1 className="text-4xl font-bold mb-6">Rodo</h1>
				<p className="text-xl text-base-content/85 mb-4">
					<ScrambleText text={t('homeIntro.tagline')} />
				</p>
				<div className="flex space-x-6 mb-12 text-base-content/85">
					<SocialIcons />
				</div>

				<div className="custom-card bg-sky-100/20 hover:bg-sky-100/50">
					<div className="card-body text-left text-base-content/80 mb-2 md:text-md text-sm">
						<h2 className="card-title">👋 {t('homeIntro.greeting')}</h2>
						<p>{t('homeIntro.intro1')}</p>
						<p>{t('homeIntro.intro2')}</p>
						{/* <p>{t('homeIntro.intro3')}</p>
						<p>{t('homeIntro.intro4')}</p> */}
					</div>
				</div>

				<FeaturedMedia />

				<h2 className="text-xl font-bold mt-6 text-base-content/65">{t('homeOthers.title')}</h2>

				<Link to="/career" className="custom-card bg-blue-300/15 hover:bg-blue-300/20">
					<div className="card-body text-left">
						<h2 className="card-title">👔 {t('homeOthers.careerTitle')}</h2>
						<p className="text-base-content/65">{t('homeOthers.careerDescription')}</p>
					</div>
				</Link>

				<Link to="/apps" className="custom-card bg-blue-300/15 hover:bg-blue-300/20">
					<div className="card-body text-left">
						<h2 className="card-title">🚀 {t('homeOthers.appsTitle')}</h2>
						<p className="text-base-content/65">{t('homeOthers.appsDescription')}</p>
					</div>
				</Link>

				<Link to="/list-100" className="custom-card bg-blue-300/15 hover:bg-blue-300/20">
					<div className="card-body text-left">
						<h2 className="card-title">❤️‍🔥 {t('homeOthers.list100Title')}</h2>
						<p className="text-base-content/65">{t('homeOthers.list100Description')}</p>
					</div>
				</Link>

				<div className="custom-card bg-blue-300/15 hover:bg-blue-300/20 justify-center">
					<div className="card-body">
						<h2 className="card-title ">✍🏽 {t('homeOthers.subscribeTitle')} </h2>
						<p>{t('homeOthers.subscribeDescription')}</p>
						<SubstackSubscribe />
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
