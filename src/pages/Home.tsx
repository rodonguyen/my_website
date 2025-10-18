import { changeWindowTitle, Hyperlink } from '../utils/utils'
import rodoImage from '../assets/home/Rodo.jpg'
import SocialIcons from '../components/SocialIcons'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../components/LanguageSwitcher'

const Home = () => {
	const { t } = useTranslation()
	changeWindowTitle(window.location.pathname)

	return (
		<>
			<LanguageSwitcher className="absolute top-4 right-4" />
			<div className="container flex flex-col items-center text-center ">
				<div className="avatar mt-12 mb-2">
					<div className="rounded-full md:w-48 w-24">
						<img src={rodoImage} alt="Rodo Avatar" className="rounded-full" />
					</div>
				</div>
				<h1 className="text-4xl font-bold mb-6">Rodo</h1>
				<p className="text-xl text-base-content/50 mb-4">{t('homeIntro.tagline')}</p>
				<div className="flex space-x-6 mb-12 text-base-content/50">
					<SocialIcons />
				</div>

				<div className="custom-card bg-sky-100/20 hover:bg-sky-100/50">
					<div className="card-body text-left text-base-content/80 mb-2 md:text-md text-sm">
						<h2 className="card-title">👋 {t('homeIntro.greeting')}</h2>
						<p>{t('homeIntro.intro1')}</p>
						<p>{t('homeIntro.intro2')}</p>
						<p>{t('homeIntro.intro3')}</p>
						<p>{t('homeIntro.intro4')}</p>
					</div>
				</div>

				{/* <div className="max-w-[30rem]"> */}
				<Hyperlink
					href="https://www.youtube.com/@rodo.podcast?sub_confirmation=1"
					className="custom-card bg-amber-500/20 hover:bg-amber-500/30"
				>
					<div className="card-body text-left text-base-content/80 space-y-2 md:text-md text-sm">
						<h2 className="card-title">{t('homePodcast.title')}</h2>
						<p>{t('homePodcast.intro1')}</p>
						<p>{t('homePodcast.intro2')}</p>
						<div className="flex justify-center rounded-xl overflow-hidden mx-auto w-[300px] h-[200px]">
							<iframe
								src="https://www.youtube.com/embed/x8ZmhqwKTFY"
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</div>
					</div>
				</Hyperlink>

				<h2 className="text-xl font-bold mt-6 text-base-content/65">{t('homeOthers.title')}</h2>

				<Link to="/apps" className="custom-card bg-lime-500/15 hover:bg-lime-500/30">
					<div className="card-body text-left">
						<h2 className="card-title">🚀 {t('homeOthers.appsTitle')}</h2>
						<p className="text-base-content/65">{t('homeOthers.appsDescription')}</p>
					</div>
				</Link>

				<Link to="/list-100" className="custom-card bg-lime-500/15 hover:bg-lime-500/30">
					<div className="card-body text-left">
						<h2 className="card-title">❤️‍🔥 {t('homeOthers.list100Title')}</h2>
						<p className="text-base-content/65">{t('homeOthers.list100Description')}</p>
					</div>
				</Link>
				<Link to="/career" className="custom-card bg-lime-500/15 hover:bg-lime-500/30">
					<div className="card-body text-left">
						<h2 className="card-title">👔 {t('homeOthers.careerTitle')}</h2>
						<p className="text-base-content/65">{t('homeOthers.careerDescription')}</p>
					</div>
				</Link>

				<div className="custom-card bg-blue-300/15 hover:bg-blue-300/20 justify-center">
					<div className="card-body">
						<h2 className="card-title ">✍🏽 {t('homeOthers.subscribeTitle')} </h2>
						<p>{t('homeOthers.subscribeDescription')}</p>
						<div className="flex justify-center">
							<iframe
								src="https://rodonguyen.substack.com/embed"
								width="480"
								height="150"
								style={{ border: '1px solid #EEE', background: 'white' }}
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
