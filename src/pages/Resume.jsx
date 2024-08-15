import rodoResumePdf from "../assets/Rodo_resume.pdf"
import { changeWindowTitle } from "../components/utils"

const Resume = () => {
	changeWindowTitle(window.location.pathname)

	return (
		<div>
			<div className="container resume">
				<div className="text-align-left">
					<a href={rodoResumePdf} download="Rodo_Resume">
						<button type="button">Download</button>
					</a>
				</div>
				<embed
					src={rodoResumePdf}
					type="application/pdf"
					width="100%"
					height="100%"
				/>
			</div>

			<div className="background-color-2">
				<div className="container skills">
					<h1>Still "Skills" but full version :)</h1>
					<ul>
						<li>
							<b>Human Languages</b>:&ensp; Vietnamese • English
						</li>
						<li>
							<b>Languages</b>:&ensp; JavaScript/TypeScript • Python • Solidity
							• C# • SQL • HTML/CSS.
						</li>
						<li>
							<b>Soft skills</b>:&ensp; Teamwork • Project management •
							Stakeholder engagement • Agile • Presentation
						</li>
						<li>
							<b>Front-End</b>:&ensp; React • Tailwind • Vite • HTML • CSS
						</li>
						<li>
							<b>Back-End</b>:&ensp; NestJS • ExpressJS • .NET • Django
						</li>
						<li>
							<b> Cloud</b>:&ensp; AWS • Vercel • Netlify
						</li>
						<li>
							<b>AWS</b>:&ensp; DynamoDB • S3 • EC2 • Lambda • Auto Scaling •
							Load Balancer • IAM
						</li>
						<li>
							<b>Database</b>:&ensp; PostgreSQL • MySQL • Redis • DynamoDB •
							MongoDB • DynamoDB
						</li>
						<li>
							<b>Testing</b>:&ensp; Jest • Chai • K6 • PyTest
						</li>
						<li>
							<b>Blockchain</b>:&ensp; Solidity • Web3.js • Ethers.js • Clarity
						</li>
						<li>
							<b>Machine Learning</b>:&ensp; PyTorch • Sklearn • Pandas • Numpy
							• MatplotLib
						</li>
						<li>
							<b>DevOps</b>:&ensp; GitHub Actions • Docker
						</li>
						<li>
							<b>Other Technologies</b>:&ensp; Linux/Ubuntu • Git/GitHub
						</li>
						<li>
							<b>Others</b>:&ensp; Data Structures and Algorithms • Research
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Resume
