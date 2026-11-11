import { useEffect } from 'react'
import { FaGithub, FaRegFilePowerpoint, FaRegComments, FaRegEnvelope } from 'react-icons/fa6'
import { Hyperlink } from '../utils/utils'
import posthog from '../posthog'

const Ickg26 = () => {
	useEffect(() => {
		document.title = 'ICKG 2026'
	}, [])

	return (
		<div className="container mx-auto max-w-2xl px-4 py-8">
			<h1 className="h1 text-center">ICKG 2026</h1>
			<div className="project-card">
				<ul className="flex flex-col gap-5">
					<li className="flex items-start gap-3">
						<FaRegComments aria-hidden="true" className="mt-1 shrink-0" />
						<div>
							<Hyperlink
								href="https://www.alphaxiv.org/abs/2609.08599"
								className="link font-semibold"
								onClick={() => posthog.capture('ickg26_link_opened', { link: 'paper' })}
							>
								Paper on alphaXiv
							</Hyperlink>
							<p className="text-base-content/70">Discussion welcomed</p>
						</div>
					</li>
					<li className="flex items-start gap-3">
						<FaGithub aria-hidden="true" className="mt-1 shrink-0" />
						<div>
							<Hyperlink
								href="https://github.com/icedpanda/awesome-personalized-graph-memory"
								className="link font-semibold"
								onClick={() => posthog.capture('ickg26_link_opened', { link: 'awesome_repo' })}
							>
								Awesome Personalized Graph Memory
							</Hyperlink>
							<p className="text-base-content/70">Curated reading list on GitHub</p>
						</div>
					</li>
					<li className="flex items-start gap-3">
						<FaRegFilePowerpoint aria-hidden="true" className="mt-1 shrink-0" />
						<div>
							<Hyperlink
								href="https://github.com/icedpanda/awesome-personalized-graph-memory/blob/main/slides/Graph-Based%20Personalized%20Memory%20for%20LLM%20Agents%20%E2%80%94%20ICKG%202026.pdf"
								className="link font-semibold"
								onClick={() => posthog.capture('ickg26_link_opened', { link: 'slides' })}
							>
								Conference slides
							</Hyperlink>
							<p className="text-base-content/70">PDF on GitHub</p>
						</div>
					</li>
					<li className="flex items-start gap-3">
						<FaRegEnvelope aria-hidden="true" className="mt-1 shrink-0" />
						<div>
							<span className="font-semibold">Reach out to me</span>
							<p className="text-base-content/70">rodonguyendd at gmail.com</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Ickg26
