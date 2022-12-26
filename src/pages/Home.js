import { useState } from "react";
import rodoImage from "../media/Rodo.jpg";
import twitterPic from "../media/twitterPic.png";
import bittrackerPic from "../media/bittrackerPic.png";
import sentimentPic from "../media/sentimentPic.png";
import qutguildLogo from "../media/qutguild_logo.png";
import vietqLogo from "../media/vietq_logo.jpg";
import qutLogo from "../media/qut_logo.jpeg";
import csirodata61Logo from "../media/csirodata61_logo.jpeg";

import createHyperlink from "../components/utils";

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
          theoretically brings +110% profit on average annually in a market
          cycle by utilising SuperTrend indicator &emsp;•&emsp;Intensively
          backtested BitTracker to select the best configuration and maximise
          potential risk-adjusted return&emsp;•&emsp;I’m developing a User
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

  // useEffect(() => {
  //   console.log("state changes");
  // }, []);

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
            I’m a motivated machine learning engineer who loves to create
            data-driven, AI-integrated products that bring value to users at
            scale. Equipped with a diverse skill set, from software development,
            data analysis to deep learning model design, I’m excited to take on
            new challenges.
          </p>
          <p>
            Around age 8, I had the chance to play around with computer (which
            is very lucky of me) and never stopped since. I loved the Iron Man
            movies so much that I decided to pursue Artificial Inteligence to
            make a J.A.R.V.I.S for my own. And yes, to this date I'm still
            working on things closely relating to Artificial Intelligence and
            Machine Learning.
          </p>
          <p>
            During my free time, I like to build pet projects where I put my
            skills or my recently acquired knowledge to practice. Don't forget
            to pay a visit to my
            {" " +
              createHyperlink("https://github.com/rodonguyen", "GitHub") +
              " "}
            :)
          </p>
          <p>
            Besides doing hands-on work, I'm also a future-focus person who pays
            attention to the long-term plan. I have a strong analytical thinking
            mentality from working in research environments (QUT and CSIRO).
          </p>
          <p>#data #artificial_intelligence #software #blockchain</p>
        </div>
      </div>

      {/* content block: History */}
      <div className="background-color-2">
        <div className="container">
          <h1>Experience</h1>
          {/* <h1 className="xlarge text-align-left">Experience</h1> */}
          <div className="row entry history">
            <div className="time">2022 - 2023</div>
            <div className="company-logo">
              <div class="entry-dot"></div>
              <img src={csirodata61Logo} alt="qutguild logo" />
            </div>
            <div className="description">
              <h5>Vacation Researcher at CSIRO's Data61</h5>
              <p>
                I'm developing super lightweight Deep Learning models in C/C++
                language that can be trained and deployed on Edge AI devices
                (microprocessors).
              </p>
              <p>
                My advisors are{" "}
                {createHyperlink(
                  "https://www.qut.edu.au/about/our-people/academic-profiles/g.ramachandran",
                  "Dr. Gowri Ramachandran"
                )}{" "}
                and{" "}
                {createHyperlink(
                  "https://www.linkedin.com/in/sara-khalifa-3618bb94/",
                  "Dr. Sara Khalifa"
                )}{" "}
                whom I have the pleasure to work with.
              </p>
            </div>
          </div>
          <div className="row entry history">
            <div className="time">2021 - 2022</div>
            <div className="company-logo">
              <div class="entry-dot"></div>
              <img src={qutLogo} alt="qutguild logo" />
            </div>
            <div className="description">
              <h5>Vacation Researcher at QUT</h5>
              <p>
                Also another Vacation Researcher role! I was delighted to work
                as a Vacation Researcher for project "Analysing the
                Effectiveness of Verifiable Python (a Python variant) for
                Software Cybersecurity" led by{" "}
                {createHyperlink(
                  "https://www.qut.edu.au/about/our-people/academic-profiles/g.ramachandran",
                  "Dr. Gowri Ramachandran"
                )}
                .
              </p>
              <p>
                For the final result, I managed to identify a 90% Confidence
                Interval that covers 75% of the spotted memory trace variations,
                which was important finding of vPython's characteristics. I
                eliminated ~95% of manual work by developing an automated
                analysis pipeline that executes the programs, analyses and
                records results with Bash Script and Python. I won the{" "}
                {createHyperlink(
                  "https://github.com/rodonguyen/vres_code_2021/tree/main/Documents/Final_Poster_2022",
                  "best research poster award"
                )}{" "}
                in the end!
              </p>
            </div>
          </div>
          <div className="row entry history">
            <div className="time">2021</div>
            <div className="company-logo">
              <div class="entry-dot"></div>
              <img src={qutLogo} alt="qutguild logo" />
            </div>
            <div className="description">
              <h5>HiQ Concierge at QUT</h5>
              <p>
                I worked collaboratively to service our students and the public
                for all of their university-related queries, and communicated
                effectively with clients and guided them through the resources.
              </p>
            </div>
          </div>
          <div className="row entry history">
            <div className="time">2020 - 2021</div>
            <div className="company-logo">
              <div class="entry-dot"></div>
              <img src={vietqLogo} alt="qutguild logo" />
            </div>
            <div className="description">
              <h5>
                Secretary at{" "}
                {createHyperlink(
                  "https://www.facebook.com/vietqbrisbane/",
                  "VietQ"
                )}{" "}
                - Vietnamese Students Association (QUT)
              </h5>
              <p>
                I was super proud to be elected for this position. This was an
                amazing experience as I had the opportunity to work with vibrant
                people from different majors.
              </p>
              <p>
                Here I promoted Vietnamese culture as a team through our
                exciting events, managed intermediate & long-term operations of
                the organisation like assisting other sub-teams/President/VP
                where applicable, organising documents, communicating with
                external stakeholders, and so on.
              </p>
            </div>
          </div>
          <div className="row entry history">
            <div className="time">2020 - 2021</div>
            <div className="company-logo">
              <div class="entry-dot"></div>
              <img src={qutguildLogo} alt="qutguild logo" />
            </div>
            <div className="description">
              <h5>International Students Officer at QUT Guild</h5>
              <p>
                I advocated for and assisted international students on a
                university-wide scale to ensure they have adequate conditions to
                thrive. My work in summary: liasing with a wide range of
                stakeholders, taking part in planning campaigns and initiatives
                that benefit and represent international students, etc.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* content block: Professional achievements */}
      <div className="container achievements">
        <h1>Achievements</h1>
        <ul>
          <li className="no-list-style">[ 2022 ]</li>
          <li>Graduated with the Bachelor of Information Technology!</li>
          <li>Joined Ravi's Study Program</li>
          <li>
            Received the Dean's List of Students with Excellent Academic
            Performance Certificate{" "}
          </li>
          <li>
            Deployed my very first personal website, this website (such a shame
            for an IT student to do it this late :)
          </li>
          <li className="no-list-style">[ 2021 ]</li>
          <li>
            GovHack Honourable Mention with project '
            {createHyperlink(
              "https://github.com/rodonguyen/govhack21-vietausit-brisbane/blob/main/docs/index.md",
              "Outliers"
            )}
            '
          </li>
        </ul>
      </div>

      {/* content block: Projects */}
      <div className="background-color-2">
        <div className="container">
          <h1>Pet Projects</h1>
          <div className="project">
            <div className="ppicture">
              <img src={twitterPic} loading="lazy" alt="twitterPic" />
            </div>
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
                  Read More
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
            <div className="ppicture">
              <img src={bittrackerPic} loading="lazy" alt="twitterPic" />
            </div>
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
                  Read More
                </button>&ensp;
                {createHyperlink(
                  "https://www.linkedin.com/posts/rodonguyen_programming-datascience-dataanalytics-activity-6986635066823127040-TFcs?utm_source=share&utm_medium=member_desktop",
                  <button>Read in Blog</button>
                )}
              </h5>
              {projects["2"]}
            </div>
          </div>

          <div className="project">
            <div className="ppicture">
              <img src={sentimentPic} loading="lazy" alt="twitterPic" />
            </div>
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

      {/* Skills section */}
      <div className="container text-align-left skills">
        <h1>Skills</h1>
        <ul>
          <li>
            <b>Languages</b>:&ensp; Python, JavaScript, C/C++/C#, Java
          </li>
          <li>
            <b>Data</b>:&ensp; Pandas, Numpy, Matplotlib, SQL, ETL{" "}
          </li>
          <li>
            <b>Machine Learning</b>:&ensp; Keras, SKlearn, Pytorch, ML Model
            Engineering
          </li>
          <li>
            <b>Web</b>:&ensp; React, NodeJs, HTML, CSS, Docker, AWS (Serverless
            framework),
          </li>
          <li>
            <b>Amazon Web Services</b>:&ensp; S3, DynamoDB, Elasti Cache, Redis,
            Auto Scaling, Elastic Load Balancing, EC2
          </li>
          <li>
            <b>Project Management tools</b>:&ensp; JIRA, Confluence, Trello
          </li>
          <li>
            <b>Others</b>:&ensp; Algorithms, Linux, Bash Script, Git/GitHub,
            Embedded Systems{" "}
          </li>
        </ul>

        {/* Uncomment these when the rank/elo is high */}
        {/* <h2>LeetCode</h2>
        <ul>
          <li>
            <b>Rank</b>: 1,000,000
          </li>
          <li>
            <b>Profile</b>:{" "}
            {createHyperlink("https://leetcode.com/rodonguyen/", "rodonguyen")}
          </li>
        </ul>

        <h2>Chess</h2>
        <ul>
          <li>
            <b>ELO</b>: ~1000 (Rapid), ~800 (Blitz)
          </li>
          <li>
            <b>Profile</b>:{" "}
            {createHyperlink(
              "https://www.chess.com/member/rodobolo",
              "rodobolo"
            )}
          </li>
        </ul> */}
      </div>

      {/* Certificates section
      <div className="background-color-2">
        <div className="container text-align-left certificate">
          <h1>Certificates</h1>
        </div>
      </div> */}
    </>
  );
};

export default Home;
