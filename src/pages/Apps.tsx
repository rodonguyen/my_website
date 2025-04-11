import React from "react"

// Define the structure for a project
interface Project {
	title: string
	description: string
	mediaUrl: string // Path relative to src/assets/apps/
	mediaType: "image" | "video" | "gif"
	projectUrl?: string // Optional link to live project or repo
}

// Hardcoded project data
const projects: Project[] = [
	// Add your project data here
	// Example:
	{
		title: "Fav Stop",
		description: "All your frequent bus stops in one place",
		mediaUrl: "../assets/apps/favstop.png", // Example: src/assets/apps/project-alpha.png
		mediaType: "image",
		projectUrl: "https://favstop.netlify.app/"
	},
	{
		title: "BitTracker",
		description: "Trade bitcoin algorithmically (Retired)",
		mediaUrl: "bittracker.png", // Example: src/assets/apps/project-beta.mp4
		mediaType: "image",
		projectUrl: "https://github.com/rodonguyen/bittracker2024"
	},
	{
		title: "Time I have left!",
		description: "Look at life from the 'percentage' perspective",
		mediaUrl: "timeihaveleft.png", // Example: src/assets/apps/project-gamma.gif
		mediaType: "image",
		projectUrl: "https://rodonguyen.dev/apps/timeihaveleft"
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
		return "" // Return empty string or a placeholder path on error
	}
}

const Apps: React.FC = () => {
	return (
		<div className="container mx-auto py-8">
			<h1 className="text-3xl font-bold mb-8 !text-center">My Amazing Apps</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{projects.map((project, index) => (
					<div key={index} className="card !rounded-[1rem] bg-base-100 shadow-xl">
						<figure className="px-4 pt-4">
							{project.mediaType === "image" && (
								<img
									src={getMediaPath(project.mediaUrl)}
									alt={project.title}
									className="rounded-xl rounded-b-none object-cover h-48 w-full"
									loading="lazy"
								/>
							)}
							{project.mediaType === "video" && (
								<video
									controls
									src={getMediaPath(project.mediaUrl)}
									className="rounded-xl object-cover h-48 w-full"
									preload="metadata" // Load only metadata initially
								>
									Your browser does not support the video tag.
								</video>
							)}
							{project.mediaType === "gif" && (
								<img
									src={getMediaPath(project.mediaUrl)} // GIFs are treated like images
									alt={project.title}
									className="rounded-xl object-cover h-48 w-full"
								/>
							)}
						</figure>
						<div className="card-body items-center text-center">
							<h2 className="!card-title">{project.title}</h2>
							<p>{project.description}</p>
							{project.projectUrl && (
								<div className="card-actions mt-2">
									<a
										href={project.projectUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-primary"
									>
										View Project
									</a>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Apps
