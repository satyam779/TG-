import { useEffect, useRef, useState } from 'react';
import SEO from './components/SEO';
import './RobothronePage.css';

// Image imports
import logoTG2 from './assets/RobothronePageImages/Logo_TG_Tagline 4.webp';

// Video import

import heroVideo from './assets/RobothronePageImages/Website Backdrop Robothrone.mp4';

// about robothrone section images
import AboutRobothrone1 from './assets/RobothronePageImages/About Robothrone - 1.webp';
import AboutRobothrone2 from './assets/RobothronePageImages/About Robothrone - 2.webp';
import AboutRobothrone3 from './assets/RobothronePageImages/About Robothrone - 3.webp';



//Eligibility & Age Divisions section images
import junior from './assets/RobothronePageImages/Junior 8-10.webp';
import intermediate from './assets/RobothronePageImages/Intermediate 11-13.webp';
import senior from './assets/RobothronePageImages/Senior 14-16.webp';
//Competition Themes images
import scratchProgrammingImage from './assets/RobothronePageImages/Scratch Programming Challenge.webp';
import smartHomeHelpers from './assets/RobothronePageImages/Smart Home Helpers.webp';
import EnvironmentalMonitoring from './assets/RobothronePageImages/Environmental Monitoring.webp';
import SmartTransportation from './assets/RobothronePageImages/Smart Transportation.webp';
import IndustrySolutions from './assets/RobothronePageImages/Industry 4.0 Solutions.webp';
import HealthcareInnovation from './assets/RobothronePageImages/Healthcare Innovation.webp';
//competition snapshops section images
import CompetitionSnapshots1 from './assets/RobothronePageImages/Competition Snapshots - 1.webp';
import CompetitionSnapshots2 from './assets/RobothronePageImages/Competition Snapshots - 2.webp';
import CompetitionSnapshots3 from './assets/RobothronePageImages/Competition Snapshots - 3.webp';
import CompetitionSnapshots4 from './assets/RobothronePageImages/Competition Snapshots - 4.webp';
import CompetitionSnapshots5 from './assets/RobothronePageImages/Competition Snapshots - 5.webp';
import CompetitionSnapshots6 from './assets/RobothronePageImages/Competition Snapshots - 6.webp';
import CompetitionSnapshots7 from './assets/RobothronePageImages/Competition Snapshots - 7.webp';
import CompetitionSnapshots8 from './assets/RobothronePageImages/Competition Snapshots - 8.webp';
import CompetitionSnapshots9 from './assets/RobothronePageImages/Competition Snapshots - 9.webp';



// NOTE: Binary files (.pdf, .docx) are served via URL, not imported
// Video files are imported for better Vite handling

export default function RobothronePage() {
  const [countdownState, setCountdownState] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  const [showCardsSection, setShowCardsSection] = useState(false);
  const sliderRef = useRef(null);


  // Countdown Timer
  useEffect(() => {
    const target = new Date("2026-05-31T23:59:59").getTime();

    function updateCountdown() {
      const now = Date.now();
      let diff = Math.max(0, target - now);

      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff / 3600000) % 24);
      const m = Math.floor((diff / 60000) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setCountdownState({
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0")
      });

      if (diff === 0) {
        clearInterval(countdownTimer);
      }
    }

    updateCountdown();
    const countdownTimer = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownTimer);
  }, []);

  // Slider hover handler
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleMouseEnter = () => {
      slider.style.animationPlayState = "paused";
    };

    const handleMouseLeave = () => {
      slider.style.animationPlayState = "running";
    };

    slider.addEventListener("mouseenter", handleMouseEnter);
    slider.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      slider.removeEventListener("mouseenter", handleMouseEnter);
      slider.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Intersection Observer for lazy reveal
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elementsToObserve = document.querySelectorAll(".robothrone-theme-card, .robothrone-judging-card, .robothrone-prize-card");
    elementsToObserve.forEach(el => revealObserver.observe(el));

    return () => {
      elementsToObserve.forEach(el => revealObserver.unobserve(el));
    };
  }, []);

  // Handle watch video
  const handleWatchVideo = () => {
    window.open("https://www.youtube.com/watch?v=VIDEO_ID", "_blank");
  };

  // Handle download
  const handleDownload = (fileName) => {
    const a = document.createElement("a");
    a.href = new URL(`./assets/RobothronePageImages/${fileName}`, import.meta.url).href;
    a.download = "";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <div className="robothrone-page-root">
      <SEO 
        title="Robothrone Robotics & IoT Innovation Challenge for Students"
        description="Robothrone by TechyGuide is an inter-school STEM innovation challenge where students design robotics and IoT projects, practice coding, and present creative technology solutions."
        canonical="https://techyguide.com/robothrone"
      />
      {/* Hero Section */} 
      {/* <div className="robothrone-top-badge">
          ⭐ Registration extended till 01 March 2026.
        </div> */}
      <section className="robothrone-hero" style={{ marginTop: '80px' }}>
        {/* Top Badge */}
       
        
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          id="robothrone-hero-video"
          src={heroVideo}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}
        >
          Your browser does not support the video tag.
        </video>
        <h1>
          🤖 Where Young Minds Build <span>the Future</span>
        </h1>

        <p className="robothrone-subtitle">
          An Inter-School Robotics & IoT Innovation Challenge for Ages 8–16
        </p>

        <div className="robothrone-pill">
          <strong>Competition:</strong><span className="robothrone-final-submission"> November 20, 2025 – May 31, 2026</span>
        </div>

        <div className="robothrone-pills">
          <strong>Next:</strong> <span className="robothrone-final-submission">Final Submission</span>
        </div>

        <div className="robothrone-countdown">
          <div className="robothrone-time-box"><span>{countdownState.days}</span><small>DAYS</small></div>
          <div className="robothrone-dots">:</div>
          <div className="robothrone-time-box"><span>{countdownState.hours}</span><small>HOURS</small></div>
          <div className="robothrone-dots">:</div>
          <div className="robothrone-time-box"><span>{countdownState.minutes}</span><small>MINUTES</small></div>
          <div className="robothrone-dots">:</div>
          <div className="robothrone-time-box"><span>{countdownState.seconds}</span><small>SECONDS</small></div>
        </div>

        <div className="robothrone-actions">
          <button className="robothrone-register-btn" onClick={() => window.open("https://www.techyguide.in/robothrone/register.html", "_blank")}>Register Now</button>
          <button className="robothrone-download-btn" onClick={() => setShowCardsSection(true)}>Download Brochure</button>
        </div>
      </section>

      {/* Download Cards Section */}
      <section 
        className={`robothrone-cards-section ${!showCardsSection ? 'robothrone-hidden' : ''}`} 
        id="cardsSection"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setShowCardsSection(false);
          }
        }}
      >
        <div className="robothrone-cards-wrapper" onClick={(e) => e.stopPropagation()}>
          <button className="robothrone-close-btn" onClick={() => setShowCardsSection(false)}>&times;</button>

          {/* Card 1 */}
          <div className="robothrone-resource-card">
            <div className="robothrone-card-icon">📖</div>
            <h4>Competition Handbook</h4>
            <p>Complete guide with rules, timelines, and submission guidelines.</p>
            <button className="robothrone-card-btn" onClick={() => handleDownload('competition_handbook.pdf')}>
              Download
            </button>
          </div>

          {/* Card 2 */}
          <div className="robothrone-resource-card">
            <div className="robothrone-card-icon">💡</div>
            <h4>Project Ideation</h4>
            <p>Theme-related documents to help you brainstorm and plan your project.</p>
            <button className="robothrone-card-btn" onClick={() => handleDownload('Project_Ideation.pdf')}>
              Download
            </button>
          </div>

          {/* Card 3 */}
          <div className="robothrone-resource-card robothrone-highlight">
            <div className="robothrone-card-icon">🎥</div>
            <h4>Sample Project Video</h4>
            <p>Watch previous year project videos for inspiration and reference.</p>
            <button className="robothrone-card-btn robothrone-watch-video" onClick={handleWatchVideo}>
              Watch Video
            </button>
          </div>

          {/* Card 4 */}
          <div className="robothrone-resource-card">
            <div className="robothrone-card-icon">📄</div>
            <h4>Report Template</h4>
            <p>Download the official project report template for your submission.</p>
            <button className="robothrone-card-btn" onClick={() => handleDownload('project_report.docx')}>
              Download
            </button>
          </div>
        </div>
      </section>

      {/* About Robothrone */}
      <section className="robothrone-about-robothrone">
        <h2 className="robothrone-about-title">🤖 About Robothrone</h2>

        <div className="robothrone-about-wrapper">
          {/* LEFT CARD */}
          <div className="robothrone-about-left">
            <p>
             Robothrone is a dynamic inter-school competition designed to ignite students’ passion for robotics, IoT, and innovation. This platform enables learners from grades 3 to 9 to showcase their creative ideas, technical abilities, and problem-solving skills through hands-on STEM experiences.
            </p>

            <p>
             Participants work in collaborative teams to design, build, and program robots or smart IoT solutions that address real-world challenges. The competition promotes creativity, critical thinking, and teamwork while strengthening foundational knowledge in science, technology, engineering, and mathematics. 
            </p>

            <p>
             With expert mentorship, guided workshops, and structured learning resources, Robothrone goes beyond a typical competition. It is a journey of exploration and innovation that equips students with future-ready skills and prepares them to meet the technological challenges of tomorrow. 
            </p>

            <div className="robothrone-about-powered">
              <div>
                <strong>Powered by Techyguide Pvt Ltd</strong>
              </div><br />
              <img src={logoTG2} alt="TechyGuide" />
            </div>
          </div>

          {/* RIGHT CARD (AUTO SLIDER) */}
          <div className="robothrone-about-right">
            <div className="robothrone-slider-track" ref={sliderRef}>
              {/* ORIGINAL IMAGES */}
              <img src={AboutRobothrone1} loading="lazy" decoding="async" width="400" height="250" alt="" />
              <img src={AboutRobothrone2} loading="lazy" decoding="async" width="400" height="250" alt="" />
              <img src={AboutRobothrone3} loading="lazy" decoding="async" width="400" height="250" alt="" />
              {/* DUPLICATE FOR LOOP */}
              <img src={AboutRobothrone1} loading="lazy" decoding="async" width="400" height="250" alt="" />
              <img src={AboutRobothrone2} loading="lazy" decoding="async" width="400" height="250" alt="" />
              <img src={AboutRobothrone3} loading="lazy" decoding="async" width="400" height="250" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Registration Benefits */}
      <section className="robothrone-expect-section">
        <h2 className="robothrone-expect-title">✨ Registration Benefits</h2>
        <h4 className="robothrone-expect-title-h4">🎁 Unlock exclusive perks when you register for Robothrone 2.O 2K25-26.</h4>

        <div className="robothrone-expect-grid">
          <div className="robothrone-expect-card">
            <div className="robothrone-expect-icon">🏆</div>
            <h4>Robothrone Goodies</h4>
            <p>
              Exclusive merch and surprise gifts to celebrate your participation.
            </p>
          </div>

          <div className="robothrone-expect-card">
            <div className="robothrone-expect-icon">👥</div>
            <h4>Personalised Key chain</h4>
            <p>
              Your name or team engraved — a cool keepsake from Robothrone.
            </p>
          </div>

          <div className="robothrone-expect-card">
            <div className="robothrone-expect-icon">🎓</div>
            <h4>Participation certificate</h4>
            <p>
              Official certificate to showcase your skills and event experience.
            </p>
          </div>

          <div className="robothrone-expect-card">
            <div className="robothrone-expect-icon">🚀</div>
            <h4>7-Day Coding Courses</h4>
            <p>
              Learn Scratch, App Dev, and Web Dev with guided, fun challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="robothrone-eligibility-section">
        <h2 className="robothrone-snapshots-title">👤 Eligibility & Age Divisions</h2>
        <p className="robothrone-eligibility-sub">👥 Division criteria and age groups</p>

        <div className="robothrone-eligibility-grid">
          {/* JUNIOR */}
          <div className="robothrone-eligibility-card">
            <img src={junior} loading="lazy" decoding="async" width="400" height="250" alt="" />
            
            <div className="robothrone-card-head">
              <h3>🧒 Junior</h3>
              <span>Ages 8–10</span>
            </div>
            
            <ul className="robothrone-card-list">
              <li>Solo or duo</li>
              <li>Basic robotics concepts</li>
              <li>Scratch programming focus</li>
              <li>Creative problem-solving</li>
              <li>Teacher guidance encouraged</li>
            </ul>
          </div>

          {/* INTERMEDIATE */}
          <div className="robothrone-eligibility-card">
            <img src={intermediate} loading="lazy" decoding="async" width="400" height="250" alt="" />
            
            <div className="robothrone-card-head">
              <h3>🧑‍💻 Intermediate</h3>
              <span>Ages 11–13</span>
            </div>
            
            <ul className="robothrone-card-list">
              <li>Solo or duo</li>
              <li>Intermediate robotics concepts</li>
              <li>Arduino programming</li>
              <li>IoT fundamentals</li>
              <li>Limited mentor assistance</li>
            </ul>
          </div>

          {/* SENIOR */}
          <div className="robothrone-eligibility-card">
            <img src={senior} loading="lazy" decoding="async" width="400" height="250" alt="" />
            
            <div className="robothrone-card-head">
              <h3>🧠 Senior</h3>
              <span>Ages 14–16</span>
            </div>
            
            <ul className="robothrone-card-list">
              <li>Solo or duo</li>
              <li>Advanced robotics and IoT</li>
              <li>Python / C++ programming</li>
              <li>Complex problem-solving</li>
              <li>Independent work expected</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Snapshots Section */}
      <section className="robothrone-snapshots-section">
        <h2 className="robothrone-snapshots-title">📸 Competition Snapshots</h2>

        <div className="robothrone-snapshots-grid">
          <div className="robothrone-snapshot-card">
            <img src={CompetitionSnapshots1} loading="lazy" decoding="async" width="400" height="250" alt="" />
          </div>
          <div className="robothrone-snapshot-card">
            <img src={CompetitionSnapshots2} loading="lazy" decoding="async" width="400" height="250" alt="" />
          </div>
          <div className="robothrone-snapshot-card">
            <img src={CompetitionSnapshots3} loading="lazy" decoding="async" width="400" height="250" alt="" />
          </div>
          <div className="robothrone-snapshot-card">
            <img src={CompetitionSnapshots4} loading="lazy" decoding="async" width="400" height="250" alt="" />
          </div>
          <div className="robothrone-snapshot-card">
            <img src={CompetitionSnapshots5} loading="lazy" decoding="async" width="400" height="250" alt="" />
          </div>
          <div className="robothrone-snapshot-card">
            <img src={CompetitionSnapshots6} loading="lazy" decoding="async" width="400" height="250" alt="" />
          </div>
          <div className="robothrone-snapshot-card">
            <img src={CompetitionSnapshots7} loading="lazy" decoding="async" width="400" height="250" alt="" />
          </div>
          <div className="robothrone-snapshot-card">
            <img src={CompetitionSnapshots8} loading="lazy" decoding="async" width="400" height="250" alt="" />
          </div>
          <div className="robothrone-snapshot-card">
            <img src={CompetitionSnapshots9} loading="lazy" decoding="async" width="400" height="250" alt="" />
          </div>
        </div>
      </section>

      {/* Competition Themes */}
      <section className="robothrone-themes-section">
        <h2 className="robothrone-themes-title">🎮 Competition Themes</h2>
        <p className="robothrone-themes-sub">🎨 Project themes across divisions</p>

        {/* JUNIOR */}
        <h3 className="robothrone-division-title">🧒 Junior Division (Ages 8–10)</h3>
        <div className="robothrone-themes-grid">
          <div className="robothrone-theme-card">
            <div className="robothrone-theme-top">
              <img src={scratchProgrammingImage} loading="lazy" decoding="async" width="400" height="250" alt="" />
            </div>
            <div className="robothrone-theme-head">
              <h4>Scratch Programming Challenge</h4>
              <span>Interactive Stories & Games</span>
            </div>
            <ul>
              <li>Visual programming with Scratch</li>
              <li>Create interactive stories & animations</li>
              <li>Game design basics</li>
              <li>Creative problem-solving</li>
            </ul>
          </div>

          <div className="robothrone-theme-card">
            <div className="robothrone-theme-top">
              <img src={smartHomeHelpers} loading="lazy" decoding="async" width="400" height="250" alt="" />
            </div>
            <div className="robothrone-theme-head">
              <h4>Smart Home Helpers</h4>
              <span>Daily Task Automation</span>
            </div>
            <ul>
              <li>Basic robotics concepts</li>
              <li>Simple sensors & automation</li>
              <li>Real-life home projects</li>
              <li>Teacher guidance encouraged</li>
            </ul>
          </div>
        </div>

        {/* INTERMEDIATE */}
        <h3 className="robothrone-division-title">🧑‍💻 Intermediate Division (Ages 11–13)</h3>
        <div className="robothrone-themes-grid">
          <div className="robothrone-theme-card">
            <div className="robothrone-theme-top">
              <img src={EnvironmentalMonitoring} loading="lazy" decoding="async" width="400" height="250" alt="" />
            </div>
            <div className="robothrone-theme-head">
              <h4>Environmental Monitoring</h4>
              <span>IoT for Sustainability</span>
            </div>
            <ul>
              <li>IoT sensors & data collection</li>
              <li>Arduino-based systems</li>
              <li>Data visualization</li>
              <li>Real-world sustainability ideas</li>
            </ul>
          </div>

          <div className="robothrone-theme-card">
            <div className="robothrone-theme-top">
              <img src={SmartTransportation} loading="lazy" decoding="async" width="400" height="250" alt="" />
            </div>
            <div className="robothrone-theme-head">
              <h4>Smart Transportation</h4>
              <span>Intelligent Mobility Systems</span>
            </div>
            <ul>
              <li>Traffic & navigation systems</li>
              <li>GPS tracking basics</li>
              <li>Sensor integration</li>
              <li>Guided mentor support</li>
            </ul>
          </div>
        </div>

        {/* SENIOR */}
        <h3 className="robothrone-division-title">🧠 Senior Division (Ages 14–16)</h3>
        <div className="robothrone-themes-grid">
          <div className="robothrone-theme-card">
            <div className="robothrone-theme-top">
              <img src={IndustrySolutions} loading="lazy" decoding="async" width="400" height="250" alt="" />
            </div>
            <div className="robothrone-theme-head">
              <h4>Industry 4.0 Solutions</h4>
              <span>Advanced Industrial Automation</span>
            </div>
            <ul>
              <li>AI & machine learning basics</li>
              <li>Industrial IoT systems</li>
              <li>Python / C++ programming</li>
              <li>Independent project work</li>
            </ul>
          </div>

          <div className="robothrone-theme-card">
            <div className="robothrone-theme-top">
              <img src={HealthcareInnovation} loading="lazy" decoding="async" width="400" height="250" alt="" />
            </div>
            <div className="robothrone-theme-head">
              <h4>Healthcare Innovation</h4>
              <span>Medical Technology Solutions</span>
            </div>
            <ul>
              <li>Health monitoring systems</li>
              <li>Medical IoT applications</li>
              <li>Data analytics basics</li>
              <li>Professional documentation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Judging Criteria */}
      <section className="robothrone-judging-section">
        <div className="robothrone-judging-header">
          <h2>💯Judging Criteria</h2>
          <p>⚖️ Judging Criteria Weightage</p>
          <span className="robothrone-divider"></span>
        </div>

        <div className="robothrone-judging-container">
          {/* LEFT : Weightage */}
          <div className="robothrone-judging-card">
            <h3>💯 Judging Criteria Weightage</h3>

            <div className="robothrone-criteria">
              <span>Innovation & Creativity</span>
              <div className="robothrone-bar">
                <div className="robothrone-fill robothrone-pink" style={{ width: '25%' }}>25%</div>
              </div>
            </div>

            <div className="robothrone-criteria">
              <span>Technical Implementation</span>
              <div className="robothrone-bar">
                <div className="robothrone-fill robothrone-blue" style={{ width: '30%' }}>30%</div>
              </div>
            </div>

            <div className="robothrone-criteria">
              <span>Functionality</span>
              <div className="robothrone-bar">
                <div className="robothrone-fill robothrone-green" style={{ width: '20%' }}>20%</div>
              </div>
            </div>

            <div className="robothrone-criteria">
              <span>Presentation & Documentation</span>
              <div className="robothrone-bar">
                <div className="robothrone-fill robothrone-orange" style={{ width: '15%' }}>15%</div>
              </div>
            </div>

            <div className="robothrone-criteria">
              <span>Real-World Impact</span>
              <div className="robothrone-bar">
                <div className="robothrone-fill robothrone-cyan" style={{ width: '10%' }}>10%</div>
              </div>
            </div>
          </div>

          {/* RIGHT : Key Points */}
          <div className="robothrone-judging-card">
            <h3>📋 Key Evaluation Points</h3>
            <ul className="robothrone-points">
              <li>Originality and uniqueness of the solution</li>
              <li>Technical complexity and implementation quality</li>
              <li>Effectiveness in solving the intended problem</li>
              <li>Clarity and completeness of documentation</li>
              <li>Potential for real-world application and impact</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Prize Section */}
      <section className="robothrone-prize-section">
        <div className="robothrone-prize-header">
          <h2>🎁 Prize Categories</h2>
          <p>🏅 Awards and recognition across divisions</p>
          <span className="robothrone-prize-divider"></span>
        </div>

        <div className="robothrone-prize-grid">
          {/* Junior */}
          <div className="robothrone-prize-card">
            <div className="robothrone-prize-top robothrone-junior">
              <span className="robothrone-icon">🏆</span>
              <h3>🏆 Junior Prize Worth</h3>
              <strong>₹20,000</strong>
            </div>
            <ul>
              <li>Cash Prize</li>
              <li>Robotics DIY Kit</li>
              <li>Certificate of Excellence + Trophy</li>
            </ul>
          </div>

          {/* Intermediate */}
          <div className="robothrone-prize-card">
            <div className="robothrone-prize-top robothrone-intermediate">
              <span className="robothrone-icon">🥈</span>
              <h3>🥈 Intermediate Prize Worth</h3>
              <strong>₹20,000</strong>
            </div>
            <ul>
              <li>Cash Prize</li>
              <li>Robotics DIY Kit</li>
              <li>Certificate of Excellence + Trophy</li>
            </ul>
          </div>

          {/* Senior */}
          <div className="robothrone-prize-card">
            <div className="robothrone-prize-top robothrone-senior">
              <span className="robothrone-icon">🥇</span>
              <h3>🥇 Senior Prize Worth</h3>
              <strong>₹20,000</strong>
            </div>
            <ul>
              <li>Cash Prize</li>
              <li>Robotics DIY Kit</li>
              <li>Certificate of Excellence + Trophy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="robothrone-contact-section" id="contact">
        <div className="robothrone-contact-header">
          <h2>🤝 Get in Touch</h2>
          <p>🤝 Reach out to our team</p>
          <span className="robothrone-contact-divider"></span>
        </div>

        <div className="robothrone-contact-grid">
          {/* Email */}
          <div className="robothrone-contact-card robothrone-email">
            <div className="robothrone-contact-icon">✉️</div>
            <h3>✉️ Email Us</h3>
            <p>Questions or support? We respond within 24 hours.</p>
            <a href="mailto:robothrone@techyguide.in">
              robothrone@techyguide.in
            </a>
          </div>

          {/* Call */}
          <div className="robothrone-contact-card robothrone-call">
            <div className="robothrone-contact-icon">📞</div>
            <h3>📞 Call Us</h3>
            <p>Talk to our team during business hours.</p>
            <a href="tel:+919108065026">
              +91 91080 65026
            </a>
          </div>

          {/* WhatsApp */}
          <div className="robothrone-contact-card robothrone-whatsapp">
            <div className="robothrone-contact-icon">💬</div>
            <h3>💬 WhatsApp</h3>
            <p>Message us for quick updates and queries.</p>
            <a
              href="https://wa.me/919108065026"
              target="_blank"
              rel="noopener"
            >
              +91 91080 65026
            </a>
          </div>

          {/* Discord */}
          <div className="robothrone-contact-card robothrone-discord">
            <div className="robothrone-contact-icon">🎮</div>
            <h3>🎮 Discord</h3>
            <p>Join our community for tips and announcements.</p>
            <a
              href="https://discord.gg/YOUR_SERVER_LINK"
              target="_blank"
              rel="noopener"
            >
              Community Server
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
