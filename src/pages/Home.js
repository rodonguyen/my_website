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
import React from "react";

import rodoImage from "../media/Rodo.jpg";
import twitterPic from "../media/twitterPic.png";
import bittrackerPic from "../media/bittrackerPic.png";
import sentimentPic from "../media/sentimentPic.png"
import TwitterSpamDetectorModal from "../components/MyModals";

const Home = () => {
  // const mode = "light";   // For future dark/light mode
  const [modalShow, setModalShow] = React.useState(false);

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
                Spam Tweet Detector{" "}
                <button onClick={() => setModalShow(true)}>Read More</button>
              </h5>
              <p>
                Led a team of 4 to design 4 separate <b>Machine Learning models</b> that
                can identify spam tweets with <b>{">"}95% accuracy</b> (LSTM,
                Transformer, SVM and Naive Bayes), provided insights into each
                model’s strengths and shortcomings.
              </p>
            </div>
          </div>

          <div className="project">
            <div className="ppicture">
              <img src={bittrackerPic} loading="lazy" alt="twitterPic" />
            </div>
            <div className="pdescription text-align-left">
              <h5>BitTracker <button onClick={() => setModalShow(true)}>Read More</button></h5>
              <p>
                A cryptocurrency <b>trading bot</b> programmed in Python that
                theoretically brings +110% profit annually on average in a market
                cycle by utilising SuperTrend indicator.
              </p>
            </div>
          </div>

          <div className="project">
            <div className="ppicture">
              <img src={sentimentPic} loading="lazy" alt="twitterPic" />
            </div>
            <div className="pdescription text-align-left">
              <h5>Twitter E-nalyst <button onClick={() => setModalShow(true)}>Read More</button></h5>
              <p>
                A web application applying <b>auto-scaling server</b> and <b>persistance services</b> that analyses keyword sentiment on Twitter using Twitter REST API
              </p>
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
        

          <CRow>
            <CCol>
              <CCard color={mode}>
                <CCardImage orientation="top" src={twitterSpamDetection} />
                <CCardBody>
                  <CCardTitle>Twitter Spam Detector</CCardTitle>
                  <CCardText>
                    Identify spam Tweet with {">"}95% accuracy by using 4
                    different Machine Learning models: LSTM, Transformer, Naive
                    Bayes and SVM
                  </CCardText>
                  <CButton href="">View Live</CButton>
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                    Read More
                  </Button>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol>
              <CCard color={mode}>
                <CCardImage orientation="top" src={twitterSpamDetection} />
                <CCardBody>
                  <CCardTitle>Twitter Spam Detector</CCardTitle>
                  <CCardText>
                    Identify spam Tweet with {">"}95% accuracy by using 4
                    different Machine Learning models: LSTM, Transformer, Naive
                    Bayes and SVM
                  </CCardText>
                  <CButton href="">View Live</CButton>
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                    Read More
                  </Button>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol>
              <CCard color={mode}>
                <CCardImage orientation="top" src={twitterSpamDetection} />
                <CCardBody>
                  <CCardTitle>Twitter Spam Detector</CCardTitle>
                  <CCardText>
                    Identify spam Tweet with {">"}95% accuracy by using 4
                    different Machine Learning models: LSTM, Transformer, Naive
                    Bayes and SVM
                  </CCardText>
                  <CButton href="">View Live</CButton>
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                    Read More
                  </Button>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow> 
          
          <TwitterSpamDetectorModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        <div class="footer"> hi</div> */}
    </>
  );
};

export default Home;
