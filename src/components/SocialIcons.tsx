import React from 'react'
import { FaLinkedin, FaInstagram, FaEnvelope, FaYoutube, FaXTwitter, FaGithub } from 'react-icons/fa6'
import { BsSubstack } from 'react-icons/bs'

const socialIconClass = 'text-2xl hover:text-rose-500 transition-colors duration-200'

const SocialIcons: React.FC = () => {
	return (
		<>
			<a href="https://x.com/rodonguyen" target="_blank" rel="noopener noreferrer" className={socialIconClass}>
				<FaXTwitter />
			</a>
			{/* SubStack */}
			<a href="https://rodo.substack.com" target="_blank" rel="noopener noreferrer" className={socialIconClass}>
				<BsSubstack />
			</a>
			<a href="https://instagram.com/rodo.nguyen" target="_blank" rel="noopener noreferrer" className={socialIconClass}>
				<FaInstagram />
			</a>
			<a href="https://github.com/rodonguyen/" target="_blank" rel="noopener noreferrer" className={socialIconClass}>
				<FaGithub />
			</a>
			<a
				href="https://www.linkedin.com/in/rodonguyen/"
				target="_blank"
				rel="noopener noreferrer"
				className={socialIconClass}
			>
				<FaLinkedin />
			</a>
			<a href="https://youtube.com/@rodo.podcast" target="_blank" rel="noopener noreferrer" className={socialIconClass}>
				<FaYoutube />
			</a>
			<a href="mailto:rodonguyendd@gmail.com" className={socialIconClass}>
				<FaEnvelope />
			</a>
			{/* TikTok paused
			<a href="https://www.tiktok.com/@rodo.podcast" target="_blank" rel="noopener noreferrer" className={socialIconClass}>
				<FaTiktok />
			</a>
			*/}
			{/* Threads paused
			<a href="https://threads.net/rodo.nguyen" target="_blank" rel="noopener noreferrer" className={socialIconClass}>
				<FaThreads />
			</a>
			*/}
		</>
	)
}

export default SocialIcons
