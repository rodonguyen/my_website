import rodoImage from "../media/Rodo.jpg"
import History from "../components/Home/History"
import { changeWindowTitle, createHyperlink } from "../components/utils"

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
					<h1 className="xlarge text-align-left">Engineer great software</h1>
					<p>Driven by the amazing and exciting world of technology.</p>
					<p>
						Also here are{" "}
						{createHyperlink(
							"https://amazing.rodonguyen.dev/",
							"my pet projects"
						)}{" "}
						where I code fun and interesting things.
					</p>
				</div>
			</div>

			{/* content block: History */}
			<div className="background-color-2">
				<div className="container">
					<History />
				</div>
			</div>

			{/* Skills section */}
			{/* <div className="container skills">
				<h1>Skills</h1>
				<ul>
					<li>
						<b>Languages</b>:&ensp; JavaScript/TypeScript, Python, Solidity,
						SQL, C#, HTML/CSS.
					</li>
					<li>
						<b>Technologies</b>:&ensp; React, Vue, Express.js, .NET, PostgreSQL,
						AWS (DynamoDB, S3, EC2, Lambda, Auto Scaling, Load Balancer, etc.),
						Tailwind, Jest, Chai.
					</li>
					<li>
						<b>Cloud/AWS</b>:&ensp; EC2, Redis, DynamoDB, S3, Lambda, IAM, Load
						Balancer, Auto Scaling
					</li>
					<li>
						<b>Machine Learning</b>:&ensp; PyTorch, Sklearn, Pandas, Numpy,
						MatplotLib
					</li>
					<li>
						<b>Others</b>:&ensp; Linux/Ubuntu, Git/GitHub, Docker, Data
						Structures and Algorithms, Test-driven development, Agile.
					</li>
				</ul>
			</div> */}

			{/* content block: Projects */}
			<div className="container">
				<h1>Amazing Projects</h1>
				{createHyperlink(
					"https://amazing.rodonguyen.dev/",
					<button id="amazing-webpage-button">{"<Check them out/>"}</button>
				)}
			</div>

			{/* Skills section */}

			<div className="background-color-2">
				<div className="container">
					<h1>Hobbies</h1>
					{/* <p>
						{createHyperlink("https://leetcode.com/rodonguyen/", "Leetcode")}{" "}
						<LeetcodeSvg />
						&ensp; Top 700k
					</p> */}
					<p>Hiking, Gym/Calisthenics, Bowling, {createHyperlink("https://www.chess.com/member/rodobolo", "Chess")}♟️(ELO 1000, rapid), Badminton, Reading, Movies</p>
					<p>Haven't tried but willing to: Camping, Tennis, ...</p>
				</div>
			</div>
		</>
	)
}

export default Home
