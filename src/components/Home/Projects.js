import twitterImage from "../../media/project_twitterspam.png";
import bittrackerImage from "../../media/project_bittracker.png";
import sentimentImage from "../../media/project_sentiment.png";
import dvdsystemImage from "../../media/project_dvd_management_system.png";
import websiteImage from "../../media/project_website.png";
import coolerdateImage from "../../media/project_coolerdate.jpeg";

import { useState } from "react";
import createHyperlink from "../utils";

const project01Index = "1",
  project02Index = "2",
  project03Index = "3",
  project04Index = "4",
  project05Index = "5",
  project06Index = "6";

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
              Analysed each model’s strengths and shortcomings and evaluated the
              suitability for real-world application: Naive Bayes won due to its
              low training, inference time, and high weighted-F1.
            </li>
            <li>
              Further minimised the computation consumption and sped up training
              time by removing uninformative features while keeping the accuracy
              unaffected.
            </li>
          </ul>
        </p>
      </>
    ),
  },
  2: {
    short: (
      <p>
        A cryptocurrency <b>trading bot</b> that can auto-trade efficiently
        while guaranteeing minimal risk. Backtest results showed +110% profit
        annually on average utilising SuperTrend indicator.{" "}
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
              auto-trade efficiently while guaranteeing minimal risk.
            </li>
            <li>
              Backtest results showed +110% profit annually on average by
              utilising SuperTrend algorithm. This is made possible by
              programmatically and analytically assessing each configuration’s
              risk-adjusted return and profit/loss distribution.
            </li>
            <li>
              Applied OOP to facilitate maintainability and extensibility as a
              large number of features were integrated into the bot.
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
              generates keyword sentiment analysis on Twitter.
            </li>
            <li>
              Implemented scalable server using AWS EC2, Elastic Load Balancing
              and Auto Scaling stack to handle inconsistent usage, data were
              queried via Twitter API.
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
        A console application used to manage DVDs. It applies Object-Oriented
        Programming and various Search Algorithms, Data Structures to interact
        with the database.
      </p>
    ),
    long: (
      <>
        <p>
          <ul>
            <li>A console application used to manage DVDs built with C#.</li>
            <li>
              It applies Object-Oriented Programming and various Search
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
  5: {
    short: (
      <p>
        Programmed from scratch with React. Cutomised CSS to obtain
        responsiveness on any device (no Bootstrap). Of course, integrated Dark
        Mode to accommodate users with photophobia or simply prefer dark theme.
      </p>
    ),
    long: (
      <p>
        <ul>
          <li>
            Programmed and deployed my personal website from scratch with React.
          </li>
          <li>
            Cutomised CSS to obtain responsiveness on any device (no Bootstrap).
            Of course, integrated Dark Mode to accommodate users with
            photophobia or simply prefer dark theme.
          </li>
          <li>This project has broadened my knowledge of UI Design a lot.</li>
        </ul>
      </p>
    ),
  },
  6: {
    short: (
      <p>
        A full-stack application built to make “Asking someone out for a date”
        simpler and even more special. I applied MERN architecture, designed
        suitable database schemas, implemented a multitude of API endpoints and
        written fully automated unit tests.
      </p>
    ),
    long: (
      <p>
        <ul>
          <li>
            A unique full-stack app built to make “Asking someone out for a
            date” simpler and even more special.
          </li>
          <li>
            Applied MERN architecture (MongoDB, ExpressJS, React, NodeJS),
            implemented multi-step forms and a multitude of API endpoints, and
            utilised React Hooks (e.g., useMemo), all of which broaden my
            experience in Full-stack development, System Design, and Database
            Modeling.
          </li>
          <li>
            Fully automated server testing process by using Chai framework due
            to high level of complexity.
          </li>
        </ul>
      </p>
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
    5: projectContents["5"].short,
    6: projectContents["6"].short,
  });

  function createProjectEntry(
    name,
    projectIndex,
    githubURL,
    projectImage,
    extraButton = null
  ) {
    return (
      <div className="project">
        {createHyperlink(
          githubURL,
          <div className="ppicture">
            <img src={projectImage} loading="lazy" alt="sentiment" />
          </div>
        )}
        <div className="description text-align-left">
          <h5>
            {name} &ensp; {createHyperlink(githubURL, githubIconSvg)} &ensp;
            <button
              value={projectIndex}
              onClick={(e) => {
                projectContentHandler(projects, setProjects, e.target.value);
              }}
            >
              Expand
            </button>
            &ensp;
            {extraButton}
          </h5>
          {projects[projectIndex]}
        </div>
      </div>
    );
  }

  return (
    <>
      <h1>Pet Projects</h1>

      {createProjectEntry(
        "Twitter E-nalyst",
        project03Index,
        "https://github.com/rodonguyen/Twitter-E-nalyst",
        sentimentImage
      )}

      {createProjectEntry(
        "CoolerDate",
        project06Index,
        "https://github.com/rodonguyen/CoolerDate",
        coolerdateImage
      )}

      {createProjectEntry(
        "Personal Website",
        project05Index,
        "https://github.com/rodonguyen/my_website",
        websiteImage
      )}

      {createProjectEntry(
        "Spam Tweet Detector",
        project01Index,
        "https://github.com/rodonguyen/showcase_AI_ML",
        twitterImage,
        createHyperlink(
          "https://rodonguyen-spam-tweet-detector-app-app-ixl0vb.streamlit.app/",
          <button>Demo App</button>
        )
      )}

      {createProjectEntry(
        "BitTracker",
        project02Index,
        "https://github.com/rodonguyen/BitTracker",
        bittrackerImage,
        createHyperlink(
          "https://www.linkedin.com/posts/rodonguyen_programming-datascience-dataanalytics-activity-6986635066823127040-TFcs?utm_source=share&utm_medium=member_desktop",
          <button>Read in Blog</button>
        )
      )}
      
      {createProjectEntry(
        "DVD Management System",
        project04Index,
        "https://github.com/rodonguyen/DVD_management_system",
        dvdsystemImage
      )}
    </>
  );
}
