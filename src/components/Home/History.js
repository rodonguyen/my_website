import qutguildLogo from "../../media/qutguild_logo.png";
import vietqLogo from "../../media/vietq_logo.jpg";
import qutLogo from "../../media/qut_logo.jpeg";
import s23mLogo from "../../media/s23m_logo.jpeg";
import csirodata61Logo from "../../media/csirodata61_logo.jpeg";

import createHyperlink from "../utils";

export default function History() {
  return (
    <>
      <p>If you are looking to recruit me, the Resume in the {createHyperlink('/resume', 'Resume tab')} is more compact and suitable.</p>

      <h1>Career Summary</h1>
      <p>
        <ul>
          <li>
            A Computer Science Graduate passionate about top-notch technology, Machine Learning (ML) and building awesome software.
          </li>
          <li>
            Possess 2+ years of experience in software development, data and ML.
          </li>
          <li>
            A fast learner with strong programming fundamentals and project management skills.
          </li>
          <li>
            Champion of writing clean and maintainable code. Security at heart.
          </li>
        </ul>
      </p>

      <h1>Experience</h1>
      <div className="row entry history">
        <div className="time">2023</div>
        <div className="company-logo">
          <div class="entry-dot"></div>
          {createHyperlink(
            "https://www.qut.edu.au/",
            <img src={qutLogo} alt="qut logo" />
          )}
        </div>
        <div className="description">
          <h5>Sessional Academic aka. Tutor at QUT</h5>
          <p>
            Delivered comprehensive knowledge of IFB102 – Intro to 
            Computer Systems – to 2 classes of 25 students
            each, covering Hardware, Operating Systems, 
            Cloud, Security, Raspberry Pi OS, etc.
          </p>
          <p>
            Made the class as interesting and practical as possible.
          </p>
        </div>
      </div>

      <div className="row entry history">
        <div className="time">2022 - 2023</div>
        <div className="company-logo">
          <div class="entry-dot"></div>
          {createHyperlink(
            "https://www.csiro.au/",
            <img src={csirodata61Logo} alt="csiro-data61 logo" />
          )}
        </div>

        <div className="description">
          <h5>Vacation Researcher at CSIRO's Data61</h5>
          <p>[ Towards Training Neural Networks on Micro-controllers ]</p>
          <p>
            Training Neural Networks on Micro-controllers (MCUs) is a
            new-emerging area and proved to be cost-saving and beneficial in
            many aspects. However, there are challenges to be solved.
          </p>
          <p>
            In this project, I single-handedly explored and evaluated suitable
            C++ machine learning libraries for a new EdgeAI & Computer Vision
            project, found an open-source one - MLPack - and implemented some
            prototypes to demonstrate to supervisors.
          </p>
          <p>
            I optimised ML model’s memory consumption by x8 times by utilising smaller loads of training dataset.   
            I conducted multiple experiments on multiple devices which provide
            insights into the library’s resource consumption (memory, runtime),
            ensuring inter-device stability of the library. revised the progress and drew 
            a viable “Deployment" plan for the future team which is to 
            utilise this library to run on-device ML training on Raspberry Pi Zero W.{" "}
            {createHyperlink(
              "https://github.com/rodonguyen/examples/blob/csiro/playing/Rodo_CSIRO_Presentation.pdf",
              "View my Final Presentation here"
            )}
            .
          </p>
          <p>
            My advisors are{" "}
            {createHyperlink(
              "https://www.qut.edu.au/about/our-people/academic-profiles/g.ramachandran",
              "Dr Gowri Ramachandran"
            )}{" "}
            and{" "}
            {createHyperlink(
              "https://www.linkedin.com/in/sara-khalifa-3618bb94/",
              "Dr Sara Khalifa"
            )}{" "}
            whom I have the pleasure to work with.
          </p>
        </div>
      </div>

      <div className="row entry history">
        <div className="time">2022</div>
        <div className="company-logo">
          <div class="entry-dot"></div>
          {createHyperlink(
            "http://www.s23m.com/about/index.html",
            <img src={s23mLogo} alt="S23M logo" />
          )}
        </div>
        <div className="description">
          <h5>Software Engineer at S23M</h5>
          <p>
            I built an{" "}
            {createHyperlink("https://github.com/rodonguyen/roma", "App")} with a minimal yet, 
            modern User Interface for an international health organisation to interact with 
            its health data server (Create-Read-Update-Delete). Utilised React, NodeJS, AgGrid, Bootstrap.
            Specifically, I programmed many core features of the app: data query/edit through RestAPI, 
            multi-parameter query, and presenting queried results intuitively on the client-side.
          </p>
          <p>
            During this time, I led a 4-person team, ensured progress
            is on-track with the sprint plan, and communicated clearly with the
            product owner to build a product that meets their expectation.
            Finally, I constructed detailed onboarding documentation and
            tutorials for users / future developers.
          </p>
        </div>
      </div>

      <div className="row entry history">
        <div className="time">2021 - 2022</div>
        <div className="company-logo">
          <div class="entry-dot"></div>
          {createHyperlink(
            "https://www.qut.edu.au/",
            <img src={qutLogo} alt="qut logo" />
          )}
        </div>
        <div className="description">
          <h5>Software Engineer Intern at QUT</h5>
          <p>
            [ Analysing the Effectiveness of Verifiable Python (a Python
            variant) for Software Cybersecurity ]
          </p>
          <p>
            I evaluated the effectiveness of Verifiable Python (vPython) for
            software cybersecurity by testing, improving it in the development
            environment and ensuring output consistency. I developed a
            completely new automated analysis pipeline (Bash Script and Python)
            that eliminated ~95% of manual work: executing the programs,
            analysing output, and recording results.
          </p>
          <p>
            And at the end, I won the{" "}
            {createHyperlink(
              "https://github.com/rodonguyen/vres_code_2021/tree/main/Documents/Final_Poster_2022",
              "Outstanding Achievement Award"
            )}{" "}
            at the end of the program.
          </p>

          <p>
            Project supervised by{" "}
            {createHyperlink(
              "https://www.qut.edu.au/about/our-people/academic-profiles/g.ramachandran",
              "Dr Gowri Ramachandran"
            )}
            .
          </p>
        </div>
      </div>
      <div className="row entry history">
        <div className="time">2021</div>
        <div className="company-logo">
          <div class="entry-dot"></div>
          {createHyperlink(
            "https://www.qut.edu.au/",
            <img src={qutLogo} alt="qut logo" />
          )}
        </div>
        <div className="description">
          <h5>HiQ Concierge at QUT</h5>
          <p>
            I advocated for international students on a university-wide scale:
            Provided them with additional assistance and services to thrive:
            foodbank, social activities, counseling, etc.; Liaised with a wide
            range of external stakeholders: university admins, not-for-profit
            organisation, and businesses to utilise resources more efficiently.
          </p>
        </div>
      </div>

      <div className="row entry history">
        <div className="time">2021</div>
        <div className="company-logo">
          <div class="entry-dot"></div>
          {createHyperlink(
            "https://www.facebook.com/vietqbrisbane/",
            <img src={vietqLogo} alt="VietQ logo" />
          )}
        </div>
        <div className="description">
          <h5>Secretary at VietQ - QUT Vietnamese Students Association</h5>
          <p>
            I was super proud to be elected for this position. This was an
            amazing experience as I had the opportunity to work with a energetic
            and vibrant team.
          </p>
          <p>
            Here I promoted Vietnamese culture as a team through our exciting
            events, managed intermediate & long-term operations of the
            organisation like assisting other sub-teams/President/VP where
            applicable, organising documents, communicating with external
            stakeholders, and so on.
          </p>
        </div>
      </div>

      <div className="row entry history">
        <div className="time">2021</div>
        <div className="company-logo">
          <div class="entry-dot"></div>
          {createHyperlink(
            "https://qutguild.com/about/qut-guild/",
            <img src={qutguildLogo} alt="qutguild logo" />
          )}
        </div>
        <div className="description">
          <h5>International Students Officer at QUT Guild</h5>
          <p>
            I advocated for and assisted international students on a
            university-wide scale to ensure they have adequate conditions to
            thrive. My work in summary: liasing with a wide range of
            stakeholders, taking part in planning campaigns and initiatives that
            benefit and represent international students, etc.
          </p>
        </div>
      </div>
    </>
  );
}
