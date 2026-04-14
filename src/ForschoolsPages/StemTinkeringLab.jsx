import { useEffect } from 'react';
import SEO from '../components/SEO';
import './StemTinkeringLab.css';
import logoImg from '../assets/ForSchoolsStemTinkeringLabImages/Logo_TG_Tagline 2.webp';
import GalleryImg1 from '../assets/ForSchoolsStemTinkeringLabImages/IMG-20240805-WA0001.webp';
import GalleryImg2 from '../assets/ForSchoolsStemTinkeringLabImages/IMG20230907100904.webp';
import GalleryImg3 from '../assets/ForSchoolsStemTinkeringLabImages/IMG20241106123513.webp';
import GalleryImg4 from '../assets/ForSchoolsStemTinkeringLabImages/IMG20241226143613.webp';
import GalleryImg5 from '../assets/ForSchoolsStemTinkeringLabImages/IMG20251016105208.webp';
import GalleryImg6 from '../assets/ForSchoolsStemTinkeringLabImages/IMG20251017160909.webp';
//hero section images
// import herosectionimg from '../assets/ForSchoolsStemTinkeringLabImages/Hero section - STEM Tinkering lab.webp';
//WHY STEM TINKERING LABS? images
import whystemTinkeringLab1 from '../assets/ForSchoolsStemTinkeringLabImages/WHY STEM TINKERING LABS_ - 1.webp';
import whystemTinkeringLab2 from '../assets/ForSchoolsStemTinkeringLabImages/WHY STEM TINKERING LABS_ - 2.webp';
import whystemTinkeringLab3 from '../assets/ForSchoolsStemTinkeringLabImages/WHY STEM TINKERING LABS_ - 3.webp';
import whystemTinkeringLab4 from '../assets/ForSchoolsStemTinkeringLabImages/WHY STEM TINKERING LABS_ - 4.webp';
//Support Ecosystem images
import supportecosystem1 from '../assets/ForSchoolsStemTinkeringLabImages/Support Ecosystem - 1.webp';
import supportecosystem2 from '../assets/ForSchoolsStemTinkeringLabImages/Support Ecosystem - 2.webp';
import supportecosystem3 from '../assets/ForSchoolsStemTinkeringLabImages/Support Ecosystem - 3.webp';
import supportecosystem4 from '../assets/ForSchoolsStemTinkeringLabImages/Support Ecosystem - 4.webp';
import supportecosystem5 from '../assets/ForSchoolsStemTinkeringLabImages/Support Ecosystem - 5.webp';
import supportecosystem6 from '../assets/ForSchoolsStemTinkeringLabImages/Support Ecosystem - 6.webp';
//Proprietary DIY Robotics Kits section images
import proprietaryKits1 from '../assets/ForSchoolsStemTinkeringLabImages/Proprietary DIY Kits - 1.webp';
import proprietaryKits2 from '../assets/ForSchoolsStemTinkeringLabImages/Proprietary DIY Kits - 2.webp';
import proprietaryKits3 from '../assets/ForSchoolsStemTinkeringLabImages/Proprietary DIY Kits - 3.webp';
import projectShowcaseVideo from '../assets/ForSchoolsStemLabImages/Website_Schools page_STEM Lab -  Project showcase.mp4';


function StemTinkeringLab() {

  useEffect(() => {
    // 1. Scroll Animation Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".hidden-left, .hidden-right, .fade-up")
      .forEach((el) => observer.observe(el));

    // 2. Animated Counters
    const statsSection = document.querySelector(".stats-section");
    let counted = false;

    const formatNumber = (num) => {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const statsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !counted) {
          document.querySelectorAll(".counter").forEach((counter) => {
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const inc = target / 100;
            const update = () => {
              count += inc;
              if (count < target) {
                counter.innerText = formatNumber(Math.ceil(count));
                requestAnimationFrame(update);
              } else {
                counter.innerText = formatNumber(target);
              }
            };
            update();
          });
          counted = true;
        }
      },
      { threshold: 0.5 }
    );

    if (statsSection) statsObserver.observe(statsSection);

    // 3. Curriculum Tabs
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabBtns.forEach((b) => b.classList.remove("active"));
        tabPanes.forEach((p) => p.classList.remove("active"));
        btn.classList.add("active");
        const target = btn.getAttribute("data-tab");
        document.getElementById(target).classList.add("active");
      });
    });

    // 4. FAQ Accordion
    const accordionHeaders = document.querySelectorAll(".stem-tinkering-lab-root .accordion-header");
    const accordionCleanups = [];
    const anchorCleanups = [];

    accordionHeaders.forEach((header) => {
      const handleAccordionClick = () => {
        const body = header.nextElementSibling;
        header.classList.toggle("active");
        if (header.classList.contains("active")) {
          body.style.maxHeight = body.scrollHeight + "px";
        } else {
          body.style.maxHeight = 0;
        }
      };

      header.addEventListener("click", handleAccordionClick);
      accordionCleanups.push(() => header.removeEventListener("click", handleAccordionClick));
    });

    // 4b. Smooth scroll for hero section CTA links
    const heroNavLinks = document.querySelectorAll('.stem-tinkering-lab-root .hero-btns a[href^="#"]');

    heroNavLinks.forEach((link) => {
      const handleHeroNavClick = (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.replace('#', '');
        if (!targetId) return;

        const target = document.getElementById(targetId);
        if (!target) return;

        const headerOffset = 113;
        const targetY = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      };

      link.addEventListener('click', handleHeroNavClick);
      anchorCleanups.push(() => link.removeEventListener('click', handleHeroNavClick));
    });

    // 4c. Smooth scroll for all links to contact section
    const contactLinks = document.querySelectorAll('.stem-tinkering-lab-root a[href="#contact-section"]');

    contactLinks.forEach((link) => {
      const handleLinkClick = (e) => {
        e.preventDefault();
        const target = document.getElementById("contact-section");
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

      link.addEventListener("click", handleLinkClick);
      anchorCleanups.push(() => link.removeEventListener("click", handleLinkClick));
    });

    // 5. DIY Kit Slider Logic
    let slideIndex = 0;
    const slides = document.querySelectorAll(".diy-slide");

    if (slides.length > 0) {
      slides.forEach(slide => slide.style.display = "none");

      const showSlides = () => {
        slides.forEach(slide => slide.style.display = "none");
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000);
      };

      showSlides();
    }

    // 6. Form Submission
    const form = document.getElementById('enquiryForm');
    let handleSubmit;

    if (form) {
      handleSubmit = (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.innerHTML;

        const school = document.getElementById('schoolName').value;
        const name = document.getElementById('fullName').value;
        const phone = document.getElementById('phoneNumber').value;
        const email = document.getElementById('emailId').value;
        const state = document.getElementById('state').value;
        const msg = document.getElementById('message').value;

        btn.innerText = 'Opening WhatsApp...';
        btn.style.opacity = '0.7';

        setTimeout(() => {
          const businessPhone = "918197984847";
          const text = `*STEM TINKERING LAB* %0a%0a` +
            `*School:* ${school}%0a` +
            `*Name:* ${name}%0a` +
            `*Phone:* ${phone}%0a` +
            `*Email:* ${email}%0a` +
            `*State:* ${state}%0a` +
            `*Message:* ${msg}`;

          const whatsappUrl = `https://wa.me/${businessPhone}?text=${text}`;
          window.open(whatsappUrl, '_blank');

          form.reset();
          btn.innerHTML = originalText;
          btn.style.opacity = '1';
        }, 1000);
      };

      form.addEventListener('submit', handleSubmit);
    }

    return () => {
      accordionCleanups.forEach((cleanup) => cleanup());
      anchorCleanups.forEach((cleanup) => cleanup());
      if (form && handleSubmit) {
        form.removeEventListener('submit', handleSubmit);
      }
      observer.disconnect();
      if (statsSection) statsObserver.disconnect();
    };
  }, []);

  return (
    <div className="stem-tinkering-lab-root">
      <SEO
        title="STEM Tinkering Lab for Schools | NEP 2020 Aligned Setup"
        description="Install NEP 2020 aligned STEM Tinkering Labs in schools. Robotics, AI, IoT & 3D Printing setup with training, curriculum & nationwide support."
        canonical="https://techyguide.in/stem-tinkering-lab-for-schools-india"
      />
      <a href="#contact-section" className="floating-cta">
        <i className="fas fa-file-invoice-dollar"></i> Get STEM Proposal
      </a>

      <section className="hero-section">
        <div className="hero-bg-animation"></div>
        <div className="container hero-container">
          <div className="hero-text hidden-left">
            <div className="brand-tag">
              <img src={logoImg} alt="TechyGuide Logo" className="hero-logo" />
              <span>NEP 2020 Aligned STEM Tinkering Labs for Schools </span>
            </div>
            <h1>Igniting Young Minds with <span className="highlight-text">STEM Tinkering Labs</span></h1>
            <p>A space for "Making, Breaking, and Creating." Empowering students with hands-on skills in <strong>Robotics, IoT, 3D Printing, and AI</strong> to solve real-world problems.</p>
            <div className="hero-btns">
              <a href="#packages" className="btn btn-orange">Setup Lab</a>
              <a href="#curriculum" className="btn btn-glass">Curriculum</a>
            </div>
          </div>
        </div>
      </section>

      <section className="guidelines-section" id="mandates">
        <div className="container">
          <div className="guideline-header text-center fade-up">
            <h2 className="section-heading">WHY STEM TINKERING LABS?</h2>
            <p className="section-subtext"><span className="section-subtext-title">Why Establish a STEM Tinkering Lab in Your School?</span><br></br><br /><span>STEM Tinkering Labs are experiential learning spaces designed to align with NEP 2020 and 21st-century skill development. These labs enable students to apply theoretical knowledge into real-world problem solving using technology. </span></p>
          </div>

          <div className="guidelines-grid">
            <div className="guide-card fade-up">
              <div className="guide-img">
                <img src={whystemTinkeringLab1} alt="Skills" />
                <div className="guide-badge">Skill Building</div>
              </div>
              <div className="guide-content">
                <h3>Skill Development</h3>
                <p>Hands-on learning in coding, robotics, AI, and electronics, nurturing critical thinking and entrepreneurial mindset. </p>
              </div>
            </div>

            <div className="guide-card fade-up">
              <div className="guide-img">
                <img src={whystemTinkeringLab2} alt="Innovation" />
                <div className="guide-badge">Innovation</div>
              </div>
              <div className="guide-content">
                <h3> Innovation Culture</h3>
                <p>Encourages students to identify local challenges and build functional prototypes as solutions. </p>
              </div>
            </div>

            <div className="guide-card fade-up">
              <div className="guide-img">
                <img src={whystemTinkeringLab3} alt="Integration" />
                <div className="guide-badge">STEM Integration</div>
              </div>
              <div className="guide-content">
                <h3>Interdisciplinary Learning</h3>
                <p>Brings Science, Technology, Engineering, and Mathematics together through a cohesive, project-driven learning model.</p>
              </div>
            </div>

            <div className="guide-card fade-up">
              <div className="guide-img">
                <img src={whystemTinkeringLab4} alt="Career" />
                <div className="guide-badge">Future Ready</div>
              </div>
              <div className="guide-content">
                <h3>Career Readiness</h3>
                <p>Prepares learners to explore and apply next-generation technologies like IoT, AI, and 3D Printing, shaping future innovators. </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat-item fade-up">
            <h2><span className="counter" data-target="2500">0</span>+</h2>
            <p>Teachers Trained</p>
          </div>
          <div className="stat-item fade-up">
            <h2><span className="counter" data-target="700">0</span>+</h2>
            <p>Schools Served</p>
          </div>
          <div className="stat-item fade-up">
            <h2><span className="counter" data-target="200000">0</span>+</h2>
            <p>Students Impacted</p>
          </div>
          <div className="stat-item fade-up">
            <h2><span className="counter" data-target="26">0</span>+</h2>
            <p>States Covered</p>
          </div>

        </div>
      </section>

      <section className="curriculum-section" id="curriculum">
        <div className="container">
          <h2 className="section-heading text-center fade-up">Grade-Wise Curriculum Roadmap</h2>
          <p className="section-subtext text-center fade-up">A structured progression from foundational tinkering to advanced AI and robotics innovation. </p>

          <div className="tabs-wrapper fade-up">
            <div className="tabs-header">
              <button className="tab-btn active" data-tab="primary">Primary (1-5)</button>
              <button className="tab-btn" data-tab="middle">Middle (6-8)</button>
              <button className="tab-btn" data-tab="senior">Secondary (9-10)</button>
            </div>

            <div className="tabs-content">
              <div className="tab-pane active" id="primary">
                <div className="curr-grid">
                  <div className="curr-card">
                    <h4><i className="fas fa-cube"></i> Mechatronics & 3D Pens</h4>
                    <ul>
                      <li>▸ Lego-based structures (Bridges, Towers)  </li>
                      <li>▸ Simple Machines (Levers, Pulleys) </li>
                      <li>▸ Introduction to 3D Pen</li>
                    </ul>
                  </div>
                  <div className="curr-card">
                    <h4><i className="fas fa-bolt"></i> Basic Electronics & Robotics</h4>
                    <ul>
                      <li>▸ Introduction to LED & Batteries</li>
                      <li>▸ Simple & Parallel Circuits</li>
                      <li>▸ Fun with Switches & Buzzers </li>
                    </ul>
                  </div>
                  <div className="curr-card">
                    <h4><i className="fas fa-code"></i> Intro to Coding</h4>
                    <ul>
                      <li>▸ Block-based Coding</li>
                      <li>▸ Sequencing & Loops</li>
                      <li>▸ Creating Simple Animations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="tab-pane" id="middle">
                <div className="curr-grid">
                  <div className="curr-card">
                    <h4><i className="fas fa-robot"></i> Robotics, Electronics & IoT </h4>
                    <ul>
                      <li>▸ Line Follower & Obstacle Avoider </li>
                      <li>▸ Automatic Street Light </li>
                      <li>▸ Home Automation & Control </li>
                    </ul>
                  </div>
                  <div className="curr-card">
                    <h4><i className="fas fa-cube"></i> 3D Printing & Design</h4>
                    <ul>
                      <li>▸ Introduction to 3D Design Software  </li>
                      <li>▸ Operation of 3D Printers </li>
                      <li>▸ Slicing & Printing Models </li>
                    </ul>
                  </div>
                  <div className="curr-card">
                    <h4><i className="fas fa-plane"></i>     AI & Coding </h4>
                    <ul>
                      <li>▸ AI Applications & Projects  </li>
                      <li>▸ Introduction to Python Programming </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="tab-pane" id="senior">
                <div className="curr-grid">
                  <div className="curr-card">
                    <h4><i className="fas fa-wifi"></i> Robotics & IoT </h4>
                    <ul>
                      <li>▸ Humanoid Robot Building </li>
                      <li>▸ Advance IoT Projects C</li>
                      <li>▸ Milestone Projects </li>
                    </ul>
                  </div>
                  <div className="curr-card">
                    <h4><i className="fab fa-python"></i> 3D Printing & Drone  </h4>
                    <ul>
                      <li>▸ Aerodynamics Basics </li>
                      <li>▸ Drone Mechanics & Control </li>
                      <li>▸ Advance Project in 3D Printing </li>
                    </ul>
                  </div>
                  <div className="curr-card">
                    <h4><i className="fas fa-microchip"></i>  AI & Coding </h4>
                    <ul>
                      <li>▸ AI Hardware Integration</li>
                      <li>▸ Computer Vision & Machine Learning </li>
                      <li>▸ Face Detection & Recognition </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="infra-section">
        <div className="container">
          <h2 className="section-heading text-white fade-up">Lab Infrastructure Requirements</h2>
          <div className="infra-grid">
            <div className="infra-box fade-up">
              <i className="fas fa-laptop"></i>
              <h3>Computing</h3>
              <p><strong>Ratio:</strong> 2:1 (Student to Device)</p>
              <p><strong>Specs:</strong> Intel i5, 8GB RAM, Win 10+</p>
              <p><strong>Connectivity:</strong> Bluetooth, Webcam, Wi-Fi</p>
            </div>
            <div className="infra-box fade-up">
              <i className="fas fa-chair"></i>
              <h3>Furniture</h3>
              <p><strong>Activity Tables:</strong> 1 per 4 students</p>
              <p><strong>Arena Tables:</strong> 2 for robot testing</p>
              <p><strong>Storage:</strong> Lockable Cupboards</p>
            </div>
            <div className="infra-box fade-up">
              <i className="fas fa-project-diagram"></i>
              <h3>Presentation</h3>
              <p>Projector with proper screen setup for class presentations and demonstrations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="packages-section" id="packages">
        <div className="container">
          <h2 className="section-heading text-center fade-up">STEM Tinkering Lab Packages</h2><br></br>
          <div className="pricing-wrapper">
            <div className="pricing-card fade-up">
              <h3>Mini Lab</h3>
              <div className="capacity">Up to 500 Students</div>
              <ul>
                <li><i className="fas fa-box"></i> 5 I-BoT Starter Kits</li>
                <li><i className="fas fa-box"></i> 5 TeBoT Champ Kit</li>
                <li><i className="fas fa-microchip"></i> 5 TechBoT Electronics Kit</li>
                <li><i className="fas fa-box"></i> 5 E-Blox Kit</li>
                <li><i className="fas fa-robot"></i> 5 Mechatronics Kit</li>
                <li><i className="fas fa-cube"></i> 1 3D Printer &amp; Consumables</li>
                <li><i className="fas fa-pen"></i> 5 3D Pen</li>
                <li><i className="fas fa-plane"></i> 1 Drone</li>
                <li><i className="fas fa-wifi"></i> 5 Set of sensors pack</li>
                <li><i className="fas fa-microchip"></i> 10 set of Resistor Pack</li>
                <li><i className="fas fa-tools"></i> 2 set of Mechanical tools</li>
                <li><i className="fas fa-shield-alt"></i> 10 set of safety materials</li>
                <li><i className="fas fa-book"></i> 5 set of Books</li>
                <li><i className="fas fa-chalkboard-teacher"></i> 5 days Physical Training</li>
                <li><i className="fas fa-laptop"></i> 10 Online Training Session</li>
                <li><i className="fas fa-paint-brush"></i> Lab decorations</li>
                <li><i className="fas fa-graduation-cap"></i> Content from grade 1 to 12</li>
                <li><i className="fas fa-lock"></i> LMS Access for Students &amp; teachers</li>
              </ul>
              <a href="#contact-section" className="btn btn-outline-dark">Request Details</a>
            </div>

            <div className="pricing-card popular fade-up">
              <div className="badge">Most Popular</div>
              <h3>Medium Lab</h3>
              <div className="capacity">Up to 1000 Students</div>
              <ul>
                <li><i className="fas fa-box"></i> 8 I-BoT Starter Kits</li>
                <li><i className="fas fa-box"></i> 8 TeBoT Champ Kit</li>
                <li><i className="fas fa-microchip"></i> 8 TechBoT Electronics Kit</li>
                <li><i className="fas fa-box"></i> 8 E-Blox Kit</li>
                <li><i className="fas fa-robot"></i> 8 Mechatronics Kit</li>
                <li><i className="fas fa-cube"></i> 1 3D Printer &amp; Consumables</li>
                <li><i className="fas fa-pen"></i> 8 3D Pen</li>
                <li><i className="fas fa-plane"></i> 1 Drone</li>
                <li><i className="fas fa-wifi"></i> 8 Set of sensors pack</li>
                <li><i className="fas fa-microchip"></i> 20 set of Resistor Pack</li>
                <li><i className="fas fa-tools"></i> 2 set of Mechanical tools</li>
                <li><i className="fas fa-shield-alt"></i> 10 set of safety materials</li>
                <li><i className="fas fa-book"></i> 8 set of Books</li>
                <li><i className="fas fa-chalkboard-teacher"></i> 5 days Physical Training</li>
                <li><i className="fas fa-laptop"></i> 15 Online Training Session</li>
                <li><i className="fas fa-paint-brush"></i> Lab decorations</li>
                <li><i className="fas fa-graduation-cap"></i> Content from grade 1 to 12</li>
                <li><i className="fas fa-lock"></i> LMS Access for Students &amp; teachers</li>
              </ul>
              <a href="#contact-section" className="btn btn-orange">Request Details</a>
            </div>

            <div className="pricing-card fade-up">
              <h3>Large Lab</h3>
              <div className="capacity">Up to 1500 Students</div>
              <ul>
                <li><i className="fas fa-box"></i> 10 I-BoT Starter Kits</li>
                <li><i className="fas fa-box"></i> 10 TeBoT Champ Kit</li>
                <li><i className="fas fa-microchip"></i> 10 TechBoT Electronics Kit</li>
                <li><i className="fas fa-box"></i> 10 E-Blox Kit</li>
                <li><i className="fas fa-robot"></i> 10 Mechatronics Kit</li>
                <li><i className="fas fa-cube"></i> 1 3D Printer &amp; Consumables</li>
                <li><i className="fas fa-pen"></i> 10 3D Pen</li>
                <li><i className="fas fa-plane"></i> 1 Drone</li>
                <li><i className="fas fa-wifi"></i> 10 Set of sensors pack</li>
                <li><i className="fas fa-microchip"></i> 30 set of Resistor Pack</li>
                <li><i className="fas fa-tools"></i> 2 set of Mechanical tools</li>
                <li><i className="fas fa-shield-alt"></i> 10 set of safety materials</li>
                <li><i className="fas fa-book"></i> 10 set of Books</li>
                <li><i className="fas fa-chalkboard-teacher"></i> 5 days Physical Training</li>
                <li><i className="fas fa-laptop"></i> 20 Online Training Session</li>
                <li><i className="fas fa-paint-brush"></i> Lab decorations</li>
                <li><i className="fas fa-graduation-cap"></i> Content from grade 1 to 12</li>
                <li><i className="fas fa-lock"></i> LMS Access for Students &amp; teachers</li>
              </ul>
              <a href="#contact-section" className="btn btn-outline-dark">Request Details</a>
            </div>
          </div>
        </div>
      </section>

      <section className="diy-section">
        <div className="container">
          <div className="diy-container fade-up">
            <div className="diy-content">
              <div className="badge-diy">In-House Innovation</div>
              <h2>Proprietary DIY Kits</h2>
              <p>Our labs feature robust, modular kits developed in-house, designed for infinite prototyping and durability.</p>

              <ul className="diy-features">
                <li><i className="fas fa-microchip"></i> <strong>Core:</strong> Arduino / ESP32 Compatible</li>
                <li><i className="fas fa-plug"></i> <strong>Parts:</strong> Modular Sensors & Motors</li>
                <li><i className="fas fa-tools"></i> <strong>Build:</strong> Durable Chassis</li>
                <li><i className="fas fa-wifi"></i> <strong>Tech:</strong> Bluetooth/WiFi Enabled</li>
              </ul>
              <a href="#contact-section" className="btn btn-light btn-mt">View Kit Specs</a>
            </div>

            <div className="diy-image slider-wrapper">
              <div className="diy-slide fade">
                <img src={proprietaryKits1} alt="I-BoT Kit" />
                {/* <div className="slide-caption">I-BoT Starter Kit</div> */}
              </div>
              <div className="diy-slide fade">
                <img src={proprietaryKits2} alt="TeBoT Kit" />
                {/* <div className="slide-caption">TeBoT Kit</div> */}
              </div>
              <div className="diy-slide fade">
                <img src={proprietaryKits3} alt="E-Blox Kit" />
                {/* <div className="slide-caption">E-Blox Kit</div> */}
              </div>
              <div className="floating-kit-tag">Made in India</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase section copied from Stem Lab page */}
      <section className="video-section" id="showcase-video">
        <div className="container">
          <div className="section-header">
            <h2><span className="project-teal">Project</span> <span className="showcase-orange">Showcase</span></h2>
            <p>Watch one of our featured student projects below.</p>
          </div>

          <div className="video-wrapper">
            <video className="showcase-video" controls preload="metadata" playsInline>
              <source src={projectShowcaseVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="support-section">
        <div className="container">
          <h2 className="section-heading text-center fade-up">Support Ecosystem</h2>
          <p className="section-subtext text-center fade-up">Comprehensive support from setup to certification.</p>

          <div className="support-grid fade-up">
            <div className="support-card">
              <div className="card-image">
                <img src={supportecosystem1} alt="Training" />
              </div>
              <div className="card-content">
                <div className="card-icon"><i className="fas fa-chalkboard-teacher"></i></div>
                <h4>3 Days Onsite Training</h4>
                <p>Intensive hands-on training for teachers at your school.</p>
              </div>
            </div>
            <div className="support-card">
              <div className="card-image">
                <img src={supportecosystem2} alt="Virtual Training" />
              </div>
              <div className="card-content">
                <div className="card-icon"><i className="fas fa-laptop-code"></i></div>
                <h4>Virtual Training</h4>
                <p>Regular online sessions (10-24 depending on package) throughout the year.</p>
              </div>
            </div>
            <div className="support-card">
              <div className="card-image">
                <img src={supportecosystem3} alt="Monitoring" />
              </div>
              <div className="card-content">
                <div className="card-icon"><i className="fas fa-eye"></i></div>
                <h4>Quarterly Monitoring</h4>
                <p>Regular checks (Virtual/Onsite) to ensure lab functionality.</p>
              </div>
            </div>
            <div className="support-card">
              <div className="card-image">
                <img src={supportecosystem4} alt="Certification" />
              </div>
              <div className="card-content">
                <div className="card-icon"><i className="fas fa-certificate"></i></div>
                <h4>Certification</h4>
                <p>Certificates for School, Teachers, and Students upon program completion.</p>
              </div>
            </div>
            <div className="support-card">
              <div className="card-image">
                <img src={supportecosystem5} alt="Assessment" />
              </div>
              <div className="card-content">
                <div className="card-icon"><i className="fas fa-clipboard-list"></i></div>
                <h4>Question Bank</h4>
                <p>Provided question banks for conducting student assessments.</p>
              </div>
            </div>
            <div className="support-card">
              <div className="card-image">
                <img src={supportecosystem6} alt="Competition" />
              </div>
              <div className="card-content">
                <div className="card-icon"><i className="fas fa-trophy"></i></div>
                <h4>Innovation Fest</h4>
                <p>Yearly innovation competition opportunity for students.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
      <section className="video-section">
        <div className="container">
          <div className="video-content-wrapper">
            <h2 className="section-heading text-center text-white fade-up">See Innovation in Action</h2>
            <p className="section-subtext text-center text-white fade-up" style={{ opacity: 0.9 }}>
              Transforming classrooms into hubs of creativity and logic.
            </p>
            <div className="video-container fade-up">
              <iframe src="https://www.youtube.com/embed/LXb3EKWsInQ?rel=0&modestbranding=1" title="TechyGuide Lab Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>
      */}

      <section className="timeline-section">
        <div className="container">
          <h2 className="section-heading text-center fade-up">Execution Timeline (35 Days)</h2>
          <div className="timeline-box fade-up">
            <div className="t-item"><span>Day 0</span><p>MoU Signed</p></div>
            <div className="t-line"></div>
            <div className="t-item"><span>Day 5</span><p>50% Advance</p></div>
            <div className="t-line"></div>
            <div className="t-item"><span>Day 20</span><p>Delivery</p></div>
            <div className="t-line"></div>
            <div className="t-item"><span>Day 30</span><p>Setup</p></div>
            <div className="t-line"></div>
            <div className="t-item"><span>Day 33</span><p>Go-Live</p></div>
            <div className="t-line"></div>
            <div className="t-item"><span>Day 35</span><p>Certify</p></div>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <h2 className="section-heading text-center fade-up">Our Labs in Action</h2>
          <p className="section-subtext text-center fade-up">Deployed in 350+ Schools.</p>
          <div className="gallery-grid">
            <div className="gallery-item large fade-up"><img src={GalleryImg1} alt="Hands-on Learning" /><div className="gallery-overlay"><h5>Hands-on Learning</h5></div></div>
            <div className="gallery-item fade-up"><img src={GalleryImg2} alt="Student Workshop" /><div className="gallery-overlay"><h5>Student Workshop</h5></div></div>
            <div className="gallery-item fade-up"><img src={GalleryImg3} alt="Lab Activities" /><div className="gallery-overlay"><h5>Lab Activities</h5></div></div>
            <div className="gallery-item fade-up"><img src={GalleryImg4} alt="STEM Projects" /><div className="gallery-overlay"><h5>STEM Projects</h5></div></div>
            <div className="gallery-item fade-up"><img src={GalleryImg5} alt="Tinkering Session" /><div className="gallery-overlay"><h5>Tinkering Session</h5></div></div>
            <div className="gallery-item fade-up"><img src={GalleryImg6} alt="Student Innovation" /><div className="gallery-overlay"><h5>Student Innovation</h5></div></div>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="container">
          <h2 className="section-heading text-center fade-up">Trusted by Educators</h2>
        </div>
        <div className="slider">
          <div className="slide-track">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"We have used TechyGuide's ATL service. Their services were very good and always respond to our queries promptly."</p>
              <div className="profile">
                <div className="profile-icon">GP</div>
                <div className="profile-info">
                  <h4>Headmaster</h4>
                  <span>Gurukul Public School, Odisha</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"I have learned AI, Robotics, Coding, and 3D printing. These courses are very interesting to me and helpful for my students."</p>
              <div className="profile">
                <div className="profile-icon">GV</div>
                <div className="profile-info">
                  <h4>Teacher</h4>
                  <span>Green Valley School Tebo</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>“Trainers are exceptionally good at their knowledge. They improved our skills significantly. Thank you!”</p>
              <div className="profile">
                <div className="profile-icon">ND</div>
                <div className="profile-info">
                  <h4>Teacher</h4>
                  <span>North Delhi Public School</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"We have used TechyGuide's ATL service. Their services were very good and always respond to our queries promptly."</p>
              <div className="profile">
                <div className="profile-icon">SB</div>
                <div className="profile-info">
                  <h4>Headmaster</h4>
                  <span>Shemrock School Balaghat</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"I have learned AI, Robotics, Coding, and 3D printing. These courses are very interesting to me and helpful for my students."</p>
              <div className="profile">
                <div className="profile-icon">SJ</div>
                <div className="profile-info">
                  <h4>Teacher</h4>
                  <span>St. Joans School</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"Trainers are exceptionally good at their knowledge. They did amazing to our skills. Thank you!"</p>
              <div className="profile">
                <div className="profile-icon">MI</div>
                <div className="profile-info">
                  <h4>Teacher</h4>
                  <span>Magadham International School</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"We have used TechyGuide's ATL service. Their services were very good and always respond to our queries promptly."</p>
              <div className="profile">
                <div className="profile-icon">JI</div>
                <div className="profile-info">
                  <h4>Headmaster</h4>
                  <span>Jajoo International School</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"I have learned AI, Robotics, Coding, and 3D printing. These courses are very interesting to me and helpful for my students."</p>
              <div className="profile">
                <div className="profile-icon">HI</div>
                <div className="profile-info">
                  <h4>Teacher</h4>
                  <span>Harimaya International School</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container small-container">
          <h2 className="section-heading fade-up">Frequently Asked Questions</h2>
          <div className="accordion fade-up">
            <div className="accordion-item">
              <button className="accordion-header">Does the package include GST?</button>
              <div className="accordion-body">
                <p>Yes, all prices listed are inclusive of GST.</p>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-header">Is there a warranty?</button>
              <div className="accordion-body">
                <p>Yes, we provide a 1-year manufacturing warranty on all microcontrollers.</p>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-header">What does the teacher training cover?</button>
              <div className="accordion-body">
                <p>The program includes 3 days of onsite physical training and online sessions covering Coding, Robotics, AI, and IoT.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-area" id="contact-section">
        <div className="container">
          <h2 className="section-heading text-center fade-up">Get Your Customized STEM Lab Proposal Today</h2>
        </div>
        <div className="container contact-grid">
          <div className="contact-info fade-up">
            <p><strong>Corporate Office:</strong> #80, 2nd Floor, 1st Main, VSR Layout, A Narayanapura Main Road, Bangalore 560016.</p>
            <p><strong>Registered Office:</strong> 1st & 2nd Floor, Jyoti Complex, Bhoisahi, Balasore-756001, Odisha.</p>

            <div className="info-box">
              <i className="fas fa-phone-alt"></i>
              <div>
                <strong>Call Us</strong>
                <p>+91 8197984847</p>
              </div>
            </div>
            <div className="info-box">
              <i className="fas fa-envelope"></i>
              <div>
                <strong>Email Us</strong>
                <p>Sales@techyguide.in</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper fade-up">
            <form id="enquiryForm">
              <div className="form-group">
                <label htmlFor="schoolName">School Name</label>
                <input type="text" id="schoolName" name="schoolName" required placeholder="Enter School Name" />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Name</label>
                  <input type="text" id="fullName" name="fullName" required placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input type="tel" id="phoneNumber" name="phoneNumber" required placeholder="Mobile Number" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="emailId">Email ID</label>
                  <input type="email" id="emailId" name="emailId" required placeholder="email@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <input type="text" id="state" name="state" required placeholder="State" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="3" placeholder="Any specific requirement?"></textarea>
              </div>

              <button type="submit" className="btn btn-full">Send via WhatsApp <i className="fab fa-whatsapp"></i></button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StemTinkeringLab;