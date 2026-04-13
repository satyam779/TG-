import React, { useEffect } from 'react';
import './CompositeSkillLab.css';
import LogoImg from '../assets/ForSchoolsCompositeSkillLabImages/Logo_TG_Tagline 2.png';
import LabImage1 from '../assets/ForSchoolsCompositeSkillLabImages/IMG20240604113822.jpg';
import LabImage2 from '../assets/ForSchoolsCompositeSkillLabImages/IMG20241003111950.jpg';
import LabImage3 from '../assets/ForSchoolsCompositeSkillLabImages/Media (8).jpeg';
import LabImage4 from '../assets/ForSchoolsCompositeSkillLabImages/WhatsApp Image 2021-10-04 at 11.56.27 AM (2).jpeg';
import LabImage5 from '../assets/ForSchoolsCompositeSkillLabImages/WhatsApp Image 2021-08-14 at 17.56.00 (1).jpeg';
import LabImage6 from '../assets/ForSchoolsCompositeSkillLabImages/WhatsApp Image 2021-09-01 at 23.11.56.jpeg';
// hero image
import HeroImage from '../assets/ForSchoolsCompositeSkillLabImages/Hero section - Composite skill lab V1.jpg';
import HeroImage2 from '../assets/ForSchoolsCompositeSkillLabImages/IMG20240604113822.jpg';
//Purpose & Strategic Benefits image
import PurposeStrategicBenefits1 from '../assets/ForSchoolsCompositeSkillLabImages/Purpose & Strategic Benefits - 1.jpg';
import PurposeStrategicBenefits2 from '../assets/ForSchoolsCompositeSkillLabImages/Purpose & Strategic Benefits - 2.jpg';
import PurposeStrategicBenefits3 from '../assets/ForSchoolsCompositeSkillLabImages/Purpose & Strategic Benefits - 3.jpg';
import PurposeStrategicBenefits4 from '../assets/ForSchoolsCompositeSkillLabImages/Purpose & Strategic Benefits - 4.jpg';
//Curriculum & Skill Modules images
import CurriculumSkillModules1 from '../assets/ForSchoolsCompositeSkillLabImages/Coding & Artificial Intelligence.png';
import CurriculumSkillModules2 from '../assets/ForSchoolsCompositeSkillLabImages/AR_VR Technology.png';
import CurriculumSkillModules3 from '../assets/ForSchoolsCompositeSkillLabImages/Design & Mass Media.png';
import CurriculumSkillModules4 from '../assets/ForSchoolsCompositeSkillLabImages/STEM Robotics.png';
import CurriculumSkillModules5 from '../assets/ForSchoolsCompositeSkillLabImages/3D Printing & CAD.png';
import CurriculumSkillModules6 from '../assets/ForSchoolsCompositeSkillLabImages/Electronics & IoT.png';
import CurriculumSkillModules7 from '../assets/ForSchoolsCompositeSkillLabImages/Machinery & Mechanics.png';
import CurriculumSkillModules8 from '../assets/ForSchoolsCompositeSkillLabImages/Handicrafts & Arts.png';
import CurriculumSkillModules9 from '../assets/ForSchoolsCompositeSkillLabImages/Aerospace & Drones.png';



export default function CompositeSkillLab() {
  // SEO Meta Tags & Document Title
  useEffect(() => {
    // Update document title
    document.title = 'CBSE Composite Skill Lab Setup | 600 Sq Ft';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Complete CBSE Composite Skill Lab setup for schools with 600 sq ft mandatory infrastructure. End-to-end lab design, equipment, training & compliance support.';

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://techyguide.com/cbse-composite-skill-lab-setup-for-schools-india';

    // Update or create Open Graph tags
    const ogTags = {
      'og:title': 'CBSE Composite Skill Lab Setup | 600 Sq Ft Mandatory',
      'og:description': 'Complete CBSE Composite Skill Lab setup for schools with 600 sq ft mandatory infrastructure. End-to-end lab design, equipment, training & compliance support.',
      'og:url': 'https://techyguide.com/cbse-composite-skill-lab-setup-for-schools-india',
      'og:type': 'website'
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.content = content;
    });

    return () => {
      document.title = 'TechyGuide';
    };
  }, []);

  // DOM Interactions & Animations
  useEffect(() => {
    // 1. Scroll Animations (Fade Up / Slide In)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.composite-skill-lab-root .hidden-left, .composite-skill-lab-root .hidden-right, .composite-skill-lab-root .fade-up').forEach(el => observer.observe(el));

    // 2. Animated Counters (70:30 Stats)
    const statsSection = document.querySelector('.composite-skill-lab-root .stats-section');
    let counted = false;

    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !counted) {
        document.querySelectorAll('.composite-skill-lab-root .counter').forEach(counter => {
          const target = +counter.getAttribute('data-target');
          let count = 0;
          const inc = target / 50;

          const update = () => {
            count += inc;
            if (count < target) {
              counter.innerText = Math.ceil(count);
              requestAnimationFrame(update);
            } else {
              counter.innerText = target;
            }
          };
          update();
        });
        counted = true;
      }
    }, { threshold: 0.5 });

    if (statsSection) statsObserver.observe(statsSection);

    // 3. Tab Functionality (Curriculum Zones)
    const tabBtns = document.querySelectorAll('.composite-skill-lab-root .tab-btn');
    const tabPanes = document.querySelectorAll('.composite-skill-lab-root .tab-pane');
    const tabCleanups = [];

    tabBtns.forEach(btn => {
      const handleTabClick = () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const target = btn.getAttribute('data-tab');
        document.getElementById(target).classList.add('active');
      };

      btn.addEventListener('click', handleTabClick);
      tabCleanups.push(() => btn.removeEventListener('click', handleTabClick));
    });

    // 4. FAQ Accordion
    const accordionHeaders = document.querySelectorAll('.composite-skill-lab-root .accordion-header');
    const accordionCleanups = [];

    accordionHeaders.forEach(header => {
      const handleAccordionClick = () => {
        const body = header.nextElementSibling;
        header.classList.toggle('active');

        if (header.classList.contains('active')) {
          body.style.maxHeight = body.scrollHeight + "px";
        } else {
          body.style.maxHeight = 0;
        }
      };

      header.addEventListener('click', handleAccordionClick);
      accordionCleanups.push(() => header.removeEventListener('click', handleAccordionClick));
    });

    // 5. Contact Form Handling (WhatsApp Redirect)
    const form = document.getElementById('enquiryForm');
    let handleSubmit;

    if (form) {
      handleSubmit = (e) => {
        e.preventDefault();

        const btn = form.querySelector('button');
        const originalText = btn.innerHTML;
        btn.innerText = 'Redirecting...';
        btn.style.opacity = '0.7';

        const school = document.getElementById('schoolName').value.trim();
        const name = document.getElementById('fullName').value.trim();
        const phone = document.getElementById('phoneNumber').value.trim();
        const affiliation = document.getElementById('affiliationType').value;
        const message = document.getElementById('message').value.trim();

        setTimeout(() => {
          const businessPhone = "919114036376";

          const text = `*Composite Skill Lab* %0a%0a` +
            `*School:* ${school}%0a` +
            `*Contact Person:* ${name}%0a` +
            `*Phone:* ${phone}%0a` +
            `*Affiliation Status:* ${affiliation}%0a` +
            `*Requirement:* ${message}`;

          window.open(`https://wa.me/${businessPhone}?text=${text}`, '_blank');

          form.reset();
          btn.innerHTML = originalText;
          btn.style.opacity = '1';
        }, 1000);
      };

      form.addEventListener('submit', handleSubmit);
    }

    // 6. Hero Background Image Cycling
    const heroSection = document.querySelector('.composite-skill-lab-root .hero-section');
    const imagePaths = [
      HeroImage,
      HeroImage2,
      LabImage2,
      LabImage4
    ];
    let heroImageIndex = 0;
    let heroImageInterval;

    const rotateHeroBackground = () => {
      if (heroSection && imagePaths.length > 0) {
        heroSection.style.backgroundImage = `url('${imagePaths[heroImageIndex]}')`;
        heroImageIndex = (heroImageIndex + 1) % imagePaths.length;
      }
    };

    if (heroSection) {
      rotateHeroBackground();
      heroImageInterval = setInterval(rotateHeroBackground, 4000); // Change image every 4 seconds
    }

    // 7. Smooth Scroll for Anchor Links
    const anchors = document.querySelectorAll('.composite-skill-lab-root a[href^="#"]');
    const anchorCleanups = [];

    anchors.forEach(anchor => {
      const handleAnchorClick = function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      };

      anchor.addEventListener('click', handleAnchorClick);
      anchorCleanups.push(() => anchor.removeEventListener('click', handleAnchorClick));
    });

    return () => {
      observer.disconnect();
      statsObserver.disconnect();
      tabCleanups.forEach((cleanup) => cleanup());
      accordionCleanups.forEach((cleanup) => cleanup());
      anchorCleanups.forEach((cleanup) => cleanup());
      if (form && handleSubmit) {
        form.removeEventListener('submit', handleSubmit);
      }
      if (heroImageInterval) {
        clearInterval(heroImageInterval);
      }
    };
  }, []);

  return (
    <div className="composite-skill-lab-root">
      <a href="#contact-section" className="floating-cta">
        <i className="fas fa-file-signature"></i> Get Compliance Quote
      </a>

      <section className="hero-section" data-hero-images={JSON.stringify([HeroImage, HeroImage2, LabImage2, LabImage4])}>
        <div className="hero-bg-animation">
          <div className="csl-bg-shape csl-bg-shape--1"></div>
          <div className="csl-bg-shape csl-bg-shape--2"></div>
          <div className="csl-bg-shape csl-bg-shape--3"></div>
        </div>
        <div className="container hero-container">
          <div className="hero-text hidden-left">
            <div className="brand-tag">
              <img src={LogoImg} alt="CBSE Logo" className="hero-logo" />
              <span>Circular No. Skill-75/2024</span>
            </div>
            <h1>CBSE <span className="highlight-text">Composite Skill Lab Setup</span></h1>
            <p><strong>Bridge the Skill Gap:</strong>Under Central Board of Secondary Education Circular Skill-75/2024, all affiliated schools must establish a Composite Skill Lab. Aligned with NEP 2020 and NCF-SE, it follows a 70% practical, 30% theory model. New schools must comply for affiliation; existing schools by Aug 2027. </p>
            <div className="hero-btns">
              <a href="#configurations" className="btn btn-orange">View Layout Options</a>
              <a href="#mandates" className="btn btn-glass">View Benefits</a>
            </div>
          </div>
        </div>
      </section>

      <section className="guidelines-section" id="mandates">
        <div className="container">
          <div className="guideline-header text-center fade-up">
            <h2 className="section-heading">Purpose & Strategic Benefits</h2>
            <p className="section-subtext">Aligning with National Directives to foster Innovation and Career Readiness</p>
          </div>

          <div className="guidelines-grid">

            <div className="guide-card fade-up">
              <div className="guide-img">
                <img src={PurposeStrategicBenefits1} alt="NEP 2020" />
                <div className="guide-badge">Policy</div>
              </div>
              <div className="guide-content">
                <h3>NEP 2020 & NCF-SE</h3>
                <p>Directly implements the mandates of the <strong>National Education Policy 2020</strong> and <strong>NCF-SE</strong>, ensuring schools move beyond rote learning to competency-based education.</p>
              </div>
            </div>

            <div className="guide-card fade-up">
              <div className="guide-img">
                <img src={PurposeStrategicBenefits2} alt="Employment" />
                <div className="guide-badge">Career</div>
              </div>
              <div className="guide-content">
                <h3>Employment Prospects</h3>
                <p>Enhances vocational education to improve employability. Equips students with trade-specific skills that open doors to diverse career paths and industry roles.</p>
              </div>
            </div>

            <div className="guide-card fade-up">
              <div className="guide-img">
                <img src={PurposeStrategicBenefits3} alt="Innovation" />
                <div className="guide-badge">Skills</div>
              </div>
              <div className="guide-content">
                <h3>Critical Thinking</h3>
                <p>Designed to develop essential 21st-century skills: <strong>Problem-Solving, Critical Thinking, and Innovation</strong>. Students learn to analyze real-world issues and prototype solutions.</p>
              </div>
            </div>

            <div className="guide-card fade-up">
              <div className="guide-img">
                <img src={PurposeStrategicBenefits4} alt="Compliance" />
                <div className="guide-badge">Mandatory</div>
              </div>
              <div className="guide-content">
                <h3>Implementation Rules</h3>
                <ul className="guide-points">
                  <li><strong>New Schools:</strong> Lab is mandatory for Fresh Affiliation.</li>
                  <li><strong>Existing Schools:</strong> Must comply by August 2027</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <h2 className="section-heading text-center" style={{ marginBottom: '40px' }}> Pedagogical Approach</h2>
          <div className="stats-grid">
            <div className="stat-item fade-up">
              <h2 className="counter" data-target="70">0</h2><span>%</span>
              <p>Practical Activities<br />(Hands-on Experience)</p>
            </div>
            <div className="stat-item fade-up">
              <h2 className="counter" data-target="30">0</h2><span>%</span>
              <p>Theory Concepts<br />(Theory Learning Model)</p>
            </div>
            <div className="stat-item fade-up">
              <h2 className="counter" data-target="100">0</h2><span>%</span>
              <p>Industry Aligned<br />(Career Readiness)</p>
            </div>
            <div className="stat-item fade-up">
              <h2 className="counter" data-target="3">0</h2><span>Yrs</span>
              <p>Compliance Window<br />(From Aug 2024)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="configurations-section" id="configurations">
        <div className="container">
          <h2 className="section-heading text-center fade-up">Mandatory Lab Layouts</h2>
          <p className="section-subtext text-center fade-up">Choose the configuration that fits your campus infrastructure.</p>

          <div className="config-wrapper">
            <div className="config-card fade-up">
              <div className="config-header">
                <h3>Option A: Single Lab</h3>
                <div className="area-badge">600 Sq. Ft.</div>
              </div>
              <div className="config-body">
                <p>A unified, multi-functional hall designed to host various trade activities simultaneously.</p>
                <ul className="config-specs">
                  <li><i className="fas fa-ruler-combined"></i> <strong>Min Area:</strong> 600 Sq. Ft. (One Room)</li>
                  <li><i className="fas fa-th-large"></i> <strong>Zoning:</strong> Wet/Dry/Tech zones</li>
                  <li><i className="fas fa-check-circle"></i> <strong>Best For:</strong> Large available halls</li>
                </ul>
              </div>
              <div className="config-footer">
                <a href="#contact-section" className="btn btn-orange btn-full">Select Option A</a>
              </div>
            </div>

            <div className="config-card fade-up">
              <div className="config-header">
                <h3>Option B: Split Labs</h3>
                <div className="area-badge">400 + 400 Sq. Ft.</div>
              </div>
              <div className="config-body">
                <p>Two separate rooms dedicated to specific skill sets (e.g., Tech Lab & Maker Lab).</p>
                <ul className="config-specs">
                  <li><i className="fas fa-ruler-combined"></i> <strong>Min Area:</strong> 400 Sq. Ft. (Per Room)</li>
                  <li><i className="fas fa-clone"></i> <strong>Total Area:</strong> 800 Sq. Ft. Combined</li>
                  <li><i className="fas fa-check-circle"></i> <strong>Best For:</strong> Standard classrooms</li>
                </ul>
              </div>
              <div className="config-footer">
                <a href="#contact-section" className="btn btn-outline-dark btn-full">Select Option B</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="curriculum-section" id="curriculum">
        <div className="container">
          <h2 className="section-heading text-center fade-up">Curriculum & Skill Modules</h2>
          <p className="section-subtext text-center fade-up">A comprehensive breakdown of the trades offered in the Composite Skill Lab.</p>

          <div className="tabs-wrapper fade-up">
            <div className="tabs-header">
              <button className="tab-btn active" data-tab="digital">Zone 1: Digital Skills</button>
              <button className="tab-btn" data-tab="makers">Zone 2: Prototyping</button>
              <button className="tab-btn" data-tab="vocational">Zone 3: Vocational</button>
            </div>

            <div className="tabs-content">
              <div className="tab-pane active" id="digital">
                <div className="curr-grid">
                  <div className="curr-card">
                    <div className="curr-img-container">
                      <img src={CurriculumSkillModules1} alt="Coding" />
                    </div>
                    <div className="curr-body">
                      <h4>Coding & Artificial Intelligence</h4>
                      <p>Empower students with foundational programming skills using Python and block-based coding. This module dives into Data Science tools and practical AI frameworks, enabling students to build intelligent software solutions and understand algorithmic logic.</p>
                    </div>
                  </div>
                  <div className="curr-card">
                    <div className="curr-img-container">
                      <img src={CurriculumSkillModules2} alt="VR" />
                    </div>
                    <div className="curr-body">
                      <h4>AR / VR Technology</h4>
                      <p>Experience immersive learning through Virtual Reality headsets and Augmented Reality modules. Students don't just consume content but create interactive 3D environments, transforming abstract concepts into tangible, explorable experiences.</p>
                    </div>
                  </div>
                  <div className="curr-card">
                    <div className="curr-img-container">
                      <img src={CurriculumSkillModules3} alt="Design" />
                    </div>
                    <div className="curr-body">
                      <h4>Design & Mass Media</h4>
                      <p>Unleash creativity with professional-grade graphic design software and digital photography tools. This module covers the end-to-end process of visual storytelling, from image capture and editing to web development and digital marketing principles.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane" id="makers">
                <div className="curr-grid">
                  <div className="curr-card">
                    <div className="curr-img-container">
                      <img src={CurriculumSkillModules4} alt="Robotics" />
                    </div>
                    <div className="curr-body">
                      <h4>STEM Robotics</h4>
                      <p>Engage in hands-on engineering with advanced STEM robotics kits. Students learn to assemble, program, and control bots using microcontrollers and sensors in dedicated arenas, fostering logical thinking and mechanical understanding.</p>
                    </div>
                  </div>
                  <div className="curr-card">
                    <div className="curr-img-container">
                      <img src={CurriculumSkillModules5} alt="3D Printing" />
                    </div>
                    <div className="curr-body">
                      <h4>3D Printing & CAD</h4>
                      <p>Turn digital ideas into physical reality using state-of-the-art 3D printers and CAD software like Tinkercad. This station focuses on rapid prototyping, allowing students to iterate, test, and refine their engineering designs instantly.</p>
                    </div>
                  </div>
                  <div className="curr-card">
                    <div className="curr-img-container">
                      <img src={CurriculumSkillModules6} alt="Electronics" />
                    </div>
                    <div className="curr-body">
                      <h4>Electronics & IoT</h4>
                      <p>Master the fundamentals of circuitry and the Internet of Things (IoT). Students practice precision soldering and circuit breadboarding to build connected devices that solve real-world problems, bridging hardware with software.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane" id="vocational">
                <div className="curr-grid">

                  <div className="curr-card">
                    <div className="curr-img-container">
                      <img src={CurriculumSkillModules7} alt="Machinery" />
                    </div>
                    <div className="curr-body">
                      <h4>Machinery & Mechanics</h4>
                      <p>Understand the fundamentals of mechanical engineering through hands-on work with gears, levers, and pulley systems. This module covers the operation of simple to complex machines, fostering an understanding of force, torque, and motion mechanics.</p>
                    </div>
                  </div>

                  <div className="curr-card">
                    <div className="curr-img-container">
                      <img src={CurriculumSkillModules8} alt="Handicrafts" />
                    </div>
                    <div className="curr-body">
                      <h4>Handicrafts & Arts</h4>
                      <p>Preserve and innovate traditional arts through clay modeling, pottery, and textile design. Students explore sustainable practices like paper mache recycling and basic embroidery techniques to create marketable artifacts.</p>
                    </div>
                  </div>

                  <div className="curr-card">
                    <div className="curr-img-container">
                      <img src={CurriculumSkillModules9} alt="Aerospace" />
                    </div>
                    <div className="curr-body">
                      <h4>Aerospace & Drones</h4>
                      <p>Dive into the science of flight. Students learn aerodynamics principles by designing gliders and assembling operational drones. The curriculum covers flight stability, propulsion systems, and the future of unmanned aerial vehicles (UAVs).</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="infra-section">
        <div className="container">
          <h2 className="section-heading text-white fade-up">Mandatory Infrastructure</h2>
          <div className="infra-grid">

            <div className="infra-box fade-up">
              <i className="fas fa-bolt"></i>
              <h3>Utilities</h3>
              <p><strong>Stable Power:</strong> UPS/Inverter backup.<br />
                <strong>Internet:</strong> High-speed broadband.<br />
                <strong>Water:</strong> Continuous supply for Wet Zone.</p>
            </div>

            <div className="infra-box fade-up">
              <i className="fas fa-wind"></i>
              <h3>Environment</h3>
              <p><strong>Ventilation:</strong> Proper airflow for soldering/3D printing.<br />
                <strong>Lighting:</strong> Adequate illumination for precision work.</p>
            </div>

            <div className="infra-box fade-up">
              <i className="fas fa-lock"></i>
              <h3>Furniture & Storage</h3>
              <p><strong>Storage:</strong> Cabinets with Lock & Key.<br />
                <strong>Tables:</strong> Demonstration & Workbench tables.</p>
            </div>

            <div className="infra-box fade-up">
              <i className="fas fa-chalkboard"></i>
              <h3>Teaching Aids</h3>
              <p><strong>Display:</strong> Smart Boards or Whiteboards.<br />
                <strong>Projection:</strong> Projector system for AV learning.</p>
            </div>

            <div className="infra-box fade-up">
              <i className="fas fa-first-aid"></i>
              <h3>Safety Equipment</h3>
              <p><strong>Fire Safety:</strong> Accessible Fire Extinguishers.<br />
                <strong>First Aid:</strong> Fully stocked First Aid Kits.</p>
            </div>

            <div className="infra-box fade-up">
              <i className="fas fa-laptop-code"></i>
              <h3>Digital Tools</h3>
              <p><strong>Systems:</strong> Laptops/Tablets with requisite software.<br />
                <strong>Printers:</strong> 3D Printer & Standard Printer.</p>
            </div>

          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <h2 className="section-heading text-center fade-up">Our Labs in Action</h2>
          <div className="gallery-grid">
            <div className="gallery-item large fade-up"><img src={LabImage1} alt="Composite Lab View" /><div className="gallery-overlay"><h5>Multi-Skill Environment</h5></div></div>
            <div className="gallery-item fade-up"><img src={LabImage2} alt="Lab Setup" /><div className="gallery-overlay"><h5>Lab Activities</h5></div></div>
            <div className="gallery-item fade-up"><img src={LabImage3} alt="Skill Training" /><div className="gallery-overlay"><h5>Hands-on Learning</h5></div></div>
            <div className="gallery-item fade-up"><img src={LabImage4} alt="Robotics Lab" /><div className="gallery-overlay"><h5>Robotics Arena</h5></div></div>
            <div className="gallery-item fade-up"><img src={LabImage5} alt="Student Activities" /><div className="gallery-overlay"><h5>Student Projects</h5></div></div>
            <div className="gallery-item fade-up"><img src={LabImage6} alt="Practical Learning" /><div className="gallery-overlay"><h5>Practical Sessions</h5></div></div>

          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container small-container">
          <h2 className="section-heading fade-up">Frequently Asked Questions</h2>
          <div className="accordion fade-up">
            <div className="accordion-item"><button className="accordion-header">Who must set up this lab?</button><div className="accordion-body"><p>It is mandatory for all schools applying for Fresh Affiliation or Upgradation. Existing schools must comply by August 2027.</p></div></div>
            <div className="accordion-item"><button className="accordion-header">Can we use existing Physics/Chem labs?</button><div className="accordion-body"><p>No. The Composite Skill Lab is a dedicated space for vocational and technical skill subjects, separate from core science labs.</p></div></div>
            <div className="accordion-item"><button className="accordion-header">What grades is this for?</button><div className="accordion-body"><p>The lab caters to students from Class VI to Class XII, facilitating the "Skill Education" curriculum prescribed by CBSE.</p></div></div>
          </div>
        </div>
      </section>

      <section className="contact-area" id="contact-section">
        <div className="container contact-grid">
          <div className="contact-info fade-up">
            <h2>Compliance Consultation</h2>
            <p>Ensure your school meets the 600 Sq. Ft. mandate and safety standards before your inspection date.</p>
            <div className="info-box"><i className="fas fa-phone-alt"></i><div><strong>Call Us</strong><p>+91 91140 36376</p></div></div>
            <div className="info-box"><i className="fas fa-envelope"></i><div><strong>Email Us</strong><p>Sales@techyguide.in</p></div></div>
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
                  <input type="text" id="fullName" name="fullName" required placeholder="Principal / Manager" />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone</label>
                  <input type="tel" id="phoneNumber" name="phoneNumber" required placeholder="Mobile Number" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="affiliationType">Affiliation Status</label>
                <select id="affiliationType" name="affiliationType">
                  <option>Applying for Fresh Affiliation</option>
                  <option>Applying for Upgradation</option>
                  <option>Already Affiliated (3-Year Compliance)</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="3" placeholder="Available room size or specific questions?"></textarea>
              </div>
              <button type="submit" className="btn btn-full">Get Quote via WhatsApp <i className="fab fa-whatsapp"></i></button>
            </form>
          </div>
        </div>
        <div className="copyright"><p>&copy; 2026 TechyGuide OPC Pvt. Ltd. All Rights Reserved.</p></div>
      </section>
    </div>
  );
}
