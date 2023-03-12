// import { useParams } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import NotFound from "./NotFound";
import { checkCode } from "../api/coolerdate.code";
import { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import { getProfile } from "../api/coolerdate.profile";

// import { Input, Button, Form, Label } from "reactstrap";

const DateMe = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [profileContent, setProfileContent] = useState([]);

  let CDProgressFromLS = localStorage.getItem("CDProgress");
  const [CDProgress, setCDProgress] = useState(CDProgressFromLS || 0);
  const threshold01 = 1,
    threshold02 = 2;

  // Check code's validity
  useEffect(
    async function () {
      const checkResponse = await checkCode(code);
      setIsLoading(false);
      console.log("checkResult", checkResponse.data);
      if (checkResponse.data.isValid === false) return;

      // Unlock Dateme Page
      setIsValid(true);

      // Render my profile description
      const profileResponse = await getProfile(
        checkResponse.data.entry.username,
        checkResponse.data.entry.profile
      );

      // Update profileContent using useState
      setProfileContent(profileResponse.data.entry.content);
    },
    [code]
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
              setCDProgress(threshold01);
              localStorage.setItem("CDProgress", "1");
            }}
            disabled={CDProgress >= threshold01}
          >
            May I introduce myself? &ensp; [ Yes ]
          </button>

          {/* <Button> May I introduce myself? [ Yes ]</Button> */}

          {CDProgress >= threshold01 ? (
            <>
              {profileContent.map((element) => {
                return <p>{element}</p>;
              })}
            </>
          ) : null}



          {/* Section 2: Asking for dating information */}
          <button
            onClick={function () {
              setCDProgress(threshold01);
              localStorage.setItem("CDProgress", "1");
            }}
            disabled={CDProgress >= threshold01}
          >
            Do you think we can have a date together? &ensp; [ Yes ]
          </button>

          {/* <Button> May I introduce myself? [ Yes ]</Button> */}

          {CDProgress >= threshold01 ? (
            <>
              {profileContent.map((element) => {
                return <p>{element}</p>;
              })}
            </>
          ) : null}
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
