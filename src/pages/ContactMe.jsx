import React from "react"
import { createHyperlink, changeWindowTitle } from "../components/utils"
import "./ContactMe.css"

const ContactMe = () => {
	changeWindowTitle(window.location.pathname)

	return (
		<div className="container contact-list text-align-left">
			<div className="extra-padding">
				<h1 className="quote">"A stranger is a friend we haven't met."</h1>
				<p className="author text-align-right"> - a marketplace buyer</p>
				<br />
				{createHyperlink("https://www.linkedin.com/in/rodonguyen/", "LinkedIn")} /{" "}
				{createHyperlink("https://twitter.com/rodonguyen", "X")} /{" "}
				{createHyperlink("https://github.com/rodonguyen/", "Github")} / rodonguyendd at gmail.com
			</div>
		</div>
	)
}

export default ContactMe
