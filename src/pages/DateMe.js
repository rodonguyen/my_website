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
  } else if (code !== null /* && valid code */) {
    return (
      <div className="container text-align-left">
        <h1>
          If you're looking at this web page, I think you're really beautiful
          🥰!!!
        </h1>
        <h5>
          Step 1: Get to know me. Only move to step 2 if you're ready to date
          me!
        </h5>
        <p>
          Who am I? I'm Rodo, QUT graduate, a software engineer. How am I like?
          I'm 1.7m, 60kg (I'm working on gaining some weights :), Asian born and
          raised, 5.9in, introvert. What do I like? I like my job, outdoor
          activities: running, hiking, street coffee-ing, working-out, deep
          conversation, basically all animals and plants, female, books. If you
          want to know more about what I do for a living, check{" "}
          <a href="/" target="_blank" rel="noopener noreferrer">
            this website
          </a>
          .
        </p>
        <h5>
          Step 2: Click the button below (Be careful, it can only be clicked
          once!)
        </h5>
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
