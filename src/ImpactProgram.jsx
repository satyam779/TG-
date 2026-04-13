import React, { useState, useEffect, useRef } from "react";
import "./ImpactProgram.css";
import FooterSection from "./FooterSection";
import herobgvideo from "./assets/impactImages/Impact program - Hero section.mp4";
function ImpactProgram() {
  // Image paths
  const images = {
    bg2: new URL("./assets/impactImages/bg2.jpg", import.meta.url).href,
    bg4: new URL("./assets/impactImages/bg4.jpg", import.meta.url).href,
    csrInitiatives: new URL("./assets/impactImages/CSR Initiatives.jpg", import.meta.url).href,
    governmentPrograms: new URL("./assets/impactImages/Government Programs.jpg", import.meta.url).href,
    genderEquality: new URL("./assets/impactImages/GenderEquality.png", import.meta.url).href,
    industry: new URL("./assets/impactImages/industry.png", import.meta.url).href,
    inEqualities: new URL("./assets/impactImages/inEqualities.png", import.meta.url).href,
    partnerships: new URL("./assets/impactImages/partnerships.png", import.meta.url).href,
    qualityEducation: new URL("./assets/impactImages/qualityEducation.png", import.meta.url).href,
    sustainable: new URL("./assets/impactImages/sustainable.png", import.meta.url).href,
    jharkhand: new URL("./assets/impactImages/jharkhand.jpg", import.meta.url).href,
    odisha: new URL("./assets/impactImages/odisha.jpg", import.meta.url).href,
    gujarat: new URL("./assets/impactImages/gujarat.jpg", import.meta.url).href,
    Lucknow: new URL("./assets/impactImages/lucknow.jpg", import.meta.url).href,
    haryana: new URL("./assets/impactImages/haryana.jpeg", import.meta.url).href,
    hyderabad: new URL("./assets/impactImages/hyderabad.jpg", import.meta.url).href,
    oursolutions1: new URL("./assets/impactImages/Our solutions - 1.jpg", import.meta.url).href,
    oursolutions2: new URL("./assets/impactImages/Our solutions - 2.jpg", import.meta.url).href,
    oursolutions3: new URL("./assets/impactImages/Our solutions - 3.jpg", import.meta.url).href,
    gallery1: new URL("./assets/impactImages/gallery1.jpeg", import.meta.url).href,
    gallery2: new URL("./assets/impactImages/gallery2.jpeg", import.meta.url).href,
    gallery3: new URL("./assets/impactImages/gallery3.jpg", import.meta.url).href,
    gallery4: new URL("./assets/impactImages/gallery4.jpg", import.meta.url).href,
    gallery5: new URL("./assets/impactImages/gallery5.jpg", import.meta.url).href,
    gallery6: new URL("./assets/impactImages/gallery6.jpg", import.meta.url).href,
    gallery7: new URL("./assets/impactImages/gallery7.jpg", import.meta.url).href,
    gallery8: new URL("./assets/impactImages/gallery8.jpg", import.meta.url).href,
    gallery9: new URL("./assets/impactImages/gallery9.jpg", import.meta.url).href,
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

  // Set SEO metadata for Impact Program page
  useEffect(() => {
    // Set page title
    document.title = 'Government & CSR STEM Education Programs | TechyGuide Impact';

    // Set or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore TechyGuide\'s Government and CSR initiatives empowering students with STEM, robotics, AI, and coding through innovation labs, workshops, and teacher training across India.');
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', 'Explore TechyGuide\'s Government and CSR initiatives empowering students with STEM, robotics, AI, and coding through innovation labs, workshops, and teacher training across India.');
      document.head.appendChild(metaDescription);
    }

    // Add or update canonical tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', 'https://techyguide.com/government-csr-stem-robotics-education-initiatives');
      document.head.appendChild(canonicalLink);
    } else {
      canonicalLink.setAttribute('href', 'https://techyguide.com/government-csr-stem-robotics-education-initiatives');
    }
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
  }, []);

  return (
    <>
      <div className="impact-program">
        <section
          className="impact-hero"
        >
          <video
            ref={heroVideoRef}
            id="impact-hero-video"
            className="impact-hero-bg-video"
            src={herobgvideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src={herobgvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
                TechyGuide is an innovative education technology ecosystem designed for students aged 7–18. Our impact programs empower educators and learners with tools to build coding, robotics, and problem-solving skills. By promoting creativity, innovation, and inclusion, we contribute to the United Nations Sustainable Development Goals — advancing quality education, gender equality, and industry-driven innovation. 
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
                  <i className="fa-solid fa-landmark"></i>
                </div>
                <h3>Government Programs</h3>
                
                <div className="detail-item impact-highlight">
                  <div className="detail-icon">
                    <i className="fa-solid fa-globe"></i>
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
                  <i className="fa-solid fa-handshake"></i>
                </div>
                <h3>CSR Initiatives</h3>
                
                <div className="detail-item impact-highlight">
                  <div className="detail-icon">
                    <i className="fa-solid fa-globe"></i>
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
                <i className="fa-solid fa-microchip"></i>
                <h3>Future-Ready Labs</h3>
                <p>
                 Transform classrooms into innovation hubs with fully equipped STEM and robotics labs that support experiential, project-based learning. 
                </p>
              </div>
              <div className="offer-box">
                <div className="offer-image-wrap">
                <img src={images.oursolutions2} alt="Educational DIY robotics kits for students " className="offer-image" loading="lazy" decoding="async" />
                </div>
                <i className="fa-solid fa-puzzle-piece"></i>
                <h3>DIY Learning Kits</h3>
                <p>
                  Interactive kits that make coding and robotics simple, engaging, and fun — sparking imagination and hands-on discovery.
                </p>
              </div>
              <div className="offer-box">
                <div className="offer-image-wrap">
                <img src={images.oursolutions3} alt="Students attending hands-on STEM innovation workshop" className="offer-image" loading="lazy" decoding="async" />
                </div>
                <i className="fa-solid fa-users-gear"></i>
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
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
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
                      <h4>Meera Singh</h4>
                      <p>Parent</p>
                      <small>Cambridge International, Pune</small>
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
                      <h4>Dr. Priya Sharma</h4>
                      <p>Principal</p>
                      <small>Delhi Public School, New Delhi</small>
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
                      <h4>Rajesh Kumar</h4>
                      <p>STEM Coordinator</p>
                      <small>St. Xavier's High School, Mumbai</small>
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
                      <h4>Anjali Patel</h4>
                      <p>Student</p>
                      <small>Modern Academy, Bangalore</small>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p>
                    The ATL Lab setup was seamless and the training provided to our teachers was comprehensive. TechyGuide doesn't just provide equipment — they build capability.
                  </p>
                  <div className="author">
                    <div className="avatar">RI</div>
                    <div className="info">
                      <h4>Prof. Ramesh Iyer</h4>
                      <p>Head of Department</p>
                      <small>National Public School, Chennai</small>
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
                      <h4>Meera Singh</h4>
                      <p>Parent</p>
                      <small>Cambridge International, Pune</small>
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
                      <h4>Dr. Priya Sharma</h4>
                      <p>Principal</p>
                      <small>Delhi Public School, New Delhi</small>
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
                      <h4>Rajesh Kumar</h4>
                      <p>STEM Coordinator</p>
                      <small>St. Xavier's High School, Mumbai</small>
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
                      <h4>Anjali Patel</h4>
                      <p>Student</p>
                      <small>Modern Academy, Bangalore</small>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p>
                    The ATL Lab setup was seamless and the training provided to our teachers was comprehensive. TechyGuide doesn't just provide equipment — they build capability.
                  </p>
                  <div className="author">
                    <div className="avatar">RI</div>
                    <div className="info">
                      <h4>Prof. Ramesh Iyer</h4>
                      <p>Head of Department</p>
                      <small>National Public School, Chennai</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="impact">
          <div className="container">
            <h2>Ready to Empower Communities?</h2>
            <p>
Together, let’s empower communities with the power of education, innovation, and technology.         </p>
            <div className="contact-details">
              <a href="tel:+919114036376" className="btn">
                <i className="fa-solid fa-phone"></i> +91 91140 36376
              </a>
              <a
                href="mailto:reachus@techyguide.in"
                className="btn btn-outline"
              >
                <i className="fa-solid fa-envelope"></i> reachus@techyguide.in
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
            ×
          </button>
        </div>
      )}
      <FooterSection />
    </>
  );
}

export default ImpactProgram;
