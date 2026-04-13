import './CollaborationSection.css';
import { Link } from 'react-router-dom';

function Collaboration() {
  return (
    <>
      <section className="collaboration">
        <div className="container center-text">
          <h2 className="collaboration-h2">Our <span className="collaboration-h2-span">Collaboration</span></h2>
          <p>Partner with TechyGuide to expand STEM education through a proven business model with training, support, and marketing,</p>
          <p> exclusive territory rights, and strong government & CSR collaborations with resellers and distributors.</p>
          <div className="partners">
              <Link className="partner-box" to="/government-csr-stem-robotics-education-initiatives">Government & CSR</Link>

            <Link className="partner-box" to="/robotics-coding-franchise-india">Resellers & Distributors</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Collaboration;
