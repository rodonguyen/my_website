const SUPABASE_URL = 'https://iawktiikpqpimecsjupn.supabase.co'
const BUCKET_NAME = 'hpny'

/**
 * Get public URLs for images stored in Supabase storage
 * @param {string[]} imageNames - Array of image filenames
 * @returns {string[]} Array of full public URLs
 */
export const getHpnyImageUrls = (imageNames) => {
	if (!imageNames || !Array.isArray(imageNames) || imageNames.length === 0) {
		return []
	}

	return imageNames.map((imageName) => {
		// Remove leading slash if present
		const cleanName = imageName.startsWith('/') ? imageName.slice(1) : imageName
		return `${SUPABASE_URL}/storage/v1/object/public/${BUCKET_NAME}/${cleanName}`
	})
}

/**
 * Preload images to improve performance
 * @param {string[]} imageUrls - Array of image URLs to preload
 * @returns {Promise<void[]>} Promise that resolves when all images are loaded
 */
export const preloadHpnyImages = async (imageUrls) => {
	if (!imageUrls || !Array.isArray(imageUrls) || imageUrls.length === 0) {
		return Promise.resolve()
	}

	const loadPromises = imageUrls.map((url) => {
		return new Promise((resolve, reject) => {
			const img = new Image()
			img.onload = () => resolve()
			img.onerror = () => reject(new Error(`Failed to load image: ${url}`))
			img.src = url
		})
	})

	return Promise.all(loadPromises)
}

/**
 * Get image URLs from image names and optionally preload them
 * @param {string[]} imageNames - Array of image filenames
 * @param {boolean} preload - Whether to preload the images (default: false)
 * @returns {Promise<string[]>} Promise that resolves to array of image URLs
 */
export const fetchHpnyImages = async (imageNames, preload = false) => {
	const urls = getHpnyImageUrls(imageNames)

	if (preload && urls.length > 0) {
		try {
			await preloadHpnyImages(urls)
		} catch (error) {
			console.warn('Some images failed to preload:', error)
		}
	}

	return urls
}
