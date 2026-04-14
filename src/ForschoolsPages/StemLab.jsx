import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import './StemLab.css';
import GalleryImage1 from '../assets/ForSchoolsStemLabImages/IMG20240112172931.webp';
import GalleryImage2 from '../assets/ForSchoolsStemLabImages/IMG20240606114358.webp';
import GalleryImage3 from '../assets/ForSchoolsStemLabImages/RLS3jpg.webp';
import GalleryImage4 from '../assets/ForSchoolsStemLabImages/WhatsApp Image 2021-09-08 at 18.57.35.webp';
import GalleryImage5 from '../assets/ForSchoolsStemLabImages/WhatsApp Image 2021-10-04 at 11.56.30 AM (2).webp';
import GalleryImage6 from '../assets/ForSchoolsStemLabImages/WhatsApp Image 2025-06-04 at 11.12.23_14c0422d.webp';
// hero image
import heroImage from '../assets/ForSchoolsStemLabImages/Hero Section - STEM Lab.webp';

function StemLab() {
    const handleGetProposalClick = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleHeroProjectsClick = () => {
        const modelsSection = document.getElementById('featured-stem-models');
        if (modelsSection) {
            modelsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };


    useEffect(() => {
        let statsObserver = null;
        let vpObserver = null;

        // ==========================================
        // 1. SMOOTH SCROLLING FOR HERO BUTTON
        // ==========================================
        const scrollButton = document.querySelector('.stemlab-page-root .scroll-to-programs');
        if (scrollButton) {
            scrollButton.addEventListener('click', (e) => {
                e.preventDefault();
                const programsSection = document.getElementById('programs');

                if (programsSection) {
                    const yOffset = -50;
                    const y = programsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

                    window.scrollTo({
                        top: y,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // ==========================================
        // 2. STATS COUNTER ANIMATION
        // ==========================================
        const counters = document.querySelectorAll('.stemlab-page-root .counter');
        const speed = 200;

        const animateCounters = () => {
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;

                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 25);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            });
        };

        const statsObserverOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        statsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, statsObserverOptions);

        const statsSection = document.querySelector('.stemlab-page-root .stats-section');
        if (statsSection) {
            statsObserver.observe(statsSection);
        }

        // ==========================================
        // 3. VERTICAL PRODUCTS (OFFERINGS) ANIMATION
        // ==========================================
        const vpCards = document.querySelectorAll('.stemlab-page-root .vp-card');

        if (vpCards.length > 0) {
            const vpObserverOptions = {
                root: null,
                threshold: 0.15
            };

            vpObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, index * 150);

                        observer.unobserve(entry.target);
                    }
                });
            }, vpObserverOptions);

            vpCards.forEach(card => {
                vpObserver.observe(card);
            });
        }

        // ==========================================
        // 4. BUTTON INTERACTIVITY (Popups)
        // ==========================================
        const handleClick = (e) => {
            if (e.target.matches('.stemlab-page-root .btn-primary') && e.target.closest('.stemlab-page-root .product-card')) {
                const card = e.target.closest('.stemlab-page-root .product-card');
                const title = card.querySelector('h3').innerText;
                alert(`🚀 Initiating launch sequence for: ${title}`);
            }
        };

        document.body.addEventListener('click', handleClick);

        // ==========================================
        // 5. INITIALIZE MULTIPLE MODEL PLAYERS
        // ==========================================
        const modelCards = document.querySelectorAll('.stemlab-page-root .model-card');
        if (modelCards.length > 0) {
            modelCards.forEach(card => {
                const vid = card.dataset.videoId;
                const iframe = card.querySelector('iframe');
                if (vid && iframe && vid.trim() !== '') {
                    iframe.src = `https://www.youtube.com/embed/${vid}?rel=0&showinfo=0`;
                }
            });
        }

        // ==========================================
        // 6. FORM HANDLING FOR ENQUIRY
        // ==========================================
        const form = document.querySelector('.stemlab-page-root #enquiryForm');
        const formHandler = (e) => {
            e.preventDefault();

            if (!form) return;

            const btn = form.querySelector('button');
            if (!btn) return;

            const originalText = btn.innerHTML;
            const school = form.querySelector('#schoolName')?.value || '';
            const person = form.querySelector('#fullName')?.value || '';
            const phone = form.querySelector('#phoneNumber')?.value || '';
            const email = form.querySelector('#emailId')?.value || '';
            const state = form.querySelector('#state')?.value || '';
            const msg = form.querySelector('#message')?.value || '';

            // Validate required fields
            if (!school || !person || !phone) {
                alert('Please fill in all required fields');
                return;
            }

            btn.innerText = 'Opening WhatsApp...';
            btn.style.opacity = '0.7';

            setTimeout(() => {
                try {
                    const businessPhone = '918197984847';
                    const text = `*StemLab Proposal Request*%0a%0a` +
                        `*School Name:* ${school}%0a` +
                        `*Name:* ${person}%0a` +
                        `*Phone Number:* ${phone}%0a` +
                        `*Email:* ${email}%0a` +
                        `*State:* ${state}%0a` +
                        `*Message:* ${msg}%0a%0a`;
                    const whatsappUrl = `https://wa.me/${businessPhone}?text=${text}`;
                    window.open(whatsappUrl, '_blank');
                    form.reset();
                    btn.innerHTML = originalText;
                    btn.style.opacity = '1';
                } catch (error) {
                    console.error('Error opening WhatsApp:', error);
                    btn.innerHTML = originalText;
                    btn.style.opacity = '1';
                    alert('Error opening WhatsApp. Please try again.');
                }
            }, 1000);
        };
        if (form) form.addEventListener('submit', formHandler);

        // Cleanup
        return () => {
            document.body.removeEventListener('click', handleClick);
            if (statsObserver) statsObserver.disconnect();
            if (vpObserver) vpObserver.disconnect();
            if (form) form.removeEventListener('submit', formHandler);
        };
    }, []);

    return (
        <div className="stemlab-page-root">
            <SEO
                title="STEM Labs for Schools in India | Hands-on STEM Education | TechyGuide"
                description="TechyGuide STEM Labs empower students through hands-on Science, Technology, Engineering & Math learning. Practical STEM programs for schools across India."
                canonical="https://techyguide.in/stem-labs-for-schools"
            />
            <a href="#contact-section" className="floating-cta" onClick={handleGetProposalClick}>
                <i className="fas fa-file-invoice-dollar"></i> Get Proposal
            </a>
            <main className="main-content">
                <section className="intro-section">
                    <div className="container hero-grid">
                        <div className="hero-text">
                            <span className="sub-heading">Welcome to StemLabs</span>
                            <h1 className="section-title"> STEM Lab <span className="highlight-orange">School Innovation Learning</span></h1>
                            <p className="section-desc">
                                Welcome to StemLabs, where we nurture young innovators through experiential STEM education. Our unique DICE methodology—Design Thinking, Innovation, Creativity, and Entrepreneurship—sparks curiosity and builds future-ready skills through hands-on, practical learning.
                            </p>
                            <div className="intro-buttons">
                                <button className="btn-primary" onClick={handleHeroProjectsClick}>Our Projects</button>
                            </div>
                        </div>

                        <div className="hero-image">
                            <img src={heroImage} alt="Students building STEM project" onError={(e) => e.target.style.display = 'none'} />
                        </div>
                    </div>
                </section>

                <section className="methodology-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Our <span className="highlight-teal">Methodology</span></h2>
                            <p>We move beyond textbooks with a "Build, Play, Learn" approach.</p>
                        </div>
                        <div className="dice-grid">
                            <div className="dice-card">
                                <div className="icon-box"><i className="fas fa-pencil-ruler"></i></div>
                                <h3>Design</h3>
                                <p>Encouraging students to visualize solutions and draft blueprints for their ideas.</p>
                            </div>
                            <div className="dice-card">
                                <div className="icon-box"><i className="fas fa-lightbulb"></i></div>
                                <h3>Innovation</h3>
                                <p>Teaching kids to look at problems differently and invent unique solutions.</p>
                            </div>
                            <div className="dice-card">
                                <div className="icon-box"><i className="fas fa-palette"></i></div>
                                <h3>Creativity</h3>
                                <p>Fostering artistic expression within technical projects using our specialized kits.</p>
                            </div>
                            <div className="dice-card">
                                <div className="icon-box"><i className="fas fa-rocket"></i></div>
                                <h3>Entrepreneurship</h3>
                                <p>Developing the leadership skills needed to turn inventions into real-world value.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="vertical-products-section">
                    <div className="container">
                        <div className="vp-grid">
                            <div className="vp-card card-blue">
                                <div className="vp-img">
                                    <div className="vp-letter">S</div>
                                </div>
                                <div className="vp-body">
                                    <h3>Science</h3>

                                    <p>Science builds a strong foundation of curiosity, observation, and logical thinking. Students explore core scientific concepts through hands-on experiments, real-world examples, and inquiry-based learning. The focus is on understanding how the natural and physical world works, encouraging questioning, hypothesis formation, and evidence-based conclusions.</p>
                                </div>
                            </div>

                            <div className="vp-card card-pink">
                                <div className="vp-img"><div className="vp-letter">T</div></div>
                                <div className="vp-body">
                                    <h3>Technology</h3>

                                    <p>Technology introduces learners to the practical use of tools, systems, and digital solutions. Students gain exposure to basic programming logic, robotics, electronics, and digital creativity. Through interactive learning and model-based activities, they understand how technology is designed, applied, and improved to solve real-life problems, preparing them for a technology-driven future.</p>
                                </div>
                            </div>

                            <div className="vp-card card-purple">
                                <div className="vp-img"><div className="vp-letter">E</div></div>
                                <div className="vp-body">
                                    <h3>Engineering</h3>

                                    <p>Engineering develops problem-solving and design thinking skills by transforming ideas into functional solutions. Students engage in building structures, machines, and working models using engineering principles. The learning process includes planning, designing, testing, and optimizing projects, helping students understand how engineering impacts industries, infrastructure, and everyday life.</p>
                                </div>
                            </div>

                            <div className="vp-card card-red">
                                <div className="vp-img"><div className="vp-letter">M</div></div>
                                <div className="vp-body">
                                    <h3>Mathematics</h3>

                                    <p>Mathematics strengthens analytical reasoning, accuracy, and logical decision-making. Students apply mathematical concepts such as numbers, patterns, measurements, and data analysis within STEM projects and real-world scenarios. Rather than rote learning, the focus is on practical application, enabling learners to use mathematics as a powerful tool for innovation and research.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Showcase section
                <section className="video-section" id="showcase-video">
                    <div className="container">
                        <div className="section-header">
                            <h2>Project <span className="highlight-orange">Showcase</span></h2>
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
                */}

                <section className="models-section" id="featured-stem-models">
                    <div className="container">
                        <div className="section-header">
                            <h2> Featured <span className="highlight-teal">Stem Models</span></h2>
                            <p>Short videos showcasing our STEM products and student projects.</p>
                        </div>

                        <div className="models-grid">
                            <div className="model-card" data-video-id="kCOVtB8gL_A">
                                <div className="model-media">
                                    <iframe title="Robotics Kit" src={undefined} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                <h4>Solar System Model</h4>
                            </div>

                            <div className="model-card" data-video-id="-U4jj5uXi5w">
                                <div className="model-media">
                                    <iframe title="Smart Car" src={undefined} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                <h4>Newton Color Disc</h4>
                            </div>

                            <div className="model-card" data-video-id="ndWN-X3uIi0">
                                <div className="model-media">
                                    <iframe title="Hydraulics Demo" src={undefined} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                <h4>Newtons cradle</h4>
                            </div>

                            <div className="model-card" data-video-id="Sg1U0_yQhPg">
                                <div className="model-media">
                                    <iframe title="Wind Energy Model" src={undefined} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                <h4>Viscosity Measuring</h4>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="stats-section">
                    <div className="container stats-grid">
                        <div className="stat-item">
                            <h2 className="counter" data-target="400">0</h2>
                            <p>Graduated Builders</p>
                        </div>
                        <div className="stat-item">
                            <h2 className="counter" data-target="200">0</h2>
                            <p>Graduated Freshmen</p>
                        </div>
                        <div className="stat-item">
                            <h2 className="counter" data-target="50">0</h2>
                            <p>Partner Institutions</p>
                        </div>
                        <div className="stat-item">
                            <h2 className="counter" data-target="15">0</h2>
                            <p>Awards Won</p>
                        </div>
                    </div>
                </section>

                <section className="gallery-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Lab <span className="highlight-teal">Gallery</span> & Models</h2>
                            <p>A glimpse into the innovative machines our students build.</p>
                        </div>

                        <div className="gallery-grid">
                            <div className="gallery-item">
                                <div className="gallery-overlay">
                                    <h4>STEM Lab</h4>
                                    <p>Hands-on Learning</p>
                                </div>
                                <img src={GalleryImage1} alt="STEM Lab" />
                            </div>
                            <div className="gallery-item">
                                <div className="gallery-overlay">
                                    <h4>Student Projects</h4>
                                    <p>Innovative Creations</p>
                                </div>
                                <img src={GalleryImage2} alt="Student Projects" />
                            </div>
                            <div className="gallery-item">
                                <div className="gallery-overlay">
                                    <h4>Lab Activities</h4>
                                    <p>Practical Experience</p>
                                </div>
                                <img src={GalleryImage3} alt="Lab Activities" />
                            </div>
                            <div className="gallery-item">
                                <div className="gallery-overlay">
                                    <h4>Learning Environment</h4>
                                    <p>Interactive Sessions</p>
                                </div>
                                <img src={GalleryImage4} alt="Learning Environment" />
                            </div>
                            <div className="gallery-item">
                                <div className="gallery-overlay">
                                    <h4>STEM Models</h4>
                                    <p>Student Achievements</p>
                                </div>
                                <img src={GalleryImage5} alt="STEM Models" />
                            </div>
                            <div className="gallery-item">
                                <div className="gallery-overlay">
                                    <h4>Lab Setup</h4>
                                    <p>Modern Facilities</p>
                                </div>
                                <img src={GalleryImage6} alt="Lab Setup" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="testimonials-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Success <span className="highlight-orange">Stories</span></h2>
                            <p>Trusted by leading schools and happy parents.</p>
                        </div>

                        <div className="testimonial-grid">
                            <div className="testimonial-card">
                                <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
                                <p className="review-text">
                                    "The hands-on approach has completely changed how our students perceive science.
                                    The kits are durable and the curriculum is perfectly aligned with our academic goals."
                                </p>
                                <div className="reviewer-info">
                                    <h5>Principal</h5>
                                    <span>Oakridge International School</span>
                                </div>
                            </div>

                            <div className="testimonial-card">
                                <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
                                <p className="review-text">
                                    "My son used to struggle with math concepts, but building models helped him visualize
                                    the problems. He now loves his physics classes!"
                                </p>
                                <div className="reviewer-info">
                                    <h5>Parent</h5>
                                    <span>Student at Whitefield Global School</span>
                                </div>
                            </div>

                            <div className="testimonial-card">
                                <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
                                <p className="review-text">
                                    "StemLabs provided excellent training for our teachers. The transition to a
                                    practical-based learning environment was seamless."
                                </p>
                                <div className="reviewer-info">
                                    <h5>Coordinator</h5>
                                    <span>Flomont World School</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact-area" id="contact-section">
                    <div className="container contact-grid">
                        <div className="contact-info fade-up">
                            <h2>Contact TechyGuide</h2>
                            <p><strong>Corporate Office:</strong> #80, 2nd Floor, 1st Main, VSR Layout, A Narayanapura Main Road, Bangalore 560016.</p>
                            <p><strong>Registered Office:</strong> 1st & 2nd Floor, Jyoti Complex, Bhoisahi, Balasore-756001, Odisha.</p>
                            <div className="info-box">
                                <i className="fas fa-phone-alt"></i>
                                <div>
                                    <strong>Call Us</strong>
                                    <p>+91 91140 36376</p>
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
            </main>
        </div>
    );
}

export default StemLab;