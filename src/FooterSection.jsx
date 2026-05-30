import "./FooterSection.css";
import { Link } from "react-router-dom";

function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer>
        <div className="container footer-content">
          <div className="footer-col">
            <h3>TechyGuide</h3>

            <div className="contact-info">
              <p>
                <a href="tel:+919114036376">
                  <i className="fas fa-phone-alt"></i> +91 8197984847
                </a>
              </p>
              <p>
                <a href="mailto:reachus@techyguide.in">
                <i className="fas fa-envelope"></i> reachus@techyguide.in
                </a>
              </p>
              <div className="footer-social-links" aria-label="TechyGuide social links">
                <a
                  href="https://www.instagram.com/techyg24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="TechyGuide on Instagram"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2.2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6zM17.5 6.3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/TechyG24/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="TechyGuide on Facebook"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M13.5 9H16V6h-2.5A4.5 4.5 0 0 0 9 10.5V12H7v3h2v5h3v-5h2.7l.3-3H12v-1.5A1.5 1.5 0 0 1 13.5 9z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/techyg24/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="TechyGuide on LinkedIn"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M6.5 9.5H4V20h2.5V9.5zM5.25 4A1.75 1.75 0 1 0 5.25 7.5 1.75 1.75 0 0 0 5.25 4zM10 9.5h2.4v1.5h.1c.5-.9 1.7-1.9 3.5-1.9 3 0 3.6 2 3.6 4.6V20H17v-5c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.3-2 2.7V20H10V9.5z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@techyg24?si=TAAlkWE42fq3vzqJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="TechyGuide on YouTube"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M23.5 7.2c-.3-1.3-1.3-2.3-2.6-2.6C18.6 4 12 4 12 4s-6.6 0-8.9.6C1.8 4.9.8 5.9.5 7.2 0 9.5 0 12 0 12s0 2.5.5 4.8c.3 1.3 1.3 2.3 2.6 2.6C5.4 20 12 20 12 20s6.6 0 8.9-.6c1.3-.3 2.3-1.3 2.6-2.6.5-2.3.5-4.8.5-4.8s0-2.5-.5-4.8zM9.5 15.1V8.9l5.8 3.1-5.8 3.1z" />
                  </svg>
                </a>
              </div>
           
              <p>
                <b>Corporate office : </b>  <i className="fas fa-map-marker-alt"></i> 80, 2nd Floor, 1st
                Main, A Narayanapura Main Rd, near Hanuman Temple, VSR Layout,
                Bengaluru, Karnataka 560016
              </p>
              <br>
              </br>
              <p>
               <b>Registerd office : </b><i className="fas fa-map-marker-alt"></i> C/O. Mr. Chittaranjan Bhoi 2nd floor, near Budhi mangala Temple, Bhoisahi, Balasore, Odisha 756001
              </p>
              {/* <div className="mapAddress">
                <div
                    className="map-box"
                    onClick={() =>
                      window.open(
                        "https://maps.app.goo.gl/DnJKoVwhpUKaxcPGA",
                        "_blank",
                      )
                    }
                  >
                    <iframe
                      title="Bangalore Office"
                      src="https://www.google.com/maps?q=TechyGuide%20Bangalore&output=embed"
                      loading="lazy"
                    />
                    <span>Corporate Office</span>
                  </div>
              <p>
                <b>Corporate office : </b>  <i className="fas fa-map-marker-alt"></i> 80, 2nd Floor, 1st
                Main, A Narayanapura Main Rd, near Hanuman Temple, VSR Layout,
                Bengaluru, Karnataka 560016
              </p>
              </div>
                   <div className="mapAddress">
                    <div
                    className="map-box"
                    onClick={() =>
                      window.open(
                        "https://maps.app.goo.gl/LCWgjAsz1PrJ5tAK9",
                        "_blank",
                      )
                    }
                  >
                    <iframe
                      title="Odisha Headquarters"
                      src="https://www.google.com/maps?q=TechyGuide%20Odisha&output=embed"
                      loading="lazy"
                    />
                    <span>Registered Office</span>
                  </div>
              <p>
               <b>Registerd office : </b><i className="fas fa-map-marker-alt"></i> C/O. Mr. Chittaranjan Bhoi 2nd floor, near Budhi mangala Temple, Bhoisahi, Balasore, Odisha 756001
              </p>
                   </div> */}

             
            </div>
          </div>
          <div className="footerQuicklinks">
            <div className="footer-col1">
              <h3>Quick Links</h3>
              <ul className="quick-links-grid">
                <li>
                  <Link to="/" onClick={scrollToTop}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/shop/" onClick={scrollToTop}>
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/robotics-coding-franchise-india/" onClick={scrollToTop}>
                    Franchise
                  </Link>
                </li>
                <li>
                  <Link to="/robothrone/" onClick={scrollToTop}>
                    {" "}
                    Robothrone{" "}
                  </Link>
                </li>
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      alert(' This page is Coming Soon');
                    }}
                    style={{cursor: 'pointer'}}
                  >
                    Open Resources
                  </a>
                </li>
                <li>
                  <Link to="/about-techyguide/" onClick={scrollToTop}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/techyguide-partners-stem-education-india/" onClick={scrollToTop}>
                    Partners
                  </Link>
                </li>
                <li>
                  <Link to="/contact-techyguide/" onClick={scrollToTop}>
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy/" onClick={scrollToTop}>
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Our Offerings</h3>
              <ul className="offerings-list">
                <li>
                  <Link to="/tebot-robotics-kit-for-schools/" onClick={scrollToTop}>Robotics Products</Link>
                </li>
                <li className="hide-mobile">
                  <Link to="/i-bot-iot-robotics-kit-for-students/" onClick={scrollToTop}>IoT Solutions</Link>
                </li>
                <li>
                  <Link to="/courses/" onClick={scrollToTop}>AI Courses</Link>
                </li>
                <li>
                  <Link to="/courses/" onClick={scrollToTop}>Coding Courses</Link>
                </li>
                <li>
                  <Link to="/careers-techyguide-stem-education-jobs/" onClick={scrollToTop}>Careers</Link>
                </li>
                <li>
                  <a href="#">3D Printing</a>
                </li>
              </ul>
              <br></br>
              <h3>Our Blogs</h3>
              <ul>
                <li>
                  <Link to="/blogs/" onClick={scrollToTop}>Blogs</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom-bar">
          <p>&copy; 2021 TechyGuide Private Limited. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default FooterSection;
