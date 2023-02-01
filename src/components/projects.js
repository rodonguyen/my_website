import twitterPic from "../media/twitterPic.png";
import bittrackerPic from "../media/bittrackerPic.png";
import sentimentPic from "../media/sentimentPic.png";
import dvdsystemPic from "../media/dvd_management_system.png";


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
              Led a team of 4 to design 4 separate{" "}
              <b>Machine Learning models</b> that can identify spam tweets with{" "}
              <b>{">"}95% accuracy</b> (LSTM, Transformer, SVM and Naive Bayes),
              provided insights into each model’s strengths and shortcomings.
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
              Reduced latency <b>by 10 times</b> by integrating
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
