import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './I-BoT.css';
//hero image
import heroimg from '../assets/ProductI-BoTImages/my-image.png';
//Technologies at Focus images
import InternetofThings from '../assets/ProductI-BoTImages/Internet of Things (IoT).png';
import WirelessCommunication from '../assets/ProductI-BoTImages/Wireless Communication.png';
import AdvancedSensoryLogic from '../assets/ProductI-BoTImages/Advanced Sensory Logic.png';
import AutomationEngineering from '../assets/ProductI-BoTImages/Automation Engineering.png';
import DualProgramming from '../assets/ProductI-BoTImages/Dual Programming.png';
//i-Bot Technology: The Hardware images
import TheBrain from '../assets/ProductI-BoTImages/The Brain.png';
import AllinOneController from '../assets/ProductI-BoTImages/All-in-One Controller.png';
import SafetyFirst from '../assets/ProductI-BoTImages/Safety First.png';
import powerefficiency from '../assets/ProductI-BoTImages/Power Efficiency.png';

//kit offerings section images
import ibotStarterKit from '../assets/ProductI-BoTImages/i-Bot Starter Kit.png';
import ibotAdvancedKit from '../assets/ProductI-BoTImages/i-Bot Advance Kit.png';
//Why i-Bot is the Best section
import hundredPlusProjects from '../assets/ProductI-BoTImages/100_Unmatched Project Variety.png';
import realworldApplications from '../assets/ProductI-BoTImages/Real World Applications.png';
import modularAndScalable from '../assets/ProductI-BoTImages/Modular & Scalable.png';
import DurabilityWarranty from '../assets/ProductI-BoTImages/Durability & Warranty.png';
import ibotIntroVideo from '../assets/ProductI-BoTImages/Website_Product_Page_I-Bot_V1.mp4';
// featured ibot projects section images
import SmartAttendanceSystem from '../assets/ProductI-BoTImages/Featured i-Bot Projects - 1.jpg';
import IotHouse from '../assets/ProductI-BoTImages/Featured i-Bot Projects - 2.jpg';
import Humaniod from '../assets/ProductI-BoTImages/Featured i-Bot Projects - 3.jpg';
import BluetoothControlledCar from '../assets/ProductI-BoTImages/Featured i-Bot Projects - 4.jpg';
import RoboticArm from '../assets/ProductI-BoTImages/Featured i-Bot Projects - 5.jpg';


function IBoT() {
    const ibotHeroRef = useRef(null);
    const ibotHeroCanvasRef = useRef(null);
    const [activeKitSlide, setActiveKitSlide] = useState(0);
    const [isKitSliderPaused, setIsKitSliderPaused] = useState(false);
    const touchStartXRef = useRef(0);
    const touchEndXRef = useRef(0);

    useEffect(() => {
        document.title = 'i-Bot IoT & Robotics Kit | 100+ Wireless STEM Projects | Techyguide';

        const metaDescriptionText = 'Master IoT with the i-Bot Advance Kit. Build smart home systems, voice-controlled robots, and 100+ projects using the ESP32 chip.';
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', metaDescriptionText);

        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', 'https://techyguide.com/#/ibot');
    }, []);

    useEffect(() => {
        const hero = ibotHeroRef.current;
        const canvas = ibotHeroCanvasRef.current;
        if (!hero || !canvas) return undefined;

        const ctx = canvas.getContext('2d');
        if (!ctx) return undefined;

        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const parallaxTargets = Array.from(hero.querySelectorAll('[data-depth]'));
        const pointer = { x: 0, y: 0, active: false };
        const particles = [];
        const palette = [
            'rgba(218, 255, 245, 0.58)',
            'rgba(142, 242, 221, 0.55)',
            'rgba(255, 255, 255, 0.48)',
            'rgba(179, 255, 227, 0.36)'
        ];

        let reducedMotion = mediaQuery.matches;
        let width = 0;
        let height = 0;
        let dpr = 1;
        let rafId = 0;

        const random = (min, max) => Math.random() * (max - min) + min;

        const particleCount = () => Math.max(22, Math.min(68, Math.floor((width * height) / 24000)));

        const createParticle = () => ({
            x: random(0, width),
            y: random(0, height),
            r: random(1.2, 3.2),
            vx: random(-0.26, 0.26),
            vy: random(-0.18, 0.18),
            alpha: random(0.34, 0.72),
            color: palette[Math.floor(Math.random() * palette.length)]
        });

        const buildParticles = () => {
            particles.length = 0;
            for (let index = 0; index < particleCount(); index += 1) {
                particles.push(createParticle());
            }
        };

        const resize = () => {
            const rect = hero.getBoundingClientRect();
            width = Math.max(1, Math.floor(rect.width));
            height = Math.max(1, Math.floor(rect.height));
            dpr = Math.min(window.devicePixelRatio || 1, 2);

            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            pointer.x = width * 0.5;
            pointer.y = height * 0.5;
            buildParticles();
            drawFrame(!reducedMotion);
        };

        const applyParallax = (clientX, clientY) => {
            if (reducedMotion || parallaxTargets.length === 0) return;

            const rect = hero.getBoundingClientRect();
            const nx = (clientX - rect.left) / rect.width - 0.5;
            const ny = (clientY - rect.top) / rect.height - 0.5;

            parallaxTargets.forEach((node) => {
                const depth = Number(node.dataset.depth || 0.02);
                const tx = nx * depth * 150;
                const ty = ny * depth * 120;
                node.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0)`;
            });
        };

        const resetParallax = () => {
            parallaxTargets.forEach((node) => {
                node.style.transform = '';
            });
        };

        const drawConnections = () => {
            for (let i = 0; i < particles.length; i += 1) {
                const a = particles[i];
                for (let j = i + 1; j < particles.length; j += 1) {
                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const distSq = dx * dx + dy * dy;
                    if (distSq > 14400) continue;

                    const dist = Math.sqrt(distSq);
                    const opacity = (1 - dist / 120) * 0.18;
                    ctx.strokeStyle = `rgba(194, 255, 238, ${opacity.toFixed(3)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                }
            }
        };

        const updateParticle = (particle) => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < -12) particle.x = width + 12;
            if (particle.x > width + 12) particle.x = -12;
            if (particle.y < -12) particle.y = height + 12;
            if (particle.y > height + 12) particle.y = -12;

            if (!pointer.active) return;
            const dx = particle.x - pointer.x;
            const dy = particle.y - pointer.y;
            const dist = Math.hypot(dx, dy);
            if (dist > 90 || dist === 0) return;

            const repel = (90 - dist) / 90;
            particle.x += (dx / dist) * repel * 0.65;
            particle.y += (dy / dist) * repel * 0.65;
        };

        const drawFrame = (animate) => {
            ctx.clearRect(0, 0, width, height);

            particles.forEach((particle) => {
                if (animate) updateParticle(particle);

                ctx.fillStyle = particle.color;
                ctx.globalAlpha = particle.alpha;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
                ctx.fill();
            });

            ctx.globalAlpha = 1;
            drawConnections();
        };

        const tick = () => {
            drawFrame(true);
            rafId = window.requestAnimationFrame(tick);
        };

        const stop = () => {
            window.cancelAnimationFrame(rafId);
            rafId = 0;
        };

        const start = () => {
            stop();
            if (reducedMotion) {
                drawFrame(false);
                return;
            }
            tick();
        };

        const handlePointerMove = (event) => {
            const rect = hero.getBoundingClientRect();
            pointer.active = true;
            pointer.x = event.clientX - rect.left;
            pointer.y = event.clientY - rect.top;
            applyParallax(event.clientX, event.clientY);
        };

        const handlePointerLeave = () => {
            pointer.active = false;
            resetParallax();
        };

        let isVisible = true;

        const handleVisibilityChange = () => {
            if (document.hidden || !isVisible) {
                stop();
                return;
            }
            start();
        };

        const onMotionChange = (event) => {
            reducedMotion = event.matches;
            hero.dataset.reducedMotion = reducedMotion ? 'true' : 'false';
            if (reducedMotion) {
                resetParallax();
                pointer.active = false;
            }
            if (isVisible && !document.hidden) start();
        };

        hero.addEventListener('pointermove', handlePointerMove);
        hero.addEventListener('pointerleave', handlePointerLeave);
        window.addEventListener('resize', resize);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        if (typeof mediaQuery.addEventListener === 'function') {
            mediaQuery.addEventListener('change', onMotionChange);
        } else if (typeof mediaQuery.addListener === 'function') {
            mediaQuery.addListener(onMotionChange);
        }

        hero.dataset.reducedMotion = reducedMotion ? 'true' : 'false';
        resize();

        const observer = new IntersectionObserver((entries) => {
            isVisible = entries[0].isIntersecting;
            handleVisibilityChange();
        });
        observer.observe(hero);

        return () => {
            stop();
            observer.disconnect();
            hero.removeEventListener('pointermove', handlePointerMove);
            hero.removeEventListener('pointerleave', handlePointerLeave);
            window.removeEventListener('resize', resize);
            document.removeEventListener('visibilitychange', handleVisibilityChange);

            if (typeof mediaQuery.removeEventListener === 'function') {
                mediaQuery.removeEventListener('change', onMotionChange);
            } else if (typeof mediaQuery.removeListener === 'function') {
                mediaQuery.removeListener(onMotionChange);
            }
        };
    }, []);

    useEffect(() => {
        const handleAnchorClick = (e) => {
            const target = e.target.closest('a[href^="#"]');
            if (target) {
                e.preventDefault();
                const id = target.getAttribute('href').slice(1);
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);

        return () => {
            document.removeEventListener('click', handleAnchorClick);
        };
    }, []);

    useEffect(() => {
        if (isKitSliderPaused) return undefined;

        const timer = setInterval(() => {
            setActiveKitSlide((prevSlide) => (prevSlide + 1) % 2);
        }, 3500);

        return () => clearInterval(timer);
    }, [isKitSliderPaused]);

    const goToKitSlide = (slideIndex) => {
        setActiveKitSlide(slideIndex);
    };

    const moveKitSlide = (direction) => {
        setActiveKitSlide((prevSlide) => {
            const totalSlides = 2;
            return (prevSlide + direction + totalSlides) % totalSlides;
        });
    };

    const handleKitTouchStart = (event) => {
        touchStartXRef.current = event.touches[0].clientX;
    };

    const handleKitTouchMove = (event) => {
        touchEndXRef.current = event.touches[0].clientX;
    };

    const handleKitTouchEnd = () => {
        const distance = touchStartXRef.current - touchEndXRef.current;
        const swipeThreshold = 50;

        if (Math.abs(distance) > swipeThreshold) {
            if (distance > 0) {
                moveKitSlide(1);
            } else {
                moveKitSlide(-1);
            }
        }
    };

    return (
        <div className="ibot-page-root">
            <header className="ibot-hero-root" id="home" ref={ibotHeroRef}>
                <canvas className="ibot-hero-canvas" aria-hidden="true" ref={ibotHeroCanvasRef}></canvas>

                <nav className="ibot-hero-nav" aria-label="Primary">
                    <span className="ibot-hero-logo-pill" aria-label="I-BoT home">I-BoT</span>
                </nav>

                <div className="ibot-hero-layout">
                    <div className="ibot-hero-copy" data-depth="0.02">
                        <p className="ibot-hero-eyebrow">STEM Learning For Kids</p>
                        <h1>
                            Build, Code &amp; Launch
                            <span>Real I-BoT Projects</span>
                        </h1>
                        <p className="ibot-hero-subcopy">
                            Kids build future skills with hands-on IBoT robotics, coding, and creative challenges.
                        </p>
                        <Link className="ibot-hero-btn ibot-hero-btn-primary" to="/contact-techyguide/" aria-label="Start free trial">
                            Start Free Trial
                        </Link>
                    </div>

                    <div className="ibot-hero-visual" data-depth="0.035">
                        <div className="ibot-hero-visual-ring" aria-hidden="true"></div>
                        <div className="ibot-hero-photo-card">
                            <img
                                src={heroimg}
                                alt="Student learning coding and robotics with I-BoT kit"
                                className="ibot-hero-photo"
                                width="700"
                                height="480"
                                fetchPriority="high"
                                decoding="async"
                            />
                        </div>
                        <div className="ibot-hero-floating-badge ibot-hero-badge-one" aria-hidden="true">Scratch + AI</div>
                        <div className="ibot-hero-floating-badge ibot-hero-badge-two" aria-hidden="true">Hands-On Kits</div>
                    </div>
                </div>

                <div className="ibot-hero-wave" aria-hidden="true"></div>
            </header>

            <div className="ibot-modern-page">
                
                {/* INTRODUCTION SECTION */}
                <section className="ibot-section intro-section" id="introduction">
                    <div className="container">
                        <div className="section-header">
                            <h2>Introduction to the<span className="highlight-text">I-Bot Kit</span></h2>
                        </div>
                        <p className="intro-description">
The i-BoT robotics kit helps students explore IoT, robotics, wireless communication, and automation through hands-on learning. Built on the powerful ESP32 chip with integrated Wi-Fi and Bluetooth, the kit enables learners to design smart connected systems, from simple sensor-based projects to advanced voice-controlled robots. With over 100 guided projects and industry-grade sensors, i-BoT bridges classroom STEM education with practical technology skills used in modern innovation. 
                        </p>
                        <div className="ibot-video-wrap">
                            <div className="ibot-video-container">
                                <video className="ibot-intro-video" controls preload="metadata" playsInline>
                                    <source src={ibotIntroVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SMART WORLD CTA SECTION */}
                <section className="ibot-section smart-world-section">
                    <div className="container">
                        <h2 className="smart-world-headline">
                            Build Your Own <span style={{color: '#008273'}}>Smart World with i-Bot</span> <br/> The Ultimate IoT Learning Ecosystem.
                        </h2>
                        <p className="smart-world-subheadline">
                            Empowering young innovators (Ages 7–14) to master the Internet of Things. i-Bot (TechIoT) isn't just a robot; it's a gateway to building smart homes, wireless gadgets, and connected cities.
                        </p>
                       
                    </div>
                </section>
                
                {/* SECTION 1: TECHNOLOGIES AT FOCUS */}
                <section className="ibot-section tech-focus-section" id="ibot-tech-focus">
                    <div className="container">
                        <div className="section-header">
                            <h2><span style={{color: '#008273'}}>Technologies</span> at Focus</h2>
                            <p>Master the core technologies shaping IoT and robotics innovation</p>
                        </div>

                        <div className="tech-grid">
                            <div className="tech-card">
                                <img src={InternetofThings} alt="Internet of Things" className="tech-image" loading="lazy" decoding="async" />
                                <h3>Internet of Things (IoT)</h3>
                                <p>The core of i-Bot. Learn to send data to the cloud and control devices from your smartphone using the Blynk IoT platform.</p>
                            </div>
                            
                            <div className="tech-card">
                                <img src={WirelessCommunication} alt="Wireless Communication" className="tech-image" loading="lazy" decoding="async" />
                                <h3>Wireless Communication</h3>
                                <p>Master Wi-Fi and Bluetooth technologies for long-range remote control and automation.</p>
                            </div>
                            
                            <div className="tech-card">
                                <img src={AdvancedSensoryLogic} alt="Advanced Sensory Logic" className="tech-image" loading="lazy" decoding="async" />
                                <h3>Advanced Sensory Logic</h3>
                                <p>Use industry-grade sensors to detect Gas (MQ2), Flame, Rain, and Soil Moisture.</p>
                            </div>
                            
                            <div className="tech-card">
                                <img src={AutomationEngineering} alt="Automation Engineering" className="tech-image" loading="lazy" decoding="async" />
                                <h3>Automation Engineering</h3>
                                <p>Build complex systems like Smart Baby Cradles and Automated Sanitizer Dispensers.</p>
                            </div>
                            
                            <div className="tech-card">
                                <img src={DualProgramming} alt="Dual Programming" className="tech-image" loading="lazy" decoding="async" />
                                <h3>Dual Programming</h3>
                                <p>Start with graphical block coding and graduate to professional C++ programming using Arduino IDE.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: i-BOT TECHNOLOGY - VERTICAL CARDS */}
                <section className="ibot-section hardware-section">
                    <div className="container">
                        <div className="section-header">
                            <h2><span style={{color: '#008273'}}>I-Bot Technology</span>: The Hardware</h2>
                            <p>Industrial-grade engineering with classroom-friendly design</p>
                        </div>

                        <div className="hardware-grid">
                            {[
                                { title: 'The Brain', desc: 'Powered by the ultra-fast ESP32 Chip (4 MB) with dual-mode Wi-Fi and Bluetooth.', image: TheBrain },
                                { title: 'All-in-One Controller', desc: 'Integrated motor drivers, buzzer, LED, and multi-sensor pinouts with no messy wiring.', image: AllinOneController },
                                { title: 'Safety First', desc: 'Double-layer PCB with 3-layer short circuit protection ensuring safe classroom usage.', image: SafetyFirst },
                                { title: 'Power Efficiency', desc: 'Flexible power support from 3.7V to 12V with JST connectors for rechargeable batteries.', image: powerefficiency }
                            ].map((item, idx) => (
                                <div key={idx} className="hardware-card">
                                    <div className="hardware-card-media">
                                        <img src={item.image} alt={item.title} loading="lazy" className="hardware-card-image" />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 3: WHY i-BOT IS THE BEST */}
                <section className="ibot-section why-best-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Why <span style={{color: '#008273'}}>i-Bot</span> is the Best</h2>
                            <p>A complete IoT learning platform built for modern educators</p>
                        </div>

                        <div className="why-grid">
                            {/* Large 100+ Projects Card */}
                            <div className="why-card large projects-card">
                                <div className="why-card-media large">
                                    <img src={hundredPlusProjects} alt="100+ Projects" className="why-card-image" loading="lazy" decoding="async" />
                                </div>
                                <h3><span className="stat-counter">100+</span> Unmatched Project Variety</h3>
                                <p>From simple LED blink to advanced Human Following Robot, explore endless possibilities</p>
                            </div>

                            {/* Other Feature Cards */}
                            <div className="why-card">
                                <div className="why-card-media">
                                    <img src={realworldApplications} alt="Real-World Applications" className="why-card-image why-card-image-realworld" loading="lazy" decoding="async" />
                                </div>
                                <h3>Real-World Applications</h3>
                                <p>Projects simulate real industry solutions such as Smart Agriculture and IoT Wheelchairs.</p>
                            </div>

                            <div className="why-card">
                                <div className="why-card-media">
                                    <img src={modularAndScalable} alt="Modular & Scalable" className="why-card-image" loading="lazy" decoding="async" />
                                </div>
                                <h3>Modular & Scalable</h3>
                                <p>The i-Bot board works as a universal brain compatible with Humanoid robots, Robotic Arms, and 3D printed chassis.</p>
                            </div>

                            <div className="why-card">
                                <div className="why-card-media">
                                    <img src={DurabilityWarranty} alt="Durability & Warranty" className="why-card-image" loading="lazy" decoding="async" />
                                </div>
                                <h3>Durability & Warranty</h3>
                                <p>Industrial-grade components backed by a 1-year manufacturing warranty.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: i-BOT KITS - HORIZONTAL SCROLL */}
                <section className="ibot-section kits-section" id="kits">
                    <div className="container">
                        <div className="section-header">
                            <h2><span style={{color: '#008273'}}>i-Bot Kits</span> for Students</h2>
                            <p>Choose the perfect kit for your learning journey</p>
                        </div>

                        <div
                            className="kits-main-slider"
                            onTouchStart={handleKitTouchStart}
                            onTouchMove={handleKitTouchMove}
                            onTouchEnd={handleKitTouchEnd}
                            onMouseEnter={() => setIsKitSliderPaused(true)}
                            onMouseLeave={() => setIsKitSliderPaused(false)}
                        >
                            <div className="kits-slider-window">
                                <div
                                    className="kits-slider-track"
                                    style={{ transform: `translateX(-${activeKitSlide * 100}%)` }}
                                >
                                    {/* Kit 1 */}
                                    <article className="kit-main-slide">
                                        <div className="kit-scroll-card">
                                            <div className="kit-scroll-image">
                                                <img src={ibotStarterKit} alt="i-Bot Starter Kit" />
                                            </div>

                                            <div className="kit-scroll-content">
                                                <div className="kit-header">
                                                    <h3>i-Bot Starter Kit</h3>
                                                    <span className="kit-badge">20+ foundational projects</span>
                                                </div>

                                                <div className="kit-details">
                                                    <div className="kit-section">
                                                        <h4>Description</h4>
                                                        <p>Entry-level kit for learning smart electronics and wireless device control.</p>
                                                    </div>

                                                    <div className="kit-section">
                                                        <h4>Key Highlights</h4>
                                                        <ul className="hardware-list">
                                                            <li>Sensor-based automation projects</li>
                                                            <li>Basic motor control robotics</li>
                                                            <li>Wireless logic learning</li>
                                                            <li>Beginner friendly electronics</li>
                                                        </ul>
                                                    </div>

                                                    <div className="kit-section">
                                                        <h4>Example Projects</h4>
                                                        <ul className="hardware-list">
                                                            <li>LED Automation</li>
                                                            <li>Motion Sensor Alert</li>
                                                            <li>Smart Light Control</li>
                                                            <li>Motor Control Robot</li>
                                                        </ul>
                                                    </div>

                                                    <div className="kit-section">
                                                        <h4>Outcome</h4>
                                                        <p>Students learn IoT basics, sensor logic, and automation concepts.</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </article>

                                    {/* Kit 2 */}
                                    <article className="kit-main-slide">
                                        <div className="kit-scroll-card featured">
                                            <div className="kit-scroll-image">
                                                <img src={ibotAdvancedKit} alt="i-Bot Advance Kit" />
                                            </div>

                                            <div className="kit-scroll-content">
                                                <div className="kit-header featured-header">
                                                    <h3>i-Bot Advance Kit</h3>
                                                    <span className="kit-badge advanced">100+ smart projects</span>
                                                </div>

                                                <div className="kit-details">
                                                    <div className="kit-section">
                                                        <h4>Description</h4>
                                                        <p>Advanced IoT robotics kit for connected smart systems and complex automation projects.</p>
                                                    </div>

                                                    <div className="kit-section">
                                                        <h4>Key Highlights</h4>
                                                        <ul className="hardware-list">
                                                            <li>Powered by ESP32 with Wi-Fi and Bluetooth</li>
                                                            <li>Multi-sensor integration support</li>
                                                            <li>Advanced robotics and IoT systems</li>
                                                            <li>Industrial grade safety design</li>
                                                        </ul>
                                                    </div>

                                                    <div className="kit-section">
                                                        <h4>Example Projects</h4>
                                                        <ul className="hardware-list">
                                                            <li>IoT Home Automation</li>
                                                            <li>Radar Detection System</li>
                                                            <li>Maze Solving Robot</li>
                                                            <li>Voice Controlled Robot</li>
                                                        </ul>
                                                    </div>

                                                    <div className="kit-section">
                                                        <h4>Included Hardware</h4>
                                                        <ul className="hardware-list">
                                                            <li>I2C LCD Display</li>
                                                            <li>Servo Motors</li>
                                                            <li>Water Pump Module</li>
                                                            <li>Pulse Rate Sensor</li>
                                                            <li>Environmental Sensors (Gas, Rain, Soil)</li>
                                                        </ul>
                                                    </div>

                                                    <div className="kit-section">
                                                        <h4>Outcome</h4>
                                                        <p>Students master IoT systems, wireless communication, automation, and advanced robotics concepts.</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="kits-main-arrow prev"
                                aria-label="Previous kit"
                                onClick={() => moveKitSlide(-1)}
                            >
                                ‹
                            </button>
                            <button
                                type="button"
                                className="kits-main-arrow next"
                                aria-label="Next kit"
                                onClick={() => moveKitSlide(1)}
                            >
                                ›
                            </button>

                            <div className="kits-main-dots">
                                <button
                                    type="button"
                                    className={`kits-main-dot ${activeKitSlide === 0 ? 'active' : ''}`}
                                    aria-label="Go to i-Bot Starter Kit"
                                    onClick={() => goToKitSlide(0)}
                                />
                                <button
                                    type="button"
                                    className={`kits-main-dot ${activeKitSlide === 1 ? 'active' : ''}`}
                                    aria-label="Go to i-Bot Advance Kit"
                                    onClick={() => goToKitSlide(1)}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Projects Section */}
                <section className="ibot-section featured-projects-section" id="projects">
                    <div className="container">
                        <div className="section-header">
                            <h2>Featured <span style={{color: '#008273'}}>i-Bot Projects</span></h2>
                        </div>
                        <p className="projects-intro">Explore some of our 100+ amazing projects students can build:</p>
                        <div className="projects-scroll-wrap">
                            <div className="projects-scroll-track">
                                {[
                                   {
    title: "Smart Attendance System",
    description: "An automated system that records attendance using sensors, RFID, or smart identification methods.",
    image: SmartAttendanceSystem
},
{
    title: "IoT House",
    description: "A smart home model where devices like lights and appliances are controlled using IoT technology.",
    image: IotHouse
},
{
    title: "Humanoid",
    description: "A human-like robot designed to perform actions such as walking, moving arms, or interacting with users.",
    image: Humaniod
},
{
    title: "Bluetooth Controlled Car",
    description: "A robotic car that can be controlled wirelessly using Bluetooth from a smartphone or controller.",
    image: BluetoothControlledCar
},
{
    title: "Robotic Arm",
    description: "A programmable robotic arm capable of picking, placing, and manipulating objects using motors and sensors.",
    image: RoboticArm
}
                                    
                                ].concat([
                                    {
    title: "Smart Attendance System",
    description: "An automated system that records attendance using sensors, RFID, or smart identification methods.",
    image: SmartAttendanceSystem
},
{
    title: "IoT House",
    description: "A smart home model where devices like lights and appliances are controlled using IoT technology.",
    image: IotHouse
},
{
    title: "Humanoid",
    description: "A human-like robot designed to perform actions such as walking, moving arms, or interacting with users.",
    image: Humaniod
},
{
    title: "Bluetooth Controlled Car",
    description: "A robotic car that can be controlled wirelessly using Bluetooth from a smartphone or controller.",
    image: BluetoothControlledCar
},
{
    title: "Robotic Arm",
    description: "A programmable robotic arm capable of picking, placing, and manipulating objects using motors and sensors.",
    image: RoboticArm
}
                                ]).map((project, index) => (
                                    <div key={`${project.title}-${index}`} className="project-card">
                                        <img src={project.image} alt="project icon" className="project-number" loading="lazy" decoding="async" />
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default IBoT;
