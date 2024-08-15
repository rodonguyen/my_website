import axios from "axios"

// const apiUrl = process.env.REACT_APP_SERVER_CODE_ENDPOINT;
const apiUrl = ""

export const checkCode = async (code, username = "rodonguyen", setResponse) => {
	if (code === null || code === "") return false

	const fullUrl = `${apiUrl}check`
	const data = {
		username: username,
		code: code
	}

	await axios({
		method: "post",
		url: fullUrl,
		data: data,
		timeout: 6000
	})
		.then((res) => {
			setResponse(res)
		})
		.catch((error) => {
			if (error.code === "ECONNABORTED") {
				console.error("Request timed out")
			}
			setResponse({ data: { isValid: false } })
			// console.log(error);
		})
}
