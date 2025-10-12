import React from 'react'
import { FaLinkedin, FaInstagram, FaThreads, FaEnvelope, FaYoutube, FaXTwitter, FaTiktok } from 'react-icons/fa6'

const SocialIcons: React.FC = () => {
	return (
		<>
			<a
				href="https://instagram.com/rodo.nguyen"
				target="_blank"
				rel="noopener noreferrer"
				className="text-2xl hover:text-rose-500 transition-colors duration-200"
			>
				<FaInstagram />
			</a>
			<a
				href="https://www.tiktok.com/@rodo.podcast"
				target="_blank"
				rel="noopener noreferrer"
				className="text-2xl hover:text-rose-500 transition-colors duration-200"
			>
				<FaTiktok />
			</a>
			<a
				href="https://threads.net/rodo.nguyen"
				target="_blank"
				rel="noopener noreferrer"
				className="text-2xl hover:text-rose-500 transition-colors duration-200"
			>
				<FaThreads />
			</a>
			<a href="mailto:rodonguyendd@gmail.com" className="text-2xl hover:text-rose-500 transition-colors duration-200">
				<FaEnvelope />
			</a>
			<a
				href="https://youtube.com/@rodo.podcast"
				target="_blank"
				rel="noopener noreferrer"
				className="text-2xl hover:text-rose-500 transition-colors duration-200"
			>
				<FaYoutube />
			</a>
			<a
				href="https://x.com/rodonguyen"
				target="_blank"
				rel="noopener noreferrer"
				className="text-2xl hover:text-rose-500 transition-colors duration-200"
			>
				<FaXTwitter />
			</a>
			<a
				href="https://www.linkedin.com/in/rodonguyen/"
				target="_blank"
				rel="noopener noreferrer"
				className="text-2xl hover:text-rose-500 transition-colors duration-200"
			>
				<FaLinkedin />
			</a>
		</>
	)
}

export default SocialIcons
