import rodoImage from "../assets/home/Rodo.jpg"
import History from "./Home/History"
import { changeWindowTitle, Hyperlink } from "../utils/utils"
import LeetcodeSvg from "../components/LeetcodeSvg"
import { Link } from "react-router-dom"

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
						Architecture, Security, etc.)
					</p>
					<p>
						<b>I want to explore</b>: SWE in Finance sector, AI, Web3
					</p>
				</div>
			</div>

			{/* content block: History */}
			<div className="background-color-2">
				<div className="container">
					<Link to="/apps">
						<button className="button">{"<Amazing Apps I Made />"}</button>
					</Link>
				</div>
			</div>

			{/* content block: Projects */}
			<div className="container">
				<History />
			</div>

			{/* content block: Hobbies */}
			<div className="background-color-2">
				<div className="container">
					<h1>Hobbies</h1>
					<p>
						<Hyperlink href="https://leetcode.com/rodonguyen/">Leetcode</Hyperlink> <LeetcodeSvg />{" "}
						top 1 million (and dropping)
					</p>
					<p>
						Hiking, Gym/Calisthenics, Bowling,{" "}
						<Hyperlink href="https://www.chess.com/member/rodobolo">Chess</Hyperlink>
						♟️(ELO 1000, rapid), Badminton, Reading, Movies
					</p>
					<p>Things I'm proud to know a bit: Tennis, Golf, Bouldering</p>
					<p>Haven't tried but willing to: Camping</p>
				</div>
			</div>

			{/* Contact Me */}
			<div className="container">
				<button
					className="button text-neutral"
					onClick={() => window.open("https://beacons.ai/rodo8888", "_blank")}
				>
					{"<Contact me />"}
				</button>
			</div>
		</>
	)
}

export default Home
