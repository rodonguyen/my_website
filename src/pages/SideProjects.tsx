import React from 'react'
import { FaGithub } from 'react-icons/fa6'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { changeWindowTitle, Hyperlink } from '../utils/utils'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import posthog from '../posthog'
import { GITHUB_HREF } from '../components/SocialIcons'

interface Project {
	analyticsId: string
	titleKey: string
	descriptionKey: string
	mediaUrl?: string
	mediaType: 'image' | 'video' | 'gif' | 'icon'
	liveUrl?: string
	githubUrl?: string
}

const projects: Project[] = [
	{
		analyticsId: 'lucius_capital',
		titleKey: 'apps.projects.luciusCapital.title',
		descriptionKey: 'apps.projects.luciusCapital.description',
		liveUrl: 'https://lucius.capital/',
		mediaUrl: 'luciuscapital.png',
		mediaType: 'image'
	},
	{
		analyticsId: 'time_i_have_left',
		titleKey: 'apps.projects.timeIHaveLeft.title',
		descriptionKey: 'apps.projects.timeIHaveLeft.description',
		mediaUrl: 'timeihaveleft.jpg',
		mediaType: 'image',
		liveUrl: '/apps/timeihaveleft',
		githubUrl: 'https://github.com/rodonguyen/my_website/blob/master/src/pages/TimeIHaveLeft.tsx'
	},
	{
		analyticsId: 'brisbane_parking_finder',
		titleKey: 'apps.projects.brisbaneParkingFinder.title',
		descriptionKey: 'apps.projects.brisbaneParkingFinder.description',
		mediaType: 'icon',
		liveUrl: 'https://brisbane-parking-finder.netlify.app/'
	}
]

const getMediaPath = (mediaUrl: string) => new URL(`../assets/apps/${mediaUrl}`, import.meta.url).href

const SideProjects: React.FC = () => {
	const { t } = useTranslation()
	changeWindowTitle('/apps')

	return (
		<div className="container mx-auto py-8">
			<h1 className="h1 text-center">{t('apps.pageTitle')}</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{projects.map((project) => (
					<article key={project.analyticsId} className="project-card">
						<div className="project-card__media">
							{project.mediaType === 'image' && (
								<img
									src={getMediaPath(project.mediaUrl ?? '')}
									alt=""
									className="project-card__image"
									loading="lazy"
								/>
							)}
							{project.mediaType === 'video' && (
								<video
									controls
									src={getMediaPath(project.mediaUrl ?? '')}
									className="project-card__image"
									preload="metadata"
								>
									Your browser does not support the video tag.
								</video>
							)}
							{project.mediaType === 'gif' && (
								<img src={getMediaPath(project.mediaUrl ?? '')} alt="" className="project-card__image" />
							)}
							{project.mediaType === 'icon' && (
								<div className="project-card__media-well">
									<FaMapMarkedAlt aria-hidden="true" />
								</div>
							)}
						</div>
						<h2 className="project-card__title">{t(project.titleKey)}</h2>
						<p className="project-card__excerpt">{t(project.descriptionKey)}</p>
						<div className="project-card__actions">
							{project.liveUrl && (
								<Link
									to={project.liveUrl}
									className="project-card__cta project-card__cta--primary"
									onClick={() => posthog.capture('project_opened', { project: project.analyticsId, link_type: 'live' })}
								>
									{t('apps.checkItOut')}
								</Link>
							)}
							{project.githubUrl && (
								<Hyperlink
									href={project.githubUrl}
									className="project-card__cta"
									onClick={() => posthog.capture('project_opened', { project: project.analyticsId, link_type: 'github' })}
								>
									<FaGithub aria-hidden="true" />
									{t('apps.github')}
								</Hyperlink>
							)}
						</div>
					</article>
				))}
				<Hyperlink
					href={GITHUB_HREF}
					className="project-card"
					onClick={() => posthog.capture('project_opened', { project: 'github_profile', link_type: 'github' })}
				>
					<div className="project-card__media">
						<div className="project-card__media-well">
							<FaGithub aria-hidden="true" />
						</div>
					</div>
					<h2 className="project-card__title">{t('apps.githubCardTitle')}</h2>
					<p className="project-card__excerpt">{t('apps.githubCardDescription')}</p>
					<div className="project-card__actions">
						<span className="project-card__cta">
							<FaGithub aria-hidden="true" />
							{t('apps.github')}
						</span>
					</div>
				</Hyperlink>
			</div>
		</div>
	)
}

export default SideProjects
