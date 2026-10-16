import type { CaptureOptions, EventName, PostHog, Properties } from 'posthog-js'

const posthogKey = import.meta.env.VITE_POSTHOG_KEY
const posthogHost = import.meta.env.VITE_POSTHOG_HOST

if (!posthogKey) {
	if (import.meta.env.DEV) {
		throw new Error(
			'VITE_POSTHOG_KEY variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once VITE_POSTHOG_KEY is configured'
		)
	}
} else if (!posthogHost) {
	if (import.meta.env.DEV) {
		throw new Error(
			'VITE_POSTHOG_HOST variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once VITE_POSTHOG_HOST is configured'
		)
	}
}

type CaptureArgs = [event: EventName, properties?: Properties | null, options?: CaptureOptions]

let client: PostHog | null = null
// Events fired before posthog-js finishes loading are replayed in order once it is ready.
const pending: Array<() => void> = []

export function capture(...args: CaptureArgs) {
	if (client) {
		client.capture(...args)
		return
	}
	pending.push(() => client?.capture(...args))
}

async function load() {
	if (!posthogKey || !posthogHost) return

	const { default: posthog } = await import('posthog-js')
	posthog.init(posthogKey, {
		api_host: posthogHost,
		defaults: '2026-05-30',
		capture_exceptions: {
			capture_unhandled_errors: true,
			capture_unhandled_rejections: true,
			capture_console_errors: false
		}
	})
	client = posthog
	pending.splice(0).forEach((replay) => replay())
}

// Load analytics after the page is idle so posthog-js stays off the critical path.
if (posthogKey && posthogHost) {
	const schedule: IdleRequestCallback = () => {
		void load()
	}
	if (typeof window.requestIdleCallback === 'function') {
		window.requestIdleCallback(schedule, { timeout: 2000 })
	} else {
		window.setTimeout(schedule, 1)
	}
}

const posthog = { capture }

export default posthog
