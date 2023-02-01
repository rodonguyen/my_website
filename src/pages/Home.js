// 
import rodoImage from "../media/Rodo.jpg";
import Projects from "../components/Projects";
import History from "../components/History";

import createHyperlink from "../components/utils";



const Home = () => {
  // const mode = "light";   // For future dark/light mode
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
            to pay a visit to my{" "}
            {createHyperlink("https://github.com/rodonguyen", "GitHub")}
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
          <History />
        </div>
      </div>

      {/* content block: Professional achievements */}
      <div className="container achievements">
        <h1>Achievements</h1>
        <ul>
          <li className="no-list-style">[ 2022 ]</li>
          <li>Graduated with the Bachelor of Information Technology!</li>
          <li>Completed Ravi's Study Program: A 3-month Intensive Programming Bootcamp</li>
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
          <Projects />
        </div>
      </div>

      {/* Skills section */}
      <div className="container text-align-left skills">
        <h1>Skills</h1>
        <ul>
          <li>
            <b>Languages</b>:&ensp; Python, JavaScript, C/C++, Java, C#
          </li>
          <li>
            <b>Data</b>:&ensp; Pandas, Numpy, Matplotlib, SQL, ETL
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
        <h2>
          LeetCode{" "}
          <svg
            className="leetcode-icon"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#FCC34A"
              d="M20.303,16.047h-9.561c-0.936,0-1.697-0.803-1.697-1.79s0.762-1.79,1.697-1.79h9.561c0.936,0,1.697,0.803,1.697,1.79S21.238,16.047,20.303,16.047z"
            />
            <path
              className="leetcode-icon-path-1"
              fill="#110638"
              d="M11.618,24c-1.604,0-2.977-0.533-3.97-1.541l-4.098-4.181C2.551,17.262,2,15.819,2,14.215c0-1.578,0.551-3.008,1.552-4.025l9.519-9.681c0.66-0.67,1.828-0.653,2.506,0.036c0.694,0.706,0.71,1.839,0.034,2.524l-1.762,1.816c0.655,0.268,1.241,0.659,1.739,1.159l2.463,2.53c0.672,0.684,0.655,1.815-0.039,2.521c-0.346,0.352-0.802,0.545-1.284,0.545l0,0c-0.464,0-0.896-0.181-1.219-0.509l-2.536-2.492c-0.321-0.327-0.779-0.49-1.367-0.49c-0.606,0-1.069,0.157-1.375,0.469l-4.067,4.194c-0.342,0.349-0.521,0.831-0.521,1.4c0,0.577,0.189,1.101,0.519,1.436l4.083,4.182c0.315,0.321,0.774,0.484,1.362,0.484s1.045-0.163,1.36-0.484l2.549-2.505c0.314-0.321,0.746-0.502,1.209-0.503c0.001,0,0.002,0,0.002,0c0.483,0,0.939,0.194,1.286,0.546c0.693,0.705,0.71,1.837,0.036,2.522l-2.457,2.525C14.586,23.438,13.176,24,11.618,24z M14.29,1c-0.193,0-0.374,0.074-0.507,0.21l-9.519,9.681C3.449,11.72,3,12.9,3,14.215c0,1.341,0.449,2.535,1.265,3.363c0,0,0,0,0.001,0.001l4.097,4.18C9.162,22.57,10.288,23,11.618,23c1.288,0,2.444-0.455,3.258-1.282l2.457-2.525c0.295-0.301,0.279-0.804-0.034-1.122c-0.156-0.159-0.36-0.247-0.573-0.247c0,0,0,0-0.001,0c-0.192,0.001-0.37,0.075-0.502,0.209l-2.549,2.505c-0.497,0.507-1.214,0.778-2.068,0.778s-1.572-0.271-2.076-0.784L5.446,16.35c-0.519-0.527-0.805-1.286-0.805-2.136c0-0.824,0.286-1.57,0.806-2.099l4.067-4.194c0.503-0.512,1.206-0.771,2.091-0.771c0.854,0,1.571,0.271,2.074,0.783l2.536,2.492c0.139,0.142,0.318,0.216,0.512,0.216l0,0c0.212,0,0.415-0.087,0.571-0.246c0.313-0.319,0.33-0.822,0.037-1.121l-2.461-2.528c-0.56-0.563-1.263-0.957-2.028-1.137c-0.175-0.041-0.331-0.176-0.382-0.349s-0.021-0.363,0.104-0.492l2.325-2.398c0.298-0.302,0.282-0.805-0.031-1.124C14.707,1.088,14.504,1,14.29,1z"
            />
          </svg>
        </h2>
        <ul>
          <li>
            <b>Rank</b>: 924,500
          </li>
          <li>
            <b>Profile</b>:{" "}
            {createHyperlink("https://leetcode.com/rodonguyen/", "rodonguyen")}
          </li>
        </ul>

        <h2>Chess - Beginner 😝 </h2>
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
        </ul>
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
