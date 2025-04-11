import qutguildLogo from "../../assets/history/history_qutguild_logo.png"
import vietqLogo from "../../assets/history/history_vietq_logo.jpg"
import qutLogo from "../../assets/history/history_qut_logo.jpeg"
import s23mLogo from "../../assets/history/history_s23m_logo.jpeg"
import aervisionLogo from "../../assets/history/history_aervision_logo.png"
import csirodata61Logo from "../../assets/history/history_csirodata61_logo.jpeg"
import dltxlogo from "../../assets/history/history_dltx_logo.png"
import cslogo from "../../assets/history/history_cs_logo.png"
import rodoResumePdf from "../../assets/resume/Rodo_resume.pdf"
import { Hyperlink } from "../../utils/utils"

export default function History() {
	return (
		<>
			<h1>What did I do since I'm 18yo? Good question...</h1>
			<p>
				Interesting opportunity? 👉🏽{" "}
				<a href={rodoResumePdf} download="Rodo_Resume">
					My Resume
				</a>
			</p>
			<br />

			<div className="row entry history">
				<div className="time">2023 - now</div>
				<div className="company-logo">
					<div className="entry-dot"></div>
					<Hyperlink href="https://www.dltx.io/">
						<img src={dltxlogo} alt="dltx labs logo" />
					</Hyperlink>
				</div>
				<div className="description">
					<h5>Software Engineer at DLTx Labs</h5>
				</div>
			</div>

			<div className="row entry history">
				<div className="time">2023 - now</div>
				<div className="company-logo">
					<div className="entry-dot"></div>
					<Hyperlink href="https://www.qut.edu.au/">
						<img src={qutLogo} alt="qut logo" />
					</Hyperlink>
				</div>
				<div className="description">
					<h5>Sessional Tutor at QUT</h5>
				</div>
			</div>

			<div className="row entry history">
				<div className="time">2023</div>
				<div className="company-logo">
					<div className="entry-dot"></div>
					<Hyperlink href="https://www.aervision.com/">
						<img src={aervisionLogo} alt="AerVision logo" />
					</Hyperlink>
				</div>
				<div className="description">
					<h5>Software Engineer at AerVision</h5>
				</div>
			</div>

			<div className="row entry history">
				<div className="time">2022 - 2023</div>
				<div className="company-logo">
					<div className="entry-dot"></div>
					<Hyperlink href="https://www.csiro.au/">
						<img src={csirodata61Logo} alt="csiro-data61 logo" />
					</Hyperlink>
				</div>

				<div className="description">
					<h5>Vacation Researcher at CSIRO's Data61</h5>
				</div>
			</div>

			<div className="row entry history">
				<div className="time">2022</div>
				<div className="company-logo">
					<div className="entry-dot"></div>
					<Hyperlink href="http://www.s23m.com/about/index.html">
						<img src={s23mLogo} alt="S23M logo" />
					</Hyperlink>
				</div>
				<div className="description">
					<h5>Software Engineer at S23M</h5>
				</div>
			</div>

			<div className="row entry history">
				<div className="time">2021 - 2022</div>
				<div className="company-logo">
					<div className="entry-dot"></div>
					<Hyperlink href="https://www.qut.edu.au/">
						<img src={qutLogo} alt="qut logo" />
					</Hyperlink>
				</div>
				<div className="description">
					<h5>Vacation Researcher at QUT</h5>
				</div>
			</div>
			<div className="row entry history">
				<div className="time">2021</div>
				<div className="company-logo">
					<div className="entry-dot"></div>
					<Hyperlink href="https://www.qut.edu.au/">
						<img src={qutLogo} alt="qut logo" />
					</Hyperlink>
				</div>
				<div className="description">
					<h5>HiQ Concierge at QUT</h5>
				</div>
			</div>

			<div className="row entry history">
				<div className="time">2021</div>
				<div className="company-logo">
					<div className="entry-dot"></div>
					<Hyperlink href="https://www.facebook.com/vietqbrisbane/">
						<img src={vietqLogo} alt="VietQ logo" />
					</Hyperlink>
				</div>
				<div className="description">
					<h5>Secretary at VietQ - QUT Vietnamese Students Association</h5>
				</div>
			</div>

			<div className="row entry history">
				<div className="time">2021</div>
				<div className="company-logo">
					<div className="entry-dot"></div>
					<Hyperlink href="https://qutguild.com/about/qut-guild/">
						<img src={qutguildLogo} alt="qutguild logo" />
					</Hyperlink>
				</div>
				<div className="description">
					<h5>International Students Officer at QUT Guild</h5>
				</div>
			</div>

			<div className="row entry history">
				<div className="time">2019 - 2020</div>
				<div className="company-logo">
					<div className="entry-dot"></div>
					<img src={cslogo} alt="customer service logo" />
				</div>
				<div className="description">
					<h5>Front of House Staff at KFC</h5>
					<h5>Kitchenhand at Hundred Acres Bar</h5>
				</div>
			</div>
		</>
	)
}
