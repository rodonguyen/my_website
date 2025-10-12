import { changeWindowTitle, Hyperlink } from '../utils/utils'
import rodoImage from '../assets/home/Rodo.jpg'
import SocialIcons from '../components/SocialIcons'
import { Link } from 'react-router-dom'

const Home = () => {
	changeWindowTitle(window.location.pathname)

	return (
		<>
			<div className="container flex flex-col items-center text-center ">
				<div className="avatar mt-12 mb-2">
					<div className="rounded-full md:w-48 w-24">
						<img src={rodoImage} alt="Rodo Avatar" className="rounded-full" />
					</div>
				</div>
				<h1 className="text-4xl font-bold mb-6">Rodo</h1>
				<p className="text-xl text-base-content/50 mb-4">Engineer great software!</p>
				<div className="flex space-x-6 mb-12 text-base-content/50">
					<SocialIcons />
				</div>

				{/* <div className="max-w-[30rem]"> */}
				<Hyperlink
					href="https://www.youtube.com/@rodo.podcast?sub_confirmation=1"
					className="custom-card bg-amber-500/20 hover:bg-amber-500/30"
				>
					<div className="card-body text-left">
						<h2 className="card-title">Sharing is caring. Why I started my podcast.</h2>
						<p className="text-base-content/65 mb-2 md:text-md text-sm">
							Born in a small city widely known for its elephant as the main transport, somehow my parents managed to
							save enough for me to study abroad at QUT in Brisbane, Australia. It is the BEST thing that happens to me.
						</p>
						<p className="text-base-content/65 mb-2 md:text-md text-sm">
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
			</div>
		</>
	)
}

export default Home
