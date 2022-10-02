import "bootstrap/dist/css/bootstrap.min.css";

import rodoResumePdf from '../media/Rodo_Resume.pdf';

const Resume = () => {
  return (
  <div >
    <section  style={{height: '85vh'}}>
      <embed src={rodoResumePdf} type="application/pdf" width="100%" height="100%" />
    </section>
  </div>
    )
};

export default Resume;
