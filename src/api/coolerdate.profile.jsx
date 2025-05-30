import axios from 'axios'

// const apiUrl = process.env.REACT_APP_SERVER_PROFILE_ENDPOINT;
const apiUrl = ''

export const getAndSetProfile = async (username, profile, setResponse) => {
	if (profile === null || username === null) return false

	const fullUrl = `${apiUrl}findOne`
	const data = {
		username: username,
		profile: profile
	}

	const response = await axios
		.post(fullUrl, data)
		.then((res) => {
			// console.log(res)
			return res
		})
		.catch((err) => console.log(err))

	setResponse(response)
}
