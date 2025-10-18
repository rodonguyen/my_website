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
						<h2 className="card-title">Sharing is caring. Why I started my podcast.</h2>
						<p>
							Born in a small city widely known for its elephant as the main transport, somehow my parents managed to
							save enough for me to study abroad at QUT in Brisbane, Australia. It is the BEST thing that happens to me.
						</p>
						<p>
							Yet, I feel like I could have used that time more wisely and productively so I want to share all my
							learnings, my lessons and my experiences with you. #software_engineer #life_experience #early_career
						</p>
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

				<h2 className="text-xl font-bold mt-6 text-base-content/65">Others</h2>

				<Link to="/apps" className="custom-card bg-lime-500/15 hover:bg-lime-500/30">
					<div className="card-body text-left">
						<h2 className="card-title">🚀 Amazing Apps</h2>
						<p className="text-base-content/65">Things I do for fun but actually useful</p>
					</div>
				</Link>

				<Link to="/list-100" className="custom-card bg-lime-500/15 hover:bg-lime-500/30">
					<div className="card-body text-left">
						<h2 className="card-title">❤️‍🔥 List 100</h2>
						<p className="text-base-content/65">Things I want to do before I die. Inspired by Chip Huyen's List100.</p>
					</div>
				</Link>
				<Link to="/career" className="custom-card bg-lime-500/15 hover:bg-lime-500/30">
					<div className="card-body text-left">
						<h2 className="card-title">👔 My Career Journey</h2>
						<p className="text-base-content/65">from the very first job as a Kitchenhand in Australia.</p>
					</div>
				</Link>

				<div className="custom-card bg-blue-300/15 hover:bg-blue-300/20 justify-center">
					<div className="card-body">
						<h2 className="card-title ">✍🏽 Subscribe for new updates </h2>
						<p>I'm supposed to put something here to make it more enticing for you to subscribe.</p>
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
