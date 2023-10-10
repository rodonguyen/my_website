import qutguildLogo from '../../media/history_qutguild_logo.png';
import vietqLogo from '../../media/history_vietq_logo.jpg';
import qutLogo from '../../media/history_qut_logo.jpeg';
import s23mLogo from '../../media/history_s23m_logo.jpeg';
import aervisionLogo from '../../media/history_aervision_logo.png';
import csirodata61Logo from '../../media/history_csirodata61_logo.jpeg';

import { createHyperlink } from '../utils';

export default function History() {
	return (
		<>
			<p>
				Interesting opportunity? My Resume is {createHyperlink('/resume', 'here')}. Last
				updated 10/2023.
			</p>

			<h1>Career Summary</h1>
			<p>
				<ul>
					<li>
						A Computer Science Graduate passionate about top-notch technology, Machine
						Learning (ML) and building awesome software.
					</li>
					<li>
						Possess 1+ year of real-world experience in developing high-performance and
						maintainable software, integrating data analytics and ML.
					</li>
					<li>
						A fast learner with strong programming fundamentals and project management
						skills.
					</li>
				</ul>
			</p>

			<h1>Experience</h1>
			<div className='row entry history'>
				<div className='time'>2023 - now</div>
				<div className='company-logo'>
					<div class='entry-dot'></div>
					{createHyperlink(
						'https://www.aervision.com/',
						<img src={aervisionLogo} alt='AerVision logo' />
					)}
				</div>
				<div className='description'>
					<h5>Software Engineer at AerVision</h5>
					<p>
						Managed both backend and frontend development for the AerMeal Portal.
						Conducted research, implemented, and tested new features for AerVision
						products, including a new control panel and third-party app integration.
						Performed onsite software installations for clients.
					</p>
					<p>Technologies used: C#/.NET, Python/FastAPI, AWS/Lambda,S3,DynamoDB, VueJS</p>
				</div>
			</div>

			<div className='row entry history'>
				<div className='time'>2023</div>
				<div className='company-logo'>
					<div class='entry-dot'></div>
					{createHyperlink(
						'https://www.qut.edu.au/',
						<img src={qutLogo} alt='qut logo' />
					)}
				</div>
				<div className='description'>
					<h5>Research Assistant at QUT</h5>
					<p>
						Implemented, benchmarked and analysed performance of different YOLO models
						in a novel sport setting.
					</p>
				</div>
			</div>

			<div className='row entry history'>
				<div className='time'>2023</div>
				<div className='company-logo'>
					<div class='entry-dot'></div>
					{createHyperlink(
						'https://www.qut.edu.au/',
						<img src={qutLogo} alt='qut logo' />
					)}
				</div>
				<div className='description'>
					<h5>Sessional Academic aka. Tutor at QUT</h5>
					<p>
						Delivered comprehensive knowledge of IFB102 – Intro to Computer Systems – to
						2 classes of 25 students each, covering Hardware, Operating Systems, Cloud,
						Security, Raspberry Pi OS, etc. Did my best to deliver the content in
						interesting and practical way.
					</p>
				</div>
			</div>

			<div className='row entry history'>
				<div className='time'>2022 - 2023</div>
				<div className='company-logo'>
					<div class='entry-dot'></div>
					{createHyperlink(
						'https://www.csiro.au/',
						<img src={csirodata61Logo} alt='csiro-data61 logo' />
					)}
				</div>

				<div className='description'>
					<h5>Vacation Researcher at CSIRO's Data61</h5>
					<p>[ Towards Training Neural Networks on Micro-controllers ]</p>
					<p>
						I single-handedly explored and evaluated suitable C++ machine learning
						libraries for a new EdgeAI & Computer Vision project, and implemented some
						prototypes to demonstrate to my supervisors. I optimised ML model’s memory
						consumption by x8 times by utilising smaller loads of training dataset. Drew
						a viable “Deployment" plan for the future team.{' '}
						{createHyperlink(
							'https://github.com/rodonguyen/examples/blob/csiro/playing/Rodo_CSIRO_Presentation.pdf',
							'View my Final Presentation here'
						)}
						.
					</p>
					<p>
						My advisors were{' '}
						{createHyperlink(
							'https://www.qut.edu.au/about/our-people/academic-profiles/g.ramachandran',
							'Dr Gowri Ramachandran'
						)}{' '}
						and{' '}
						{createHyperlink(
							'https://www.linkedin.com/in/sara-khalifa-3618bb94/',
							'Dr Sara Khalifa'
						)}{' '}
						whom I have the pleasure to work with.
					</p>
				</div>
			</div>

			<div className='row entry history'>
				<div className='time'>2022</div>
				<div className='company-logo'>
					<div class='entry-dot'></div>
					{createHyperlink(
						'http://www.s23m.com/about/index.html',
						<img src={s23mLogo} alt='S23M logo' />
					)}
				</div>
				<div className='description'>
					<h5>Software Engineer at S23M</h5>
					<p>
						I built an {createHyperlink('https://github.com/rodonguyen/roma', 'App')}{' '}
						with a minimal yet, modern User Interface for an international health
						organisation to interact with its health data server
						(Create-Read-Update-Delete). Utilised React, NodeJS, AgGrid, Bootstrap.
						Programmed many core features of the app. Led a 4-person team and acted as a
						bridge between dev team and the product owner. Constructed detailed
						onboarding documentation and tutorials,
					</p>
				</div>
			</div>

			<div className='row entry history'>
				<div className='time'>2021 - 2022</div>
				<div className='company-logo'>
					<div class='entry-dot'></div>
					{createHyperlink(
						'https://www.qut.edu.au/',
						<img src={qutLogo} alt='qut logo' />
					)}
				</div>
				<div className='description'>
					<h5>Software Engineer Intern at QUT</h5>
					<p>
						[ Analysing the Effectiveness of Verifiable Python (a Python variant) for
						Software Cybersecurity ]
					</p>
					<p>
						I evaluated the effectiveness of Verifiable Python (vPython) for software
						cybersecurity by testing, improving it in the development environment and
						ensuring output consistency. Developed a completely new automated analysis
						pipeline (Bash Script and Python) that eliminated ~95% of manual work:
						executing the programs, analysing output, and recording results. Won the{' '}
						{createHyperlink(
							'https://github.com/rodonguyen/vres_code_2021/tree/main/Documents/Final_Poster_2022',
							'Best Research Poster Award'
						)}{' '}
						at the end of the program.
					</p>

					<p>
						Project supervised by{' '}
						{createHyperlink(
							'https://www.qut.edu.au/about/our-people/academic-profiles/g.ramachandran',
							'Dr Gowri Ramachandran'
						)}
						.
					</p>
				</div>
			</div>
			<div className='row entry history'>
				<div className='time'>2021</div>
				<div className='company-logo'>
					<div class='entry-dot'></div>
					{createHyperlink(
						'https://www.qut.edu.au/',
						<img src={qutLogo} alt='qut logo' />
					)}
				</div>
				<div className='description'>
					<h5>HiQ Concierge at QUT</h5>
					<p>
						I worked collaboratively to service our QUT students and the public for all
						of their university-related queries.
					</p>
				</div>
			</div>

			<div className='row entry history'>
				<div className='time'>2021</div>
				<div className='company-logo'>
					<div class='entry-dot'></div>
					{createHyperlink(
						'https://www.facebook.com/vietqbrisbane/',
						<img src={vietqLogo} alt='VietQ logo' />
					)}
				</div>
				<div className='description'>
					<h5>Secretary at VietQ - QUT Vietnamese Students Association</h5>
					<p>
						I promoted Vietnamese culture as a team through our exciting events, managed
						intermediate & long-term operations of the organisation
					</p>
				</div>
			</div>

			<div className='row entry history'>
				<div className='time'>2021</div>
				<div className='company-logo'>
					<div class='entry-dot'></div>
					{createHyperlink(
						'https://qutguild.com/about/qut-guild/',
						<img src={qutguildLogo} alt='qutguild logo' />
					)}
				</div>
				<div className='description'>
					<h5>International Students Officer at QUT Guild</h5>
					<p>
						I advocated for and assisted international students on a university-wide
						scale to ensure they have adequate conditions to thrive.
					</p>
				</div>
			</div>
		</>
	);
}
