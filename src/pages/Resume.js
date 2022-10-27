
import rodoResumePdf from '../media/Rodo_Resume.pdf';

const Resume = () => {
  return (
  <div>
    <section style={{height: '87vh'}}>
      <embed src={rodoResumePdf} type="application/pdf" width="100%" height="100%" />
    </section>
  </div>
    )
};

export default Resume;
