import React, { useState, useEffect } from 'react';

const TimeIHaveLeft = () => {
  const [dob, setDob] = useState(new Date("2001-01-01"));
	const [timeLeft, setTimeLeft] = useState({
		years: 0,
		months: 0,
		days: 0,
	});

  const handleDobChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDob = new Date(event.target.value);
    setDob(newDob);
  };

	const calculateTotalMonths = (deathDate: Date, currentDate: Date): number => {
    console.log(deathDate, dob)
		const differenceInMonths =
			(deathDate.getFullYear() - currentDate.getFullYear()) * 12 +
			(deathDate.getMonth() - currentDate.getMonth());
		return differenceInMonths;
	};

	const calculateTimeLeft = () => {
		const currentDate = new Date();
		const deathDate = new Date(dob);
		deathDate.setFullYear(dob.getFullYear() + 80);

		// Calculate the difference in milliseconds
		const differenceMs = deathDate.getTime() - currentDate.getTime();

		// Calculate years, months, and days left
		const yearsLeft = 80 - (currentDate.getFullYear() - dob.getFullYear());
		const monthsLeft = calculateTotalMonths(deathDate, currentDate);
		const daysLeft = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
    console.log(monthsLeft, daysLeft)

		setTimeLeft({ years: yearsLeft, months: monthsLeft, days: daysLeft });
	};

  useEffect(() => {
    calculateTimeLeft();
    // eslint-disable-next-line
  }, [dob]);

	return (
		<div className='container'>
			<h1>Time I Have Left</h1>
				<label htmlFor='dob'>Your date of birth:</label>&ensp;
				<input
					type='date'
					name='dob'
					min='1800-01-01'
					max='2100-01-01'
					defaultValue='2001-01-01'
          onChange={handleDobChange}
					required
				/>
				<br></br>

			{timeLeft.years > 0 && <><p>If you can live up to 80 years old, then...</p>
			<p>time amount you have left is: <b>~{timeLeft.years} years</b> OR <b>~{timeLeft.months} months</b> OR <b>~{timeLeft.days} days</b></p></>}
		</div>
	);
};

export default TimeIHaveLeft;
