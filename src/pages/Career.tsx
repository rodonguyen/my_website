import { changeWindowTitle, Hyperlink } from '../utils/utils'
import { rodoResumePdf } from '../assets/history'

const Career = () => {
	changeWindowTitle('/career')
	return (
		<div className="container mx-auto py-8 history">
			<h1 className="text-2xl mb-4">My career journey</h1>

			<ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
				<li>
					<div className="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="h-5 w-5"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="timeline-start mb-10 md:text-end">
						<time className="font-mono italic">2024 - now</time>
						<div className="text-lg font-black">Software Engineer</div>
						<Hyperlink href="https://codify.com/">Codify</Hyperlink>
						<div className="text-base-content/50">
							<a href={rodoResumePdf} download="Rodo_Resume">
								✏️ Current resume ✏️
							</a>
						</div>
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div className="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="h-5 w-5"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="timeline-end md:mb-10">
						<time className="font-mono italic">2023</time>
						<div className="text-lg font-black">Software Engineer</div>
						<Hyperlink href="https://dltx.io/">DLTX Labs</Hyperlink>
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div className="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="h-5 w-5"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="timeline-start mb-10 md:text-end">
						<time className="font-mono italic">2022</time>
						<div className="text-lg font-black">Vacation Researcher</div>
						<Hyperlink href="https://www.csiro.au/en/about/people/Business-units/Data61">
							CSIRO's Data61
						</Hyperlink>
						<div className="text-lg font-black mt-4">Software Engineer Intern</div>
						<Hyperlink href="https://s23m.com/">S23M</Hyperlink>
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div className="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="h-5 w-5"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="timeline-end md:mb-10">
						<time className="font-mono italic">2021</time>
						<div className="text-lg font-black">Vacation Researcher</div>
						<Hyperlink href="https://www.qut.edu.au/">QUT</Hyperlink>
						<div className="text-lg font-black mt-4">HiQ Concierge</div>
						<Hyperlink href="https://www.qut.edu.au/">QUT</Hyperlink>
						<div className="text-lg font-black mt-4">Vacation Researcher</div>
						<Hyperlink href="https://www.qut.edu.au/">QUT</Hyperlink>
						<div className="text-lg font-black mt-4">Secretary</div>
						<Hyperlink href="https://www.facebook.com/vietqbrisbane/">
							VietQ - QUT Vietnamese Students Association
						</Hyperlink>
						<div className="text-lg font-black mt-4">International Students Officer</div>
						<Hyperlink href="https://www.qutguild.com/">QUT Guild</Hyperlink>
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div className="timeline-middle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="h-5 w-5"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="timeline-start mb-10 md:text-end">
						<time className="font-mono italic">2019</time>
						<div className="text-lg font-black mt-4">Front of House Staff</div>
						<Hyperlink href="https://www.kfc.com.au/">KFC</Hyperlink>
						<div className="text-lg font-black mt-4">Kitchenhand</div>
						<div>Hundred Acres Bar</div>
					</div>
				</li>
			</ul>
		</div>
	)
}

export default Career
