import qutguildLogo from "../../media/history_qutguild_logo.png"
import vietqLogo from "../../media/history_vietq_logo.jpg"
import qutLogo from "../../media/history_qut_logo.jpeg"
import s23mLogo from "../../media/history_s23m_logo.jpeg"
import aervisionLogo from "../../media/history_aervision_logo.png"
import csirodata61Logo from "../../media/history_csirodata61_logo.jpeg"

import { createHyperlink } from "../utils"

export default function History() {
	return (
		<>
			<h1>Experience</h1>
			<div className="row entry history">
				<div className="time">2023</div>
				<div className="company-logo">
					<div class="entry-dot"></div>
					{createHyperlink(
						"https://www.aervision.com/",
						<img src={aervisionLogo} alt="AerVision logo" />
					)}
				</div>
				<div className="description">
					<h5>
						<b>Software Engineer at AerVision</b>
					</h5>
					<p>
						I'm in charge of maintaining and expanding both the system's{" "}
						<b>React</b> front-end and <b>Express.js API</b> capability while following{" "}
						<b>OpenAPI</b> specifications to facilitate third-party integration.
					</p>
					<p>
						Carried out multiple <b>AWS deployments</b> for the production API.{" "}
					</p>
					<p>
						Worked together with Senior Engineers to <b>architect</b> the flow
						of information between the Express API and React client and to
						implement new features.
					</p>
					<p>
						Headed up <b>TypeScript and React</b> best practice documentation to
						increase collaboration and maintainability in the codebases.{" "}
					</p>
					<p>
						Ensured outcomes are at the highest quality, including collaborating
						with Quality Assurance analysts to fix bugs and implement security
						patches.{" "}
					</p>
					<p>
						{" "}
						Integrated <b>Jest and Mocha</b> testing suites for the API to
						prevent new changes breaking old features, and unit tested important
						functions and processes of the application, with a coverage goal of
						<b>{" >"}90%</b>.
					</p>
				</div>
			</div>
			{/* 
			<div className="row entry history">
				<div className="time">2023</div>
				<div className="company-logo">
					<div class="entry-dot"></div>
					{createHyperlink(
						"https://www.qut.edu.au/",
						<img src={qutLogo} alt="qut logo" />
					)}
				</div>
				<div className="description">
					<h5>Research Assistant at QUT</h5>
					<p>
						Implemented, benchmarked and analysed performance of different YOLO
						models in a novel sport setting.
					</p>
				</div>
			</div>

			<div className="row entry history">
				<div className="time">2023</div>
				<div className="company-logo">
					<div class="entry-dot"></div>
					{createHyperlink(
						"https://www.qut.edu.au/",
						<img src={qutLogo} alt="qut logo" />
					)}
				</div>
				<div className="description">
					<h5>Sessional Tutor at QUT</h5>
					<p>
						Delivered comprehensive knowledge of IFB102 – Intro to Computer
						Systems – to 2 classes of 25 students each, covering Hardware,
						Operating Systems, Cloud, Security, Raspberry Pi OS, etc. Did my
						best to deliver the content in interesting and practical way.
					</p>
				</div>
			</div> */}

			<div className="row entry history">
				<div className="time">2023</div>
				<div className="company-logo">
					<div class="entry-dot"></div>
					{createHyperlink(
						"https://www.qut.edu.au/",
						<img src={qutLogo} alt="qut logo" />
					)}
				</div>
				<div className="description">
					<h5>Sessional Tutor at QUT</h5>
				</div>
			</div>

			<div className="row entry history">
				<div className="time">2022 - 2023</div>
				<div className="company-logo">
					<div class="entry-dot"></div>
					{createHyperlink(
						"https://www.csiro.au/",
						<img src={csirodata61Logo} alt="csiro-data61 logo" />
					)}
				</div>

				<div className="description">
					<h5>
						<b>Vacation Researcher at CSIRO's Data61</b>
					</h5>
					<p></p>
					<p>
						I spearheaded an independent research, evaluating and selecting
						optimal <b>C++ ML libraries</b> for an <b>EdgeAI</b> project.{" "}
					</p>
					<p>
						Achieved an <b>8x reduction</b> in memory consumption of the ML model by
						applying a novel training strategy that utilizes smaller loads of
						training datasets, significantly improving resource efficiency
						without compromising accuracy.{" "}
					</p>
					<p>
						Conducted a series of <b>exhaustive tests</b> on both Ubuntu and Raspberry
						Pi to ensure robust inter-device functionalities.
					</p>
					<p>
						{createHyperlink(
							"https://github.com/rodonguyen/examples/blob/csiro/playing/Rodo_CSIRO_Presentation.pdf",
							'View my Final Presentation here - "Towards Training Neural Networks on Micro-controllers"'
						)}
						.
					</p>
					<p>
						My advisors were{" "}
						{createHyperlink(
							"https://www.qut.edu.au/about/our-people/academic-profiles/g.ramachandran",
							"Dr Gowri Ramachandran"
						)}{" "}
						and{" "}
						{createHyperlink(
							"https://www.linkedin.com/in/sara-khalifa-3618bb94/",
							"Dr Sara Khalifa"
						)}{" "}
						whom I have the pleasure to work with.
					</p>
				</div>
			</div>

			<div className="row entry history">
				<div className="time">2022</div>
				<div className="company-logo">
					<div class="entry-dot"></div>
					{createHyperlink(
						"http://www.s23m.com/about/index.html",
						<img src={s23mLogo} alt="S23M logo" />
					)}
				</div>
				<div className="description">
					<h5>
						<b>Software Engineer at S23M</b>
					</h5>
					<p>
						In this Work-Integrated-Learning job, I efficiently developed the{" "}
						<b>Front-End</b> with modern look for executing CRUD operations to a health
						database using <b>React and MaterialUI</b>, resulting in a 6-sprint being
						delivered in 4 sprints.
					</p>
					<p>
						Implemented many core features which handle complicated queried data
						(following <b>FHIR</b> standard) and display results clearly in the
						Front-End, further enhancing the User Experience.
					</p>
					<p>
						Developed a highly-intuitive custom feature for video management
						software in <b>.NET</b>, resulting in <b>significantly shorter reaction time</b> for
						Emergency Events for a public transport client.
					</p>
				</div>
			</div>

			<div className="row entry history">
				<div className="time">2021 - 2022</div>
				<div className="company-logo">
					<div class="entry-dot"></div>
					{createHyperlink(
						"https://www.qut.edu.au/",
						<img src={qutLogo} alt="qut logo" />
					)}
				</div>
				<div className="description">
					<h5>Vacation Researcher at QUT</h5>
					<p>Won the{" "}
						{createHyperlink(
							"https://github.com/rodonguyen/vres_code_2021/tree/main/Documents/Final_Poster_2022",
							"Best Research Poster Award"
						)}. #python #data_analytics #cybersecurity
					</p>
				</div>
			</div>
			<div className="row entry history">
				<div className="time">2021</div>
				<div className="company-logo">
					<div class="entry-dot"></div>
					{createHyperlink(
						"https://www.qut.edu.au/",
						<img src={qutLogo} alt="qut logo" />
					)}
				</div>
				<div className="description">
					<h5>HiQ Concierge at QUT</h5>
				</div>
			</div>

			<div className="row entry history">
				<div className="time">2021</div>
				<div className="company-logo">
					<div class="entry-dot"></div>
					{createHyperlink(
						"https://www.facebook.com/vietqbrisbane/",
						<img src={vietqLogo} alt="VietQ logo" />
					)}
				</div>
				<div className="description">
					<h5>Secretary at VietQ - QUT Vietnamese Students Association</h5>
				</div>
			</div>

			<div className="row entry history">
				<div className="time">2021</div>
				<div className="company-logo">
					<div class="entry-dot"></div>
					{createHyperlink(
						"https://qutguild.com/about/qut-guild/",
						<img src={qutguildLogo} alt="qutguild logo" />
					)}
				</div>
				<div className="description">
					<h5>International Students Officer at QUT Guild</h5>
				</div>
			</div>
			{/* <div className="row entry history">
				<div className="time">2021 - 2022</div>
				<div className="company-logo">
					<div class="entry-dot"></div>
					{createHyperlink(
						"https://www.qut.edu.au/",
						<img src={qutLogo} alt="qut logo" />
					)}
				</div>
				<div className="description">
					<h5>Software Engineer Intern at QUT</h5>
					<p>
						[ Analysing the Effectiveness of Verifiable Python (a Python
						variant) for Software Cybersecurity ]
					</p>
					<p>
						I evaluated the effectiveness of Verifiable Python (vPython) for
						software cybersecurity by testing, improving it in the development
						environment and ensuring output consistency. Developed a completely
						new automated analysis pipeline (Bash Script and Python) that
						eliminated ~95% of manual work: executing the programs, analysing
						output, and recording results. Won the{" "}
						{createHyperlink(
							"https://github.com/rodonguyen/vres_code_2021/tree/main/Documents/Final_Poster_2022",
							"Best Research Poster Award"
						)}{" "}
						at the end of the program.
					</p>

					<p>
						Project supervised by{" "}
						{createHyperlink(
							"https://www.qut.edu.au/about/our-people/academic-profiles/g.ramachandran",
							"Dr Gowri Ramachandran"
						)}
						.
					</p>
				</div>
			</div>
			<div className="row entry history">
				<div className="time">2021</div>
				<div className="company-logo">
					<div class="entry-dot"></div>
					{createHyperlink(
						"https://www.qut.edu.au/",
						<img src={qutLogo} alt="qut logo" />
					)}
				</div>
				<div className="description">
					<h5>HiQ Concierge at QUT</h5>
					<p>
						I worked collaboratively to service our QUT students and the public
						for all of their university-related queries.
					</p>
				</div>
			</div>

			<div className="row entry history">
				<div className="time">2021</div>
				<div className="company-logo">
					<div class="entry-dot"></div>
					{createHyperlink(
						"https://www.facebook.com/vietqbrisbane/",
						<img src={vietqLogo} alt="VietQ logo" />
					)}
				</div>
				<div className="description">
					<h5>Secretary at VietQ - QUT Vietnamese Students Association</h5>
					<p>
						I promoted Vietnamese culture as a team through our exciting events,
						managed intermediate & long-term operations of the organisation
					</p>
				</div>
			</div>

			<div className="row entry history">
				<div className="time">2021</div>
				<div className="company-logo">
					<div class="entry-dot"></div>
					{createHyperlink(
						"https://qutguild.com/about/qut-guild/",
						<img src={qutguildLogo} alt="qutguild logo" />
					)}
				</div>
				<div className="description">
					<h5>International Students Officer at QUT Guild</h5>
					<p>
						I advocated for and assisted international students on a
						university-wide scale to ensure they have adequate conditions to
						thrive.
					</p>
				</div>
			</div> */}
		</>
	)
}
