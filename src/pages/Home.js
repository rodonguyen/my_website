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

			{/* Skills section
					Shorter on resume 
					but you should list everything on your website. 
					Because it's YOUR website. 
			*/}
			<div className="container skills">
				<h1>Skills</h1>
				<ul>
					<li>
						<b>Languages</b>:&ensp; JavaScript/TypeScript • Python • Solidity •
						C# • SQL • HTML/CSS.
					</li>
					<li>
						<b>Soft skills</b>:&ensp; Teamwork • Project management •
						Stakeholder engagement • Agile • Presentation
					</li>
					<li>
						<b>Front-End</b>:&ensp; React • Tailwind • Vite • HTML5 • CSS • SCSS
					</li>
					<li>
						<b>Back-End</b>:&ensp; NestJS • ExpressJS • .NET
					</li>
					<li>
						<b>AWS</b>:&ensp; DynamoDB • S3 • EC2 • Lambda • Auto Scaling • Load
						Balancer • IAM
					</li>
					<li>
						<b>DBMS</b>:&ensp; PostgreSQL • MySQL • DynamoDB • MongoDB
					</li>
					<li>
						<b>Testing</b>:&ensp; Jest • Chai • PyTest
					</li>
					<li>
						<b>Blockchain</b>:&ensp; Solidity • Web3.js • Ethers.js
					</li>
					<li>
						<b>Machine Learning</b>:&ensp; PyTorch • Sklearn • Pandas • Numpy •
						MatplotLib
					</li>
					<li>
						<b>DevOps</b>:&ensp; GitHub Actions
					</li>
					<li>
						<b>Other Cloud Platforms</b>:&ensp; Vercel • Netlify
					</li>
					<li>
						<b>Other Technologies</b>:&ensp; Linux/Ubuntu • Git/GitHub • Docker
					</li>
					<li>
						<b>Others</b>:&ensp; Data Structures and Algorithms • Test-driven
						development • Research
					</li>
				</ul>
			</div>

			{/* content block: Projects */}
			<div className="background-color-2">
				<div className="container">
					<h1>Amazing Projects</h1>
					{createHyperlink(
						"https://amazing.rodonguyen.dev/",
						<button id="amazing-webpage-button">{"<AmazingProjects />"}</button>
					)}
				</div>
			</div>

			{/* Skills section */}

			<div className="container">
				<h1>Hobbies</h1>
				{/* <p>
						{createHyperlink("https://leetcode.com/rodonguyen/", "Leetcode")}{" "}
						<LeetcodeSvg />
						&ensp; Top 700k
					</p> */}
				<p>
					Hiking, Gym/Calisthenics, Bowling,{" "}
					{createHyperlink("https://www.chess.com/member/rodobolo", "Chess")}
					♟️(ELO 1000, rapid), Badminton, Reading, Movies
				</p>
				<p>Haven't tried but willing to: Camping, Tennis, ...</p>
			</div>

			<div className="background-color-2">
				<div className="container">Deployed with {createHyperlink('https://www.netlify.com/', 'Netlify')}</div>
			</div>
		</>
	)
}

export default Home
