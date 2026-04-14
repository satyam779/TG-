//import './Header.css'
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from './assets/logo.webp'
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [schoolsOpen, setSchoolsOpen] = useState(false);
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const headerRef = useRef(null);

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
            setIsTopBarVisible(false);
          } else {
            setIsTopBarVisible(true);
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

  const handleLogoClick = (e) => {
    if (e) e.preventDefault();
    closeMenu();
    if (location.pathname !== '/' && location.pathname !== '/ai-robotics-stem-education-india') {
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

    const isHome = path === '/' && (location.pathname === '/' || location.pathname === '/ai-robotics-stem-education-india');

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
      <div className={`top-bar ${isTopBarVisible ? '' : 'hidden'}`} id="home">
        <div className="container">
          <span>
            <a href="tel:+919114036376"><i className="fas fa-phone-alt"></i> +91 8197984847</a>
          </span>
          <span>
            <a href="mailto:reachus@techyguide.in"><i className="fas fa-envelope"></i> reachus@techyguide.in</a>
          </span>
        </div>
      </div>

      <header ref={headerRef} className={isTopBarVisible ? '' : 'shifted'}>
        <div className="container nav-container">
          <div className="logo">
            <Link to="/" className="logo-link" onClick={handleLogoClick}>
              <img src={Logo} alt="TechyGuide Logo" loading="eager" fetchpriority="high" />
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
                  <li><a href="/tebot-robotics-kit-for-schools" onClick={(e) => { e.preventDefault(); handlePageNavigation('/tebot-robotics-kit-for-schools'); }}>TeBoT</a></li>
                  <li><a href="/i-bot-iot-robotics-kit-for-students/" onClick={(e) => { e.preventDefault(); handlePageNavigation('/i-bot-iot-robotics-kit-for-students/'); }}>I-BoT</a></li>
                  <li><a href="/e-blox-modular-electronics-kit-for-kids/" onClick={(e) => { e.preventDefault(); handlePageNavigation('/e-blox-modular-electronics-kit-for-kids/'); }}>E- Blox</a></li>
                  <li><a href="/add-on-robotics-kits-for-students" onClick={(e) => { e.preventDefault(); handlePageNavigation('/add-on-robotics-kits-for-students'); }}>Add On Kits</a></li>
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
