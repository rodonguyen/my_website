// import { useParams } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import NotFound from "./NotFound";
import { checkCode } from "../api/coolerdate.code";
import { useEffect, useState } from "react";
import { Spinner } from 'reactstrap';

const DateMe = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [profileContent, setProfileContent] = useState(['p1', 'p2', 'p3']);


  // Check code's validity
  useEffect(() => {
    checkCode(code).then((response) => {
      setIsLoading(false)
      console.log('checkCode response:', response.data); 
      if (response.data.isValid === false) return;
      
      // Unlock Dateme Page
      setIsValid(true) 
      // Render my profile description
      // get 'profile' code first
      // call getProfile
      // update profileContent using useState

    });
  }, [code]);


  // Fetch profile content
  // useEffect(() => {
  //   getProfileContent(profileCode).then((response) => {
  //     // console.log('checkCode response:', response.data); // for debugging
  //     // if (response.data.isValid === false)  {
  //     //   setIsValid(false)
  //     //   setIsLoading(false)
  //     // }
  //     // setProfileCode(response.data.profileCode)
  //   });
  // }, [profileCode]);


  
  if (isLoading) 
    return <Spinner/> 
  else if (!isValid) 
    return <NotFound/>
  else if (isValid) {
    return (<>
      <div className="container dateme text-align-left">
      {profileContent.map(element => {
        return (<p>{element}</p>)
      })}

      <h1>
        If you're seeing this, I think you're absolutely beautiful 🥰
      </h1>
      <br></br>

      <h5>Step 1: Get to know me</h5>

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
        About what I do, check 
        and you can alway comeback here later with the exact link.
      </p>
      <br></br>

      <h5>Step 2: So... Date or no date, Now or never.</h5>
      <h5>Be careful, the button can only be clicked once!</h5>
      <p></p>
      </div>
    </>);
  } 
};

export default DateMe;
