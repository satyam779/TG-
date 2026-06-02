//import './Header.css'
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from './assets/logo.webp'
import './Header.css';
import lottie from 'lottie-web/build/player/lottie_light';
import trophyLottieJson from './assets/CoursesPageImages/745fc364-117b-11ee-b7ec-9f18a8a356e0.json?url';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [schoolsOpen, setSchoolsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const headerRef = useRef(null);
  const topBarRef = useRef(null);
  const trophyRef = useRef(null);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => {
    setMenuOpen(false);
    setProductsOpen(false);
    setSchoolsOpen(false);
  };

  const toggleProductsDropdown = (e) => {
    e.preventDefault();
    setProductsOpen(prev => !prev);
    setSchoolsOpen(false);
  };

  const toggleSchoolsDropdown = (e) => {
    e.preventDefault();
    setSchoolsOpen(prev => !prev);
    setProductsOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (menuOpen || productsOpen || schoolsOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen, productsOpen, schoolsOpen]);

  // Handle scroll to hide/show top bar
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY > lastScrollY && currentScrollY > 50) {
            if (topBarRef.current) topBarRef.current.classList.add('hidden');
            if (headerRef.current) headerRef.current.classList.add('shifted');
          } else {
            if (topBarRef.current) topBarRef.current.classList.remove('hidden');
            if (headerRef.current) headerRef.current.classList.remove('shifted');
          }
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load Lottie trophy animation
  useEffect(() => {
    let anim = null;
    if (trophyRef.current) {
      try {
        anim = lottie.loadAnimation({
          container: trophyRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: trophyLottieJson,
        });
      } catch (err) {
        console.error("Error loading Lottie trophy animation:", err);
      }
    }
    return () => {
      if (anim) {
        anim.destroy();
      }
    };
  }, []);

  const handleLogoClick = (e) => {
    if (e) e.preventDefault();
    closeMenu();
    const isHome = location.pathname === '/' || location.pathname === '/ai-robotics-stem-education-india' || location.pathname === '/ai-robotics-stem-education-india/';
    if (!isHome) {
      navigate('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePageNavigation = (path) => {
    closeMenu();
    setProductsOpen(false);
    setSchoolsOpen(false);

    const isHome = path === '/' && (location.pathname === '/' || location.pathname === '/ai-robotics-stem-education-india' || location.pathname === '/ai-robotics-stem-education-india/');

    if (isHome || location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <>
      <style>{`
        .robothrone-text {
          font-weight: 600; /* Little bold in desktop view */
        }
        @media (max-width: 768px) {
          .contact-text, .hide-mobile {
            display: none !important;
          }
          .top-bar-right a i {
            font-size: 1.1rem !important; /* Make icons slightly larger on mobile for easier tapping */
          }
          .robothrone-text {
            font-weight: bold !important;
          }
        }
      `}</style>
      <div className="top-bar" id="home" ref={topBarRef}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="top-bar-left" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '1.0rem' }}>
            <span className="robothrone-text" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <span ref={trophyRef} style={{ width: '40px', height: '40px', display: 'inline-block' }}></span>
              ROBOTHRONE 2026 <span className="hide-mobile">Competition </span>
            </span>
            <Link to="/robothrone/winners" style={{ background: '#f09a2d', color: '#fff', padding: '2px 8px', borderRadius: '10px', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 'bold', whiteSpace: 'nowrap' }}>Winners</Link>
          </div>
          <div className="top-bar-right" style={{ display: 'flex', gap: '15px' }}>
            <span>
              <a href="tel:+918197984847" title="Call Us" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><i className="fas fa-phone-alt" style={{ fontSize: '1.1rem' }}></i> <span className="contact-text">+91 8197984847</span></a>
            </span>
            <span>
              <a href="mailto:reachus@techyguide.in" title="Email Us" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><i className="fas fa-envelope" style={{ fontSize: '1.1rem' }}></i> <span className="contact-text">reachus@techyguide.in</span></a>
            </span>
          </div>
        </div>
      </div>

      <header ref={headerRef}>
        <div className="container nav-container">
          <div className="logo">
            <Link to="/" className="logo-link" onClick={handleLogoClick}>
              <img src={Logo} alt="TechyGuide Logo" loading="eager" fetchPriority="high" />
            </Link>
          </div>

          <nav>
            <ul id="nav-links" className={menuOpen ? 'active' : ''}>

              <li><a href="/" onClick={(e) => { e.preventDefault(); handlePageNavigation('/'); }}>Home</a></li>

              <li className="dropdown">
                <a href="#shop" onClick={toggleProductsDropdown}>
                  Products <i className="fas fa-chevron-down"></i>
                </a>
                <ul className={`dropdown-menu ${productsOpen ? 'active' : ''}`}>
                  <li><a href="/tebot-robotics-kit-for-schools/" onClick={(e) => { e.preventDefault(); handlePageNavigation('/tebot-robotics-kit-for-schools/'); }}>TeBoT</a></li>
                  <li><a href="/i-bot-iot-robotics-kit-for-students/" onClick={(e) => { e.preventDefault(); handlePageNavigation('/i-bot-iot-robotics-kit-for-students/'); }}>I-BoT</a></li>
                  <li><a href="/e-blox-modular-electronics-kit-for-kids/" onClick={(e) => { e.preventDefault(); handlePageNavigation('/e-blox-modular-electronics-kit-for-kids/'); }}>E- Blox</a></li>
                  <li><a href="/add-on-robotics-kits-for-students/" onClick={(e) => { e.preventDefault(); handlePageNavigation('/add-on-robotics-kits-for-students/'); }}>Add On Kits</a></li>
                </ul>
              </li>

              <li><a href="/courses" onClick={(e) => { e.preventDefault(); handlePageNavigation('/courses'); }}>Courses</a></li>

              <li className="dropdown">
                <a href="#schools" onClick={toggleSchoolsDropdown}>
                  Schools <i className="fas fa-chevron-down"></i>
                </a>
                <ul className={`dropdown-menu ${schoolsOpen ? 'active' : ''}`}>
                  <li><a href="/cbse-ai-robotics-lab-setup-nep-2020" onClick={(e) => { e.preventDefault(); handlePageNavigation('/cbse-ai-robotics-lab-setup-nep-2020'); }}>AI & Robotics Lab CBSE</a></li>
                  <li><a href="/ai-robotics-lab-icse-schools-india" onClick={(e) => { e.preventDefault(); handlePageNavigation('/ai-robotics-lab-icse-schools-india'); }}>AI & Robotics Lab ICSE</a></li>
                  <li><a href="/stem-tinkering-lab-for-schools-india" onClick={(e) => { e.preventDefault(); handlePageNavigation('/stem-tinkering-lab-for-schools-india'); }}>STEM Tinkering Lab</a></li>
                  <li><a href="/cbse-composite-skill-lab-setup-for-schools-india" onClick={(e) => { e.preventDefault(); handlePageNavigation('/cbse-composite-skill-lab-setup-for-schools-india'); }}>Composite Skill Lab</a></li>

                  <li><a href="/schools/stem-lab" onClick={(e) => { e.preventDefault(); handlePageNavigation('/schools/stem-lab'); }}>STEM Lab</a></li>
                  <li><a href="/schools/workshop" onClick={(e) => { e.preventDefault(); handlePageNavigation('/schools/workshop'); }}>Workshop</a></li>

                </ul>
              </li>

              <li><a href="/government-csr-stem-robotics-education-initiatives" onClick={(e) => { e.preventDefault(); handlePageNavigation('/government-csr-stem-robotics-education-initiatives'); }}>Impact Program</a></li>
              <li><a href="/robothrone" onClick={(e) => { e.preventDefault(); handlePageNavigation('/robothrone'); }}> Robothrone </a></li>

              <li><a href="/robotics-coding-franchise-india" onClick={(e) => { e.preventDefault(); handlePageNavigation('/robotics-coding-franchise-india'); }}>Franchise</a></li>
              {/* <li><a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')}>Contact</a></li> */}
              <li><a href="/shop" className="btn-nav nav-shop-cta shop-icon" onClick={(e) => { e.preventDefault(); handlePageNavigation('/shop'); }}><i className="fas fa-cart-shopping"></i></a></li>
              <li>
                <a
                  href="https://course.techyguide.in"
                  className="btn-nav nav-shop-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LMS Login
                </a>

              </li>
            </ul>

            <div className="hamburger" id="hamburger" onClick={toggleMenu}>
              <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
