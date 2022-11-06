// import {
//   CRow,
//   CCol,
//   CCard,
//   CCardImage,
//   CCardBody,
//   CCardTitle,
//   CCardText,
//   CButton,
// } from "@coreui/react";

// import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import rodoImage from "../media/Rodo.jpg";
import twitterPic from "../media/twitterPic.png";
import bittrackerPic from "../media/bittrackerPic.png";
import sentimentPic from "../media/sentimentPic.png";
import TwitterSpamDetectorModal from "../components/MyModals";
import createHyperlink from '../components/utils';


const projectContents = {
  1: {
    short: (
      <p>
        Led a team of 4 to design 4 separate <b>Machine Learning models</b> that
        can identify spam tweets with <b>{">"}95% accuracy</b> (LSTM,
        Transformer, SVM and Naive Bayes), provided insights into each model’s
        strengths and shortcomings
      </p>
    ),
    long: (
      <>
        <p>
          Led a team of 4 to design 4 separate <b>Machine Learning models</b>{" "}
          that can identify spam tweets with <b>{">"}95% accuracy</b> (LSTM,
          Transformer, SVM and Naive Bayes), provided insights into each model’s
          strengths and shortcomings&emsp;•&emsp;Evaluated the suitability for
          real world application and Naive Bayes was the winner due to its low
          training & inference time and high weighted-F1
          score&emsp;•&emsp;Further reduced the computation consumption by
          deeply analysing the dataset and removing uninformative features
          without impacting the accuracy
        </p>
      </>
    ),
  },
  2: {
    short: (
      <p>
        A cryptocurrency <b>trading bot</b> programmed in Python that
        theoretically brings +110% profit annually on average in a market cycle
        by utilising SuperTrend indicator.{" "}
        {createHyperlink(
          "https://www.linkedin.com/posts/rodonguyen_programming-datascience-dataanalytics-activity-6986635066823127040-TFcs?utm_source=share&utm_medium=member_desktop",
          "Read more in this blog"
        )}
      </p>
    ),
    long: (
      <>
        <p>
          A cryptocurrency <b>trading bot</b> programmed in Python that
          theoretically brings +110% profit annually on average in a market
          cycle by utilising SuperTrend indicator&emsp;•&emsp;
          {createHyperlink(
            "https://www.linkedin.com/posts/rodonguyen_programming-datascience-dataanalytics-activity-6986635066823127040-TFcs?utm_source=share&utm_medium=member_desktop",
            "Read more in this blog"
          )}
          &emsp;•&emsp;Maximised potential BitTracker risk-adjusted return by
          backtesting the algorithm on historical price data using Pandas and
          selecting the best configuration&emsp;•&emsp;I’m developing a User
          Interface with React for an intuitive backtest history review and bot
          operation
        </p>
      </>
    ),
  },
  3: {
    short: (
      <p>
        A web application applying <b>auto-scaling server</b> and{" "}
        <b>persistance services</b> that analyses keyword sentiment on Twitter
        using Twitter REST API
      </p>
    ),
    long: (
      <>
        <p>
          Built a React web application with a modern user interface that
          analyses keyword sentiment on Twitter using Twitter REST
          API&emsp;•&emsp;Implemented <b>auto-scaling server</b> using AWS EC2,
          Elastic Load Balancing and Auto Scaling stack to handle inconsistent
          usage&emsp;•&emsp;Reduced latency <b>by 10 times</b> by integrating{" "}
          <b>persistence services</b> (S3, Redis and ElastiCache)
        </p>
      </>
    ),
  },
};

const projectContentHandler = (projects, setProjects, target) => {
  if (projects.expandedTarget === "-1") {
    console.log("case 1");
    projects.expandedTarget = target;
    projects[target] = projectContents[target].long;
  } else if (projects.expandedTarget === target) {
    console.log("case 2");
    projects.expandedTarget = "-1";
    projects[target] = projectContents[target].short;
  } else if (
    projects.expandedTarget !== "-1" &&
    projects.expandedTarget !== target
  ) {
    console.log("case 3");
    projects[projects.expandedTarget] =
      projectContents[projects.expandedTarget].short; // Shorten the previous project
    projects[target] = projectContents[target].long; // Lengthen the clicked project
    projects.expandedTarget = target;
  }
  setProjects({ ...projects });
};



const Home = () => {
  // const mode = "light";   // For future dark/light mode
  const githubIconSvg = (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>View in GitHub</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
  );
  const [projects, setProjects] = useState({
    expandedTarget: "-1",
    1: projectContents["1"].short,
    2: projectContents["2"].short,
    3: projectContents["3"].short,
  });

  useEffect(() => {
    console.log("state changes");
  }, []);

  return (
    <>
      {/* content block 1: A little introduction */}
      <div className="container row introduction">
        <div className="portrait">
          <img
            src={rodoImage}
            width="291"
            height="387"
            loading="lazy"
            alt="Rodo"
          />
        </div>
        <div className="bio">
          <h1 className="xlarge text-align-left">Hello World!</h1>
          <p>
            I’m a motivated data scientist who loves to create data-driven
            products that bring value to users at scale. Equipped with a diverse
            skill set, from software development, data analysis to deep learning
            model design, I’m excited to take on new challenges.
          </p>
          <p>
            During my free time, I like to build pet projects where I put my
            skills or my recently acquired knowledge to practice. Don't forget
            to pay a visit to my{" "}
            <a
              href="https://github.com/rodonguyen"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            :)
          </p>
          <p>
            Besides doing hands-on work, I'm also a future-focus person who pays
            attention to the long-term plan. I have a strong analytical thinking
            mentality from working in research environments (QUT and CSIRO).
          </p>
          <p>#data #AI #software #blockchain</p>
        </div>
      </div>

      {/* content block 2: Projects */}
      <div className="background-color-2">
        <div className="container">
          <h1 className="xlarge text-align-left">Pet Projects</h1>
          <div className="project">
            <div className="ppicture">
              <img src={twitterPic} loading="lazy" alt="twitterPic" />
            </div>
            <div className="pdescription text-align-left">
              <h5>
                Spam Tweet Detector &ensp;{" "}
                {createHyperlink(
                  "https://github.com/rodonguyen/showcase_AI_ML",
                  githubIconSvg
                )}{" "}
                &ensp;
                <button
                  value="1"
                  onClick={(e) =>
                    projectContentHandler(projects, setProjects, e.target.value)
                  }
                >
                  Read More
                </button>
              </h5>
              {projects["1"]}
            </div>
          </div>

          <div className="project">
            <div className="ppicture">
              <img src={bittrackerPic} loading="lazy" alt="twitterPic" />
            </div>
            <div className="pdescription text-align-left">
              <h5>
                BitTracker &ensp;{" "}
                {createHyperlink(
                  "https://github.com/rodonguyen/BitTracker",
                  githubIconSvg
                )}{" "}
                &ensp;
                <button
                  value="2"
                  onClick={(e) =>
                    projectContentHandler(projects, setProjects, e.target.value)
                  }
                >
                  Read More
                </button>
              </h5>
              {projects["2"]}
            </div>
          </div>

          <div className="project">
            <div className="ppicture">
              <img src={sentimentPic} loading="lazy" alt="twitterPic" />
            </div>
            <div className="pdescription text-align-left">
              <h5>
                Twitter E-nalyst &ensp;{" "}
                {createHyperlink(
                  "https://github.com/rodonguyen/Twitter-E-nalyst",
                  githubIconSvg
                )}{" "}
                &ensp;
                <button
                  value="3"
                  onClick={(e) => {
                    projectContentHandler(
                      projects,
                      setProjects,
                      e.target.value
                    );
                  }}
                >
                  Read More
                </button>
              </h5>
              {projects["3"]}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <h1 className="xlarge text-align-left">Woww a publication!</h1>
      </div> 
      
      
      <h1 className="xlarge text-align-left">Pet projects</h1>
        <div className="row projects">
          <div className="card">
            <a href="https://www.youtube.com/watch?v=hx7BXih7zx8">
              <img src={twitterSpamDetection} alt="Project demo"></img>
            </a>
            <div className="text-align-left">
              <h5>Spam Tweet Detector</h5>
              Led a team of 4 to design 4 separate Machine Learning models that
              can identify spam tweets with {">"}95% accuracy (LSTM,
              Transformer, SVM and Naive Bayes), provided insights into each
              model’s strengths and shortcomings
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Read More
              </Button>
            </div>
          </div>

          <div className="card">
            <a href="https://www.youtube.com/watch?v=hx7BXih7zx8">
              <img src={twitterSpamDetection} alt="Project demo"></img>
            </a>
            <div className="text-align-left">
              <h5>BitTracker</h5>
              A cryptocurrency trading bot programmed in Python that theoretically brings +110% profit annually on average in a market cycle by utilising SuperTrend indicator.
            </div>
          </div>

          <div className="card">
            <a href="https://www.youtube.com/watch?v=hx7BXih7zx8">
              <img src={twitterSpamDetection} alt="Project demo"></img>
            </a>
            <div className="text-align-left">
              <h5>Spam Tweet Detector</h5>
              Identify spam Tweet with {">"}95% accuracy by using 4 different
              Machine Learning models: LSTM, Transformer, Naive Bayes and SVM
            </div>
          </div>
        </div> 
        

      */}
    </>
  );
};

export default Home;
