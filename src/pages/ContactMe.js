import { createHyperlink, changeWindowTitle } from "../components/utils"

const ContactMe = () => {
	changeWindowTitle(window.location.pathname)

	return (
		<div className="container contact-list">
			<h1 className="quote">"A stranger is a friend we haven't met."</h1>
			<p className="author text-align-right"> - a marketplace buyer</p>

			<ul className="text-align-left center">
				<li>Email: rodonguyendd at gmail.com </li>
				<li>
					{createHyperlink("https://twitter.com/rodonguyen", "X")} /{" "}
					{createHyperlink(
						"https://www.linkedin.com/in/rodonguyen/",
						"LinkedIn"
					)}{" "}
					/ {createHyperlink("https://github.com/rodonguyen/", "Github")}
				</li>
			</ul>
		</div>
	)
}

export default ContactMe
