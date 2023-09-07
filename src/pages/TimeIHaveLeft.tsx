import React, { useState } from "react";


const TimeIHaveLeft: React.FC = () => {
  const calculateDaysDifference = (inputDateString: string): number => {
    const currentDate = new Date();
    const inputDate = new Date(inputDateString);
    // Add 80 years - the expected life expectancy
    inputDate.setFullYear(inputDate.getFullYear() + 80);
    // Calculate the difference in milliseconds
    const differenceMs = inputDate.getTime() - currentDate.getTime();
    // Convert the difference to days
    const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
    return differenceDays;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Resource Link: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
    const target = event.target as typeof event.target & {dob: {value: string}}
    const daysDifference = calculateDaysDifference(target.dob.value)
    setDaysLeft(daysDifference)
  }
  
  const [daysLeft, setDaysLeft] = useState(calculateDaysDifference('2001-01-01'));
  
  return (
    <>
      <div className="container">

        <h1> Time I Have Left </h1> 
        <form onSubmit={handleSubmit}>
          <label htmlFor="dob">Your date of birth:</label>&ensp;
          <input type="date" name="dob" min="1800-01-01" max="2100-01-01" defaultValue='2001-01-01' required></input><br></br>
          <input type="submit" value="Calculate"></input><br></br>
        </form>

        <p>If you can live up to 80 years old, then...</p>
        <p>Days left: {daysLeft}</p>

      </div>
    </>
    );
  };
  
export default TimeIHaveLeft;