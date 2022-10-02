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
import Modal from "react-bootstrap/Modal";
import React from "react";

import rodoImage from "../media/Rodo.jpg";
import twitterSpamDetection from "../media/twitter_overall_performance.png";

function TwitterSpamDetectorModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Twitter Spam Detector
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li>
            <b>Able to identify spam tweets with {">"}95% accuracy</b> using 4
            Machine Learning methods: LSTM, Transformer, SVM and Naive Bayes
          </li>
          <li>
            Incorporated more useful tweet metadata by expanding existing model
            design, leading to better learning and thus higher accuracy
          </li>
          <li>
            Attained insightful conclusions of the model behaviours through
            rigorous analysis on failed cases
          </li>
          <li>
            Evaluated each method’s suitability on real world application in
            terms of training {"&"} inference time, scalability and
            computational demand. Naive Bayes has shown to be the best model.
          </li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Home = () => {
  const mode = "dark";
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      {/* content block 1: Quick Introduction */}

      <section>
        <div class="row">
          <div class="column left intro">
            <img src={rodoImage} className='rodo-portrait' width="416" height="553" alt="Rodo Potrait" />
          </div>
          <div class="column right intro">
            <div className="vertical-center right intro">
              <p>
                <h1 className="x-large">Hello World!</h1>
                I’m a motivated gonna-be Software Engineer wanting to build
                tools that improve human lives and solve impactful problems. I
                have participated in multiple projects that involves developing
                software, building deep learning models, analysing data and so
                on.
              </p>
              <p>
                With the accumulated strong and diverse skill-set, I’m excited
                to take on new challenges!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* content block 2: Projects */}
      <div className="background-color-2">
        <section>
          <CRow>
            <CCol>
              <CCard color={mode} >
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
              <CCard color={mode} >
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
        </section>

        <>
          <TwitterSpamDetectorModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </>
      </div>
    </>
  );
};

export default Home;
