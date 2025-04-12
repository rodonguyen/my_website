import React, { useState, useEffect } from "react"
import { Hyperlink, changeWindowTitle } from "../utils/utils"
import lifebarAnnotationImage from "../assets/TimeIHaveLeft_Lifebar_annotation.jpg"
import "./TimeIHaveLeft.css"

interface TimeLeft {
	years: number
	months: number
	days: number
}

const TimeIHaveLeft = () => {
	changeWindowTitle(window.location.pathname)

	const [over100yoMessage, setOver100yoMessage] = useState("")
	const [percentage, setPercentage] = useState("")
	const [dob, setDob] = useState(new Date("2001-01-01"))
	const [timeLeft, setTimeLeft] = useState<TimeLeft>({
		years: 0,
		months: 0,
		days: 0
	})
	const [timeLeftMinus10Years, setTimeLeftMinus10Years] = useState<TimeLeft>({
		years: 0,
		months: 0,
		days: 0
	})
	const currentDate = new Date()
	const ASSUMED_LIFE_EXPECTANCY = 80

	/** Add a fun message if current age is over 100 years old. */
	const changeOver100Message = (monthsLeft: number) => {
		const percentage = (1 - monthsLeft / (ASSUMED_LIFE_EXPECTANCY * 12)) * 100

		if (percentage > 125) {
			setOver100yoMessage("(Looks like you're not human, dude!)")
		} else {
			setOver100yoMessage("")
		}
	}

	const calculatePercentage = (monthsLeft: number): string => {
		let percentage: number = (1 - monthsLeft / (ASSUMED_LIFE_EXPECTANCY * 12)) * 100
		percentage = Math.max(0, percentage)
		return percentage.toFixed(1)
	}

	const handleDobChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newDob: Date = new Date(event.target.value)
		setDob(newDob)
	}

	const calculateTotalMonths = (deathDate: Date, currentDate: Date): number => {
		const differenceInMonths =
			(deathDate.getFullYear() - currentDate.getFullYear()) * 12 +
			(deathDate.getMonth() - currentDate.getMonth())
		return differenceInMonths
	}

	const calculateTimeLeft = () => {
		// Calculate years, months, and days left
		const yearsLeft = ASSUMED_LIFE_EXPECTANCY - (currentDate.getFullYear() - dob.getFullYear())

		const deathDate = new Date(dob)
		deathDate.setFullYear(dob.getFullYear() + ASSUMED_LIFE_EXPECTANCY)
		const monthsLeft = calculateTotalMonths(deathDate, currentDate)

		const differenceMs = deathDate.getTime() - currentDate.getTime() // Calculate the difference in milliseconds
		const daysLeft = Math.floor(differenceMs / (1000 * 60 * 60 * 24))

		// Calculate % used
		const tempPercentage = calculatePercentage(monthsLeft)
		setPercentage(tempPercentage + "%")

		// Adjust the progress bar's width to reflect % used
		const progressBar = document.getElementById("life-progress")!
		progressBar.style.width = `${tempPercentage}%`

		changeOver100Message(monthsLeft)
		setTimeLeft({ years: yearsLeft, months: monthsLeft, days: daysLeft })
	}

	const calculateTimeLeftMinus10Years = () => {
		const yearsLeft = ASSUMED_LIFE_EXPECTANCY - 10 - (currentDate.getFullYear() - dob.getFullYear())

		const deathDate = new Date(dob)
		deathDate.setFullYear(dob.getFullYear() + (ASSUMED_LIFE_EXPECTANCY - 10))
		const monthsLeft = calculateTotalMonths(deathDate, currentDate)

		const differenceMs = deathDate.getTime() - currentDate.getTime()
		const daysLeft = Math.floor(differenceMs / (1000 * 60 * 60 * 24))

		setTimeLeftMinus10Years({ years: yearsLeft, months: monthsLeft, days: daysLeft })
	}

	useEffect(() => {
		calculateTimeLeft()
		calculateTimeLeftMinus10Years()
		// eslint-disable-next-line
	}, [dob])

	return (
		<div className="container">
			<h1>Time I Have Left</h1>
			<label htmlFor="dob">Your date of birth:</label>&ensp;
			<input
				type="date"
				name="dob"
				min="1900-01-01"
				max="2100-01-01"
				defaultValue="2001-01-01"
				onChange={handleDobChange}
				required
			/>
			<br></br>
			<>
				<p>
					If you can live up to 80 years old, assumingly don't get any genetec adjustments or have
					your body frozen, and survive through maybe a few more financial crises, social
					revolutions, artificial intelligent impact, cancers, epidemics, then...
				</p>
				<p>
					the amount of time you have left is: <br />
					<b>~{timeLeft.years} years</b> OR <br />
					<b>~{timeLeft.months} months</b> OR <br />
					<b>~{timeLeft.days} days </b> {over100yoMessage}
				</p>
				<p>
					Oh maybe minus the last 10 useless weak-ass years of your life as well, now you have{" "}
					<br />
					<b>~{timeLeftMinus10Years.years} years</b> OR <br />
					<b>~{timeLeftMinus10Years.months} months</b> OR <br />
					<b>~{timeLeftMinus10Years.days} days left.</b>
				</p>
				<p>
					Through this new len of looking at life expectancy, I hope you now think about your life a
					bit differently.{" "}
				</p>
				<p>Can I make you feel worse? Try with your parent's DoB.</p>
			</>
			{/* Progress bar */}
			<div className="lifebar-illustration-container">
				<div className="annotation-container">
					<img
						className="lifebar-annotation"
						src={lifebarAnnotationImage}
						alt="Life bar annotations"
					/>
				</div>
				<div className="lifebar-container">
					<div className="lifebar" id="life-progress">
						<div className="lifebar-text">{percentage}</div>
					</div>
				</div>
			</div>
			<h1>Resources you may need:</h1>
			<ul>
				<li>
					<Hyperlink href="https://youtu.be/gGLxPY3qDYY">
						"Một cuộc đời đáng sống (vietnamese) - Hieu Nguyen"
					</Hyperlink>
				</li>
				<li>
					<Hyperlink href="https://www.youtube.com/shorts/Wa7-n9j_ARM?feature=share">
						"Life advice for your 20s, 30s, 40s, 60s - Koskas"
					</Hyperlink>
				</li>
				<li>
					Eat healthy food and Exercise regularly, you may be able to delay aging 10 more years
				</li>
				<li>Suggestion? Send it to rodonguyendd@gmail.com</li>
			</ul>
		</div>
	)
}

export default TimeIHaveLeft
