// import { useParams } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import NotFound from "./NotFound";
import { checkCode } from "../api/coolerdate.code";
import { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import { getProfile } from "../api/coolerdate.profile";
import { addRespondentFormToDatabase } from "../api/coolerdate.respondant";

// import { Input, Button, Form, Label } from "reactstrap";

const DateMe = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  const [myCheckResult, setMyCheckResult] = useState(null);
  const [myProfile, setMyProfile] = useState(null);

  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [profileContent, setProfileContent] = useState([]);

  let CDProgressFromLocalStorage = localStorage.getItem("CoolerDateProgress");
  const [CoolerDateProgress, setCoolerDateProgress] = useState(CDProgressFromLocalStorage || 0);
  const threshold01 = 1,
    threshold02 = 2;

  // Check code's validity
  useEffect(
    function () {
      // Invalidate if code is empty string / null
      // console.log(code);
      if (!code) {
        setIsValid(false);
        setIsLoading(false);
        return
      }
      // Check the code from url
      checkCode(code, "rodonguyen", setMyCheckResult);
    },
    [code]
  );

  // Get profile content
  useEffect(
    function () {
      // console.log(myResponse)
      // console.log("myCheckResult", myCheckResult);
      
      if (!myCheckResult) {
        setIsValid(false);
        setIsLoading(false);
        return;
      }
      // Blocking point if code is invalid
      if (myCheckResult.data.isValid === false) {
        setIsLoading(false);
        return;
      }

      // Unlock Dateme Page
      setIsValid(true);
      setIsLoading(false);

      // Get profile information
      getProfile(
        myCheckResult.data.entry.username,
        myCheckResult.data.entry.profile,
        setMyProfile
      );
    },
    [myCheckResult]
  );

  // Update profile content
  useEffect(
    function () {
      if (!myProfile) return;
      setProfileContent(myProfile.data.entry.content);
    },
    [myProfile]
  );

  if (isLoading) return <Spinner />;
  else if (!isValid) return <NotFound />;
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
              setCoolerDateProgress(threshold01);
              localStorage.setItem("CoolerDateProgress", "1");
            }}
            disabled={CoolerDateProgress >= threshold01}
          >
            May I introduce myself? &ensp; [ Yes ]
          </button>

          {/* <Button> May I introduce myself? [ Yes ]</Button> */}

          {CoolerDateProgress >= threshold01 ? (
            <>
              {profileContent.map((element) => {
                return <p>{element}</p>;
              })}

              {/* Next button for Section 2 */}
              <button
                onClick={function () {
                  setCoolerDateProgress(threshold02);
                  localStorage.setItem("CoolerDateProgress", "2");
                }}
                disabled={CoolerDateProgress >= threshold02}
              >
                Do you think we can have a date? &ensp; [ Yes ]
              </button>
            </>
          ) : null}

          {/* Section 2: Asking for dating information */}

          {CoolerDateProgress >= threshold02 ? (
            <>
              <br></br>
              <br></br>
              <form onSubmit={addRespondentFormToDatabase} action={null}>
                <label for="name" required autofocus>Your name</label><br></br>
                <input type="text" id="coolerdate" name="name"></input><br></br>

                <label for="contact" required>Your contact </label><br></br>
                <input type="text" id="coolerdate" name="contact" placeholder="I'm happy with personal work email :)"></input><br></br>

                <label for="bio" required>Something about you</label><br></br>
                <input type="text" id="coolerdate" name="bio"></input><br></br>

                <label for="ifact" >Interesting fact about you that you don't usually tell people</label><br></br>
                <input type="text" id="coolerdate" name="ifact" placeholder="optional"></input><br></br>

                <label for="place" required>An ideal first-date place? It can be general (e.g. cafe, dinner, river view, romantic atmosphere) or specific (e.g. ABC Restaurant)?</label><br></br>
                <input type="text" id="coolerdate" name="place"></input><br></br>

                <label for="dressing" >How do you want me to dress in our first date</label><br></br>
                <input type="text" id="coolerdate" name="dressing" placeholder="optional"></input><br></br>

                <label for="boyfriend" required>3 words to describe your desired boyfriend?</label><br></br>
                <input type="text" id="coolerdate" name="boyfriend"></input><br></br>

                <input type="submit" value="Send"></input>
                
                {/* Display "Wow, thanksss... You make my day!" after the form is sent */}
              </form> 
            </>
          ) : null}

          {/* 
          Your name?
          Your contact? I'm happy with personal work email :)
          Something about you
          Interesting fact about you that you don't usually tell people (optional)
          An ideal first-date place? It can be general (e.g. cafe, dinner, river view, romantic atmosphere) or specific (e.g. ABC Restaurant)?
          How do you want me to dress in our first date? (optional) 

          Button
          */}

          <br></br>

          {/* <h5>Step 1: Get to know me</h5>

      <p>Who am I? I'm Rodo, a software engineer, QUT graduate.</p>
      <p>
        What do I like? I like coding & technology, travelling, outdoor
        activities: running, hiking, Vietnamese street coffee-ing, Asian food,
        working-out, deep conversation, animals and plants, reading books.
      </p>
      <p>
        How am I like? I'm 1.7m, 60kg, Asian born and raised, 5.5+in,
        introvert.
      </p>
      <p>
        Feel free to view my website's homepage / LinkedIn
        and you can alway comeback here later with the exact link.
      </p>
      <br></br>

      <h5>Step 2: So... Date or no date, Now or never.</h5>
      <h5>Be careful, the button can only be clicked once!</h5>
      <p></p> */}
        </div>
      </>
    );
  }
};

export default DateMe;
