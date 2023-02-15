import qutguildLogo from "../../media/qutguild_logo.png";
import vietqLogo from "../../media/vietq_logo.jpg";
import qutLogo from "../../media/qut_logo.jpeg";
import csirodata61Logo from "../../media/csirodata61_logo.jpeg";

import createHyperlink from "../utils";

export default function History() {
  return (
    <>
      <h1>Experience</h1>
      {/* <h1 className="xlarge text-align-left">Experience</h1> */}
      <div className="row entry history">
        <div className="time">2022 - 2023</div>
        <div className="company-logo">
          <div class="entry-dot"></div>
          <img src={csirodata61Logo} alt="qutguild logo" />
        </div>
        <div className="description">
          <h5>Vacation Researcher at CSIRO's Data61</h5>
          <p>
            I'm developing lightweight Deep Learning models in C/C++ language
            that can be trained and deployed on Edge AI devices
            (microprocessors).
          </p>
          <p>
            My advisors are{" "}
            {createHyperlink(
              "https://www.qut.edu.au/about/our-people/academic-profiles/g.ramachandran",
              "Dr. Gowri Ramachandran"
            )}{" "}
            and{" "}
            {createHyperlink(
              "https://www.linkedin.com/in/sara-khalifa-3618bb94/",
              "Dr. Sara Khalifa"
            )}{" "}
            whom I have the pleasure to work with.
          </p>
        </div>
      </div>
      <div className="row entry history">
        <div className="time">2021 - 2022</div>
        <div className="company-logo">
          <div class="entry-dot"></div>
          <img src={qutLogo} alt="qutguild logo" />
        </div>
        <div className="description">
          <h5>Vacation Researcher at QUT</h5>
          <p>
            Also another Vacation Researcher role! I was delighted to work as a
            Vacation Researcher for project "Analysing the Effectiveness of
            Verifiable Python (a Python variant) for Software Cybersecurity" led
            by{" "}
            {createHyperlink(
              "https://www.qut.edu.au/about/our-people/academic-profiles/g.ramachandran",
              "Dr. Gowri Ramachandran"
            )}
            .
          </p>
          <p>
            For the final result, I managed to identify a 90% Confidence
            Interval that covers 75% of the spotted memory trace variations,
            which was important finding of vPython's characteristics. I
            eliminated ~95% of manual work by developing an automated analysis
            pipeline that executes the programs, analyses and records results
            with Bash Script and Python. I won the{" "}
            {createHyperlink(
              "https://github.com/rodonguyen/vres_code_2021/tree/main/Documents/Final_Poster_2022",
              "best research poster award"
            )}{" "}
            in the end!
          </p>
        </div>
      </div>
      <div className="row entry history">
        <div className="time">2021</div>
        <div className="company-logo">
          <div class="entry-dot"></div>
          <img src={qutLogo} alt="qutguild logo" />
        </div>
        <div className="description">
          <h5>HiQ Concierge at QUT</h5>
          <p>
            I worked collaboratively to service our students and the public for
            all of their university-related queries, and communicated
            effectively with clients and guided them through the resources.
          </p>
        </div>
      </div>
      <div className="row entry history">
        <div className="time">2020 - 2021</div>
        <div className="company-logo">
          <div class="entry-dot"></div>
          <img src={vietqLogo} alt="qutguild logo" />
        </div>
        <div className="description">
          <h5>
            Secretary at{" "}
            {createHyperlink(
              "https://www.facebook.com/vietqbrisbane/",
              "VietQ"
            )}{" "}
            - Vietnamese Students Association (QUT)
          </h5>
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
        <div className="time">2020 - 2021</div>
        <div className="company-logo">
          <div class="entry-dot"></div>
          <img src={qutguildLogo} alt="qutguild logo" />
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
