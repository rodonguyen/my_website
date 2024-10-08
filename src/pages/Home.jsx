import rodoImage from "../assets/home/Rodo.jpg"
import History from "./Home/History"
import { changeWindowTitle, Hyperlink } from "../utils/utils"
import LeetcodeSvg from "../components/LeetcodeSvg"

const Home = () => {
	changeWindowTitle(window.location.pathname)

	return (
		<>
			{/* content block 1: A little introduction */}
			<div className="container row introduction">
				<div className="portrait">
					<div className="img-container">
						<img src={rodoImage} loading="lazy" alt="Rodo" />
					</div>
				</div>
				<div className="bio">
					<h1 className="xlarge text-align-left quote">"Engineer great software"</h1>
					<h5 className="text-align-left">Driven by the amazing and exciting world of tech.</h5>
					<p>
						<b>What I'm doing</b>: Software Engineer
					</p>
					<p>
						<b>In my personal time</b>: Expanding my skillset in Software Engineering (System
						Design, Security, Docker, etc.), Blockchain Development
					</p>
					<p>
						<b>I want to explore</b>: SWE in Finance sector, AI, Blockchain, Web3
					</p>
				</div>
			</div>

			{/* content block: History */}
			<div className="background-color-2">
				<div className="container">
					<History />
				</div>
			</div>

			{/* content block: Projects */}
			<div className="container">
				<h1>Random projects I made</h1>
				<Hyperlink href="https://amazing.rodonguyen.dev/">
					<button className="button">{"<AmazingProjects />"}</button>
				</Hyperlink>
			</div>

			<div className="background-color-2">
				<div className="container blogs">
					<h1>Blogs</h1>
					<Hyperlink href="https://dev.to/rodonguyen">
						<button className="button">{"<Dev.to />"}</button>
					</Hyperlink>
					<Hyperlink href="https://substack.com/@rodonguyen/notes">
						<button className="button">{"<Substack />"}</button>
					</Hyperlink>
				</div>
			</div>

			<div className="container">
				<h1>Hobbies</h1>
				<p>
					<Hyperlink href="https://leetcode.com/rodonguyen/">Leetcode</Hyperlink>
					<LeetcodeSvg />
					&ensp; Top 700k (and dropping)
				</p>
				<p>
					Hiking, Gym/Calisthenics, Bowling,{" "}
					<Hyperlink href="https://www.chess.com/member/rodobolo">Chess</Hyperlink>
					♟️(ELO 1000, rapid), Badminton, Reading, Movies
				</p>
				<p>Haven't tried but willing to: Camping, Tennis, ...</p>
			</div>

			<div className="background-color-2">
				<div className="container">
					Deployed with <Hyperlink href="https://www.netlify.com/">Netlify</Hyperlink>
				</div>
			</div>
		</>
	)
}

export default Home
