import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


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

export default TwitterSpamDetectorModal;