import { useState, useEffect, useRef } from "react";
import SEO from "./components/SEO";
import "./ImpactProgram.css";
import herobgvideo from "./assets/impactImages/Impact program - Hero section.mp4";

function ImpactProgram() {
  // Image paths
  const images = {
    bg4: new URL("./assets/impactImages/bg4.webp", import.meta.url).href,
    csrInitiatives: new URL("./assets/impactImages/CSR Initiatives.webp", import.meta.url).href,
    governmentPrograms: new URL("./assets/impactImages/Government Programs.webp", import.meta.url).href,
    genderEquality: new URL("./assets/impactImages/GenderEquality.webp", import.meta.url).href,
    industry: new URL("./assets/impactImages/industry.webp", import.meta.url).href,
    inEqualities: new URL("./assets/impactImages/inEqualities.webp", import.meta.url).href,
    partnerships: new URL("./assets/impactImages/partnerships.webp", import.meta.url).href,
    qualityEducation: new URL("./assets/impactImages/qualityEducation.webp", import.meta.url).href,
    sustainable: new URL("./assets/impactImages/sustainable.webp", import.meta.url).href,
    jharkhand: new URL("./assets/impactImages/jharkhand.webp", import.meta.url).href,
    odisha: new URL("./assets/impactImages/odisha.webp", import.meta.url).href,
    gujarat: new URL("./assets/impactImages/gujarat.webp", import.meta.url).href,
    Lucknow: new URL("./assets/impactImages/lucknow.webp", import.meta.url).href,
    haryana: new URL("./assets/impactImages/haryana.webp", import.meta.url).href,
    hyderabad: new URL("./assets/impactImages/hyderabad.webp", import.meta.url).href,
    oursolutions1: new URL("./assets/impactImages/Our solutions - 1.webp", import.meta.url).href,
    oursolutions2: new URL("./assets/impactImages/Our solutions - 2.webp", import.meta.url).href,
    oursolutions3: new URL("./assets/impactImages/Our solutions - 3.webp", import.meta.url).href,
    gallery1: new URL("./assets/impactImages/gallery1.webp", import.meta.url).href,
    gallery2: new URL("./assets/impactImages/gallery2.webp", import.meta.url).href,
    gallery3: new URL("./assets/impactImages/gallery3.webp", import.meta.url).href,
    gallery4: new URL("./assets/impactImages/gallery4.webp", import.meta.url).href,
    gallery5: new URL("./assets/impactImages/gallery5.webp", import.meta.url).href,
    gallery6: new URL("./assets/impactImages/gallery6.webp", import.meta.url).href,
    gallery7: new URL("./assets/impactImages/gallery7.webp", import.meta.url).href,
    gallery8: new URL("./assets/impactImages/gallery8.webp", import.meta.url).href,
    gallery9: new URL("./assets/impactImages/gallery9.webp", import.meta.url).href,
  };
  const galleryImages = [
    { src: images.gallery1, alt: "Impact program gallery image 1" },
    { src: images.gallery2, alt: "Impact program gallery image 2" },
    { src: images.gallery3, alt: "Impact program gallery image 3" },
    { src: images.gallery4, alt: "Impact program gallery image 4" },
    { src: images.gallery5, alt: "Impact program gallery image 5" },
    { src: images.gallery6, alt: "Impact program gallery image 6" },
    { src: images.gallery7, alt: "Impact program gallery image 7" },
    { src: images.gallery8, alt: "Impact program gallery image 8" },
    { src: images.gallery9, alt: "Impact program gallery image 9" },
  ];
  const [lightbox, setLightbox] = useState({ open: false, src: "", alt: "" });
  const heroVideoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const heroVideo = heroVideoRef.current;
    if (!heroVideo) {
      return;
    }

    heroVideo.muted = true;
    heroVideo.defaultMuted = true;

    let isVisible = true;

    const handleVisibilityChange = () => {
      if (document.hidden || !isVisible) {
        heroVideo.pause();
      } else {
        heroVideo.play().catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
      handleVisibilityChange();
    });
    observer.observe(heroVideo);

    heroVideo.play().catch(() => {});

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.disconnect();
    };
  }, [isMobile]);

  return (
    <>

      <div className="impact-program">
        <section
          className="impact-hero"
        >
          {!isMobile && (
            <video
              ref={heroVideoRef}
              id="impact-hero-video"
              className="impact-hero-bg-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            >
              <source src={herobgvideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <div className="impact-hero-overlay" aria-hidden="true" />

          <div className="container impact-hero-content">
              <span className="badge">Government & CSR Initiatives</span>
              <h1>
                Impact That Shapes <span className="">Tomorrow</span>
              </h1>
              <p>
               Empowering students across India through strong Government and CSR partnerships. We are shaping the future of education with hands-on STEM, AI, and robotics innovation. 
              </p>

              <div className="hero-stats">
                <div className="stat-item">
                  <h3>10+</h3>
                  <span>Projects</span>
                </div>
                <div className="stat-item">
                  <h3>247+</h3>
                  <span>Schools</span>
                </div>
                <div className="stat-item">
                  <h3>28516+</h3>
                  <span>Students</span>
                </div>
              </div>
          </div>
        </section>

        <section
          className="mission static-bg"
          style={{ backgroundImage: `url(${images.bg4})` }}
        >
          <div className="overlay-light"></div>
          <div className="container">
            <div className="mission-text">
              <h2>Breaking Barriers in STEM</h2>
              <p>
                TechyGuide is an innovative education technology ecosystem designed for students aged 7-18. Our impact programs empower educators and learners with tools to build coding, robotics, and problem-solving skills. By promoting creativity, innovation, and inclusion, we contribute to the United Nations Sustainable Development Goals - advancing quality education, gender equality, and industry-driven innovation. 
              </p>
              <p>
                <strong>
                  Contributing to UN Sustainable Development Goals:
                </strong>{" "}
                Quality Education, Gender Equality, Industry Innovation.
              </p>
            </div>
          </div>
        </section>

        <section className="shaping-future">
          <div className="container">
            <h2>Shaping the Future with Government & CSR in STEM and AI Innovation</h2>
            <p className="section-intro">
              TechyGuide is a trusted education partner delivering transformative learning experiences across India. Our programs are designed to build strong foundations in coding, robotics, and problem-solving through innovation-driven education. Through strategic partnerships with government bodies and CSR organizations, we establish modern STEM & robotics labs, provide structured teacher training, and enable experiential learning that prepares students for future technological challenges. 
            </p>

            <div className="sdg-badges">
              <div className="sdg-main">
                <img src={images.sustainable} alt="Sustainable Development Goals" loading="lazy" decoding="async" />
              </div>
              <div className="sdg-sub-badges">
                <div className="sdg-badge">
                  <img src={images.qualityEducation} alt="Quality Education" loading="lazy" decoding="async" />
                </div>
                <div className="sdg-badge">
                  <img src={images.genderEquality} alt="Gender Equality" loading="lazy" decoding="async" />
                </div>
                <div className="sdg-badge">
                  <img src={images.inEqualities} alt="Reduced Inequalities" loading="lazy" decoding="async" />
                </div>
                <div className="sdg-badge">
                  <img src={images.industry} alt="Industry Innovation" loading="lazy" decoding="async" />
                </div>
                <div className="sdg-badge">
                  <img src={images.partnerships} alt="Partnerships" loading="lazy" decoding="async" />
                </div>
              </div>
            </div>
            
            <div className="initiatives-grid">
              <div className="initiative-card">
                <div className="initiative-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
                    <line x1="3" y1="22" x2="21" y2="22"></line>
                    <line x1="6" y1="18" x2="6" y2="11"></line>
                    <line x1="10" y1="18" x2="10" y2="11"></line>
                    <line x1="14" y1="18" x2="14" y2="11"></line>
                    <line x1="18" y1="18" x2="18" y2="11"></line>
                    <path d="M3 11h18L12 2z"></path>
                  </svg>
                </div>
                <h3>Government Programs</h3>
                
                <div className="detail-item impact-highlight">
                  <div className="detail-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                  <h4>Impact</h4>
                  <p>
                   Our programs empower students and teachers with practical STEM and robotics skills, fostering creativity and innovation. By bridging the digital divide, we promote entrepreneurship, career readiness, and build resilient, technology-driven communities. 
                  </p>
                </div>
                
                <div className="gov-image">
                  <img src={images.governmentPrograms} alt="Teacher guiding students in robotics lab under government STEM initiative " loading="lazy" decoding="async" />
                </div>
                <p className="initiative-intro">
                 Through our government impact initiatives, we open doors to cutting-edge technology, skill-based learning, and inclusive education — igniting curiosity, empowering young minds, and shaping the innovators of tomorrow. 
                </p>
                
                {/* Activities and Beneficiaries removed as requested */}
              </div>

              <div className="initiative-card">
                <div className="initiative-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3>CSR Initiatives</h3>
                
                <div className="detail-item impact-highlight">
                  <div className="detail-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                  <h4>Impact</h4>
                  <p>
                   Our CSR programs bridge educational gaps and build digital confidence. They foster creativity, problem-solving, and innovation while promoting inclusive growth, equal opportunities, and sustainable learning ecosystems. 
                  </p>
                </div>
                
                <div className="csr-image">
                  <img src={images.csrInitiatives} alt="Students participating in CSR-supported STEM learning session " loading="lazy" decoding="async" />
                </div>
                <p className="initiative-intro">
                 Our CSR partnerships nurture a new generation of global innovators by empowering students to master STEM, AI, coding, and robotics — preparing them to thrive in the opportunities of the 21st century. 
                </p>
                
                {/* Activities and Beneficiaries removed as requested */}
              </div>
            </div>
          </div>
        </section>

        <section className="projects">
          <div className="container">
            <h2 className="section-title">Our Impact Across India</h2>

            <div className="project-grid">
              <div className="card">
                <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img src={images.jharkhand} alt="Students engaged in hands-on robotics learning in school STEM lab " style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" decoding="async" />
                </div>
                <div className="card-body">
                  <h3>STEM & Robotics Lab - Jharkhand</h3>
                  <p>
                    Established fully equipped STEM labs and structured teacher training, enhancing experiential and technology-enabled learning. 
                  </p>
                  <div className="card-stats">
                    <div>
                      <span role="img" aria-label="school">🏫</span> 68+ Schools
                    </div>
                    <div>
                      <span role="img" aria-label="teacher">👨‍🏫</span> 340+ Teachers
                    </div>
                    <div>
                      <span role="img" aria-label="students">🎓</span> 10,200+ Students
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img src={images.odisha} alt="Students engaged in hands-on robotics learning in school STEM lab p" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" decoding="async" />
                </div>
                <div className="card-body">
                  <h3>STEM Learning - Keonjhar, Odisha</h3>
                  <p>
                     Delivering short-term STEM workshops and robotics activities that provide fast-track exposure to digital and innovation skills.
                  </p>
                  <div className="card-stats">
                    <div>
                      <span role="img" aria-label="school">🏫</span> 5+ Schools
                    </div>
                    <div>
                      <span role="img" aria-label="teacher">👨‍🏫</span> 17+ Teachers
                    </div>
                    <div>
                      <span role="img" aria-label="students">🎓</span> 1,015+ Students
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img src={images.gujarat} alt="Students engaged in hands-on robotics learning in school STEM lab " style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" decoding="async" />
                </div>
                <div className="card-body">
                  <h3>Innovators in Ahmedabad, Gujarat</h3>
                  <p>
                    Setting up advanced STEM labs and student innovation projects that integrate hands-on, experiential learning. 
                  </p>
                  <div className="card-stats">
                    <div>
                      <span role="img" aria-label="school">🏫</span> 77+ Schools
                    </div>
                    <div>
                      <span role="img" aria-label="teacher">👨‍🏫</span> 385+ Teachers
                    </div>
                    <div>
                      <span role="img" aria-label="students">🎓</span> 12,719+ Students
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img src={images.Lucknow} alt="Students engaged in hands-on robotics learning in school STEM lab " style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" decoding="async" />
                </div>
                <div className="card-body">
                  <h3>Innovation Hub - Lucknow, UP</h3>
                  <p>
                    Transforming classrooms into innovation hubs with comprehensive teacher training and future-ready learning labs. 
                  </p>
                  <div className="card-stats">
                    <div>
                      <span role="img" aria-label="school">🏫</span> 7+ Schools
                    </div>
                    <div>
                      <span role="img" aria-label="teacher">👨‍🏫</span> 36+ Teachers
                    </div>
                    <div>
                      <span role="img" aria-label="students">🎓</span> 1,243+ Students
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img src={images.haryana} alt="Students engaged in hands-on robotics learning in school STEM lab " style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" decoding="async" />
                </div>
                <div className="card-body">
                  <h3>Future Skills Workshop - Haryana</h3>
                  <p>
                    In collaboration with Literacy India, Gurgaon, we conduct structured robotics workshops for underserved learners to build confidence and technical skills.
                  </p>
                  <div className="card-stats">
                    <div>
                      <span role="img" aria-label="school">🏫</span> 12+ Schools
                    </div>
                    <div>
                      <span role="img" aria-label="teacher">👨‍🏫</span> 72+ Teachers
                    </div>
                    <div>
                      <span role="img" aria-label="students">🎓</span> 1,987+ Students
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img src={images.hyderabad} alt="Students engaged in hands-on robotics learning in school STEM lab " style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" decoding="async" />
                </div>
                <div className="card-body">
                  <h3>STEM Workshop - Hyderabad</h3>
                  <p>
                   CSR-driven interactive STEM sessions that foster curiosity and strengthen foundational digital skills. 
                  </p>
                  <div className="card-stats">
                    <div>
                      <span role="img" aria-label="school">🏫</span> 14+ Schools
                    </div>
                    <div>
                      <span role="img" aria-label="teacher">👨‍🏫</span> 72+ Teachers
                    </div>
                    <div>
                      <span role="img" aria-label="students">🎓</span> 1,352+ Students
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="offerings">
          <div className="container">
            <h2 className="section-title">Our Solutions</h2>
            <div className="offering-grid">
              <div className="offer-box">
                <div className="offer-image-wrap">
                <img src={images.oursolutions1} alt="Fully equipped STEM and robotics lab classroom " className="offer-image" loading="lazy" decoding="async" />
                </div>
                <div className="offer-icon-wrap" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                    <line x1="9" y1="1" x2="9" y2="4"></line>
                    <line x1="15" y1="1" x2="15" y2="4"></line>
                    <line x1="9" y1="20" x2="9" y2="23"></line>
                    <line x1="15" y1="20" x2="15" y2="23"></line>
                    <line x1="20" y1="9" x2="23" y2="9"></line>
                    <line x1="20" y1="15" x2="23" y2="15"></line>
                    <line x1="1" y1="9" x2="4" y2="9"></line>
                    <line x1="1" y1="15" x2="4" y2="15"></line>
                  </svg>
                </div>
                <h3>Future-Ready Labs</h3>
                <p>
                 Transform classrooms into innovation hubs with fully equipped STEM and robotics labs that support experiential, project-based learning. 
                </p>
              </div>
              <div className="offer-box">
                <div className="offer-image-wrap">
                <img src={images.oursolutions2} alt="Educational DIY robotics kits for students " className="offer-image" loading="lazy" decoding="async" />
                </div>
                <div className="offer-icon-wrap" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
                    <path d="M12 22c-1.3 0-2.4-.8-2.8-2H5a2 2 0 0 1-2-2v-4.2a2.9 2.9 0 0 1-2-2.8A2.9 2.9 0 0 1 3 8.2V4c0-1.1.9-2 2-2h4.2a2.9 2.9 0 0 1 2.8-2A2.9 2.9 0 0 1 14 2h4a2 2 0 0 1 2 2v4.2c1.2.4 2 1.5 2 2.8s-.8 2.4-2 2.8V18a2 2 0 0 1-2 2h-4.2c-.4 1.2-1.5 2-2.8 2z"></path>
                  </svg>
                </div>
                <h3>DIY Learning Kits</h3>
                <p>
                  Interactive kits that make coding and robotics simple, engaging, and fun — sparking imagination and hands-on discovery.
                </p>
              </div>
              <div className="offer-box">
                <div className="offer-image-wrap">
                <img src={images.oursolutions3} alt="Students attending hands-on STEM innovation workshop" className="offer-image" loading="lazy" decoding="async" />
                </div>
                <div className="offer-icon-wrap" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <circle cx="18" cy="18" r="3"></circle>
                    <path d="M18 11v2"></path>
                  </svg>
                </div>
                <h3>Engaging Workshops</h3>
                <p>
                  Immersive workshops for students and teachers to explore technology, innovation, and real-world problem solving. 
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section (placed after Our Solutions) */}
        <section className="gallery">
          <div className="container">
            <h2 className="section-title">Gallery</h2>
            <div className="gallery-row">
              {galleryImages
                .map((img, idx) => (
                <div
                  className="gallery-card"
                  key={idx}
                  onClick={() => setLightbox({ open: true, src: img.src, alt: img.alt })}
                >
                  <div className="gallery-image-wrap">
                    <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
                  </div>
                  <div className="gallery-overlay">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-icon" style={{ background: 'rgba(0, 0, 0, 0.45)', padding: '6px', borderRadius: '8px', boxSizing: 'initial', width: '24px', height: '24px' }}>
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section (auto-scrolling, inspired by CommunitySection) */}
        <section className="testimonials">
          <div className="container">
            <h2>Testimonials</h2>
            <p className="center-text">
Hear from educators, students, and parents who are part of the TechyGuide impact journey.             </p>

            <div className="testimonial-slider">
              <div className="testimonial-track">
                {/* Repeat items twice for seamless circular scroll */}
                <div className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p>
                    My daughter's confidence has grown tremendously since joining TechyGuide's robotics course. She's now teaching her classmates! Best educational investment we've made.
                  </p>
                  <div className="author">
                    <div className="avatar" style={{background: "#003366"}}>MS</div>
                    <div className="info">
                      <h4>Parent</h4>
                      {/* <p>Parent</p> */}
                      <small>Gurukul Public School, Odisha</small>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p>
                    TechyGuide transformed our school's approach to STEM education. The AI & Robotics Lab has sparked unprecedented interest among students, and we've seen remarkable improvement in their problem-solving skills.
                  </p>
                  <div className="author">
                    <div className="avatar" style={{background: "#003366"}}>PS</div>
                    <div className="info">
                      <h4>Principal</h4>
                      <small>Delhi Cambridge School</small>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p>
                    The DIY kits and virtual courses are exceptional. Our students are now participating in national-level competitions and winning! The support from TechyGuide team has been outstanding.
                  </p>
                  <div className="author">
                    <div className="avatar">RK</div>
                    <div className="info">
                      <h4>STEM Coordinator</h4>
                      <small>St. Xavier's Public School, Chatrapur</small>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p>
                    Learning robotics at TechyGuide lab changed my life! I went from being afraid of technology to winning the Robothrone competition. Now I want to become an AI engineer.
                  </p>
                  <div className="author">
                    <div className="avatar">AP</div>
                    <div className="info">
                      <h4>Student</h4>
                      <small>Chaman Bhartiya School</small>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p>
                    The ATL Lab setup was seamless and the training provided to our teachers was comprehensive. TechyGuide doesn't just provide equipment - they build capability.
                  </p>
                  <div className="author">
                    <div className="avatar">RI</div>
                    <div className="info">
                      <h4>Head of Department</h4>
                      <small>Shemford Sr. Sec. School, Haldwani</small>
                    </div>
                  </div>
                </div>

                {/* Duplicate set for infinite loop */}
                <div className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p>
                    My daughter's confidence has grown tremendously since joining TechyGuide's robotics course. She's now teaching her classmates! Best educational investment we've made.
                  </p>
                  <div className="author">
                    <div className="avatar" style={{background: "#003366"}}>MS</div>
                    <div className="info">
                      <h4>Parent</h4>
                      <small>Gurukul Public School, Odisha</small>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p>
                    TechyGuide transformed our school's approach to STEM education. The AI & Robotics Lab has sparked unprecedented interest among students, and we've seen remarkable improvement in their problem-solving skills.
                  </p>
                  <div className="author">
                    <div className="avatar" style={{background: "#003366"}}>PS</div>
                    <div className="info">
                      <h4>Principal</h4>
                      <small>Delhi Cambridge School</small>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p>
                    The DIY kits and virtual courses are exceptional. Our students are now participating in national-level competitions and winning! The support from TechyGuide team has been outstanding.
                  </p>
                  <div className="author">
                    <div className="avatar">RK</div>
                    <div className="info">
                      <h4>STEM Coordinator</h4>
                      <small>St. Xavier's Public School, Chatrapur</small>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p>
                    Learning robotics at TechyGuide lab changed my life! I went from being afraid of technology to winning the Robothrone competition. Now I want to become an AI engineer.
                  </p>
                  <div className="author">
                    <div className="avatar">AP</div>
                    <div className="info">
                      <h4>Student</h4>
                      <small>Chaman Bhartiya School</small>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p>
                    The ATL Lab setup was seamless and the training provided to our teachers was comprehensive. TechyGuide doesn't just provide equipment - they build capability.
                  </p>
                  <div className="author">
                    <div className="avatar">RI</div>
                    <div className="info">
                      <h4>Head of Department</h4>
                      <small>Shemford Sr. Sec. School, Haldwani</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="impact">
          <div className="container">
            <h2 style={{ color: '#ff9500' }}>Ready to Empower Communities?</h2>
            <p>
                Together, let's empower communities with the power of education, innovation, and technology.         </p>
            <div className="contact-details">
              <a href="tel:+919114036376" className="btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', verticalAlign: 'middle'}}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +91 91140 36376
              </a>
              <a
                href="mailto:reachus@techyguide.in"
                className="btn btn-outline"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', verticalAlign: 'middle'}}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                reachus@techyguide.in
              </a>
            </div>
          </div>
        </section>
      </div>
      {lightbox.open && (
        <div className="lightbox" onClick={() => setLightbox({ open: false, src: "", alt: "" })}>
          <img src={lightbox.src} alt={lightbox.alt} />
          <button
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox({ open: false, src: "", alt: "" });
            }}
            aria-label="Close"
          >
            x
          </button>
        </div>
      )}
    </>
  );
}

export default ImpactProgram;
