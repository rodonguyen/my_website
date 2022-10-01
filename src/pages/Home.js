import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';

import rodoImage from '../media/Rodo.jpg';
import twitterSpamDetection from '../media/twitter_overall_performance.png';



function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


const Home = () => {
  const mode = 'dark';
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      {/* content block 1: Quick Introduction */}
      
      <section>
        <div class="row">
          <div class="column">
            <img src={rodoImage} width="416" height="553" alt="Rodo Potrait" />
          </div>
          <div class="column">
            <div className='vertical-center'>
            <p>
              <h2>Hello World!</h2>
              I’m a motivated gonna-be Software Engineer wanting to build tools that improve
              human lives and solve impactful problems. I have participated in
              multiple projects that involves developing software,
              building deep learning models, analysing data and so on. 
            </p>
            <p>
              With the accumulated strong and diverse skill-set, I’m excited to take on new challenges!
            </p>
            </div>
          </div>
        </div> 
      </section>

      {/* content block 2: Projects */}
      <div className='background-color-2'>
        <section>
          <CCard color={mode} style={{ width: '18rem', height: '20rem' }}>
          <CCardImage orientation="top" src={twitterSpamDetection} />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              Some quick example text the bulk of the card's content.
            </CCardText>
            <CButton href="">Go somewhere</CButton>
          </CCardBody>
          </CCard>
        </section>

      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
      </div>

    </>
  );
};

export default Home;
