import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './E-Blox.css';

// hero section image
import Heroimage from '../assets/ProductE-BloxImages/Hero image - 1.png';
//introduction to eblox kit video section
import ebloxIntroVideo from '../assets/ProductE-BloxImages/Website_Product_Page_E-Blox_V1.mp4';


//technologies at focus section images
import technologiesAtFocus1 from '../assets/ProductE-BloxImages/Technologies at Focus - 1.jpg';
import technologiesAtFocus2 from '../assets/ProductE-BloxImages/Technologies at Focus - 2.jpg';
import technologiesAtFocus3 from '../assets/ProductE-BloxImages/Technologies at Focus - 3.jpg';
import technologiesAtFocus4 from '../assets/ProductE-BloxImages/Technologies at Focus - 4.jpg';
// E-Blox Tech - Safe & Simple Design images
import EBloxTech1 from '../assets/ProductE-BloxImages/E-Blox Tech - 1.jpg';
import EBloxTech2 from '../assets/ProductE-BloxImages/E-Blox Tech - 2.jpg';
import EBloxTech3 from '../assets/ProductE-BloxImages/E-Blox Tech - 3.jpg';
import EBloxTech4 from '../assets/ProductE-BloxImages/E-Blox Tech - 4.jpg';
//Why is e-Blox the Best for Early Learners? sections
import whyEbloxBest1 from '../assets/ProductE-BloxImages/Why is e-Blox the Best for Early Learners_ - 1.jpg';
import whyEbloxBest2 from '../assets/ProductE-BloxImages/Why is e-Blox the Best for Early Learners_ - 2.jpg';
import whyEbloxBest3 from '../assets/ProductE-BloxImages/Why is e-Blox the Best for Early Learners_ - 3.jpg';
import whyEbloxBest4 from '../assets/ProductE-BloxImages/Why is e-Blox the Best for Early Learners_ - 4.jpg';
// eblox kit offerings section images
import ebloxStarterKit from '../assets/ProductE-BloxImages/E-Blox Kit Offerings - 1.jpg';
import ebloxMakerKit from '../assets/ProductE-BloxImages/E-Blox Kit Offerings - 2.jpg';

//featured eblox projects section
import windmill from '../assets/ProductE-BloxImages/Featured E blox Projects - 1.jpg';
import Lamp from '../assets/ProductE-BloxImages/Featured E blox Projects - 2.jpg';
import HomeAutomation from '../assets/ProductE-BloxImages/Featured E blox Projects - 3.jpg';
import AutomaticCloseLight from '../assets/ProductE-BloxImages/Featured E blox Projects - 4.jpg';
import SanitizerDispenser from '../assets/ProductE-BloxImages/Featured E blox Projects - 5.jpg';
import car from '../assets/ProductE-BloxImages/Featured E blox Projects - 6.jpg';
import MechanicalDoor from '../assets/ProductE-BloxImages/Featured E blox Projects - 7.jpg';



export default function EBlox() {
    const [activeKitSlide, setActiveKitSlide] = useState(0);
    const [isKitSliderPaused, setIsKitSliderPaused] = useState(false);
    const ebloxHeroRef = useRef(null);
    const ebloxHeroCanvasRef = useRef(null);

    useEffect(() => {
        const previousTitle = document.title;
        const existingMetaDescription = document.querySelector('meta[name="description"]');
        const previousMetaDescriptionContent = existingMetaDescription?.getAttribute('content') ?? null;
        const existingCanonical = document.querySelector('link[rel="canonical"]');
        const previousCanonicalHref = existingCanonical?.getAttribute('href') ?? null;

        document.title = 'E-Blox Modular Electronics Kit for Kids | STEM Learning';

        let metaDescription = existingMetaDescription;
        if (metaDescription) {
            metaDescription.setAttribute(
                'content',
                'Discover the E-Blox modular electronics kit for kids aged 5-10. Build 20+ STEM projects while learning circuits, renewable energy, and engineering concepts.'
            );
        } else {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            metaDescription.setAttribute(
                'content',
                'Discover the E-Blox modular electronics kit for kids aged 5-10. Build 20+ STEM projects while learning circuits, renewable energy, and engineering concepts.'
            );
            document.head.appendChild(metaDescription);
        }

        let canonicalLink = existingCanonical;
        if (canonicalLink) {
            canonicalLink.setAttribute('href', 'https://techyguide.com/e-blox-modular-electronics-kit-for-kids/');
        } else {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            canonicalLink.setAttribute('href', 'https://techyguide.com/e-blox-modular-electronics-kit-for-kids/');
            document.head.appendChild(canonicalLink);
        }

        return () => {
            document.title = previousTitle;

            if (metaDescription) {
                if (previousMetaDescriptionContent === null && !existingMetaDescription) {
                    metaDescription.remove();
                } else if (previousMetaDescriptionContent !== null) {
                    metaDescription.setAttribute('content', previousMetaDescriptionContent);
                }
            }

            if (canonicalLink) {
                if (previousCanonicalHref === null && !existingCanonical) {
                    canonicalLink.remove();
                } else if (previousCanonicalHref !== null) {
                    canonicalLink.setAttribute('href', previousCanonicalHref);
                }
            }
        };
    }, []);
    
    const projectsList = [
       {
    title: "Wind Mill",
    description: "A small windmill model that generates motion or energy when wind moves the blades, demonstrating basic renewable energy concepts.",
    image: windmill
},
{
    title: "Lamp",
    description: "A simple electronic lamp project that demonstrates how a circuit can be used to power and control a light source.",
    image: Lamp
},
{
    title: "Home Automation",
    description: "A smart system that allows lights or appliances to be controlled automatically or remotely using sensors or wireless technology.",
    image: HomeAutomation
},
{
    title: "Automatic Close Light",
    description: "A lighting system that automatically turns off when no one is nearby using sensors for energy-efficient operation.",
    image: AutomaticCloseLight
},
{
    title: "Sanitizer Dispenser",
    description: "A touch-free sanitizer dispenser that releases sanitizer automatically when a hand is detected by a sensor.",
    image: SanitizerDispenser
},
{
    title: "Car",
    description: "A simple robotic car project demonstrating basic motor control and movement using electronic components.",
    image: car
},
{
    title: "Mechanical Door",
    description: "A door mechanism that opens or closes automatically using motors and simple mechanical and electronic control.",
    image: MechanicalDoor
}
        // { title: "Distance eBlox", description: "The distance sensor detects nearby objects and measures their proximity. It helps demonstrate how sensors are used for obstacle detection and automation systems." },
        // { title: "Motor Driver eBlox", description: "The motor driver controls the direction and power supplied to the motors. It is used to safely operate motors in electronic and robotics projects." },
        // { title: "Light Sensor  EBlox", description: " A   Light Sensor detects the intensity of light in the surrounding environment using an LDR module. It can automatically control devices like LEDs or lamps, turning them ON in darkness and OFF in bright light" },
        // { title: "Motion Sensing System", description: "Advanced motion detection and tracking" }
    ];


    useEffect(() => {
        if (isKitSliderPaused) {
            return undefined;
        }

        const kitTimer = setInterval(() => {
            setActiveKitSlide((prevSlide) => (prevSlide + 1) % 2);
        }, 3500);

        return () => clearInterval(kitTimer);
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

    useEffect(() => {
        const hero = ebloxHeroRef.current;
        const canvas = ebloxHeroCanvasRef.current;
        if (!hero || !canvas) return undefined;

        const ctx = canvas.getContext('2d');
        if (!ctx) return undefined;

        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const parallaxTargets = Array.from(hero.querySelectorAll('[data-depth]'));
        const pointer = { x: 0, y: 0, active: false };

        const stickers = [];
        const sparkles = [];

        const waveLayers = [
            { base: 0.34, amp: 16, speed: 0.018, width: 2.5, color: 'rgba(255, 219, 141, 0.30)' },
            { base: 0.48, amp: 22, speed: 0.014, width: 3, color: 'rgba(166, 255, 202, 0.26)' },
            { base: 0.63, amp: 18, speed: 0.011, width: 2.4, color: 'rgba(206, 211, 255, 0.25)' },
        ];

        const stickerPalette = [
            'rgba(255, 214, 124, 0.45)',
            'rgba(157, 255, 196, 0.40)',
            'rgba(199, 211, 255, 0.46)',
            'rgba(255, 170, 138, 0.38)',
        ];

        let reducedMotion = mediaQuery.matches;
        let width = 0;
        let height = 0;
        let dpr = 1;
        let rafId = 0;
        let frame = 0;

        const random = (min, max) => Math.random() * (max - min) + min;
        const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
        const stickerCount = () => Math.max(10, Math.min(24, Math.floor((width * height) / 51000)));
        const sparkleCount = () => Math.max(26, Math.min(70, Math.floor((width * height) / 19000)));

        const createSticker = () => {
            const shapes = ['square', 'triangle', 'plus', 'diamond'];
            return {
                x: random(-30, width + 30),
                y: random(-30, height + 30),
                size: random(10, 24),
                vx: random(-0.16, 0.16),
                vy: random(-0.12, 0.14),
                phase: random(0, Math.PI * 2),
                rotation: random(0, Math.PI * 2),
                spin: random(-0.012, 0.012),
                alpha: random(0.3, 0.62),
                shape: pick(shapes),
                color: pick(stickerPalette),
            };
        };

        const createSparkle = () => ({
            x: random(0, width),
            y: random(0, height),
            r: random(0.7, 1.9),
            phase: random(0, Math.PI * 2),
            twinkle: random(0.8, 1.9),
        });

        const seedScene = () => {
            stickers.length = 0;
            sparkles.length = 0;

            for (let i = 0; i < stickerCount(); i += 1) stickers.push(createSticker());
            for (let i = 0; i < sparkleCount(); i += 1) sparkles.push(createSparkle());
        };

        const resetParallax = () => {
            for (const node of parallaxTargets) node.style.transform = '';
        };

        const drawRoundedRect = (x, y, w, h, r) => {
            const radius = Math.min(r, w * 0.5, h * 0.5);
            ctx.beginPath();
            ctx.moveTo(x + radius, y);
            ctx.lineTo(x + w - radius, y);
            ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
            ctx.lineTo(x + w, y + h - radius);
            ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
            ctx.lineTo(x + radius, y + h);
            ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
            ctx.lineTo(x, y + radius);
            ctx.quadraticCurveTo(x, y, x + radius, y);
            ctx.closePath();
        };

        const drawWaves = () => {
            const localPower = pointer.active ? (pointer.y / height - 0.5) * 26 : 0;

            for (let i = 0; i < waveLayers.length; i += 1) {
                const wave = waveLayers[i];
                ctx.beginPath();

                for (let x = -20; x <= width + 20; x += 16) {
                    const ripple =
                        Math.sin(x * 0.011 + frame * wave.speed + i * 1.3) * wave.amp +
                        Math.cos(x * 0.004 - frame * wave.speed * 1.4 + i * 0.8) * (wave.amp * 0.35);

                    let pointerLift = 0;
                    if (pointer.active) {
                        const distance = Math.abs(x - pointer.x);
                        pointerLift = Math.max(0, 1 - distance / 180) * localPower;
                    }

                    const y = height * wave.base + ripple + pointerLift;
                    if (x === -20) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }

                ctx.strokeStyle = wave.color;
                ctx.lineWidth = wave.width;
                ctx.stroke();
            }
        };

        const updateSticker = (sticker) => {
            sticker.x += sticker.vx;
            sticker.y += sticker.vy + Math.sin(frame * 0.02 + sticker.phase) * 0.04;
            sticker.rotation += sticker.spin;

            const margin = 36;
            if (sticker.x < -margin) sticker.x = width + margin;
            if (sticker.x > width + margin) sticker.x = -margin;
            if (sticker.y < -margin) sticker.y = height + margin;
            if (sticker.y > height + margin) sticker.y = -margin;
        };

        const drawSticker = (sticker) => {
            ctx.save();
            ctx.translate(sticker.x, sticker.y);
            ctx.rotate(sticker.rotation);
            ctx.globalAlpha = sticker.alpha;
            ctx.fillStyle = sticker.color;
            ctx.strokeStyle = 'rgba(248, 239, 255, 0.7)';
            ctx.lineWidth = 1;

            switch (sticker.shape) {
                case 'triangle': {
                    ctx.beginPath();
                    ctx.moveTo(0, -sticker.size * 0.7);
                    ctx.lineTo(sticker.size * 0.62, sticker.size * 0.55);
                    ctx.lineTo(-sticker.size * 0.62, sticker.size * 0.55);
                    ctx.closePath();
                    ctx.fill();
                    ctx.stroke();
                    break;
                }
                case 'plus': {
                    const s = sticker.size;
                    drawRoundedRect(-s * 0.5, -s * 0.16, s, s * 0.32, s * 0.1);
                    ctx.fill();
                    ctx.stroke();
                    drawRoundedRect(-s * 0.16, -s * 0.5, s * 0.32, s, s * 0.1);
                    ctx.fill();
                    ctx.stroke();
                    break;
                }
                case 'diamond': {
                    ctx.rotate(Math.PI / 4);
                    drawRoundedRect(
                        -sticker.size * 0.5,
                        -sticker.size * 0.5,
                        sticker.size,
                        sticker.size,
                        sticker.size * 0.18
                    );
                    ctx.fill();
                    ctx.stroke();
                    break;
                }
                default: {
                    drawRoundedRect(
                        -sticker.size * 0.5,
                        -sticker.size * 0.5,
                        sticker.size,
                        sticker.size,
                        sticker.size * 0.22
                    );
                    ctx.fill();
                    ctx.stroke();
                }
            }

            ctx.restore();
        };

        const drawSparkles = () => {
            for (const sparkle of sparkles) {
                const pulse = 0.2 + 0.55 * Math.sin(frame * 0.03 * sparkle.twinkle + sparkle.phase);
                ctx.fillStyle = `rgba(247, 239, 255, ${pulse})`;
                ctx.beginPath();
                ctx.arc(sparkle.x, sparkle.y, sparkle.r, 0, Math.PI * 2);
                ctx.fill();
            }
        };

        const drawPointerGlow = () => {
            if (!pointer.active) return;
            const glow = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 130);
            glow.addColorStop(0, 'rgba(255, 229, 176, 0.26)');
            glow.addColorStop(1, 'rgba(255, 229, 176, 0)');
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(pointer.x, pointer.y, 130, 0, Math.PI * 2);
            ctx.fill();
        };

        const drawFrame = (animate) => {
            if (animate) frame += 1;

            ctx.clearRect(0, 0, width, height);
            drawWaves();

            for (const sticker of stickers) {
                if (animate) updateSticker(sticker);
                drawSticker(sticker);
            }

            drawSparkles();
            drawPointerGlow();
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
                pointer.active = false;
                resetParallax();
            }
            if (isVisible && !document.hidden) start();
        };

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
            window.removeEventListener('resize', resize);
            document.removeEventListener('visibilitychange', handleVisibilityChange);

            if (typeof mediaQuery.removeEventListener === 'function') {
                mediaQuery.removeEventListener('change', onMotionChange);
            } else if (typeof mediaQuery.removeListener === 'function') {
                mediaQuery.removeListener(onMotionChange);
            }
        };
    }, []);

    // Add scroll reveal animations like TeBoT
    useEffect(() => {
        const root = document.querySelector('.eblox-page-root');
        if (!root) return;

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
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        const elements = root.querySelectorAll('.reveal-card, .eblox-section-title');
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="eblox-page-root" style={{ overflow: 'hidden', scrollBehavior: 'auto' }}>
            <header className="eblox-hero-root" id="home" ref={ebloxHeroRef}>
                <canvas className="eblox-hero-canvas" aria-hidden="true" ref={ebloxHeroCanvasRef}></canvas>

                <nav className="eblox-hero-nav" aria-label="Primary">
                    <span className="eblox-hero-logo-pill" aria-label="E-BLOX home">E-BLOX</span>
                </nav>

                <div className="eblox-hero-layout">
                    <div className="eblox-hero-copy" data-depth="0.02">
                        <p className="eblox-hero-eyebrow">Block-Based STEM For Kids</p>
                        <h1>
                            Snap, Stack &amp; Code
                            <span>Creative E-BLOX Missions</span>
                        </h1>
                        <p className="eblox-hero-subcopy">
                            Kids build logic and creativity with playful eBlox kits, coding games, and hands-on mini missions.
                        </p>
                        <Link
                            className="eblox-hero-btn eblox-hero-btn-primary"
                            to="/contact-techyguide/"
                            aria-label="Start eBlox class"
                        >
                            Start eBlox Class
                        </Link>
                    </div>

                    <div className="eblox-hero-visual" data-depth="0.035">
                        <div className="eblox-hero-photo-card">
                            <img
                                src={Heroimage}
                                alt="Student learning with eBlox robotics and coding kit"
                                className="eblox-hero-photo"
                                width="700"
                                height="480"
                                fetchPriority="high"
                                decoding="async"
                            />
                        </div>
                        <div className="eblox-hero-floating-badge eblox-hero-badge-one" aria-hidden="true">Block Logic + Code</div>
                        <div className="eblox-hero-floating-badge eblox-hero-badge-two" aria-hidden="true">Build + Play</div>
                    </div>
                </div>

                <div className="eblox-hero-wave" aria-hidden="true"></div>
            </header>

            <div className="eblox-page">
                {/* Introduction Section */}
                <section className="eblox-page-section eblox-intro-section">
                    <div className="eblox-intro-container reveal-card">
                        <h2 className="eblox-intro-title">Introduction to the <span className="eblox-highlight">E-Blox Kit</span></h2>
                        <p className="eblox-intro-text">
                            The e-Blox Kit is a revolutionary electronics learning platform designed specifically for young learners (ages 5-10). With its safe, low-voltage components and innovative snap-together design, e-Blox makes hands-on engineering education accessible and engaging. Students can build 20+ practical projects including study lamps, table lamps, and mini windmills while learning fundamental concepts in electronics, renewable energy, and logic systems. By combining playful design with solid STEM fundamentals, e-Blox creates the perfect foundation for future innovators.
                        </p>
                        <div className="eblox-video-wrap">
                            <div className="eblox-video-container">
                                <video className="eblox-intro-video" controls preload="metadata" playsInline>
                                    <source src={ebloxIntroVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technologies at Focus - 2 columns */}
                <section className="eblox-page-section eblox-focus" id="eblox-tech-focus">
                    <h2 className="eblox-section-title orange-title"><span style={{color: '#008273'}}>Technologies</span> at Focus</h2>
                    <div className="eblox-focus-grid-2col">
                        <article className="eblox-focus-card-v2 reveal-card">
                            <div className="eblox-focus-image-v2">
                                <img src={technologiesAtFocus1} alt="Basic Electronics" loading="lazy" decoding="async" />
                            </div>
                            <h3>Basic Electronics</h3>
                            <p>Learn how circuits work by connecting power blocks to lights, sounds, and motors.</p>
                        </article>
                        <article className="eblox-focus-card-v2 reveal-card">
                            <div className="eblox-focus-image-v2">
                                <img src={technologiesAtFocus2} alt="Renewable Energy Concepts" loading="lazy" decoding="async" />
                            </div>
                            <h3>Renewable Energy Concepts</h3>
                            <p>Hands-on exploration of how energy can power everyday items like mini windmills.</p>
                        </article>
                        <article className="eblox-focus-card-v2 reveal-card">
                            <div className="eblox-focus-image-v2">
                                <img src={technologiesAtFocus3} alt="Practical Engineering" loading="lazy" decoding="async" />
                            </div>
                            <h3>Practical Engineering</h3>
                            <p>Build functional items your child can actually use, such as study lamps and table lamps.</p>
                        </article>
                        <article className="eblox-focus-card-v2 reveal-card">
                            <div className="eblox-focus-image-v2">
                                <img src={technologiesAtFocus4} alt="Logic & Sequencing" loading="lazy" decoding="async" />
                            </div>
                            <h3>Logic & Sequencing</h3>
                            <p>Understand "cause and effect" by using light, sound, and distance sensors to trigger different blocks.</p>
                        </article>
                    </div>
                </section>

                {/* e-Blox Tech - 2 columns with image and data under */}
                <section className="eblox-page-section eblox-tech-design">
                    <h2 className="eblox-section-title">E-Blox Tech <span style={{color: '#000000'}}>- Safe & Simple Design</span></h2>
                    <div className="eblox-tech-grid-2col">
                        <article className="eblox-tech-card-v2 reveal-card">
                            <div className="eblox-tech-image-v2">
                                <img src={EBloxTech1} alt="Child-safe engineering for e-Blox" loading="lazy" decoding="async" />
                            </div>
                            <h3>Child-Safe Engineering</h3>
                            <p>Built with low-voltage, non-toxic materials that are 100% classroom and home-safe.</p>
                        </article>

                        <article className="eblox-tech-card-v2 reveal-card">
                            <div className="eblox-tech-image-v2">
                                <img src={EBloxTech2} alt="Plug and play assembly for e-Blox" loading="lazy" decoding="async" />
                            </div>
                            <h3>Plug & Play Assembly</h3>
                            <p>No soldering or complex wiring required. Ready-to-use components enable instant setup and frustration-free learning.</p>
                        </article>

                        <article className="eblox-tech-card-v2 reveal-card">
                            <div className="eblox-tech-image-v2">
                                <img src={EBloxTech3} alt="Modular blocks in e-Blox" loading="lazy" decoding="async" />
                            </div>
                            <h3>Modular Building Blocks </h3>
                            <p>The snap-together design encourages repeated assembly, allowing children to rebuild and innovate multiple times.</p>
                        </article>

                        <article className="eblox-tech-card-v2 reveal-card">
                            <div className="eblox-tech-image-v2">
                                <img src={EBloxTech4} alt="Interactive components in e-Blox" loading="lazy" decoding="async" />
                            </div>
                            <h3>Interactive Components</h3>
                            <p>Features specialized blocks for sound, light, and motion that respond to the child's touch and environment.</p>
                        </article>
                    </div>
                </section>

                {/* Why is e-Blox Best - with images and reduced width */}
                <section className="eblox-page-section eblox-why-best">
                    <h2 className="eblox-section-title orange-title">Why is <span style={{color: '#008273'}}>e-Blox</span> the Best for <span style={{color: '#008273'}}>Early Learners</span>?</h2>
                    <div className="eblox-why-grid-v2">
                        <article className="eblox-why-card-v2 reveal-card">
                            <div className="eblox-why-image-v2">
                                <img src={whyEbloxBest1} alt="Constructive Learning" loading="lazy" decoding="async" />
                            </div>
                            <h3>Constructive Learning</h3>
                            <p>Unlike passive toys, e-Blox encourages active building and problem solving.</p>
                        </article>
                        <article className="eblox-why-card-v2 reveal-card">
                            <div className="eblox-why-image-v2">
                                <img src={whyEbloxBest2} alt="Instant Success" loading="lazy" decoding="async" />
                            </div>
                            <h3>Instant Success</h3>
                            <p>Children can build 20+ exciting products and see immediate results.</p>
                        </article>
                        <article className="eblox-why-card-v2 reveal-card">
                            <div className="eblox-why-image-v2">
                                <img src={whyEbloxBest3} alt="Foundation for STEM" loading="lazy" decoding="async" />
                            </div>
                            <h3>Foundation for STEM</h3>
                            <p>Perfect stepping stone before moving to advanced kits like TeBot or i-Bot.</p>
                        </article>
                        <article className="eblox-why-card-v2 reveal-card">
                            <div className="eblox-why-image-v2">
                                <img src={whyEbloxBest4} alt="Durable & Reusable" loading="lazy" decoding="async" />
                            </div>
                            <h3>Durable & Reusable</h3>
                            <p>High-quality blocks built to withstand heavy play and repeated use.</p>
                        </article>
                    </div>
                </section>

                {/* e-Blox Kit Offerings */}
                <section className="eblox-page-section eblox-kit-offerings">
                    <h2 className="eblox-section-title">E-Blox <span style={{color: '#000000'}}>Kit Offerings</span></h2>
                    <div
                        className="eblox-kits-main-slider reveal-card"
                        onMouseEnter={() => setIsKitSliderPaused(true)}
                        onMouseLeave={() => setIsKitSliderPaused(false)}
                    >
                        <button
                            className="eblox-kits-arrow eblox-kits-arrow-left"
                            onClick={() => moveKitSlide(-1)}
                            aria-label="Previous kit"
                        >
                            ❮
                        </button>

                        <div className="eblox-kits-slider-window">
                            <div
                                className="eblox-kits-slider-track"
                                style={{ transform: `translateX(-${activeKitSlide * 100}%)` }}
                            >
                                {/* Kit Slide 1 */}
                                <article className="eblox-kit-main-slide">
                                    <div className="eblox-kit-scroll-card">
                                        <div className="eblox-kit-scroll-image">
                                            <img src={ebloxStarterKit} alt="The e-Blox Standard Kit" loading="lazy" decoding="async" />
                                        </div>
                                        <div className="eblox-kit-scroll-content">
                                            <h3>The E-Blox Starter Kit</h3>
                                            <p>A multi-purpose electronics kit that serves as the perfect introduction to STEM for younger grades.</p>

                                            <h4>Projects:</h4>
                                            <p>Includes materials to build 20+ practical products such as:</p>
                                            <ul className="eblox-list">
                                                <li>Study lamps</li>
                                                <li>Table lamps</li>
                                                <li>Mini windmills</li>
                                            </ul>

                                            <h4>Key Components</h4>

                                            <div className="eblox-components-grid">
                                                <div className="eblox-component-group-v2">
                                                    <h5>Power & Control</h5>
                                                    <ul className="eblox-list">
                                                        <li>Power Block</li>
                                                        <li>Motor Driver Blocks</li>
                                                        <li>Sound Blocks</li>
                                                    </ul>
                                                </div>

                                                <div className="eblox-component-group-v2">
                                                    <h5>Smart Sensors</h5>
                                                    <ul className="eblox-list">
                                                        <li>Light Sensor Block</li>
                                                        <li>Sound Sensor Block</li>
                                                        <li>Distance Sensor Block</li>
                                                        <li>IR Sensor Block</li>
                                                    </ul>
                                                </div>

                                                <div className="eblox-component-group-v2">
                                                    <h5>Mechanical Parts</h5>
                                                    <ul className="eblox-list">
                                                        <li>I-Shape BO Motors</li>
                                                        <li>Wires with JST connectors</li>
                                                        <li>Buzzer</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>

                                {/* Kit Slide 2 - Duplicate for now */}
                                <article className="eblox-kit-main-slide">
                                    <div className="eblox-kit-scroll-card featured">
                                        <div className="eblox-kit-scroll-image">
                                            <img src={ebloxMakerKit} alt="The e-Blox Standard Kit" loading="lazy" decoding="async" />
                                        </div>
                                        <div className="eblox-kit-scroll-content">
                                            <h3>The E-Blox Maker Kit</h3>
                                            <p>A multi-purpose electronics kit that serves as the perfect introduction to STEM for younger grades.</p>

                                            <h4>Projects:</h4>
                                            <p>Includes materials to build 30+ practical products such as:</p>
                                            <ul className="eblox-list">
                                                <li>Automatic Close Light</li>
                                                <li>Home Automation</li>
                                                <li>Sanitizer Dispenser</li>
                                                 <li>Mechanical Door</li>

                                            </ul>

                                            <h4>Key Components</h4>

                                            <div className="eblox-components-grid">
                                                <div className="eblox-component-group-v2">
                                                    <h5>Power & Control</h5>
                                                    <ul className="eblox-list">
                                                        <li>Power Block</li>
                                                        <li>Motor Driver Blocks</li>
                                                        <li>Sound Blocks</li>
                                                    </ul>
                                                </div>

                                                <div className="eblox-component-group-v2">
                                                    <h5>Smart Sensors</h5>
                                                    <ul className="eblox-list">
                                                        <li>Light Sensor Block</li>
                                                        <li>Sound Sensor Block</li>
                                                        <li>Distance Sensor Block</li>
                                                        <li>IR Sensor Block</li>
                                                    </ul>
                                                </div>

                                                <div className="eblox-component-group-v2">
                                                    <h5>Mechanical Parts</h5>
                                                    <ul className="eblox-list">
                                                        <li>I-Shape BO Motors</li>
                                                        <li>Wires with JST connectors</li>
                                                        <li>Buzzer</li>
                                                        <li>MDF Parts</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>

                        <button
                            className="eblox-kits-arrow eblox-kits-arrow-right"
                            onClick={() => moveKitSlide(1)}
                            aria-label="Next kit"
                        >
                            ❯
                        </button>
                    </div>

                    <div className="eblox-kits-nav-dots">
                        <button
                            className={`eblox-kits-dot ${activeKitSlide === 0 ? 'active' : ''}`}
                            onClick={() => goToKitSlide(0)}
                            aria-label="Kit 1"
                        ></button>
                        <button
                            className={`eblox-kits-dot ${activeKitSlide === 1 ? 'active' : ''}`}
                            onClick={() => goToKitSlide(1)}
                            aria-label="Kit 2"
                        ></button>
                    </div>
                </section>

                {/* Projects Showcase with Horizontal Scroll */}
                <section className="eblox-page-section eblox-projects-section">
                    <h2 className="eblox-section-title orange-title">Featured <span style={{color: '#008273'}}>E blox Projects</span></h2>
                    <p className="eblox-projects-intro">Explore some of our 50+ amazing projects students can build:</p>
                    <div className="eblox-projects-scroll-wrap">
                        <div className="eblox-projects-track">
                            {[...projectsList, ...projectsList].map((project, index) => (
                                <article key={`${project.title}-${index}`} className="eblox-project-card reveal-card">
                                    <img src={project.image} alt="project icon" className="eblox-project-number" loading="lazy" decoding="async" />
                                    <h4>{project.title}</h4>
                                    <p>{project.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
