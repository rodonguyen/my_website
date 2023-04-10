// import { useParams } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import { checkCode } from "../api/coolerdate.code";
import { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import { getAndSetProfile } from "../api/coolerdate.profile";
import { addRespondentFormToDatabase } from "../api/coolerdate.respondent";

import NotFound from "./NotFound";
import CoolerDateEndPage from "../components/CoolerDate/CoolerDateEndPage";
// import CoolerDateForm from "../components/CoolerDate/CoolerDateForm";
// import { Input, Button, Form, Label } from "reactstrap";

const DateMe = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  const [myCheckResult, setMyCheckResult] = useState(null);
  const [myProfile, setMyProfile] = useState(null);
  const [timeLeft, setTimeLeft] = useState("");
  const secondsLeftUntilCodeExpires = {value: 1}; // TODO: Timer does not work properly if I use an integer... Improve this later I guess

  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [profileContentArray, setProfileContent] = useState([]);
  const [first3SectionsFilled, setFirst3SectionsFilled] = useState(true);

  // let CDProgressFromLocalStorage = localStorage.getItem("CoolerDateProgress");
  const CDProgressFromLocalStorage = 0;
  const [CoolerDateProgress, setCoolerDateProgress] = useState(
    CDProgressFromLocalStorage || 0
  );
  const stage01 = 1,
    stage02 = 2,
    stage03 = 3;
  const milisecondsGivenTillExpiration = 72 * 60 * 60 * 1000; // 72 hours


  /** Handle sending new Respondent request and next actions with the page */
  async function sendHandler(event) {
    const sendResponse = await addRespondentFormToDatabase(
      "rodonguyen",
      code,
      event,
      setFirst3SectionsFilled
    );
    console.log(sendResponse);

    // Block the next step if sending the respondent form is unsuccessful
    if (!sendResponse.successful) {
      // TODO: Display prompt to send again
      console.log("Send unsuccessfully.");
      return;
    }

    // Update to stage 3: End Page
    // console.log('update to 3')
    setCoolerDateProgress(stage03);
  }

  // Check code's validity
  useEffect(
    function () {
      // Invalidate if code is empty string / null
      if (!code) {
        setIsLoading(false);
        return;
      }
      // Check the code from url
      checkCode(code, "rodonguyen", setMyCheckResult);
    },
    [code]
  );

  // Get profile content
  useEffect(
    function () {
      // console.log('myCheckResult:', myCheckResult.data)

      // Stop if myCheckResult is not received
      if (!myCheckResult) {
        return;
      }

      // Stop if code is invalid
      if (myCheckResult.data.isValid === false) {
        setIsLoading(false);
        return;
      }

      // Else,
      // Unlock Dateme Page
      setIsValid(true);
      setIsLoading(false);

      // Get profile information
      getAndSetProfile(
        myCheckResult.data.entry.username,
        myCheckResult.data.entry.profile,
        setMyProfile
      );
    },
    [myCheckResult]
  );

  // Update profile content
  useEffect(function () {
      if (!myProfile) return;
      // console.log(myProfile.data)
      setProfileContent(myProfile.data.entry.content);
    },
    [myProfile]
  );


  // Update timeLeft
  useEffect(function () {
    // Block if myCheckResult has not been received and updated
    if (!myCheckResult || myCheckResult.data.isValid === false) {
      console.log('Block update timeLeft.')
      return
    }

    /** Add leading zeros to a number*/
    function addLeadingZeros(number, size = 2) {
      number = number.toString();
      while (number.length < size) number = "0" + number;
      return number;
    }

    /** Format timeLeft */
    function formatTimeLeft(timeLeftInSeconds) {
      timeLeftInSeconds = timeLeftInSeconds - 1;
      const hours = addLeadingZeros(Math.floor(timeLeftInSeconds / (60 * 60)));
      const minutes = addLeadingZeros(Math.floor(timeLeftInSeconds / 60) % 60);
      const seconds = addLeadingZeros(timeLeftInSeconds % 60);

      const timeLeftInString = `${hours}h:${minutes}m:${seconds}s`;
      return timeLeftInString;
    }

    /** Calculate 'timeLeft' for the 'code' */ 
    function calculateTimeLeftInSeconds(firstAccessTime, milisecondsGivenTillExpiration){
      console.log(firstAccessTime)
      const startDatetime = new Date(firstAccessTime).getTime();
      const now = new Date().getTime();
      const difference = startDatetime + milisecondsGivenTillExpiration - now

      // Stop calculating if time out
      if (difference <= 0) {
        // Could add code to direct to homepage immediately after code is expired but  
        // user are allowed send their response if they keep staying in the webpage.
        // The server does not have the logic to block expired code from sending response anyway.
        console.log('difference <= 0')
        return 0
      }
      const timeLeftInSeconds = Math.floor(new Date().setTime(difference) / 1000);     
      return timeLeftInSeconds;
    }
    
    // Assign firstAccessTime a `Date` of 'now' if this is the first access time 
    // (i.e. myCheckResult.data.entry.firstAccessTime is `null`) 
    // const firstAccessTime = new Date()
    const firstAccessTime = myCheckResult.data.entry.firstAccessTime || new Date()

    secondsLeftUntilCodeExpires.value = calculateTimeLeftInSeconds(firstAccessTime, milisecondsGivenTillExpiration)
    const timeLeftInString = formatTimeLeft(secondsLeftUntilCodeExpires.value)
    
    const timer = setTimeout(() => {
      setTimeLeft(timeLeftInString);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [secondsLeftUntilCodeExpires, myCheckResult]);

  if (isLoading) return <Spinner/>;
  else if (!isValid) return <NotFound/>;
  else if (CoolerDateProgress === stage03) return <CoolerDateEndPage/>;
  else if (isValid) {
    return (
      <>
        <div className="container dateme text-align-left">
          <h1>
            If you're seeing this, I think you are absolutely beautiful 🥰
          </h1>

          {/* Section 1: Introduce myself */}
          <button
            onClick={function () {
              setCoolerDateProgress(stage01);
              // localStorage.setItem("CoolerDateProgress", "1");
            }}
            disabled={CoolerDateProgress >= stage01}
          >
            May I introduce myself? &ensp; [ Yes ]
          </button>

          {/* <Button> May I introduce myself? [ Yes ]</Button> */}

          {CoolerDateProgress >= stage01 &&
            <>
              {profileContentArray.map((element) => {
                return <p>{element}</p>;
              })}

              {/* Next button for Section 2 */}
              <button onClick={function () {
                  setCoolerDateProgress(stage02);
                  // localStorage.setItem("CoolerDateProgress", "2");
                }} disabled={CoolerDateProgress >= stage02}>
                Do you think we can have a date? &ensp; [ Yes ]
              </button>
            </>}

          {/* Section 2: Asking for dating information */}

          {CoolerDateProgress === stage02 &&
            <>
              <br></br>
              <br></br>
              <p>[ The code will be destroyed in {timeLeft} ]</p>
              <form onSubmit={(event) => {sendHandler(event)}}>
                <label for="name" required autofocus>Your name *</label><br></br>
                <input type="text" id="coolerdate" name="name" ></input><br></br>

                <label for="contact" required>Your contact *</label><br></br>
                <input type="text" id="coolerdate" name="contact" placeholder="Email is fine :)" ></input><br></br>

                <label for="bio" required>Something about you *</label><br></br>
                <input type="text" id="coolerdate" name="bio" ></input><br></br>

                <label for="ifact">Interesting facts not many people know about you</label><br></br>
                <input type="text" id="coolerdate" name="ifact"></input><br></br>

                <label for="place">An ideal first-date place? It can be general 
                  (e.g. cafe, dinner, river view, romantic atmosphere) or specific 
                  (e.g. ABC Restaurant)?</label><br></br>
                <input type="text" id="coolerdate" name="place"></input><br></br>

                <label for="dressing" >How do you want me to dress in our first date</label><br></br>
                <input type="text" id="coolerdate" name="dressing"></input><br></br>

                <label for="boyfriend">3 words to describe your desired boyfriend?</label><br></br>
                <input type="text" id="coolerdate" name="boyfriend"></input><br></br>

                <input type="submit" value="Send" ></input><br></br>

                {!first3SectionsFilled && (
                  <label className="fade">
                    Please fill the required sections (*) before sending
                  </label>
                )}
              </form>
            </>}
          <br></br>
        </div>
      </>
    );
  }
};

export default DateMe;
