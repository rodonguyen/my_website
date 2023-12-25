import rodoResumePdf from "../media/Rodo_Nguyen.pdf"
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
		</div>
	)
}

export default Resume
