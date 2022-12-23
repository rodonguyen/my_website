// import { useParams } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import NotFound from "./NotFound";

const DateMe = () => {
  // const { code } = useParams();
  let [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  console.log(code);

  if (code === null || code === "") {
    return <NotFound />;
  }

  if (code !== null /* && valid code */) {
    return (
      <div className="container dateme text-align-left">
        <h1>
          If you're looking at this web page, I think you're really beautiful 🥰
        </h1>
        <br></br>

        <h5>Step 1: Get to know me</h5>

        <p>Who am I? I'm Rodo, a software engineer, QUT graduate.</p>
        <p>
          What do I like? I like coding & technology, travelling, outdoor
          activities: running, hiking, Vietnamese street coffee-ing,
          working-out, deep conversation, animals and plants, reading books, and
          females.
        </p>
        <p>
          How am I like? I'm 1.7m, 60kg, Asian born and raised, 5.5+in,
          introvert. I'm trying to gain some weights though.
        </p>
        <p>
          If you want to know more about what I do for a living, check{" "}
          <a href="/" target="_blank" rel="noopener noreferrer">
            the main page
          </a>{" "}
          and you can alway comeback here later with the exact link.
        </p>
        <br></br>

        <h5>Step 2: So... Date or no date, Now or never.</h5>
        <h5>Be careful, the button can only be clicked once!</h5>
        <p></p>
      </div>
    );
  }
  // return (
  //   {/* Check if code is valid in the database. If it is, display the form. Otherwise, */}

  //   {/* a form appear to input information, code to count down 60seconds, deactivate the code, some text after submission. */}

  // );
};

export default DateMe;
