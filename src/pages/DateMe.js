// import { useParams } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import NotFound from "./NotFound";
import { checkCode } from "../api/coolerdate.code";
import { useEffect, useState } from "react";
import { Spinner } from 'reactstrap';

const DateMe = () => {
  // const { code } = useParams();
  let [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  let [isValid, setIsValid] = useState(false);
  let [isLoading, setIsLoading] = useState(true);
  // let [profileCode, setProfileCode] = useState(false);
  let [profileContent, setProfileContent] = useState(['p1_asjhfasi', 'p2_josaijfd', 'p3_ash']);

  


  // Check code's validity
  useEffect(() => {
    checkCode(code).then((response) => {

      setIsLoading(false)
      console.log('checkCode response:', response.data); // for debugging
      if (response.data.isValid === true) setIsValid(true) 
      // setProfileCode(response.data.profileCode)
      // setPageContent(datemeComponent)
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



  return (
    <>
      { isLoading && <Spinner/>}
      { !isValid 
      ? <NotFound/>
      :
        <>
          <div className="container dateme text-align-left">
          {profileContent.map(element => {
            return (<p>{element}</p>)
          })}
          <h1>
            If you're looking at this web page, I think you're really beautiful 🥰
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
            introvert. I'm trying to gain some weights though.
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
        </>
      } 
    </>

    
  );

  // return (
  //   {/* Check if code is valid in the database. If it is, display the form. Otherwise, */}

  //   {/* a form appear to input information, code to count down 60seconds, deactivate the code, some text after submission. */}

  // );
};

export default DateMe;
