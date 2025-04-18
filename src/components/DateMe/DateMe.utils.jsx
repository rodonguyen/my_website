/** Add leading zeros to a number*/
function addLeadingZeros(number, size = 2) {
	number = number.toString()
	while (number.length < size) number = '0' + number
	return number
}

/** Format timeLeft */
export function formatTimeLeft(timeLeftInSeconds) {
	timeLeftInSeconds = timeLeftInSeconds - 1
	const hours = addLeadingZeros(Math.floor(timeLeftInSeconds / (60 * 60)))
	const minutes = addLeadingZeros(Math.floor(timeLeftInSeconds / 60) % 60)
	const seconds = addLeadingZeros(timeLeftInSeconds % 60)

	const timeLeftInString = `${hours}h:${minutes}m:${seconds}s`
	return timeLeftInString
}

/** Calculate 'timeLeft' for the 'code' */
export function calculateTimeLeftInSeconds(firstAccessTime, milisecondsGivenTillExpiration) {
	const startDatetime = new Date(firstAccessTime).getTime()
	// console.log(startDatetime)
	const now = new Date().getTime()
	const difference = startDatetime + milisecondsGivenTillExpiration - now

	// Stop calculating if time out
	if (difference <= 0) {
		// Could add code to direct to homepage immediately after code is expired but
		// user are allowed send their response if they keep staying in the webpage.
		// The server does not have the logic to block expired code from sending response anyway.
		return 0
	}
	const timeLeftInSeconds = Math.floor(new Date().setTime(difference) / 1000)
	return timeLeftInSeconds
}
