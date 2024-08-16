import React from "react"
import { Hyperlink, changeWindowTitle } from "../components/utils"
import "../stylesheets/ContactMe.css"

const ContactMe = () => {
	changeWindowTitle(window.location.pathname)

	return (
		<div className="container contact-list text-align-left">
			<h1 className="quote">"A stranger is a friend we haven't met."</h1>
			<p className="author text-align-right"> - a marketplace buyer</p>
			<br />
			<Hyperlink href="https://www.linkedin.com/in/rodonguyen/">LinkedIn</Hyperlink> /{" "}
			<Hyperlink href="https://twitter.com/rodonguyen">Twitter</Hyperlink> /{" "}
			<Hyperlink href="https://github.com/rodonguyen/">GitHub</Hyperlink> / rodonguyendd at gmail.com
		</div>
	)
}

export default ContactMe
