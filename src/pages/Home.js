import rodoImage from "../media/Rodo.jpg"
import History from "../components/Home/History"
import { changeWindowTitle, createHyperlink } from "../components/utils"
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
					<h1 className="xlarge text-align-left">"Engineer great software"</h1>
					<h5 className="text-align-left">
						Driven by the amazing and exciting world of tech.
					</h5>
					<p>
						<b>What I'm doing</b>: Software Engineer
					</p>
					<p>
						<b>In my personal time</b>: Expanding my skillset in Software
						Engineering (System Design, Security, Docker, etc.), Blockchain
						Development
					</p>
					<p>
						<b>I want to expore</b>: SWE in Finance sector, AI, Blockchain, Web3
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
				{createHyperlink(
					"https://amazing.rodonguyen.dev/",
					<button className="button">{"<AmazingProjects />"}</button>
				)}
			</div>

			<div className="background-color-2">
				<div className="container blogs">
					<h1>Blogs</h1>
					<ul>
						<li>
							{createHyperlink(
								"https://dev.to/rodonguyen",
								<button className="button">{"<Dev.to />"}</button>
							)}
						</li>
						<li>
							{createHyperlink(
								"https://substack.com/@rodonguyen/notes",
								<button className="button">{"<Substack />"}</button>
							)}
						</li>
					</ul>
				</div>
			</div>

			<div className="container">
				<h1>Hobbies</h1>
				<p>
					{createHyperlink("https://leetcode.com/rodonguyen/", "Leetcode")}{" "}
					<LeetcodeSvg />
					&ensp; Top 700k (and dropping)
				</p>
				<p>
					Hiking, Gym/Calisthenics, Bowling,{" "}
					{createHyperlink("https://www.chess.com/member/rodobolo", "Chess")}
					♟️(ELO 1000, rapid), Badminton, Reading, Movies
				</p>
				<p>Haven't tried but willing to: Camping, Tennis, ...</p>
			</div>

			<div className="background-color-2">
				<div className="container">
					Deployed with {createHyperlink("https://www.netlify.com/", "Netlify")}
				</div>
			</div>
		</>
	)
}

export default Home
