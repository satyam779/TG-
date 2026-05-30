import "./HeroSection.css";
import herobgvideo from "./assets/Start_from_the_exact_closeup_position_of_the_robot_6ee8364d27 (1).mp4";
import { Link } from 'react-router-dom';

function HeroSection() {
  const handleAnchorClick = (e, selector) => {
    e.preventDefault();
    const target = document.querySelector(selector);
    if (!target) return;
    const headerEl = document.querySelector('header');
    const topBarEl = document.querySelector('.top-bar');
    const extra = 12; // small buffer so previous section doesn't peek
    const offset = (headerEl ? headerEl.offsetHeight : 0) + (topBarEl ? topBarEl.offsetHeight : 0) + extra;
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <>
      <section className="hero">
        <video
          className="hero-bg-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src={herobgvideo} type="video/mp4" />
        </video>
        <div className="hero-overlay" aria-hidden="true" />

        <div className="container hero-content">
          <h1>
            Empowering the Next Generation with <br />{" "}
            <span className="highlight">AI, Robotics & STEM Learning</span>
          </h1>

          <p>Building future innovators through hands-on labs and courses</p>

          <div className="hero-buttons">
            <a href="#schools" className="btn btn-hero-primary" onClick={(e) => handleAnchorClick(e, '#schools')}>
              Explore Labs for Schools &#9660;
            </a>
            <Link to="/shop/" className="btn btn-hero-secondary">
              Shop STEM Kits &#10148;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
