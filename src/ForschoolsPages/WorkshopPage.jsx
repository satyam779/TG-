import { useEffect } from 'react';
import './WorkshopPage.css';
import LabImage5 from '../assets/ForSchoolsWorkShopImages/IMG-20230430-WA0001.jpg';
import LabImage1 from '../assets/ForSchoolsWorkShopImages/IMG20230601140547.jpg';
import LabImage3 from '../assets/ForSchoolsWorkShopImages/IMG20230924102104.jpg';
import LabImage4 from '../assets/ForSchoolsWorkShopImages/IMG_20221114_094422.jpg';
import LabImage2 from '../assets/ForSchoolsWorkShopImages/IMG20241005152514.jpg';
import LabImage6 from '../assets/ForSchoolsWorkShopImages/WhatsApp Image 2021-08-15 at 15.20.01.jpeg';
import LabImage7 from '../assets/ForSchoolsWorkShopImages/WhatsApp Image 2023-06-05 at 13.02.06.jpg';
// hero images
import heroimage from '../assets/ForSchoolsWorkShopImages/Hero section - 4.jpg';

function WorkshopPage() {
	// ==========================================
	// SEO META TAGS
	// ==========================================
	useEffect(() => {
		// Set document title
		document.title = "STEM Robotics Workshops for Schools | TechyGuide India";

		// Update or create meta description
		let metaDescription = document.querySelector('meta[name="description"]');
		if (!metaDescription) {
			metaDescription = document.createElement('meta');
			metaDescription.name = 'description';
			document.head.appendChild(metaDescription);
		}
		metaDescription.content = "Join TechyGuide STEM robotics workshops for schools. Practical learning in robotics, IoT, electronics & mechatronics with certifications nationwide.";

		// Add canonical link
		let canonical = document.querySelector('link[rel="canonical"]');
		if (!canonical) {
			canonical = document.createElement('link');
			canonical.rel = 'canonical';
			document.head.appendChild(canonical);
		}
		canonical.href = 'https://techyguide.com/stem-robotics-workshops-for-schools-india';

		// Add Open Graph tags
		const ogTags = [
			{ property: 'og:title', content: 'STEM Robotics Workshops for Schools | TechyGuide India' },
			{ property: 'og:description', content: 'Join TechyGuide STEM robotics workshops for schools. Practical learning in robotics, IoT, electronics & mechatronics with certifications nationwide.' },
			{ property: 'og:url', content: 'https://techyguide.com/stem-robotics-workshops-for-schools-india' },
			{ property: 'og:type', content: 'website' }
		];

		ogTags.forEach(tagData => {
			let tag = document.querySelector(`meta[property="${tagData.property}"]`);
			if (!tag) {
				tag = document.createElement('meta');
				tag.setAttribute('property', tagData.property);
				document.head.appendChild(tag);
			}
			tag.content = tagData.content;
		});

		return () => {
			// Cleanup is handled by document.title and meta tags remaining on page
		};
	}, []);

	useEffect(() => {
		// Smooth Scroll within workshop page root
		const root = document.querySelector('.workshop-page-root');
		const anchors = root ? root.querySelectorAll('a[href^="#"]') : [];
		anchors.forEach(anchor => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();
				const targetSel = this.getAttribute('href');
				const target = root ? root.querySelector(targetSel) : null;
				if (target) {
					target.scrollIntoView({ behavior: 'smooth' });
				}
			});
		});

		// Pause Testimonials on Hover (scoped)
		const marquee = root ? root.querySelector('.marquee-content') : null;
		if (marquee) {
			const onEnter = () => { marquee.style.animationPlayState = 'paused'; };
			const onLeave = () => { marquee.style.animationPlayState = 'running'; };
			marquee.addEventListener('mouseenter', onEnter);
			marquee.addEventListener('mouseleave', onLeave);
		}

		// ========================================
		// FORM HANDLING FOR ENQUIRY
		// ========================================
		const form = document.querySelector('.workshop-page-root #enquiryForm');
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
					const text = `*Workshop Proposal Request*%0a%0a` +
						`*School Name:* ${school}%0a` +
						`*Name:* ${person}%0a` +
						`*Phone Number:* ${phone}%0a` +
						`*Email:* ${email}%0a` +
						`*State:* ${state}%0a` +
						`*Message:* ${msg}%0a%0a` ;
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

		return () => {
			anchors.forEach(anchor => {
				anchor.replaceWith(anchor.cloneNode(true));
			});
			if (marquee) {
				marquee.style.animationPlayState = '';
			}
			if (form) form.removeEventListener('submit', formHandler);
		};
	}, []);

	return (
		<div className="workshop-page-root">
			<a href="#contact-section" className="floating-cta">
				<i className="fas fa-file-invoice-dollar"></i> Get Proposal
			</a>

			{/* Hero Section */}
			<section className="hero">
				<div className="hero-bg-shape"></div>

				<div className="hero-split left">
					<div className="content-box">
						<div className="tagline"><i className="fas fa-child"></i> COMMUNITY OF LEARNERS</div>
						<h1>STEM Robotics Workshops & <br /><span className="text-orange">Innovation Camps</span></h1>
						<p>Interactive robotics workshops and camps building creativity, confidence, and future-ready skills in a safe, fun space.</p>

						<div className="btn-group">
							<a href="#workshops" className="btn-primary">Learn More</a>
							{/* <a href="#contact" className="btn-secondary">Contact Us</a> */}
						</div>

						<div className="stats-row">
							<div className="stat">
								<h3>30</h3>
								<span>Max Students/Batch</span>
							</div>
							<div className="stat">
								<h3>100%</h3>
								<span>Hands-on Practical Learning</span>
							</div>
						</div>
					</div>
				</div>

				<div className="hero-split right">
					<div className="blob-image" style={{ backgroundImage: `url(${heroimage})` }}></div>
				</div>
			</section>

			{/* Technology In Focus */}
			<section id="focus" className="section-padding bg-pattern">
				<div className="container">
					<div className="title-block">
						<h2>Technology In Focus</h2>
						<div className="underline"></div>
						<p>Core areas covered in our STEM curriculum.</p>
					</div>

					<div className="tech-grid">
						<div className="tech-card glass">
							<div className="card-icon"><img src={LabImage1} alt="Mechatronics" /></div>
							<div className="card-body">
								<h3>Mechatronics Training</h3>
								<p>Combining mechanics and electronics for advanced automation.</p>
							</div>
						</div>

						<div className="tech-card glass">
							<div className="card-icon"><img src={LabImage2} alt="Robotics" /></div>
							<div className="card-body">
								<h3>Robotics</h3>
								<p>Design, construction, and operation of autonomous bots.</p>
							</div>
						</div>

						<div className="tech-card glass">
							<div className="card-icon"><img src={LabImage3} alt="Electronics" /></div>
							<div className="card-body">
								<h3>Electronics</h3>
								<p>Circuit design, sensors, and series/parallel connections.</p>
							</div>
						</div>

						<div className="tech-card glass">
							<div className="card-icon"><img src={LabImage4} alt="Internet of Things" /></div>
							<div className="card-body">
								<h3>Internet of Things</h3>
								<p>Connecting physical objects to the digital world.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Workshop Packages */}
			<section id="workshops" className="section-padding">
				<div className="container">
					<div className="title-block">
						<h2>Workshop Packages</h2>
						<div className="underline"></div>
						<p>Choose the best learning path for your students.</p>
					</div>

					<div className="pricing-grid">
						<div className="pricing-card">
							<div className="p-header">
								<h3>Beginner Workshop</h3>
								{/* <div className="price">₹5,999 <span className="small"></span></div> */}
							</div>
							<div className="p-body">
								<ul>
									<li><strong>Duration:</strong></li>
									<li><i className="fas fa-clock"></i> 2 Hours | 2 Batches | 20 Students (per batch)</li>
								</ul>
								<ul>
									<li><strong>Activities Covered:</strong></li>
									<li><i className="fas fa-cubes"></i> 3 Hands-on Activities</li>
								</ul>
								<ul>
									<li><strong>Takeaway:</strong></li>
									<li><i className="fas fa-gift"></i> 1 Customized 3D Model (Keychain)</li>
								</ul>
								<ul>
									<li><strong>Certification:</strong></li>
									<li><i className="fas fa-certificate"></i> Certificate of Participation</li>
								</ul>
								<div className="curriculum-box">
									<h4>Curriculum:</h4>
									<ul>
										<li>• Introduction to Robotics & I-BoT</li>
										<li>• Obstacle Avoider Robot</li>
										<li>• Automatic Street Light Project</li>
										<li>• 3D Pen Creativity</li>
									</ul>
								</div>
								<div className="curriculum-box">
									<h4>Learning Outcome:</h4>
									<p>Participants will understand basic robotics concepts, simple mechanisms, beginner electronics, and hands-on creative prototyping.</p>
								</div>
							<a href="#contact-section" className="btn-primary full-width">Book Now</a>
							</div>
						</div>

						<div className="pricing-card featured">
							<div className="badge">Most Popular</div>
							<div className="p-header">
								<h3>Intermediate Workshop</h3>
								{/* <div className="price">₹17,999 <span className="small"></span></div> */}
							</div>
							<div className="p-body">
								<ul>
									<li><strong>Duration:</strong></li>
									<li><i className="fas fa-clock"></i> 2 Hours per Day | 2 Batches | 20 Students (per Batch)</li>
								</ul>
								<ul>
									<li><strong>Activities Covered:</strong></li>
									<li><i className="fas fa-cubes"></i> 7 Practical Activities</li>
								</ul>
								<ul>
									<li><strong>Takeaway:</strong></li>
									<li><i className="fas fa-gift"></i> 1 Customized 3D Printed Model</li>
								</ul>
								<ul>
									<li><strong>Certification:</strong></li>
									<li><i className="fas fa-certificate"></i> Certificate of Participation</li>
								</ul>
								<div className="curriculum-box">
									<h4>Curriculum:</h4>
									<h5>Day 1 Topics:</h5>
									<ul>
										<li>• Smart Irrigation System</li>
										<li>• Danger Detector</li>
										<li>• Real time temperature and humidity detector</li>
										<li>• Virtual Assistant Based Home Automation</li>
									</ul>
								</div>
								<div className="curriculum-box">
									<h4>Learning Outcome:</h4>
									<p>Participants will gain practical exposure to robotics, motion mechanisms, sensors, and real-world robot applications with hands-on building experience.</p>
								</div>
							<a href="#contact-section" className="btn-primary full-width">Book Now</a>
							</div>
						</div>

						<div className="pricing-card">
							<div className="p-header">
								<h3>Advanced Workshop</h3>
								{/* <div className="price">₹29,999 <span className="small"></span></div> */}
							</div>
							<div className="p-body">
								<ul>
									<li><strong>Duration:</strong></li>
									<li><i className="fas fa-clock"></i> 2 Hours per Day | 2 Batches | 20 Students (per batch)</li>
								</ul>
								<ul>
									<li><strong>Activities Covered:</strong></li>
									<li><i className="fas fa-cubes"></i> 12 Advanced Activities</li>
								</ul>
								<ul>
									<li><strong>Takeaway:</strong></li>
									<li><i className="fas fa-gift"></i> 1 Advanced 3D Printed Model</li>
								</ul>
								<ul>
									<li><strong>Certification:</strong></li>
									<li><i className="fas fa-certificate"></i> Certificate of Participation</li>
								</ul>
								<div className="curriculum-box">
									<h4>Curriculum:</h4>
									<ul>
										<li>• All 3-Day Topics +</li>
										<li>• Series & Parallel Circuit connections</li>
										<li>• Design Beetle in a maze game</li>
										<li>• Wifi car</li>
										<li>• Water Level Indicator</li>
									</ul>
								</div>
								<div className="curriculum-box">
									<h4>Learning Outcome:</h4>
									<p>Participants will develop strong fundamentals in robotics, electronics, automation, and IoT-based smart systems with real implementation experience.</p>
								</div>
								<a href="#contact-section" className="btn-primary full-width">Book Now</a>
							</div>
						</div>

					</div>
				</div>
			</section>

			{/* Requirements */}
			<section id="requirements" className="req-section bg-dark">
				<div className="container">
					<div className="title-block light">
						<h2>Workshop Requirements</h2>
						<div className="underline"></div>
						<p>Basic infrastructure required to conduct the session.</p>
					</div>
					<div className="req-grid">
						<div className="req-item">
							<i className="fas fa-ruler-combined"></i>
							<span>500-600 Sq. Ft. Room</span>
						</div>
						<div className="req-item">
							<i className="fas fa-laptop"></i>
							<span>1 Laptop & Projector</span>
						</div>
						<div className="req-item">
							<i className="fas fa-chalkboard"></i>
							<span>Whiteboard / Screen</span>
						</div>
						<div className="req-item">
							<i className="fas fa-wifi"></i>
							<span>Internet Connection</span>
						</div>
						<div className="req-item">
							<i className="fas fa-mobile-alt"></i>
							<span>Smartphone (Optional)</span>
						</div>
					</div>
				</div>
			</section>

			{/* Gallery */}
			<section id="gallery" className="section-padding">
				<div className="container">
					<div className="gallery-header">
						<h2>Our Labs <span className="text-orange">In Action</span></h2>
						<p>A snapshot of our learning ecosystem.</p>
					</div>

					<div className="bento-grid">
						<div className="bento-item main-feature">
							<img src={LabImage1} alt="Students participating in TechyGuide robotics lab activities " />
							{/* <div className="bento-overlay">
								<div className="tech-badge">PRIMARY FOCUS</div>
								<h3>Student Engagement</h3>
								<p>Active learning environments where students lead the way.</p>
							</div> */}
						</div>

						<div className="bento-item">
							<img src={LabImage2} alt="Students participating in TechyGuide robotics lab activities " />
							{/* <div className="bento-overlay">
								<div className="tech-badge">PRACTICAL</div>
								<h3>Hands-on Training</h3>
							</div> */}
						</div>

						<div className="bento-item">
							<img src={LabImage3} alt="Students participating in TechyGuide robotics lab activities " />
							{/* <div className="bento-overlay">
								<div className="tech-badge">STEM</div>
								<h3>STEM Projects</h3>
							</div> */}
						</div>

						<div className="bento-item">
							<img src={LabImage4} alt="Students participating in TechyGuide robotics lab activities " />
							{/* <div className="bento-overlay">
								<div className="tech-badge">INNOVATION</div>
								<h3>Creative Solutions</h3>
							</div> */}
						</div>

						<div className="bento-item">
							<img src={LabImage6} alt="Students participating in TechyGuide robotics lab activities " />
							{/* <div className="bento-overlay">
								<div className="tech-badge">WORKSHOP</div>
								<h3>Skill Development</h3>
							</div> */}
						</div>

						<div className="bento-item wide-feature">
							<img src={LabImage5} alt="Students participating in TechyGuide robotics lab activities " />
							{/* <div className="bento-overlay">
								<div className="tech-badge">ROBOTICS</div>
								<h3>Robotics Lab</h3>
								<p>State-of-the-art robotics facility for hands-on learning.</p>
							</div> */}
						</div>

						<div className="bento-item wide-feature">
							<img src={LabImage7} alt="Students participating in TechyGuide robotics lab activities " />
							{/* <div className="bento-overlay">
								<div className="tech-badge">TEAMWORK</div>
								<h3>Collaborative Learning</h3>
								<p>Students working together on innovative projects.</p>
							</div> */}
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="testimonials-section">
				<div className="title-block">
					<h2>What They Say</h2>
					<div className="underline"></div>
				</div>

				<div className="marquee-wrapper">
						<div className="marquee-content">
							{/* set A */}
							<div className="testimonial-card">
								<p>"This is an AMAZING GIFT for me!"</p>
								<div className="user"><span>- Student</span></div>
							</div>
							<div className="testimonial-card">
								<p>"The TeBoT robotics kit was fantastic to learn with."</p>
								<div className="user"><span>- School Principal</span></div>
							</div>
							<div className="testimonial-card">
								<p>"TechyGuide workshops brought real innovation to our labs."</p>
								<div className="user"><span>- Science HOD</span></div>
							</div>
							<div className="testimonial-card">
								<p>"My daughter loved the 3D Pen activity."</p>
								<div className="user"><span>- Parent</span></div>
							</div>
							<div className="testimonial-card">
								<p>"This is an AMAZING GIFT for me!"</p>
								<div className="user"><span>- Student</span></div>
							</div>
							<div className="testimonial-card">
								<p>"The TeBoT robotics kit was fantastic to learn with."</p>
								<div className="user"><span>- School Principal</span></div>
							</div>

							{/* set B (duplicate for seamless loop) */}
							<div className="testimonial-card">
								<p>"This is an AMAZING GIFT for me!"</p>
								<div className="user"><span>- Student</span></div>
							</div>
							<div className="testimonial-card">
								<p>"The TeBoT robotics kit was fantastic to learn with."</p>
								<div className="user"><span>- School Principal</span></div>
							</div>
							<div className="testimonial-card">
								<p>"TechyGuide workshops brought real innovation to our labs."</p>
								<div className="user"><span>- Science HOD</span></div>
							</div>
							<div className="testimonial-card">
								<p>"My daughter loved the 3D Pen activity."</p>
								<div className="user"><span>- Parent</span></div>
							</div>
							<div className="testimonial-card">
								<p>"This is an AMAZING GIFT for me!"</p>
								<div className="user"><span>- Student</span></div>
							</div>
							<div className="testimonial-card">
								<p>"The TeBoT robotics kit was fantastic to learn with."</p>
								<div className="user"><span>- School Principal</span></div>
							</div>
						</div>
				</div>
			</section>

			{/* Contact */}
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
		</div>
	);
}

export default WorkshopPage;
