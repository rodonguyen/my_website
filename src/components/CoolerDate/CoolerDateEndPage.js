import { useState } from "react";

/** Landing page after respondents send their answers
 *  Includes a thankyou note and a timer to redirect to homepage
 */
export default function CoolerDateEndPage() {

  /** Redirect to homepage */
  function redirect() {
    document.location.href = "/"; // This still runs after user switches subpage
    clearInterval(interval);
  }

  const timeout = 10000; // ms
  const interval = setTimeout(redirect, timeout);
  const [secondsLeft, setSecondsLeft] = useState(5);

  // Update and Re-render seconds left each second
  setInterval(() => {setSecondsLeft(secondsLeft - 1)}, 1000)

  return (
    <>
      <div className="container dateme text-align-left">
        <h1>Thank you! You just make my day 💙</h1>
        <p>Hope to see you soon!</p>
        <p>-- the code has been destroyed, direct to homepage in {secondsLeft} seconds. --</p>
      </div>
    </>
  );
}



