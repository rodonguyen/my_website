import {
  CRow,
  CCol,
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from "@coreui/react";

import Button from "react-bootstrap/Button";
import React from "react";

import rodoImage from "../media/Rodo.jpg";
import twitterSpamDetection from "../media/twitter_overall_performance.png";
import TwitterSpamDetectorModal from "../components/TwitterSpamDetectorModal";

const Home = () => {
  const mode = "dark";
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      {/* content block 1: A little introduction */}

      <div className="container">
        <div className="row">
          <div className="portrait">
            <img
              src={rodoImage}
              className="portrait"
              width="291"
              height="387"
              alt="Rodo Potrait"
            />
          </div>
          <div className="bio">
            <h1 className="xlarge text-align-left">Hello World!</h1>
            <p>
              I’m a motivated gonna-be Software Engineer wanting to build tools
              that improve human lives and solve impactful problems. I have
              participated in multiple projects that involves developing
              software, building deep learning models, analysing data and so on.
            </p>
            <p>
              With the accumulated strong and diverse skill-set, I’m excited to
              take on new challenges!
            </p>
          </div>
        </div>
      </div>

      {/* content block 2: Projects */}
      <div className="container background-color-2">
        <div className="row">
          <h1 className="xlarge text-align-left">My pet projects</h1>

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

          <>
            <TwitterSpamDetectorModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </>

          <div class="footer"> hi</div>
        </div>
      </div>
    </>
  );
};

export default Home;
