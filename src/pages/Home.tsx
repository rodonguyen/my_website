import { changeWindowTitle } from "../utils/utils"
import rodoImage from "../assets/home/Rodo.jpg"
import {
	FaInstagram,
	FaThreads,
	FaEnvelope,
	FaYoutube,
	FaXTwitter,
	FaLinkedin
} from "react-icons/fa6"

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
				<p className="text-xl text-base-content/50 mb-4">Engineer great software</p>
				<div className="flex space-x-6 mb-12 text-base-content/50">
					<a
						href="https://instagram.com/rodo.nguyen"
						target="_blank"
						rel="noopener noreferrer"
						className="text-2xl hover:text-rose-500 transition-colors duration-200"
					>
						<FaInstagram />
					</a>
					<a
						href="https://threads.net/rodo.nguyen"
						target="_blank"
						rel="noopener noreferrer"
						className="text-2xl hover:text-rose-500 transition-colors duration-200"
					>
						<FaThreads />
					</a>
					<a
						href="mailto:rodonguyendd@gmail.com"
						className="text-2xl hover:text-rose-500 transition-colors duration-200"
					>
						<FaEnvelope />
					</a>
					<a
						href="https://youtube.com/@rodo.podcast"
						target="_blank"
						rel="noopener noreferrer"
						className="text-2xl hover:text-rose-500 transition-colors duration-200"
					>
						<FaYoutube />
					</a>
					<a
						href="https://x.com/rodonguyen"
						target="_blank"
						rel="noopener noreferrer"
						className="text-2xl hover:text-rose-500 transition-colors duration-200"
					>
						<FaXTwitter />
					</a>
					<a
						href="https://www.linkedin.com/in/rodonguyen/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-2xl hover:text-rose-500 transition-colors duration-200"
					>
						<FaLinkedin />
					</a>
				</div>

				{/* <div className="max-w-[30rem]"> */}
				<div className="custom-card">
					<div className="card-body text-left">
						<h2 className="text-xl font-bold mb-4">Sharing is caring. Why I started my podcast.</h2>
						<p className="text-base-content/50 mb-2 md:text-md text-sm">
							Born in a small city widely known for its elephant as the main transport, somehow my
							parents managed to earn and save enough for me to study at QUT in Brisbane, Australia.
							It is the BEST thing that happens to me.
						</p>
						<p className="text-base-content/50 mb-2 md:text-md text-sm">
							Yet, I feel like I could have used my university time more wisely and productively so
							I want to share all my learnings, my lessons and my experiences with you.
							#software_engineer #life_experience #early_career
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
				</div>
				{/* </div> */}
				{/* <div className="container mt-8 text-center"> */}
				<h2 className="text-xl font-bold mt-6 text-base-content/50">Others</h2>

				<div className="custom-card">
					<div className="card-body text-left">
						<h2 className="card-title">🚀 Amazing Apps</h2>
						<p className="text-base-content/50">Things I do for fun but actually useful</p>
					</div>
				</div>

				<div className="custom-card">
					<div className="card-body text-left">
						<h2 className="card-title">❤️‍🔥 List 100</h2>
						<p className="text-base-content/50">
							Things I want to do before I die. Inspired by Chip Huyen's List100.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
