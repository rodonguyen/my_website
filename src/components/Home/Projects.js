import twitterPic from "../../media/twitterPic.png";
import bittrackerPic from "../../media/bittrackerPic.png";
import sentimentPic from "../../media/sentimentPic.png";
import dvdsystemPic from "../../media/dvd_management_system.png";

import { useState } from "react";
import createHyperlink from "../utils";

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
          <ul>
            <li>
              Led a team of 4 to design 4 separate Machine Learning models that
              can identify spam tweets with <b>{">"}95% accuracy</b> (LSTM,
              Transformer, SVM and Naive Bayes), provided insights into each
              model’s strengths and shortcomings.
            </li>
            <li>
              Evaluated the suitability for real world application and Naive
              Bayes was the winner due to its low training & inference time and
              high weighted-F1 score.
            </li>
            <li>
              Further reduced the computation consumption by deeply analysing
              the dataset and removing uninformative features without impacting
              the accuracy.
            </li>
          </ul>
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
          <ul>
            <li>
              Programmed a <b>cryptocurrency trading bot</b> in Python that can
              guide retail investors to trade efficiently.
            </li>
            <li>
              BitTracker can theoretically bring +110% profit annually on
              average by utilising SuperTrend indicator.
            </li>
            <li>
              Intensively tested BitTracker to select the best configuration and
              maximise potential risk-adjusted return.
            </li>
            <li>
              Planning to incorporate Deep Learning for smarter trading strategy
              and build a User Interface for easier operation.
            </li>
          </ul>
        </p>
      </>
    ),
  },
  3: {
    short: (
      <p>
        A web application utilising <b>auto-scaling server</b> and{" "}
        <b>persistance services</b> that analyses per-keyword sentiment on
        Twitter using Twitter REST API
      </p>
    ),
    long: (
      <>
        <p>
          <ul>
            <li>
              Built a React web application with a modern user interface that
              analyses per-keyword sentiment on Twitter using Twitter REST API.
            </li>
            <li>
              Implemented <b>auto-scaling server</b> using AWS EC2, Elastic Load
              Balancing and Auto Scaling stack to handle inconsistent usage.
            </li>
            <li>
              Reduced latency <b>by 10 times</b> by integrating{" "}
              <b>persistence services</b> (S3, Redis and ElastiCache).
            </li>
          </ul>
        </p>
      </>
    ),
  },
  4: {
    short: (
      <p>
        A console application used to manage DVDs. It applys Object-Oriented
        Programming and various Search Algorithms, Data Structures to interact
        with the database.
      </p>
    ),
    long: (
      <>
        <p>
          <ul>
            <li>A console application used to manage DVDs using C#.</li>
            <li>
              It applys Object-Oriented Programming and various Search
              Algorithms (binary search), Data Structures (binary tree, array)
              to interact with the database.
            </li>
            <li>
              Followed common coding conventions (var names, space, indentation)
              and implemented maintainable, scalable code.
            </li>
          </ul>
        </p>
      </>
    ),
  },
};

const projectContentHandler = (projects, setProjects, target) => {
  if (projects.expandedTarget === "-1") {
    // console.log("case 1");
    projects.expandedTarget = target;
    projects[target] = projectContents[target].long;
  } else if (projects.expandedTarget === target) {
    // console.log("case 2");
    projects.expandedTarget = "-1";
    projects[target] = projectContents[target].short;
  } else if (
    projects.expandedTarget !== "-1" &&
    projects.expandedTarget !== target
  ) {
    // console.log("case 3");
    projects[projects.expandedTarget] =
      projectContents[projects.expandedTarget].short; // Shorten the previous project
    projects[target] = projectContents[target].long; // Lengthen the clicked project
    projects.expandedTarget = target;
  }
  setProjects({ ...projects });
};

const githubIconSvg = (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>View in GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export default function Projects() {
  const [projects, setProjects] = useState({
    expandedTarget: "-1",
    1: projectContents["1"].short,
    2: projectContents["2"].short,
    3: projectContents["3"].short,
    4: projectContents["4"].short,
  });

  return (
    <>
      <h1>Pet Projects</h1>
      <div className="project">
        {createHyperlink(
          "https://rodonguyen-spam-tweet-detector-app-app-ixl0vb.streamlit.app/",
          <div className="ppicture">
            <img src={twitterPic} loading="lazy" alt="twitterPic" />
          </div>
        )}
        <div className="description text-align-left">
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
              Expand
            </button>
            &ensp;
            {createHyperlink(
              "https://rodonguyen-spam-tweet-detector-app-app-ixl0vb.streamlit.app/",
              <button>Demo App</button>
            )}
          </h5>
          {projects["1"]}
        </div>
      </div>

      <div className="project">
        {createHyperlink(
          "https://www.linkedin.com/posts/rodonguyen_programming-datascience-dataanalytics-activity-6986635066823127040-TFcs?utm_source=share&utm_medium=member_desktop",
          <div className="ppicture">
            <img src={bittrackerPic} loading="lazy" alt="twitterPic" />
          </div>
        )}
        <div className="description text-align-left">
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
              Expand
            </button>
            &ensp;
            {createHyperlink(
              "https://www.linkedin.com/posts/rodonguyen_programming-datascience-dataanalytics-activity-6986635066823127040-TFcs?utm_source=share&utm_medium=member_desktop",
              <button>Read in Blog</button>
            )}
          </h5>
          {projects["2"]}
        </div>
      </div>

      <div className="project">
        {createHyperlink(
          "https://github.com/rodonguyen/Twitter-E-nalyst",
          <div className="ppicture">
            <img src={sentimentPic} loading="lazy" alt="twitterPic" />
          </div>
        )}
        <div className="description text-align-left">
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
                projectContentHandler(projects, setProjects, e.target.value);
              }}
            >
              Expand
            </button>
          </h5>
          {projects["3"]}
        </div>
      </div>

      <div className="project">
        {createHyperlink(
          "https://github.com/rodonguyen/DVD_management_system",
          <div className="ppicture">
            <img src={dvdsystemPic} loading="lazy" alt="twitterPic" />
          </div>
        )}
        <div className="description text-align-left">
          <h5>
            DVD Management System &ensp;{" "}
            {createHyperlink(
              "https://github.com/rodonguyen/DVD_management_system",
              githubIconSvg
            )}{" "}
            &ensp;
            <button
              value="4"
              onClick={(e) => {
                projectContentHandler(projects, setProjects, e.target.value);
              }}
            >
              Expand
            </button>
          </h5>
          {projects["4"]}
        </div>
      </div>
    </>
  );
}
