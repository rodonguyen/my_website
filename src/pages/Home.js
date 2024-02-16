//
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
					<h1 className="xlarge text-align-left">Hello World!</h1>
					<p>
						I'm a motivated Software Engineer who loves to work on impactful
						products that bring value to users at scale.
					</p>
					<p>
						I like to build personal projects where I put my skills or my
						recently acquired knowledge to practice. While we're on this, check
						out{" "}
						{createHyperlink(
							"https://amazing.rodonguyen.dev/",
							"my amazing projects"
						)}
						.
					</p>
				</div>
			</div>

			{/* content block: History */}
			<div className="background-color-2">
				<div className="container">
					<p>
						Interesting opportunity? 👉🏽{" "}
						{createHyperlink("/resume", "My Resume")}
					</p>

					<h1>Career Summary</h1>
					<p>
						Software Engineer with 1+ years of experience in developing
						commercial applications. Proven expertise in debugging, coding, and
						testing complicated software. Super familiar with Agile Methodology
						and Software Development Life Cycle. A fast and driven learner.
					</p>
				</div>
			</div>

			{/* Skills section */}
			<div className="container skills">
				<h1>Skills</h1>
				<ul>
					<li>
						<b>Languages</b>:&ensp; JavaScript/TypeScript, Python, Solidity,
						SQL, C#, HTML/CSS.
					</li>
					<li>
						<b>Technologies</b>:&ensp; React, Vue, Express.js, .NET, PostgreSQL, AWS
						(DynamoDB, S3, EC2, Lambda, Auto Scaling, Load Balancer, etc.),
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
			</div>

			<div className="background-color-2">
				<div className="container">
					<History />
				</div>
			</div>

			{/* content block: Projects */}
			<div className="background-color-2">
				<div className="container">
					<h1>Amazing Projects</h1>
					{createHyperlink(
						"https://amazing.rodonguyen.dev/",
						<button id="amazing-webpage-button">{"<Check them out/>"}</button>
					)}
				</div>
			</div>

			{/* Skills section */}

			<div className="container">
				<h1>Hobbies</h1>

				{/* Uncomment these when the rank/elo is high */}
				<p>
					{createHyperlink("https://leetcode.com/rodonguyen/", "Leetcode")}{" "}
					<LeetcodeSvg />
					&ensp; Top 700k
				</p>
				<p>
					{createHyperlink("https://www.chess.com/member/rodobolo", "Chess")} ♟️
					Beginner, ELO 1000 (rapid){" "}
				</p>
				<p>Hiking, Gym/Calisthenics, Bowling, Badminton, Reading, Movies</p>
				<p>Haven't tried but willing to: Camping, Tennis,...</p>
			</div>

			{/* content block: Postscript
			<div className="background-color-2">
				<div className="container">
					<p>p.s. </p>
					<p>
						This website is made with bare HTML/CSS, ReactJS and no special
						styling frameworks :) KISS!
					</p>
				</div>
			</div> */}

			{/* Certificates section
			<div className="background-color-2">
				<div className="container text-align-left certificate">
				<h1>Certificates</h1>
				</div>
			</div> */}
		</>
	)
}

export default Home
