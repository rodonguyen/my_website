import { useEffect, useState } from "react"

/** Landing page after respondents send their answers
 *  Includes a thankyou note and a timer to redirect to homepage
 */
export default function CoolerDateEndPage() {
	/** Redirect to homepage */
	function redirect() {
		document.location.href = "/" // This still runs after user switches subpage
		clearInterval(interval)
	}

	const timeout = 10000 // ms
	const interval = setTimeout(redirect, timeout)
	const [secondsLeft, setSecondsLeft] = useState(timeout / 1000)

	// Update and Re-render seconds left each second

	useEffect(() => {
		const timer = setTimeout(() => {
			setSecondsLeft(secondsLeft - 1)
		}, 1000)

		return () => clearTimeout(timer)
	})

	return (
		<>
			<div className="container dateme text-align-left">
				<h1>Thanks! You just make my day 💙</h1>
				<p>I'll contact you soon!</p>
				<p>
					-- the code has been destroyed, direct to homepage in {secondsLeft}{" "}
					seconds. --
				</p>
			</div>
		</>
	)
}
