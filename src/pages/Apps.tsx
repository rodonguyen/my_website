import React from 'react'
import { FaGithub } from 'react-icons/fa' // Import GitHub icon
// @ts-ignore
import { changeWindowTitle } from '../utils/utils'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// Define the structure for a project
interface Project {
	titleKey: string
	descriptionKey: string
	mediaUrl: string // Path relative to src/assets/apps/
	mediaType: 'image' | 'video' | 'gif'
	liveUrl?: string // Optional link to the live project
	githubUrl?: string // Optional link to the GitHub repository
}

// Hardcoded project data
const projects: Project[] = [
	{
		titleKey: 'apps.projects.luciusCapital.title',
		descriptionKey: 'apps.projects.luciusCapital.description',
		liveUrl: 'https://lucius.capital/',
		mediaUrl: 'luciuscapital.png',
		mediaType: 'image'
	},
	{
		titleKey: 'apps.projects.timeIHaveLeft.title',
		descriptionKey: 'apps.projects.timeIHaveLeft.description',
		mediaUrl: 'timeihaveleft.jpg',
		mediaType: 'image',
		liveUrl: '/apps/timeihaveleft',
		githubUrl: 'https://github.com/rodonguyen/my_website/blob/master/src/pages/TimeIHaveLeft.tsx'
	},
	{
		titleKey: 'apps.projects.favStop.title',
		descriptionKey: 'apps.projects.favStop.description',
		mediaUrl: 'favstop.jpg',
		mediaType: 'image',
		githubUrl: 'https://github.com/rodonguyen/fav-bus-stop'
	},
	{
		titleKey: 'apps.projects.bitTracker.title',
		descriptionKey: 'apps.projects.bitTracker.description',
		mediaUrl: 'bittracker.png',
		mediaType: 'image',
		// liveUrl: undefined, // No live URL for this one
		githubUrl: 'https://github.com/rodonguyen/bittracker2024' // Added GitHub URL
	}
]

// Helper function to get the full media path
const getMediaPath = (mediaUrl: string) => {
	// Vite handles static assets imported this way
	// Adjust the base path if your assets directory structure is different
	// This assumes your media files are directly inside src/assets/apps/
	// For dynamic imports with variables, Vite requires a specific pattern.
	// See: https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url
	// We might need to adjust this based on how assets are handled in your build.
	// A simpler approach for now might be putting assets in the `public` folder.
	try {
		// Attempting dynamic import - might need refinement for Vite
		return new URL(`../assets/apps/${mediaUrl}`, import.meta.url).href
	} catch (e) {
		console.error(`Error creating URL for ${mediaUrl}:`, e)
		return '' // Return empty string or a placeholder path on error
	}
}

const Apps: React.FC = () => {
	const { t } = useTranslation()
	changeWindowTitle('/apps')

	return (
		<div className="container  mx-auto py-8">
			<h1 className="h1 text-center">{t('apps.pageTitle')}</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{projects.map((project, index) => (
					<div key={index} className="card !rounded-[1rem] bg-base-100 shadow-xl">
						<figure className="px-4 pt-4">
							{project.mediaType === 'image' && (
								<img
									src={getMediaPath(project.mediaUrl)}
									alt={t(project.titleKey)}
									className="rounded-xl rounded-b-none object-cover h-48 w-full"
									loading="lazy"
								/>
							)}
							{project.mediaType === 'video' && (
								<video
									controls
									src={getMediaPath(project.mediaUrl)}
									className="rounded-xl object-cover h-48 w-full"
									preload="metadata" // Load only metadata initially
								>
									Your browser does not support the video tag.
								</video>
							)}
							{project.mediaType === 'gif' && (
								<img
									src={getMediaPath(project.mediaUrl)} // GIFs are treated like images
									alt={t(project.titleKey)}
									className="rounded-xl object-cover h-48 w-full"
								/>
							)}
						</figure>
						<div className="card-body items-center text-center">
							<h2 className="!card-title">{t(project.titleKey)}</h2>
							<p>{t(project.descriptionKey)}</p>
							<div className="card-actions mt-2 flex justify-center gap-2">
								{/* Live Project Button */}
								{project.liveUrl && (
									<Link to={project.liveUrl} className="btn btn-soft btn-primary">
										{t('apps.checkItOut')}
									</Link>
								)}
								{/* GitHub Button */}
								{project.githubUrl && (
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-" // Use a different style, e.g., secondary
									>
										<FaGithub />
										{t('apps.github')}
									</a>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Apps
