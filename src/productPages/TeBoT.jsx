import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './TeBoT.css';
//hero image
import heroImage from '../assets/ProductTeBoTImages/HERO Section Boy with Kit.png';
// Explore, Create, and Innovate with TeBot section images
import ReusableLearning from '../assets/ProductTeBoTImages/Reusable Learning.png';
import ComprehensiveProjects from '../assets/ProductTeBoTImages/Comprehensive Projects.png';
import IndustryAligned from '../assets/ProductTeBoTImages/Industry Aligned.png';
//Master the Technologies of Tomorrow images
import RoboticsEngineering from '../assets/ProductTeBoTImages/Robotics & Engineering.png';
import CodingProgramming from '../assets/ProductTeBoTImages/Coding & Programming.png';
//The Advanced Tech Inside TeBot image
import TheAdvancedTechInsideTeBot from '../assets/ProductTeBoTImages/The Advanced Tech Inside TeBot.jpg';
//Why TeBot is the Ultimate Learning Choice images
import ChildSafeDurable from '../assets/ProductTeBoTImages/Why TeBot is the Ultimate Learning Choice - 1.jpg';
import PlugPlaySimplicity from '../assets/ProductTeBoTImages/Why TeBot is the Ultimate Learning Choice - 2.jpg';
import ProvenImpact from '../assets/ProductTeBoTImages/Why TeBot is the Ultimate Learning Choice - 3.jpg';
import GuaranteedQuality from '../assets/ProductTeBoTImages/Why TeBot is the Ultimate Learning Choice - 4.jpg';
//TeBot Kits for Students
import TeBotKitsforStudents1 from '../assets/ProductTeBoTImages/TeBot Kits for Students - 1.jpg';
import TeBotKitsforStudents2 from '../assets/ProductTeBoTImages/TeBot Kits for Students - 2.jpg';
import TeBotKitsforStudents3 from '../assets/ProductTeBoTImages/TeBot Kits for Students - 3.jpg';
import tebotIntroVideo from '../assets/ProductTeBoTImages/Website_Product_Page_TeBot_V1.mp4';
// import ZohoBiginForm from '../components/ZohoBiginForm';
//featured tebot projects images
import soccerRobot from '../assets/ProductTeBoTImages/Featured TeBot Projects - 1.jpg';
import LineFollower from '../assets/ProductTeBoTImages/Featured TeBot Projects - 2.jpg';
import obstacleAvoidanceRobot from '../assets/ProductTeBoTImages/Featured TeBot Projects - 3.jpg';
import BluetoothControlCar from '../assets/ProductTeBoTImages/Featured TeBot Projects - 4.jpg';
import VoiceControlCar from '../assets/ProductTeBoTImages/Featured TeBot Projects - 5.jpg';


function TeBoT() {
    const [activeKitSlide, setActiveKitSlide] = useState(0);
    const [isKitSliderPaused, setIsKitSliderPaused] = useState(false);
    const touchStartXRef = useRef(0);
    const touchEndXRef = useRef(0);
    const heroSectionRef = useRef(null);
    const heroCanvasRef = useRef(null);

    useEffect(() => {
        document.title = 'TeBOT Robotics Kit for Classrooms | 50+ STEM Projects';

        const metaDescriptionText = 'TeBOT is a robotics and IoT learning kit designed for school classrooms in India. Students can build 50+ hands-on STEM projects using safe, reusable components.';
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
        canonical.setAttribute('href', 'https://techyguide.com/tebot-robotics-kit-for-schools/');
    }, []);

    const projectsList = [
    { title: "Soccer Robot", description: "A robot designed to play mini soccer games using motor control and directional movement.", image: soccerRobot },
    { title: "Line Follower", description: "A robot that follows a predefined path by detecting and tracking a line using sensors.", image: LineFollower },
    { title: "Obstacle Avoidance Robot", description: "A smart robot that detects obstacles using sensors and automatically changes direction.", image: obstacleAvoidanceRobot },
    { title: "Bluetooth Control Car", description: "A robotic car controlled wirelessly through a smartphone using Bluetooth connectivity.", image: BluetoothControlCar },
    { title: "Voice Control Car", description: "A robotic car that moves based on voice commands given through a mobile device.", image: VoiceControlCar },
];

    const kitOfferings = [
        {
            number: "1️⃣",
            name: "TeBot Basic Kit",
            description: "Ideal entry-level robotics kit designed for beginners to learn robotics fundamentals and basic automation.",
            projects: "10+ interactive projects",
            features: [
                "Built-in sensors for easy experimentation",
                "Beginner-friendly electronic components",
                "Safe circuit protection for classroom learning",
                "Durable reusable STEM components",
            ],
            projectsList: [
                "Button Game",
                "LED Pattern Controller",
                "Automatic Street Light",
                "Basic Obstacle Avoider",
                "Simple Sound Sensor Alarm",
            ],
            outcome: "Students understand basic robotics concepts, simple circuits, beginner electronics, and creative prototyping.",
            image: TeBotKitsforStudents1,
            imageAlt: 'TeBot Basic Kit visual'
        },
        {
            number: "2️⃣",
            name: "TeBot Champ Kit",
            description: "Advanced robotics kit for young innovators to explore multi-sensor robotics projects and structured STEM learning.",
            projects: "40+ engaging projects",
            features: [
                "Supports integration of multiple sensors",
                "Built-in modules for quick experimentation",
                "Durable robotics components for repeated use",
                "Safe short-circuit protection system",
            ],
            projectsList: [
                "Line Follower Robot",
                "Smart Irrigation System",
                "Danger Detection System",
                "Temperature & Humidity Monitor",
                "Virtual Assistant Home Automation",
            ],
            outcome: "Students gain practical exposure to robotics, sensors, automation, and real-world technology applications.",
            image: TeBotKitsforStudents2,
            imageAlt: 'TeBot Champ Kit visual'
        },
        {
            number: "3️⃣",
            name: "TeBot Advance Kit",
            description: "The ultimate robotics learning kit enabling complex robotics, IoT, and automation projects.",
            projects: "50+ high-level projects",
            features: [
                "Integration of multiple sensors and modules",
                "Built-in learning modules for advanced experimentation",
                "Safe electronics with circuit protection",
                "Professional-level robotics development platform",
            ],
            projectsList: [
                "Smart Home Automation",
                "Gesture Controlled Robot",
                "WiFi Controlled Devices",
                "Water Level Monitoring System",
                "Maze Solving Robot",
            ],
            outcome: "Students develop strong fundamentals in robotics, electronics, automation, and IoT-based smart systems.",
            image: TeBotKitsforStudents3,
            imageAlt: 'TeBot Advance Kit visual'
        }
    ];

    useEffect(() => {
        if (isKitSliderPaused) {
            return undefined;
        }

        const timer = setInterval(() => {
            setActiveKitSlide((prevSlide) => (prevSlide + 1) % kitOfferings.length);
        }, 3500);

        return () => clearInterval(timer);
    }, [isKitSliderPaused, kitOfferings.length]);

    const goToKitSlide = (slideIndex) => {
        setActiveKitSlide(slideIndex);
    };

    const moveKitSlide = (direction) => {
        setActiveKitSlide((prevSlide) => {
            const totalSlides = kitOfferings.length;
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

    useEffect(() => {
        const hero = heroSectionRef.current;
        const canvas = heroCanvasRef.current;
        if (!hero || !canvas) return undefined;

        const ctx = canvas.getContext('2d');
        if (!ctx) return undefined;

        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const parallaxTargets = Array.from(hero.querySelectorAll('[data-depth]'));
        const pointer = { x: 0, y: 0, active: false };
        const bubbles = [];
        const sparkles = [];

        let reducedMotion = mediaQuery.matches;
        let width = 0;
        let height = 0;
        let dpr = 1;
        let rafId = 0;
        let time = 0;

        const random = (min, max) => Math.random() * (max - min) + min;

        const bubbleCount = () => Math.max(12, Math.min(30, Math.floor((width * height) / 42000)));
        const sparkleCount = () => Math.max(16, Math.min(52, Math.floor((width * height) / 30000)));

        const createBubble = () => ({
            x: random(-30, width + 30),
            y: random(0, height),
            r: random(10, 42),
            speed: random(0.15, 0.45),
            drift: random(-0.2, 0.2),
            phase: random(0, Math.PI * 2),
            alpha: random(0.08, 0.2)
        });

        const createSparkle = () => ({
            x: random(0, width),
            y: random(0, height * 0.72),
            r: random(0.9, 2.1),
            phase: random(0, Math.PI * 2),
            twinkle: random(0.8, 1.6)
        });

        const seedScene = () => {
            bubbles.length = 0;
            sparkles.length = 0;

            for (let index = 0; index < bubbleCount(); index += 1) {
                bubbles.push(createBubble());
            }

            for (let index = 0; index < sparkleCount(); index += 1) {
                sparkles.push(createSparkle());
            }
        };

        const drawWave = (baseY, amplitude, wavelength, speed, color) => {
            ctx.beginPath();
            ctx.moveTo(0, height);

            const frequency = (Math.PI * 2) / wavelength;
            for (let x = 0; x <= width + 16; x += 16) {
                const y = baseY + Math.sin(x * frequency + time * speed) * amplitude;
                ctx.lineTo(x, y);
            }

            ctx.lineTo(width, height);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
        };

        const updateBubble = (bubble) => {
            bubble.y -= bubble.speed;
            bubble.x += Math.sin(time * 0.015 + bubble.phase) * 0.25 + bubble.drift;

            if (bubble.y + bubble.r < -10) {
                bubble.y = height + bubble.r + random(0, 60);
                bubble.x = random(-30, width + 30);
            }

            if (bubble.x < -50) bubble.x = width + 50;
            if (bubble.x > width + 50) bubble.x = -50;

            if (!pointer.active) return;
            const dx = bubble.x - pointer.x;
            const dy = bubble.y - pointer.y;
            const dist = Math.hypot(dx, dy);

            if (dist > 110 || dist === 0) return;

            const repel = (110 - dist) / 110;
            bubble.x += (dx / dist) * repel * 0.9;
            bubble.y += (dy / dist) * repel * 0.9;
        };

        const drawBubble = (bubble) => {
            ctx.fillStyle = `rgba(225, 240, 255, ${Math.min(0.35, bubble.alpha)})`;
            ctx.beginPath();
            ctx.arc(bubble.x, bubble.y, bubble.r, 0, Math.PI * 2);
            ctx.fill();

            // Add a lightweight highlight to maintain the 3D bubble look
            ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(0.4, bubble.alpha + 0.1)})`;
            ctx.beginPath();
            ctx.arc(bubble.x, bubble.y, bubble.r, 0, Math.PI * 2);
            ctx.fill();
        };

        const drawSparkles = () => {
            sparkles.forEach((sparkle) => {
                const twinkle = 0.35 + 0.45 * Math.sin(time * 0.02 * sparkle.twinkle + sparkle.phase);
                ctx.fillStyle = `rgba(230, 242, 255, ${twinkle})`;
                ctx.beginPath();
                ctx.arc(sparkle.x, sparkle.y, sparkle.r, 0, Math.PI * 2);
                ctx.fill();
            });
        };

        const drawFrame = (animate) => {
            if (animate) time += 1;
            ctx.clearRect(0, 0, width, height);

            drawSparkles();
            drawWave(height * 0.72, 16, 300, 0.012, 'rgba(116, 176, 255, 0.15)');
            drawWave(height * 0.78, 22, 380, 0.009, 'rgba(84, 144, 238, 0.2)');
            drawWave(height * 0.84, 28, 460, 0.007, 'rgba(53, 110, 214, 0.24)');

            bubbles.forEach((bubble) => {
                if (animate) updateBubble(bubble);
                drawBubble(bubble);
            });
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
            seedScene();
            drawFrame(false);
        };

        const applyParallax = (clientX, clientY) => {
            if (reducedMotion || parallaxTargets.length === 0) return;

            const rect = hero.getBoundingClientRect();
            const nx = (clientX - rect.left) / rect.width - 0.5;
            const ny = (clientY - rect.top) / rect.height - 0.5;

            parallaxTargets.forEach((node) => {
                const depth = Number(node.dataset.depth || 0.02);
                const tx = nx * depth * 140;
                const ty = ny * depth * 110;
                node.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0)`;
            });
        };

        const resetParallax = () => {
            parallaxTargets.forEach((node) => {
                node.style.transform = '';
            });
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
            pointer.active = true;
            pointer.x = event.clientX - hero.getBoundingClientRect().left;
            pointer.y = event.clientY - hero.getBoundingClientRect().top;
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

        const handleMotionChange = (event) => {
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
            mediaQuery.addEventListener('change', handleMotionChange);
        } else if (typeof mediaQuery.addListener === 'function') {
            mediaQuery.addListener(handleMotionChange);
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
                mediaQuery.removeEventListener('change', handleMotionChange);
            } else if (typeof mediaQuery.removeListener === 'function') {
                mediaQuery.removeListener(handleMotionChange);
            }
        };
    }, []);

    useEffect(() => {
        const root = document.getElementById('tebot-root');
        const heroButton = heroSectionRef.current?.querySelector('.tebot-hero-btn-primary');

        function smoothScrollTo(element, duration = 1000) {
            const targetPosition = element.offsetTop - 20;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            let startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            function easeInOutCubic(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t * t + b;
                t -= 2;
                return c / 2 * (t * t * t + 2) + b;
            }

            requestAnimationFrame(animation);
        }

        const handleButtonClick = (event) => {
            event.preventDefault();
            const introSection = document.getElementById('introduction');
            if (introSection) {
                smoothScrollTo(introSection, 1200);
            }
        };

        if (heroButton) {
            heroButton.addEventListener('click', handleButtonClick);
        }

        const handleAnchorClick = (e) => {
            const target = e.target.closest('a[href^="#"]');
            if (target && root && root.contains(target)) {
                e.preventDefault();
                const selector = target.getAttribute('href');
                const element = selector ? document.querySelector(selector) : null;
                if (element) {
                    smoothScrollTo(element, 1000);
                }
            }
        };

        if (root) {
            root.addEventListener('click', handleAnchorClick);
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        const elements = document.querySelectorAll(
            '.tebot-page-root .reveal-card, ' +
            '.tebot-page-root .section-header'
        );
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(el);
        });

        const form = document.getElementById('inquiry-form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
                let isValid = true;
                
                inputs.forEach((input, index) => {
                    setTimeout(() => {
                        if (!input.value.trim()) {
                            input.style.borderColor = '#ff4444';
                            input.style.boxShadow = '0 0 10px rgba(255, 68, 68, 0.3)';
                            isValid = false;
                        } else {
                            input.style.borderColor = '#4caf50';
                            input.style.boxShadow = '0 0 10px rgba(76, 175, 80, 0.3)';
                            setTimeout(() => {
                                input.style.borderColor = '#e0e0e0';
                                input.style.boxShadow = 'none';
                            }, 1000);
                        }
                    }, index * 50);
                });
                
                setTimeout(() => {
                    if (isValid) {
                        const schoolName = form.querySelector('input[name="school_name"]').value;
                        const contactPerson = form.querySelector('input[name="contact_person"]').value;
                        const email = form.querySelector('input[name="email"]').value;
                        const phone = form.querySelector('input[name="phone"]').value;
                        const message = form.querySelector('textarea[name="message"]').value;
                        
                        const whatsappMessage = `*New Inquiry from TeBot Product Page*%0A%0A` +
                            `*School Name:* ${encodeURIComponent(schoolName)}%0A` +
                            `*Contact Person:* ${encodeURIComponent(contactPerson)}%0A` +
                            `*Email:* ${encodeURIComponent(email)}%0A` +
                            `*Phone:* ${encodeURIComponent(phone)}%0A` +
                            `*Message:* ${encodeURIComponent(message)}%0A%0A` +
                            `*Page:* TeBot Product Page`;
                        
                        const whatsappNumber = '918197984847';
                        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
                        
                        const button = form.querySelector('.form-btn');
                        const originalText = button.textContent;
                        button.style.transform = 'translateY(-1px)';
                        setTimeout(() => {
                            button.textContent = '✅ Opening WhatsApp...';
                            button.style.background = 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)';
                            button.style.transform = 'translateY(-2px)';
                            
                            window.open(whatsappUrl, '_blank');
                        }, 150);
                        
                        setTimeout(() => {
                            button.textContent = originalText;
                            button.style.background = 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)';
                            form.reset();
                        }, 3000);
                    } else {
                        form.style.animation = 'shake 0.5s ease-in-out';
                        setTimeout(() => {
                            form.style.animation = '';
                        }, 500);
                    }
                }, inputs.length * 50 + 100);
            });
        }

        const handleKeyDown = function(e) {
            if (e.key === 'Enter' && e.target === heroButton) {
                heroButton.click();
            }
        };
        
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            if (root) {
                root.removeEventListener('click', handleAnchorClick);
            }
            if (heroButton) {
                heroButton.removeEventListener('click', handleButtonClick);
            }
            document.removeEventListener('keydown', handleKeyDown);
            observer.disconnect();
        };
    }, []);

    return (
        <div className="tebot-page-root">
            <header className="tebot-hero-section" id="home" ref={heroSectionRef}>
                <canvas className="tebot-hero-canvas" aria-hidden="true" ref={heroCanvasRef}></canvas>

                <nav className="tebot-hero-nav" aria-label="Primary">
                    <span className="tebot-hero-logo-pill" aria-label="TeBot home">TeBot</span>
                </nav>

                <div className="tebot-hero-layout">
                    <div className="tebot-hero-copy" data-depth="0.02">
                        <p className="tebot-hero-eyebrow">STEM Learning For Kids</p>
                        <h1>
                            Build, Code &amp; Invent
                            <span>Awesome TeBot Projects</span>
                        </h1>
                        <p className="tebot-hero-subcopy">
                            A playful robotics journey where kids create real builds, write code, and solve smart challenges.
                        </p>
                        <Link className="tebot-hero-btn tebot-hero-btn-primary" to="/contact-techyguide/" aria-label="Explore TeBot features">
                            Start Free Trial
                        </Link>
                    </div>

                    <div className="tebot-hero-visual" data-depth="0.035">
                        <div className="tebot-hero-visual-ring" aria-hidden="true"></div>
                        <div className="tebot-hero-photo-card">
                            <img
                                src={heroImage}
                                alt="Student learning coding and robotics with TeBot kit"
                                className="tebot-hero-photo"
                                width="700"
                                height="480"
                                fetchPriority="high"
                                decoding="async"
                            />
                        </div>
                        <div className="tebot-hero-floating-badge tebot-hero-badge-one" aria-hidden="true">Scratch + Sensors</div>
                        <div className="tebot-hero-floating-badge tebot-hero-badge-two" aria-hidden="true">Build + Code</div>
                    </div>
                </div>

                <div className="tebot-hero-wave" aria-hidden="true"></div>
            </header>

            {/* ===== CONTENT SECTIONS ===== */}
            <div className="ibot-page" id="tebot-root">

                {/* Introduction Section */}
                <section className="intro-section section-block section-soft" id="introduction">
                    <div className="intro-container section-container">
                        <div className="section-header">
                            <h2>Introduction to <span>TeBot Advance Kit</span></h2>
                        </div>
                        <p className="intro-description">
                          The TeBot Advance Kit is a robotics and IoT learning toolkit designed for young innovators. It includes sensors such as RFID, Bluetooth, and soil moisture modules, allowing students to build 50+ practical STEM projects. From smart security systems to voice-controlled vehicles, TeBOT helps students explore coding, electronics, and automation through hands-on learning, making it ideal for modern STEM education in schools. 
                        </p>
                        <div className="tebot-video-wrap">
                            <div className="tebot-video-container reveal-card">
                                <video className="tebot-intro-video" controls preload="metadata" playsInline>
                                    <source src={tebotIntroVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Explore, Create, Innovate Section */}
                <section className="explore-section section-block section-plain" id="explore">
                    <div className="explore-container section-container">
                        <div className="section-header">
                            <h2><span style={{color: '#008273'}}>Explore, Create, and Innovate</span> with TeBot</h2>
                        </div>
                        <p className="explore-tagline">Your Gateway to the Future of Tech</p>
                        <p className="explore-subheading">
                            TeBot is an all-in-one robotics kit for students that turns learners into tech creators. From LED projects to AI robots, TeBot helps students explore coding, electronics, and STEM through Practical learning. 
                        </p>
                        <ul className="explore-list">
                            <li className="explore-point reveal-card">
                                <img
                                    className="explore-image"
                                    src={ReusableLearning}
                                    alt="Reusable Learning"
                                    loading="lazy"
                                />
                                <div className="explore-content">
                                    <h3>Reusable Learning</h3>
                                    <p>Use, rebuild, and innovate—again and again with a modular design.</p>
                                </div>
                            </li>
                            <li className="explore-point reveal-card">
                                <img
                                    className="explore-image"
                                    src={ComprehensiveProjects}
                                    alt="Comprehensive Projects"
                                    loading="lazy"
                                />
                                <div className="explore-content">
                                    <h3>Comprehensive Projects</h3>
                                    <p>Dive into 50+ hands-on projects across Robotics, IoT, and AI.</p>
                                </div>
                            </li>
                            <li className="explore-point reveal-card">
                                <img
                                    className="explore-image"
                                    src={IndustryAligned}
                                    alt="Industry Aligned"
                                    loading="lazy"
                                />
                                <div className="explore-content">
                                    <h3>Industry Aligned</h3>
                                    <p>Bridge the gap between classroom theory and real-world technology.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Technologies at Focus Section */}
                <section className="technologies-section section-block section-mist" id="technologies">
                    <div className="tech-container section-container">
                        <div className="section-header">
                            <h2>Master the <span style={{color: '#008273'}}>Technologies of Tomorrow</span></h2>
                        </div>
                        <div className="tech-grid">
                            <div className="tech-card reveal-card">
                                <div className="tech-icon">
                                    <img src={RoboticsEngineering} alt="Robotics & Engineering" />
                                </div>
                                <h3>Robotics & Engineering</h3>
                                <p>Build autonomous machines like Line Followers, Obstacle Avoiders, and Gesture Controlled Cars.</p>
                            </div>
                            <div className="tech-card reveal-card">
                                <div className="tech-icon">
                                    <img src={CodingProgramming} alt="Coding & Programming" />
                                </div>
                                <h3>Coding & Programming</h3>
                                <p>Master logic using Scratch (Graphical) for beginners and C++ (Arduino IDE) for advanced mastery.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hardware Specifications Section */}
                <section className="specs-section section-soft tebot-compact-section" id="specifications">
                    <div className="specs-container section-container">
                        <div className="section-header">
                            <h2>The Advanced Tech Inside <span style={{color: '#008273'}}>TeBot</span></h2>
                        </div>
                        <div className="specs-card reveal-card">
                            <div className="specs-image-wrap">
                                <img src={TheAdvancedTechInsideTeBot} alt="TeBot advanced components" loading="lazy" />
                            </div>
                            <div className="specs-points-wrap">
                                <ul className="specs-points-list">
                                    <li><strong>🤖 Microcontroller:</strong> Powered by the high-performance Raspberry Pi Pico W</li>
                                    <li><strong>📡 Inbuilt Sensors:</strong> Dual IR Sensors, MPU6050 Motion Sensor, Speaker, and 2 Input Buttons</li>
                                    <li><strong>💡 Visual Display:</strong> 8x5 (40) RGB NeoPixel LED lines for emojis, patterns, and indicators</li>
                                    <li><strong>🔗 Connectivity:</strong> Bluetooth Slot, Ultrasonic Slot, and Edge Connector for unlimited sensor expansion</li>
                                    <li><strong>🔋 Power System:</strong> 3.7V 500mAh Li-ion battery with integrated charging and short-circuit protection</li>
                                    <li><strong>🛡️ Durability:</strong> Built with non-toxic, low-voltage materials, making it classroom-safe and ready for heavy reuse</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why TeBot Section */}
                <section className="why-tebot-section section-block section-plain" id="why-tebot">
                    <div className="why-container section-container">
                        <div className="section-header">
                            <h2>Why <span style={{color: '#008273'}}>TeBot</span> is the <span style={{color: '#008273'}}>Ultimate Learning Choice</span></h2>
                        </div>
                        <div className="benefits-grid">
                            <div className="benefit-item reveal-card">
                                <div className="benefit-icon">
                                    <img src={ChildSafeDurable} alt="Child Safe and Durable icon" loading="lazy" />
                                </div>
                                <h3>Child Safe & Durable</h3>
                                <p>Built with non-toxic, low-voltage materials, making it classroom-safe and ready for heavy reuse.</p>
                            </div>
                            <div className="benefit-item reveal-card">
                                <div className="benefit-icon">
                                    <img src={PlugPlaySimplicity} alt="Plug and Play Simplicity icon" loading="lazy" />
                                </div>
                                <h3>Plug & Play Simplicity</h3>
                                <p>Ready-to-use components and inbuilt sensors ensure quick setup—start coding in minutes.</p>
                            </div>
                            <div className="benefit-item reveal-card">
                                <div className="benefit-icon">
                                    <img src={ProvenImpact} alt="Proven Impact icon" loading="lazy" />
                                </div>
                                <h3>Proven Impact</h3>
                                <p>Developed by Techyguide, a pioneer with 350+ AI/Robotics labs and over 100,000 students trained across India.</p>
                            </div>
                            <div className="benefit-item reveal-card">
                                <div className="benefit-icon">
                                    <img src={GuaranteedQuality} alt="Guaranteed Quality icon" loading="lazy" />
                                </div>
                                <h3>Guaranteed Quality</h3>
                                <p>Every TeBot includes a 1-year manufacturing warranty on the microcontroller.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Kit Offerings Section */}
                <section className="kits-offerings-section section-mist tebot-compact-section" id="kits">
                    <div className="kits-container section-container">
                        <div className="section-header">
                            <h2><span style={{color: '#008273'}}>TeBot Kits</span> for Students</h2>
                        </div>
                        <div
                            className="kits-main-slider reveal-card"
                            onMouseEnter={() => setIsKitSliderPaused(true)}
                            onMouseLeave={() => setIsKitSliderPaused(false)}
                            onTouchStart={handleKitTouchStart}
                            onTouchMove={handleKitTouchMove}
                            onTouchEnd={handleKitTouchEnd}
                        >
                            <div className="kits-slider-window">
                                <div
                                    className="kits-slider-track"
                                    style={{ transform: `translateX(-${activeKitSlide * 100}%)` }}
                                >
                                    {kitOfferings.map((kit, index) => (
                                        <article
                                            key={index}
                                            className={`kit-main-slide ${index % 2 === 1 ? 'is-reverse' : ''} ${kit.name === 'TeBot Advance Kit' ? 'is-advance' : ''}`}
                                        >
                                            <div className="kit-main-image-card">
                                                <img src={kit.image} alt={kit.imageAlt} loading="lazy" />
                                            </div>
                                            <div className="kit-main-content-card">
                                                <div className="kit-number">{kit.number}</div>
                                                <h3>{kit.name}</h3>
                                                <p className="kit-description">{kit.description}</p>
                                                <div className="projects-badge">
                                                    📚 <strong>{kit.projects}</strong>
                                                </div>
                                                <div className="kit-info-block">
                                                    <span className="kit-info-label">Key Features</span>
                                                    <ul className="kit-features-list">
                                                        {kit.features.map((f, i) => (
                                                            <li key={i}>{f}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="kit-info-block">
                                                    <span className="kit-info-label">Projects Included</span>
                                                    <ul className="kit-features-list">
                                                        {kit.projectsList.map((p, i) => (
                                                            <li key={i}>{p}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="kit-info-block">
                                                    <span className="kit-info-label">Learning Outcome</span>
                                                    <p className="kit-outcome">{kit.outcome}</p>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
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
                                {kitOfferings.map((kit, slideIndex) => (
                                    <button
                                        key={kit.name}
                                        type="button"
                                        className={`kits-main-dot ${activeKitSlide === slideIndex ? 'active' : ''}`}
                                        aria-label={`Go to ${kit.name}`}
                                        onClick={() => goToKitSlide(slideIndex)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Projects Section */}
                <section className="featured-projects-section section-block section-soft" id="projects">
                    <div className="projects-container section-container">
                        <div className="section-header">
                            <h2>Featured <span style={{color: '#008273'}}>TeBot Projects</span></h2>
                        </div>
                        <p className="projects-intro">Explore some of our 50+ amazing projects students can build:</p>
                        <div className="projects-scroll-wrap">
                            <div className="projects-scroll-track">
                                {[...projectsList, ...projectsList].map((project, index) => (
                                    <div key={`${project.title}-${index}`} className="project-card reveal-card">
                                        <img src={project.image} alt="project icon" className="project-number" />
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Inquiry Form Section
                <section className="form-section section-block" id="interest-form">
                    <div className="form-container section-container">
                        <div className="section-header">
                            <h2>Get TeBot Advance for Your School! 📬</h2>
                        </div>
                        <p>Join the STEM revolution with 50+ hands-on projects</p>
                        <form className="inquiry-form" id="inquiry-form">
                            <div className="form-row">
                                <input type="text" name="school_name" placeholder="School Name" required />
                                <input type="text" name="contact_person" placeholder="Contact Person Name" required />
                            </div>
                            <div className="form-row">
                                <input type="email" name="email" placeholder="Email Address" required />
                                <input type="tel" name="phone" placeholder="Phone Number" required />
                            </div>
                            <textarea name="message" placeholder="Tell us how we can help your students innovate with TeBot..." rows="3" required></textarea>
                            <button type="submit" className="form-btn">📧 Send Inquiry Now</button>
                        </form>
                    </div>
                </section> */}

                {/* ===== ZOHO BIGIN CRM PROPOSAL FORM SECTION ===== */}
                {/* <ZohoBiginForm /> */}

            </div>
        </div>
    );
}

export default TeBoT;
