import React, { useEffect } from 'react';
import SEO from './components/SEO';
import './FranchisePage.css';
//why choose techyguide section images
import whychooseTechyguide1 from './assets/FranchisePageImages/Why Choose TechyGuide_ - 1.webp';
import whychooseTechyguide2 from './assets/FranchisePageImages/Why Choose TechyGuide_ - 2.webp';
import whychooseTechyguide3 from './assets/FranchisePageImages/Why Choose TechyGuide_ - 3.webp';
import whychooseTechyguide4 from './assets/FranchisePageImages/Why Choose TechyGuide_ - 4.webp';

import testimonial1 from './assets/FranchisePageImages/Partner Testimonial_1.webp';
import testimonial2 from './assets/FranchisePageImages/Partner Testimonial_2.webp';
import testimonial3 from './assets/FranchisePageImages/Partner Testimonial_3.webp';
import testimonial4 from './assets/FranchisePageImages/Partner Testimonial_4.webp';
import testimonial5 from './assets/FranchisePageImages/Partner Testimonial_5.webp';
import testimonial6 from './assets/FranchisePageImages/Partner Testimonial_6.webp';
import testimonial7 from './assets/FranchisePageImages/Partner Testimonial_7.webp';

// What Will You Get? section images
import WhatWillYouGet1 from './assets/FranchisePageImages/What Will You Get_ - 1.webp';
import WhatWillYouGet2 from './assets/FranchisePageImages/What Will You Get_ - 2.webp';
import WhatWillYouGet3 from './assets/FranchisePageImages/What Will You Get_ - 3.webp';
import WhatWillYouGet4 from './assets/FranchisePageImages/What Will You Get_ - 4.webp';
// some snapshots section
import snapshot1 from './assets/FranchisePageImages/Some Snapshots - 1.webp';
import snapshot2 from './assets/FranchisePageImages/Some Snapshots - 2.webp';
import snapshot3 from './assets/FranchisePageImages/Some Snapshots - 3.webp';
import snapshot4 from './assets/FranchisePageImages/Some Snapshots - 4.webp';
import snapshot5 from './assets/FranchisePageImages/Some Snapshots - 5.webp';
import snapshot6 from './assets/FranchisePageImages/Some Snapshots - 6.webp';
//reventue streams section images
import revenue1 from './assets/FranchisePageImages/Revenue Streams - 1.webp';
import revenue2 from './assets/FranchisePageImages/Revenue Streams - 2.webp';
import revenue3 from './assets/FranchisePageImages/Revenue Streams - 3.webp';
import revenue4 from './assets/FranchisePageImages/Revenue Streams - 4.webp';
// franchise support section images
import franchiseSupport1 from './assets/FranchisePageImages/Franchise Support - 1.webp';
import franchiseSupport2 from './assets/FranchisePageImages/Franchise Support - 2.webp';
import franchiseSupport3 from './assets/FranchisePageImages/Franchise Support - 3.webp';
import franchiseSupport4 from './assets/FranchisePageImages/Franchise Support - 4.webp';
import franchiseSupport5 from './assets/FranchisePageImages/Franchise Support - 5.webp';


function FranchisePage() {
    const scrollToSection = (sectionId) => (event) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };


    useEffect(() => {
        const counters = document.querySelectorAll('.counter');
        let started = false;

        const animateCounter = (el) => {
            const target = +el.getAttribute('data-target');
            const duration = 1600; // ms
            const start = performance.now();

            const step = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                const value = Math.floor(progress * target);
                if (progress < 1) {
                    el.innerText = value.toLocaleString();
                    requestAnimationFrame(step);
                } else {
                    el.innerText = target.toLocaleString() + '+';
                }
            };
            requestAnimationFrame(step);
        };

        const runCounters = () => {
            counters.forEach(c => animateCounter(c));
        };

        const stats = document.querySelector('.stats-bar');
        if (!stats || counters.length === 0) return;

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !started) {
                    started = true;
                    runCounters();
                    obs.disconnect();
                }
            });
        }, { threshold: 1.00 });

        observer.observe(stats);

        // Parallax fallback: adjust hero background position on scroll (respects reduced-motion)
        const hero = document.querySelector('.hero');
        if (!hero) return;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const layers = document.querySelectorAll('.parallax-layers .layer');
        let ticking = false;

        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                const rect = hero.getBoundingClientRect();
                const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
                const inView = rect.bottom > 0 && rect.top < viewportHeight;

                if (inView) {
                    const heroTop = rect.top;
                    // base offset: distance hero has moved relative to viewport
                    const base = Math.max(-heroTop, 0);
                    // apply different multipliers for each layer
                    layers.forEach((layer, i) => {
                        const depth = (i + 1) * 0.15; // 0.15, 0.30, ...
                        const translateY = Math.round(base * depth);
                        layer.style.transform = `translate3d(0, ${translateY}px, 0)`;
                    });
                }

                ticking = false;
            });
        };

        // Initial position
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);

        // Button immediate-press feedback and queued animations
        const BUTTON_ANIM_DURATION = 420; // ms
        const queue = [];
        let running = false;

        function runNext() {
            if (queue.length === 0) { running = false; return; }
            running = true;
            const btn = queue.shift();
            if (!btn) { running = false; return; }
            btn.classList.add('btn-animate');
            setTimeout(() => {
                btn.classList.remove('btn-animate');
                runNext();
            }, BUTTON_ANIM_DURATION);
        }

        function enqueue(btn) {
            // ensure element still in DOM
            if (!btn || !btn.isConnected) return;
            queue.push(btn);
            if (!running) runNext();
        }

        const buttons = Array.from(document.querySelectorAll('.btn'));
        if (buttons.length === 0) return;

        buttons.forEach(btn => {
            // immediate visual feedback on pointer down
            btn.addEventListener('pointerdown', () => {
                btn.classList.add('btn-pressed');
            }, { passive: true });

            ['pointerup','pointercancel','pointerleave'].forEach(ev => {
                btn.addEventListener(ev, () => btn.classList.remove('btn-pressed'));
            });

            // enqueue a short animation when clicked; keeps order if multiple clicks occur
            btn.addEventListener('click', () => {
                enqueue(btn);
            });
        });

        // keyboard activation support: enqueue when user presses Enter/Space on a focused .btn
        const handleKeydown = (e) => {
            if (e.key !== ' ' && e.key !== 'Enter') return;
            const el = document.activeElement;
            if (el && el.classList && el.classList.contains('btn')) {
                e.preventDefault();
                // short pressed visual
                el.classList.add('btn-pressed');
                setTimeout(() => el.classList.remove('btn-pressed'), 160);
                enqueue(el);
            }
        };

        document.addEventListener('keydown', handleKeydown);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
            document.removeEventListener('keydown', handleKeydown);
        };
    }, []);

    const whyChooseCards = [
        {
            title: 'Proven Business Model',
            image: whychooseTechyguide1,
            description: 'Launch with a field-tested franchise framework that includes curriculum, operations support, and proven enrollment strategies.'
        },
        {
            title: 'ROI within 12–18 months',
            image: whychooseTechyguide2,
            description: 'Structured pricing, recurring course income, and optimized center operations are designed to help partners achieve faster payback.'
        },
        {
            title: 'Expanding demand in EdTech sector',
            image: whychooseTechyguide3,
            description: 'Leverage rising parent and school demand for robotics, coding, and AI programs aligned with future-ready education goals.'
        },
        {
            title: 'Multiple revenue streams',
            image: whychooseTechyguide4,
            description: 'Generate income from student programs, school workshops, kit sales, and innovation events under one scalable model.'
        }
    ];

    const franchiseSupportCards = [
        {
            title: 'MARKETING & BRANDING ASSISTANCE',
            image: franchiseSupport1,
            description: 'TechyGuide provides complete marketing and branding support to franchise partners including promotional materials, digital marketing guidance, branding assets, and strategies to attract schools and students.'
        },
        {
            title: 'OPERATIONAL GUIDANCE',
            image: franchiseSupport2,
            description: 'Franchise partners receive operational guidance to manage their center efficiently including setup assistance, classroom management strategies, and operational best practices.'
        },
        {
            title: 'COMPREHENSIVE TRAINING & CURRICULUM',
            image: franchiseSupport3,
            description: 'TechyGuide provides structured training programs and a well-designed curriculum covering robotics, STEM, coding, and innovation programs for different student levels.'
        },
        {
            title: 'EVENTS & COMPETITION OPPORTUNITIES',
            image: franchiseSupport4,
            description: 'Students and franchise centers get opportunities to participate in robotics events, STEM competitions, and innovation challenges organized at school, regional, and national levels.'
        },
        {
            title: 'TECHNOLOGY & LMS INTEGRATION',
            image: franchiseSupport5,
            description: 'Franchise partners get access to TechyGuide’s technology platform and LMS which helps manage courses, track student progress, and deliver digital learning resources effectively.'
        }
    ];

    return (
        <div className="franchise-page">
            <SEO 
                title="Start Robotics & Coding Franchise in India | STEM Business"
                description="Start a Robotics & Coding franchise in India with TechyGuide. Start a STEM learning center that delivers AI, robotics programs, DIY kits, and engaging workshops designed for young learners."
                canonical="https://techyguide.com/robotics-coding-franchise-india"
            />
            {/* ============ HEADER / HERO SECTION ============ */}
            <header className="hero" id="home">
                <div className="hero-bottom-fade"></div>
                <div className="hero-content container">
                    <p className="tagline">FOLLOW INNOVATION!</p>
                    <h1 className="kit-title">Start <span className="accent">Robotics & Coding</span> Franchise <br/>in India</h1>
                    <p className="hero-desc">Empowering Students with AI, Robotics and 21st-Century Skills </p>
                    
                    <div className="hero-buttons">
                        <a className="btn btn-orange" href="#requirements" onClick={scrollToSection('requirements')}>Start Franchise</a>
                        <a className="btn btn-glass" href="#what-you-get" onClick={scrollToSection('what-you-get')}>Learn More</a>
                    </div>
                </div>
            </header>

            
            {/* ============ WHY CHOOSE US SECTION ============ */}
            <section className="section gray-bg" id="why">
                <div className="container">
                    <h2 className="section-title">Why Choose TechyGuide?</h2>
                    <p className="lead">Join India's No.1 Robotics & Coding Learning Centre — a proven, scalable franchise model built on trust, curriculum excellence, and financial viability.</p>

                    <div className="pillars-grid">
                        {whyChooseCards.map((card) => (
                            <article className="pillar-card card" key={card.title}>
                                <img
                                    className="pillar-img"
                                    src={card.image}
                                    alt={card.title}
                                    loading="lazy"
                                />
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                            </article>
                        ))}
                    </div>
                </div>

                {/* ============ REVENUE STREAMS SECTION ============ */}

            </section>
            <section className="revenue-section" id="revenue">
                <div className="container">
                    <h2 className="section-title2">Revenue Streams</h2>
                    <p className="lead">Multiple ways to grow your business and maximize your ROI.</p>

                    <div className="revenue-grid">
                        <div className="revenue-card">
                            <img
                                className="rev-banner"
                                src={revenue1}
                                alt="Course Fees"
                                loading="lazy"
                            />
                            <div className="rev-content">
                                <h3>Course Fees</h3>
                                <p>Recurring monthly income from Robotics, Coding, and AI batches (Ages 6-18).</p>
                                <span className="rev-tag">High Margin</span>
                            </div>
                        </div>

                        <div className="revenue-card">
                            <img
                                className="rev-banner"
                                src={revenue2}
                                alt="School Workshops"
                                loading="lazy"
                            />
                            <div className="rev-content">
                                <h3>School Workshops</h3>
                                <p>Bulk revenue through STEM workshops and Lab setup consultancy in local schools.</p>
                                <span className="rev-tag">B2B Revenue</span>
                            </div>
                        </div>

                        <div className="revenue-card">
                            <img
                                className="rev-banner"
                                src={revenue3}
                                alt="Kit Sales"
                                loading="lazy"
                            />
                            <div className="rev-content">
                                <h3>Kit Sales</h3>
                                <p>Direct profit from selling exclusive Techyguide Robotics & DIY Science kits.</p>
                                <span className="rev-tag">Product Sales</span>
                            </div>
                        </div>

                        <div className="revenue-card">
                            <img
                                className="rev-banner"
                                src={revenue4}
                                alt="Competitions"
                                loading="lazy"
                            />
                            <div className="rev-content">
                                <h3>Competitions</h3>
                                <p>Revenue from organizing regional Robotics Olympiads and hackathons.</p>
                                <span className="rev-tag">Event Based</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ STATISTICS SECTION ============ */}
            <section className="stats-bar">
                <div className="stat-item">
                    <h2 className="counter" data-target="26">0</h2>
                    <p>States Covered</p>
                </div>
                <div className="stat-item">
                    <h2 className="counter" data-target="700">0</h2>
                    <p>Schools Served</p>
                </div>
                <div className="stat-item">
                    <h2 className="counter" data-target="2500">0</h2>
                    <p>Educators Trained</p>
                </div>
                <div className="stat-item">
                    <h2 className="counter" data-target="200000">0</h2>
                    <p>Students Impacted</p>
                </div>
            </section>

            {/* ============ REQUIREMENTS SECTION ============ */}
            <section className="section gray-bg" id="requirements">
                <div className="container">
                    <h2 className="section-title">Requirements to Start</h2>
                    <div className="requirements-grid">
                        <div className="card requirement-card">
                            <div className="icon">📍</div>
                            <h3>Space</h3>
                            <ul>
                                <li>500 – 700 sq. ft. in a prominent Space.</li>
                            </ul>
                        </div>
                        <div className="card requirement-card">
                            <div className="icon">💰</div>
                            <h3>Investment</h3>
                            <ul>
                                <li>3 – 6 Lakh Approximate Budget</li>
                                {/* <li>Setup Cost: ₹2,00,000(Hardware,software& training)</li>
                                <li>Infrastructure Set Up Cost: Rs.3,00,000</li>
                                <li>Average Course Fee: ₹1,500 – ₹2,500</li> */}
                            </ul>
                        </div>
                        <div className="card requirement-card">
                            <div className="icon">🔌</div>
                            <h3>Infrastructure</h3>
                            <ul>
                                <li>6–8 workstations with storage, power, display, internet, and 2:1 computers.</li>
                                {/* <li>A LAN is a private, high-speed network that connects computers.</li> */}
                            </ul>
                        </div>
                        <div className="card requirement-card">
                            <div className="icon">👥</div>
                            <h3>Staffing</h3>
                            <ul>
                                <li>1–2 trainers to conduct classes.</li>
                                {/* <li>Monthly Revenue: ₹40,000- 50,000</li>
                                <li>Considering 20 students initially.</li>
                                <li>ROI expected within 12–18 months.</li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/* ============ WHAT WILL YOU GET SECTION ============ */}
            <section className="containerbox what-you-get-section" id="what-you-get">
                <h2 className="section-title">What Will You Get?</h2>

                <div className="what-you-get-grid">
                    <article className="what-you-get-card">
                        <div className="what-you-get-image-wrap">
                            <img src={WhatWillYouGet1} alt="Lab Layout" className="what-you-get-image" loading="lazy" />
                        </div>
                        <div className="what-you-get-content">
                            <h3>LAB LAYOUT &amp; SET UP DESIGN</h3>
                            <p>Professional workspace planning and ergonomic design for modern labs.</p>
                        </div>
                    </article>

                    <article className="what-you-get-card">
                        <div className="what-you-get-image-wrap">
                            <img src={WhatWillYouGet2} alt="Hardware" className="what-you-get-image" loading="lazy" />
                        </div>
                        <div className="what-you-get-content">
                            <h3>HARDWARE &amp; SOFTWARE</h3>
                            <p>Access to cutting-edge robotics, 3D printers, and interactive modules.</p>
                        </div>
                    </article>

                    <article className="what-you-get-card">
                        <div className="what-you-get-image-wrap">
                            <img src={WhatWillYouGet3} alt="Curriculum" className="what-you-get-image" loading="lazy" />
                        </div>
                        <div className="what-you-get-content">
                            <h3>CONTENT &amp; CURRICULUM</h3>
                            <p>Comprehensive lesson plans and digital resources for all grade levels.</p>
                        </div>
                    </article>

                    <article className="what-you-get-card">
                        <div className="what-you-get-image-wrap">
                            <img src={WhatWillYouGet4} alt="Training" className="what-you-get-image" loading="lazy" />
                        </div>
                        <div className="what-you-get-content">
                            <h3>TRAINING &amp; SUPPORT</h3>
                            <p>Hands-on teacher training and dedicated technical support for schools.</p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="section franchise-support-section" id="franchise-support">
                <div className="container">
                    <h2 className="section-title">Franchise Support</h2>
                    <div className="franchise-support-grid">
                        <div className="franchise-support-row-1">
                            {franchiseSupportCards.slice(0, 2).map((card) => (
                                <article className="franchise-support-card" key={card.title}>
                                    <img src={card.image} alt={card.title} loading="lazy" className="franchise-support-image" />
                                    <div className="franchise-support-content">
                                        <h3>{card.title}</h3>
                                        <p>{card.description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="franchise-support-row-2">
                            {franchiseSupportCards.slice(2).map((card) => (
                                <article className="franchise-support-card" key={card.title}>
                                    <img src={card.image} alt={card.title} loading="lazy" className="franchise-support-image" />
                                    <div className="franchise-support-content">
                                        <h3>{card.title}</h3>
                                        <p>{card.description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ some snapshots ============ */}
            <section className="snapshot-section" id="snapshots">
                <div className="containersnapshot">
                    <h2 className="section-title3">Some Snapshots</h2>
                    <div className="view">
                        <div className="block big"><img src={snapshot4} alt="Snapshot 1" loading="lazy" /></div>
                        <div className="block small"><img src={snapshot1} alt="Snapshot 2" loading="lazy" /></div>
                        <div className="block small"><img src={snapshot2} alt="Snapshot 3" loading="lazy" /></div>
                        <div className="block big"><img src={snapshot5} alt="Snapshot 4" loading="lazy" /></div>
                        <div className="block big"><img src={snapshot6} alt="Snapshot 5" loading="lazy" /></div>
                        <div className="block small"><img src={snapshot3} alt="Snapshot 6" loading="lazy" /></div>
                    </div>
                </div>
            </section>

            {/* ============ SUCCESS STORIES SECTION ============ */}
            <section className="section" id="stories">
                <div className="container">
                    <h2 className="section-title">Success Stories</h2>
                    
                    <div className="story-viewport">
                        <div className="story-track">
                            <div className="story-item"><img src={testimonial1} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial2} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial3} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial4} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial5} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial6} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial7} alt="Story" /></div>
                           

                             <div className="story-item"><img src={testimonial1} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial2} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial3} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial4} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial5} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial6} alt="Story" /></div>
                            <div className="story-item"><img src={testimonial7} alt="Story" /></div>
                           
                        </div>
                    </div>
                </div>
            </section>

            
            {/* ============ ADDITIONAL INFO SECTION ============ */}
            <section className="section">
                <div className="container">
                    <div className="info-grid">
                        <div className="info-box blue-border">
                            <h3>Franchise Overview</h3>
                            <ul>
                                <li><strong>High Growth Market:</strong> Tap into STEM demand via NEP 2020.</li>
                                <li><strong>Low Risk:</strong> Scalable model with established brand equity.</li>
                                <li><strong>Social Impact:</strong> Equip kids with logic and critical thinking.</li>
                            </ul>
                        </div>
                        <div className="info-box blue-border">
                            <h3>Who Can Join</h3>
                            <ul>
                                <li><strong>Entrepreneurs:</strong> Profitable business with a social purpose.</li>
                                <li><strong>Existing Centers:</strong> Schools/Tuition centers looking to upgrade.</li>
                                <li><strong>Tech Enthusiasts:</strong> Educators passionate about hands-on learning.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FranchisePage;
