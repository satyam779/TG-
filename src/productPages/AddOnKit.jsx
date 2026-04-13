import React, { useEffect, useRef } from "react";
import SEO from "../components/SEO";
import "./AddOnKit.css";
// hero section image
import HeroImage from "../assets/ProductsAddOnImages/Hero image - 2.webp";


//kit images
import roboticArmKit from "../assets/ProductsAddOnImages/Robotic Arm Kit.webp";
import TechBoTElectronicsKit from "../assets/ProductsAddOnImages/TechBoT Electronics Kit.webp";
import HumanoidKitIBOT from "../assets/ProductsAddOnImages/Humanoid Kit (I-BOT).webp";
import OttoStarterKit from "../assets/ProductsAddOnImages/Otto Starter Kit.webp";
import OttoLeeKit from "../assets/ProductsAddOnImages/Otto Lee Kit.webp";
import OttoSpiderKit from "../assets/ProductsAddOnImages/Otto Spider Kit.webp";


const AddOnKit = () => {
	const addonHeroRef = useRef(null);
	const addonHeroCanvasRef = useRef(null);


	useEffect(() => {
		const hero = addonHeroRef.current;
		const canvas = addonHeroCanvasRef.current;
		if (!hero || !canvas) return undefined;

		const ctx = canvas.getContext("2d");
		if (!ctx) return undefined;

		const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
		const parallaxTargets = Array.from(hero.querySelectorAll("[data-depth]"));

		const pointer = { x: 0, y: 0, active: false };
		const orbits = [];
		const modules = [];
		const comets = [];
		const stars = [];

		const orbitPalette = [
			"rgba(255, 220, 136, 0.38)",
			"rgba(166, 255, 206, 0.34)",
			"rgba(204, 219, 255, 0.36)",
			"rgba(255, 176, 150, 0.34)",
		];

		const modulePalette = [
			"rgba(255, 214, 128, 0.9)",
			"rgba(154, 255, 194, 0.9)",
			"rgba(196, 209, 255, 0.9)",
			"rgba(255, 170, 139, 0.9)",
		];

		let width = 0;
		let height = 0;
		let dpr = 1;
		let frame = 0;
		let rafId = 0;
		let reducedMotion = mediaQuery.matches;

		const random = (min, max) => Math.random() * (max - min) + min;
		const pick = (list) => list[Math.floor(Math.random() * list.length)];

		const orbitCount = () => Math.max(4, Math.min(8, Math.floor((width * height) / 180000)));
		const moduleCount = () => Math.max(14, Math.min(34, Math.floor((width * height) / 32000)));
		const cometCount = () => Math.max(3, Math.min(7, Math.floor((width * height) / 220000)));
		const starCount = () => Math.max(30, Math.min(90, Math.floor((width * height) / 17000)));

		const createOrbit = () => ({
			baseX: random(width * 0.08, width * 0.92),
			baseY: random(height * 0.12, height * 0.82),
			radius: random(38, 88),
			wobbleX: random(8, 26),
			wobbleY: random(7, 22),
			phase: random(0, Math.PI * 2),
			speed: random(0.003, 0.009),
			color: pick(orbitPalette),
		});

		const createModule = () => ({
			orbitIndex: Math.floor(random(0, Math.max(1, orbits.length))),
			angle: random(0, Math.PI * 2),
			speed: random(0.006, 0.018) * (Math.random() > 0.5 ? 1 : -1),
			offset: random(-12, 14),
			size: random(4, 8),
			pulse: random(0.6, 1.8),
			color: pick(modulePalette),
			x: 0,
			y: 0,
		});

		const createComet = () => {
			const direction = Math.random() > 0.5 ? 1 : -1;
			return {
				x: direction > 0 ? random(-160, -20) : random(width + 20, width + 160),
				y: random(height * 0.05, height * 0.7),
				vx: direction * random(0.85, 1.45),
				vy: random(0.12, 0.46),
				size: random(1.6, 3),
				tail: random(34, 62),
				alpha: random(0.38, 0.72),
				color: pick(modulePalette),
			};
		};

		const createStar = () => ({
			x: random(0, width),
			y: random(0, height),
			r: random(0.6, 1.7),
			twinkle: random(0.7, 1.9),
			phase: random(0, Math.PI * 2),
		});

		const seedScene = () => {
			orbits.length = 0;
			modules.length = 0;
			comets.length = 0;
			stars.length = 0;

			for (let i = 0; i < orbitCount(); i += 1) orbits.push(createOrbit());
			for (let i = 0; i < moduleCount(); i += 1) modules.push(createModule());
			for (let i = 0; i < cometCount(); i += 1) comets.push(createComet());
			for (let i = 0; i < starCount(); i += 1) stars.push(createStar());
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

		const resetParallax = () => {
			for (const node of parallaxTargets) node.style.transform = "";
		};

		const drawDotMatrix = () => {
			const step = 46;
			const shift = (frame * 0.42) % step;

			for (let y = -step + shift; y < height + step; y += step) {
				for (let x = -step + shift; x < width + step; x += step) {
					const alpha = 0.04 + 0.03 * Math.sin((x + y) * 0.012 + frame * 0.01);
					ctx.fillStyle = `rgba(241, 234, 255, ${alpha.toFixed(3)})`;
					ctx.beginPath();
					ctx.arc(x, y, 1, 0, Math.PI * 2);
					ctx.fill();
				}
			}
		};

		const orbitCenter = (orbit) => {
			const cx = orbit.baseX + Math.sin(frame * orbit.speed + orbit.phase) * orbit.wobbleX;
			const cy = orbit.baseY + Math.cos(frame * orbit.speed * 0.9 + orbit.phase) * orbit.wobbleY;
			return { cx, cy };
		};

		const drawOrbits = () => {
			for (let i = 0; i < orbits.length; i += 1) {
				const orbit = orbits[i];
				const { cx, cy } = orbitCenter(orbit);

				ctx.strokeStyle = orbit.color;
				ctx.lineWidth = 1.2;
				ctx.setLineDash([6, 8]);
				ctx.beginPath();
				ctx.arc(cx, cy, orbit.radius, 0, Math.PI * 2);
				ctx.stroke();

				ctx.setLineDash([]);
				ctx.fillStyle = "rgba(245, 236, 255, 0.58)";
				ctx.beginPath();
				ctx.arc(cx, cy, 2, 0, Math.PI * 2);
				ctx.fill();
			}
		};

		const drawModules = (animate) => {
			for (const module of modules) {
				const orbit = orbits[module.orbitIndex];
				if (!orbit) continue;

				if (animate) module.angle += module.speed;

				const { cx, cy } = orbitCenter(orbit);
				const radius = orbit.radius + module.offset;
				module.x = cx + Math.cos(module.angle) * radius;
				module.y = cy + Math.sin(module.angle) * radius;

				if (pointer.active) {
					const dx = module.x - pointer.x;
					const dy = module.y - pointer.y;
					const dist = Math.hypot(dx, dy);
					if (dist > 0 && dist < 95) {
						const push = (95 - dist) / 95;
						module.x += (dx / dist) * push * 5;
						module.y += (dy / dist) * push * 5;
					}
				}

				ctx.strokeStyle = "rgba(238, 227, 255, 0.16)";
				ctx.lineWidth = 1;
				ctx.beginPath();
				ctx.moveTo(cx, cy);
				ctx.lineTo(module.x, module.y);
				ctx.stroke();

				const pulse = 0.72 + 0.28 * Math.sin(frame * 0.05 * module.pulse + module.angle);
				ctx.shadowColor = module.color;
				ctx.shadowBlur = 9;
				ctx.fillStyle = module.color.replace("0.9", (0.55 + pulse * 0.35).toFixed(3));
				ctx.beginPath();
				ctx.arc(module.x, module.y, module.size * pulse, 0, Math.PI * 2);
				ctx.fill();
				ctx.shadowBlur = 0;
			}
		};

		const recycleComet = (comet) => {
			const direction = Math.random() > 0.5 ? 1 : -1;
			comet.x = direction > 0 ? random(-160, -30) : random(width + 30, width + 160);
			comet.y = random(height * 0.05, height * 0.72);
			comet.vx = direction * random(0.85, 1.45);
			comet.vy = random(0.12, 0.46);
			comet.size = random(1.6, 3);
			comet.tail = random(34, 62);
			comet.alpha = random(0.38, 0.72);
			comet.color = pick(modulePalette);
		};

		const drawComets = (animate) => {
			for (const comet of comets) {
				if (animate) {
					comet.x += comet.vx;
					comet.y += comet.vy;
				}

				const tailX = comet.x - comet.vx * comet.tail;
				const tailY = comet.y - comet.vy * comet.tail;
				const gradient = ctx.createLinearGradient(comet.x, comet.y, tailX, tailY);
				const colorAlpha = comet.alpha.toFixed(3);
				gradient.addColorStop(0, comet.color.replace("0.9", colorAlpha));
				gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

				ctx.strokeStyle = gradient;
				ctx.lineWidth = comet.size;
				ctx.lineCap = "round";
				ctx.beginPath();
				ctx.moveTo(comet.x, comet.y);
				ctx.lineTo(tailX, tailY);
				ctx.stroke();

				ctx.fillStyle = "rgba(255, 245, 226, 0.86)";
				ctx.beginPath();
				ctx.arc(comet.x, comet.y, comet.size * 0.9, 0, Math.PI * 2);
				ctx.fill();

				if (comet.x < -220 || comet.x > width + 220 || comet.y > height + 160 || comet.y < -160) {
					recycleComet(comet);
				}
			}
		};

		const drawStars = () => {
			for (const star of stars) {
				const blink = 0.2 + 0.6 * Math.sin(frame * 0.03 * star.twinkle + star.phase);
				ctx.fillStyle = `rgba(245, 238, 255, ${blink.toFixed(3)})`;
				ctx.beginPath();
				ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
				ctx.fill();
			}
		};

		const drawPointerPulse = () => {
			if (!pointer.active) return;
			const gradient = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 120);
			gradient.addColorStop(0, "rgba(255, 223, 160, 0.24)");
			gradient.addColorStop(1, "rgba(255, 223, 160, 0)");
			ctx.fillStyle = gradient;
			ctx.beginPath();
			ctx.arc(pointer.x, pointer.y, 120, 0, Math.PI * 2);
			ctx.fill();
		};

		const drawFrame = (animate) => {
			if (animate) frame += 1;
			ctx.clearRect(0, 0, width, height);
			drawDotMatrix();
			drawOrbits();
			drawModules(animate);
			drawComets(animate);
			drawStars();
			drawPointerPulse();
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

		let isVisible = true;

		const onVisibilityChange = () => {
			if (document.hidden || !isVisible) {
				stop();
				return;
			}
			start();
		};

		const onMotionChange = (event) => {
			reducedMotion = event.matches;
			hero.dataset.reducedMotion = reducedMotion ? "true" : "false";
			if (reducedMotion) {
				pointer.active = false;
				resetParallax();
			}
			if (isVisible && !document.hidden) start();
		};

		window.addEventListener("resize", resize);
		document.addEventListener("visibilitychange", onVisibilityChange);

		if (typeof mediaQuery.addEventListener === "function") {
			mediaQuery.addEventListener("change", onMotionChange);
		} else if (typeof mediaQuery.addListener === "function") {
			mediaQuery.addListener(onMotionChange);
		}

		hero.dataset.reducedMotion = reducedMotion ? "true" : "false";
		resize();

		const observer = new IntersectionObserver((entries) => {
			isVisible = entries[0].isIntersecting;
			onVisibilityChange();
		});
		observer.observe(hero);

		return () => {
			stop();
			observer.disconnect();
			window.removeEventListener("resize", resize);
			document.removeEventListener("visibilitychange", onVisibilityChange);

			if (typeof mediaQuery.removeEventListener === "function") {
				mediaQuery.removeEventListener("change", onMotionChange);
			} else if (typeof mediaQuery.removeListener === "function") {
				mediaQuery.removeListener(onMotionChange);
			}
		};
	}, []);

	useEffect(() => {
		const root = document.querySelector('.addonkit-page-root');
		if (!root) return;

		// AOS init (scoped)
		if (window.AOS) {
			window.AOS.init({ duration: 1000, once: true, offset: 100 });
		}

		// Loading screen
		const loadingScreen = root.querySelector('#loadingScreen');
		const hideLoading = () => {
			if (loadingScreen) {
				setTimeout(() => {
					loadingScreen.style.opacity = '0';
					setTimeout(() => {
						loadingScreen.style.display = 'none';
					}, 500);
				}, 2000);
			}
		};
		hideLoading();

		// Navbar scroll effect
		const navbar = root.querySelector('.navbar');
		const onScrollNavbar = () => {
			if (!navbar) return;
			if (window.scrollY > 50) {
				navbar.classList.add('scrolled');
			} else {
				navbar.classList.remove('scrolled');
			}
		};
		window.addEventListener('scroll', onScrollNavbar);

		// Mobile navigation
		const hamburger = root.querySelector('.hamburger');
		const navMenu = root.querySelector('.nav-menu');
		const onHamburgerClick = () => {
			if (!navMenu || !hamburger) return;
			navMenu.classList.toggle('active');
			hamburger.classList.toggle('active');
		};
		if (hamburger) {
			hamburger.addEventListener('click', onHamburgerClick);
		}

		// Smooth scrolling for anchors
		const anchors = root.querySelectorAll('a[href^="#"]');
		const onAnchorClick = (e) => {
			const targetSelector = e.currentTarget.getAttribute('href');
			if (!targetSelector) return;
			const target = root.querySelector(targetSelector);
			if (target) {
				e.preventDefault();
				target.scrollIntoView({ behavior: 'smooth', block: 'start' });
				if (navMenu && hamburger) {
					navMenu.classList.remove('active');
					hamburger.classList.remove('active');
				}
			}
		};
		anchors.forEach((a) => a.addEventListener('click', onAnchorClick));

		// Back to top button
		const backToTop = root.querySelector('#backToTop');
		const onScrollBackToTop = () => {
			if (!backToTop) return;
			if (window.pageYOffset > 300) {
				backToTop.classList.add('show');
			} else {
				backToTop.classList.remove('show');
			}
		};
		if (backToTop) {
			window.addEventListener('scroll', onScrollBackToTop);
			backToTop.addEventListener('click', () => {
				window.scrollTo({ top: 0, behavior: 'smooth' });
			});
		}

		// CTA ripple + modal
		const ctaButton = root.querySelector('.cta-button');
		const onCtaClick = (e) => {
			const rect = ctaButton.getBoundingClientRect();
			const size = Math.max(rect.width, rect.height);
			const x = e.clientX - rect.left - size / 2;
			const y = e.clientY - rect.top - size / 2;
			const ripple = document.createElement('span');
			ripple.style.cssText = `position:absolute;width:${size}px;height:${size}px;left:${x}px;top:${y}px;background:rgba(255,255,255,0.3);border-radius:50%;transform:scale(0);animation:ripple 0.6s ease-out;pointer-events:none;`;
			ctaButton.appendChild(ripple);
			setTimeout(() => ripple.remove(), 600);

			const modal = document.createElement('div');
			modal.innerHTML = `
				<div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10000; display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease;">
					<div style="background: white; padding: 3rem; border-radius: 20px; text-align: center; max-width: 500px; margin: 20px; transform: scale(0.8); transition: transform 0.3s ease;">
						<h2 style="color: #2c3e50; margin-bottom: 1rem;">🚀 Welcome to Add On Kit!</h2>
						<p style="margin-bottom: 2rem; color: #666;">Ready to start your STEM journey? Contact us to get started with our premium robotics kits.</p>
						<div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
							<button class="addon-modal-close-btn" style="background: #4fc3f7; color: white; border: none; padding: 12px 30px; border-radius: 25px; cursor: pointer; font-size: 1rem; transition: all 0.3s ease;">Close</button>
							<button class="addon-modal-contact-btn" style="background: #008273; color: white; border: none; padding: 12px 30px; border-radius: 25px; cursor: pointer; font-size: 1rem; transition: all 0.3s ease;">Contact</button>
						</div>
					</div>
				</div>`;
			document.body.appendChild(modal);
			const closeModalButton = modal.querySelector('.addon-modal-close-btn');
			const contactModalButton = modal.querySelector('.addon-modal-contact-btn');

			if (closeModalButton) {
				closeModalButton.addEventListener('click', () => {
					modal.remove();
				});
			}

			if (contactModalButton) {
				contactModalButton.addEventListener('click', () => {
					modal.remove();
					window.location.hash = '/contact-techyguide/';
				});
			}

			setTimeout(() => {
				modal.firstElementChild.style.opacity = '1';
				modal.firstElementChild.firstElementChild.style.transform = 'scale(1)';
			}, 10);
		};
		if (ctaButton) ctaButton.addEventListener('click', onCtaClick);

		// Scroll indicator
		const scrollIndicator = root.querySelector('.scroll-indicator');
		if (scrollIndicator) {
			scrollIndicator.addEventListener('click', () => {
				const products = root.querySelector('#products');
				if (products) products.scrollIntoView({ behavior: 'smooth' });
			});
		}

		// Parallax effect disabled to maintain consistent gaps
		// const onParallax = () => {
		// 	const scrolled = window.pageYOffset;
		// 	root.querySelectorAll('.product-section').forEach((section, index) => {
		// 		const rect = section.getBoundingClientRect();
		// 		const speed = 0.1 + index * 0.05;
		// 		if (rect.top < window.innerHeight && rect.bottom > 0) {
		// 			section.style.transform = `translateY(${scrolled * speed}px)`;
		// 		}
		// 	});
		// };
		// window.removeEventListener('scroll', onParallax);

		// Counter animation
		const animateCounters = () => {
			root.querySelectorAll('.stat-number').forEach((counter) => {
				const target = parseInt(counter.textContent.replace(/[^0-9]/g, ''), 10);
				const increment = target / 100;
				let current = 0;
				const updateCounter = () => {
					if (current < target) {
						current += increment;
						counter.textContent = `${Math.ceil(current)}${counter.textContent.includes('%') ? '%' : '+'}`;
						setTimeout(updateCounter, 20);
					}
				};
				updateCounter();
			});
		};

		// Intersection Observer
		let observer;
		if (window.IntersectionObserver) {
			observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add('animate-in');
							if (entry.target.classList.contains('hero-stats')) {
								animateCounters();
								observer.unobserve(entry.target);
							}
						}
					});
				},
				{ threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
			);

			const heroStats = root.querySelector('.hero-stats');
			const productSections = root.querySelectorAll('.product-section');
			const featureCards = root.querySelectorAll('.feature-card');
			if (heroStats) observer.observe(heroStats);
			productSections.forEach((section) => observer.observe(section));
			featureCards.forEach((card) => observer.observe(card));

			const featureGrid = root.querySelector('.features-grid');
			if (featureGrid) {
				const cards = featureGrid.querySelectorAll('.feature-card');
				cards.forEach((card, index) => {
					card.style.animationDelay = `${index * 0.2}s`;
				});
			}
		}

		return () => {
			window.removeEventListener('scroll', onScrollNavbar);
			anchors.forEach((a) => a.removeEventListener('click', onAnchorClick));
			if (hamburger) hamburger.removeEventListener('click', onHamburgerClick);
			if (ctaButton) ctaButton.removeEventListener('click', onCtaClick);
			if (backToTop) window.removeEventListener('scroll', onScrollBackToTop);
			if (observer) observer.disconnect();
		};
	}, []);

	return (
		<div className="addonkit-page-root">
			<SEO
				title="Add-on Students Robotics Kits | STEM & AI Expandable Kits"
				description="Expandable advanced add-on robotics kits for students including robotic arm, humanoid robots, electronics kits, and Arduino learning kits designed for STEM education."
				canonical="https://techyguide.com/add-on-robotics-kits-for-students"
			/>
			<div className="addonkit">
				<header className="addon-hero-root" id="home" ref={addonHeroRef}>
					<canvas className="addon-hero-canvas" aria-hidden="true" ref={addonHeroCanvasRef}></canvas>

					<nav className="addon-hero-nav" aria-label="Primary">
						<a className="addon-hero-logo-pill" href="#" aria-label="Add-on Kit home">ADD-ON KIT</a>
					</nav>

					<div className="addon-hero-layout">
						<div className="addon-hero-copy" data-depth="0.02">
							<h1>
								Boost Every Build
								<span>Smart Add-on Kit Modules</span>
							</h1>
							<p className="addon-hero-subcopy">
								Kids power up robot projects with sensors, lights, motion parts, and coding mini missions.
							</p>
							<br />
							<a className="addon-hero-btn addon-hero-btn-primary" href="#products" aria-label="Explore Add-on kit">
								Explore Add-on Kit
							</a>
						</div>

						<div className="addon-hero-visual" data-depth="0.035">
							<div className="addon-hero-photo-card">
								<img
									src={HeroImage}
									alt="Student building robots with Add-on Kit modules"
									className="addon-hero-photo"
									width="700"
									height="480"
									fetchPriority="high"
									decoding="async"
								/>
							</div>
							<div className="addon-hero-floating-badge addon-hero-badge-one" aria-hidden="true">Sensors + Motion</div>
							<div className="addon-hero-floating-badge addon-hero-badge-two" aria-hidden="true">Lights + Coding</div>
						</div>
					</div>

					<div className="addon-hero-wave" aria-hidden="true"></div>
				</header>
			</div>

			<section className="products-wrapper" id="products">
				<div className="product-section">
					<div className="info-box" data-aos="fade-right">
						<h2>Robotic Arm Kit</h2>
						<p>The Robotic Arm Kit introduces students to robotic mechanics and automation systems through practical pick-and-place activities. Learners explore motion control, programming, and mechanical design used in real industrial robotics.</p>
						<ul className="feature-list">
							<li><strong>Precise:</strong> Accurate and controlled movements.</li>
							<li><strong>Motorised:</strong> Reliable motor-driven mechanisms.</li>
							<li><strong>Functional:</strong> Simulates real-world industrial tasks.</li>
						</ul>
						<div className="tech-specs">
							<strong>Components In Pack:</strong> Acrylic Parts, Servo Motor Sg 90 (x4), Arduino UNO, UNO Cable, Nuts and Bolts, Screwdriver, Bluetooth Module, Jumper Cables, Breadboard 170 Pin.
						</div>
					</div>
					<div className="image-box" data-aos="fade-left">
						<span className="category-tag">Robotics</span>
						<img src={roboticArmKit} alt="Robotic Arm Kit" className="product-image" />
					</div>
				</div>

				<div className="product-section reverse">
					<div className="info-box" data-aos="fade-left">
						<h2>TechBoT Electronics Kit</h2>
						<p>Covers fundamentals of electronics and circuits with 30+ interactive projects and comprehensive learning materials. Suitable for Grade 3+.</p>
						<ul className="feature-list">
							<li><strong>Foundational:</strong> Basics of electronics and circuits.</li>
							<li><strong>Interactive:</strong> 30+ hands-on projects.</li>
							<li><strong>Suitable:</strong> Designed for learners from Grade 3 onwards.</li>
						</ul>
						<div className="tech-specs">
							<strong>Components In Pack:</strong> LED Set, HW Battery, SPST Switch, DC Motor, Laser Diode, Resistors, Breadboard 400 Pin, Timer IC 555, LDR Sensor, and more.
						</div>
					</div>
					<div className="image-box" data-aos="fade-right">
						<span className="category-tag">Electronics</span>
						<img src={TechBoTElectronicsKit} alt="TechBoT Electronics Kit" className="product-image" />
					</div>
				</div>

				<div className="product-section">
					<div className="info-box" data-aos="fade-up">
						<h2>Humanoid Kit (I-BOT)</h2>
						<p>A fully functional humanoid robot compatible with Bluetooth, voice commands, and AI. Features 32 acrylic parts for a detailed build.</p>
						<ul className="feature-list">
							<li><strong>Multi-control:</strong> Bluetooth, Voice, and AI commands.</li>
							<li><strong>Responsive:</strong> Reacts accurately to user inputs.</li>
							<li><strong>Integrative:</strong> Combines multiple advanced technologies.</li>
						</ul>
						<div className="tech-specs">
							<strong>Components In Pack:</strong> I-BOT, BO Motors, Ultrasonic Sensor, OLED Display, Bluetooth Amplifier, Speaker, ESP32 Cam Module, 12V Battery & Adapter.
						</div>
					</div>
					<div className="image-box" data-aos="zoom-in">
						<span className="category-tag">Advanced Robotics</span>
						<img src={HumanoidKitIBOT} alt="Humanoid Kit" className="product-image" />
					</div>
				</div>

				<div className="product-section reverse">
					<div className="info-box" data-aos="fade-left">
						<h2>Otto Starter Kit</h2>
						<p>The perfect entry point for robotics. A mini humanoid robot that can walk, dance, and play tunes while teaching coding basics.</p>
						<ul className="feature-list">
							<li><strong>Playful:</strong> Capable of walking and dancing.</li>
							<li><strong>Musical:</strong> Integrated buzzer for playing tunes.</li>
							<li><strong>Simple:</strong> Easy assembly for beginners.</li>
						</ul>
						<div className="tech-specs">
							<strong>Components In Pack:</strong> 3D Printed Parts (x6), Servo Motor SG 90 (x4), Nano Shield, Arduino NANO, Ultrasonic Sensor, Buzzer, Screwdriver.
						</div>
					</div>
					<div className="image-box" data-aos="fade-right">
						<span className="category-tag">Robotics</span>
						<img src={OttoStarterKit} alt="Otto Starter Kit" className="product-image" />
					</div>
				</div>

				<div className="product-section">
					<div className="info-box" data-aos="fade-up">
						<h2>Otto Lee Kit</h2>
						<p>An advanced Bluetooth-controlled humanoid that supports multiple build configurations and dynamic custom movements.</p>
						<ul className="feature-list">
							<li><strong>Configurable:</strong> Supports multiple build options.</li>
							<li><strong>Wireless:</strong> Controlled via Bluetooth.</li>
							<li><strong>Dynamic:</strong> Performs custom movement routines.</li>
						</ul>
						<div className="tech-specs">
							<strong>Components In Pack:</strong> 3D Printed Parts (x12), 7x Servo Motors, Nano Shield, Arduino NANO, Bluetooth Module, Ultrasonic Sensor.
						</div>
					</div>
					<div className="image-box" data-aos="zoom-in">
						<span className="category-tag">Advanced Robotics</span>
						<img src={OttoLeeKit} alt="Otto Lee Kit" className="product-image" />
					</div>
				</div>

				<div className="product-section reverse">
					<div className="info-box" data-aos="fade-left">
						<h2>Otto Spider Kit</h2>
						<p>Spider-inspired robot with 8 degrees of movement. It can perform complex routines like dances and push-ups via Bluetooth control.</p>
						<ul className="feature-list">
							<li><strong>8-Degrees:</strong> High agility movement.</li>
							<li><strong>Entertaining:</strong> Performs dances and push-ups.</li>
							<li><strong>Agile:</strong> Capable of complex walking patterns.</li>
						</ul>
						<div className="tech-specs">
							<strong>Components In Pack:</strong> 3D Printed Parts (x10), 8x Servo Motors, Nano Shield, Arduino NANO, Bluetooth Module, Ultrasonic Sensor.
						</div>
					</div>
					<div className="image-box" data-aos="fade-right">
						<span className="category-tag">Manufacturing</span>
						<img src={OttoSpiderKit} alt="Otto Spider Kit" className="product-image" />
					</div>
				</div>
			</section>

			<footer className="footer">
				<div className="container">
					<div className="footer-content">
						<h3>Start Your STEM Innovation Journey </h3>
						<p>Join thousands of students already exploring robotics, electronics, and AI innovation through hands-on STEM learning.</p>
						<button className="cta-button">Get Started Today</button>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default AddOnKit;
