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
import twitterSpamDetection from "../media/twitter_overall_performance.png";
import TwitterSpamDetectorModal from "../components/TwitterSpamDetectorModal";

const Home = () => {
  // const mode = "light";   // For future dark/light mode
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      {/* content block 1: A little introduction */}

      <div className="container">
        <div className="row introduction">
          <div className="portrait">
            <img
              src={rodoImage}
              className="portrait"
              width="291"
              height="387"
              loading="lazy"
              alt="Rodo Potrait"
            />
          </div>
          <div className="bio">
            <h1 className="xlarge text-align-left">Hello World!</h1>
            <p>
              I’m a motivated data scientist who loves to create data-driven
              products that bring value to users at scale. Equipped with a
              diverse skill set, from software development, data analysis to
              deep learning model design, I’m excited to take on new challenges.
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
              Besides doing hands-on work, I'm also a future-focus person who
              pays attention to the long-term plan. I have a strong analytical
              thinking mentality from working in research environments (QUT and
              CSIRO).
            </p>
            <p>#data #AI #software #blockchain</p>
          </div>
        </div>
      </div>

      {/* content block 2: Projects */}
      <div className="container background-color-2">
        <h1 className="xlarge text-align-left">My pet projects</h1>
        <div className="row projects">
          <div className="card">
            <a href="https://www.youtube.com/watch?v=hx7BXih7zx8">
              <img src={twitterSpamDetection} alt="Project demo"></img>
            </a>
            <div className="text-align-left">
              Identify spam Tweet with {">"}95% accuracy by using 4 different
              Machine Learning models: LSTM, Transformer, Naive Bayes and SVM
            </div>
          </div>

          <div className="card">
            <a href="https://www.youtube.com/watch?v=hx7BXih7zx8">
              <img src={twitterSpamDetection} alt="Project demo"></img>
            </a>
            <div className="text-align-left">
              Identify spam Tweet with {">"}95% accuracy by using 4 different
              Machine Learning models: LSTM, Transformer, Naive Bayes and SVM
            </div>
          </div>

          <div className="card">
            <a href="https://www.youtube.com/watch?v=hx7BXih7zx8">
              <img src={twitterSpamDetection} alt="Project demo"></img>
            </a>
            <div className="text-align-left">
              Identify spam Tweet with {">"}95% accuracy by using 4 different
              Machine Learning models: LSTM, Transformer, Naive Bayes and SVM
            </div>
          </div>
        </div>

        {/* 
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
          </CRow> */}

        <>
          <TwitterSpamDetectorModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </>

        {/* <div class="footer"> hi</div> */}
      </div>
    </>
  );
};

export default Home;
