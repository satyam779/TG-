import React, { useState } from 'react';
import SEO from './components/SEO';
import './ContactUs.css';
import school1 from './assets/contactUsImages/school1.webp';
import school2 from './assets/contactUsImages/school2.webp';
import school3 from './assets/contactUsImages/school3.webp';
import school4 from './assets/contactUsImages/school4.webp';
import school5 from './assets/contactUsImages/school5.webp';
import school6 from './assets/contactUsImages/school6.webp';
import school7 from './assets/contactUsImages/school7.webp';
import school8 from './assets/contactUsImages/school8.webp';
import school9 from './assets/contactUsImages/school9.webp';
// contactus image
import contactusimg from './assets/contactUsImages/Contact us - 1.webp';

function ContactUs() {
	const [activeFaqIndex, setActiveFaqIndex] = useState(1);



	const handleFaqClick = (index) => {
		setActiveFaqIndex((current) => (current === index ? -1 : index));
	};

	return (
		<div className="tg-contactus-page">
			<SEO 
				title="Contact TechyGuide | STEM & Robotics Lab Setup India"
				description="Contact TechyGuide for CBSE STEM labs, robotics labs, and AI learning solutions for schools. Get expert support, lab setup consultation, and training."
				canonical="https://techyguide.com/contact-techyguide/"
			/>
			<div className="main-wrapper">
				<div className="split-container">
					<section className="left-panel">
						<div className="content-wrapper">
							<div className="badge">Official Partners</div>
							<h1 className="tg-contactus-title">Build Your <span>Dream Lab</span> Today.</h1>
							<img className="tg-contactus-heading-image" src={contactusimg} alt="Dream Lab setup visual" loading="eager" fetchPriority="high" />
							<p className="description">TechyGuide provides turnkey solutions for CBSE Composite Skill Labs, STEM Tinkering, and ICSE Robotics. Fully compliant with government mandates. </p>

							<ul className="features">
								<li>
									<div className="icon-box">
										<i className="tg-icon-check">
											<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
										</i>
									</div>
									<div><strong>100% Compliant</strong><p>Meets NCF-SE & CBSE Circular 75/2024 norms.</p></div>
								</li>
								<li>
									<div className="icon-box">
										<i className="tg-icon-education">
											<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
										</i>
									</div>
									<div><strong>Teacher Training</strong><p>5-Day Master Trainer program included.</p></div>
								</li>
								<li>
									<div className="icon-box">
										<i className="tg-icon-tech">
											<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>
										</i>
									</div>
									<div><strong>Turnkey Setup</strong><p>Hardware, Software, Furniture & Branding.</p></div>
								</li>
							</ul>

							<hr className="divider" />

							<div className="contact-footer">
								<div className="footer-item">
									<i className="tg-icon-phone">
										<svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle', marginRight: '6px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
									</i>
									+91 91140 36376
								</div>
								<div className="footer-item">
									<i className="tg-icon-envelope">
										<svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle', marginRight: '6px' }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
									</i>
									reachus@techyguide.in
								</div>
							</div>
						</div>
					</section>

					<section className="right-panel">
						<iframe
							src="https://in.bigin.online/org60029825901/forms/contact-us-form"
							width="100%"
							height="650"
							scrolling="no"
							frameBorder="0"
							title="Contact Us Form"
							style={{ border: "none", display: "block" }}
						></iframe>
					</section>
				</div>

				<section className="logo-cloud premium-showcase">
					<div className="container">
						<p className="showcase-title">Official Partners & Paving the Way in <span>700+ Schools</span></p>
						<div className="logo-viewport">
							<div className="logo-track colorful-grid">
								<div className="logo-item color-1"><img src={school1} alt="CBSE" loading="lazy" /></div>
								<div className="logo-item color-2"><img src={school2} alt="STEM Partner" loading="lazy" /></div>
								<div className="logo-item color-3"><img src={school3} alt="ICSE" loading="lazy" /></div>
								<div className="logo-item color-4"><img src={school4} alt="Robotics Partner" loading="lazy" /></div>
								<div className="logo-item color-5"><img src={school5} alt="Govt. Partner" loading="lazy" /></div>
								<div className="logo-item color-5"><img src={school6} alt="Govt. Partner" loading="lazy" /></div>
								<div className="logo-item color-5"><img src={school7} alt="Govt. Partner" loading="lazy" /></div>
								<div className="logo-item color-5"><img src={school8} alt="Govt. Partner" loading="lazy" /></div>
								<div className="logo-item color-5"><img src={school9} alt="Govt. Partner" loading="lazy" /></div>
								<div className="logo-item color-1"><img src={school1} alt="CBSE" loading="lazy" /></div>
								<div className="logo-item color-2"><img src={school2} alt="STEM Partner" loading="lazy" /></div>
								<div className="logo-item color-3"><img src={school3} alt="ICSE" loading="lazy" /></div>
								<div className="logo-item color-4"><img src={school4} alt="Robotics Partner" loading="lazy" /></div>
								<div className="logo-item color-5"><img src={school5} alt="Govt. Partner" loading="lazy" /></div>
								<div className="logo-item color-5"><img src={school6} alt="Govt. Partner" loading="lazy" /></div>
								<div className="logo-item color-5"><img src={school7} alt="Govt. Partner" loading="lazy" /></div>
								<div className="logo-item color-5"><img src={school8} alt="Govt. Partner" loading="lazy" /></div>
								<div className="logo-item color-5"><img src={school9} alt="Govt. Partner" loading="lazy" /></div>
							</div>
						</div>
					</div>
				</section>

				<section className="faq-section">
					<div className="section-header">
						<h2 className="tg-contactus-question-title">Common <span>Questions</span></h2>
						<p className="tg-contactus-question-subtitle">Everything you need to know about setting up your Dream Lab.</p>
					</div>
					<div className="faq-container">
						<div className={"faq-item " + (activeFaqIndex === 0 ? 'active' : '')}>
							<button className="faq-question" type="button" onClick={() => handleFaqClick(0)}>
								What is the space requirement for a CBSE Lab? 
								<i className="tg-icon-plus">
									<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
								</i>
							</button>
							<div className="faq-answer">
								<p>We recommend a minimum of 600–800 sq. ft. for a standard setup. However, our solutions are flexible and can be customized to fit your available room size.</p>
							</div>
						</div>
						<div className={"faq-item " + (activeFaqIndex === 1 ? 'active' : '')}>
							<button className="faq-question" type="button" onClick={() => handleFaqClick(1)}>
								Is your hardware compliant with CBSE Circular 75/2024? 
								<i className="tg-icon-plus">
									<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
								</i>
							</button>
							<div className="faq-answer">
								<p>Yes, all our turnkey setups, hardware, and curriculum materials are 100% compliant with the latest NCF-SE and CBSE mandates.</p>
							</div>
						</div>
						<div className={"faq-item " + (activeFaqIndex === 2 ? 'active' : '')}>
							<button className="faq-question" type="button" onClick={() => handleFaqClick(2)}>
								Do you provide teacher training? 
								<i className="tg-icon-plus">
									<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
								</i>
							</button>
							<div className="faq-answer">
								<p>Absolutely. Every Dream Lab setup includes our 5-Day Master Trainer program to ensure your faculty is fully equipped to teach Robotics and STEM modules.</p>
							</div>
						</div>
					</div>
				</section>

				<section className="office-map-section">
					<div className="office-card">
						<div className="office-header">
							<i className="tg-icon-building">
								<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle' }}><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="16"></line><line x1="15" y1="22" x2="15" y2="16"></line><line x1="9" y1="16" x2="15" y2="16"></line><path d="M8 6h.01M16 6h.01M9 10h.01M15 10h.01"></path></svg>
							</i>
							<h3 className="tg-contactus-office-title">Corporate Office</h3>
						</div>
						<p>80, 2nd Floor, 1st Main, A Narayanapura Main Rd, near Hanuman Temple, VSR Layout, Bengaluru, Karnataka 560016</p>
						<div className="map-container">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.64024508474!2d77.6713!3d12.9942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae116c29197455%3A0xdebe7d9cbf33e070!2sTechyGuide%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1700000000000" allowFullScreen loading="lazy" title="Corporate Office"></iframe>
						</div>
						<a href="https://www.google.com/maps/dir/?api=1&destination=TechyGuide+Pvt.+Ltd.+Bengaluru&destination_place_id=ChIJVXQb2TIRrjsRcOAzv5x9vt4" target="_blank" rel="noopener noreferrer" className="directions-btn">
							Get Directions 
							<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "6px", verticalAlign: "middle" }}><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
						</a>
					</div>

					<div className="office-card">
						<div className="office-header">
							<i className="tg-icon-map">
								<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle' }}><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" y1="3" x2="9" y2="18"></line><line x1="15" y1="6" x2="15" y2="21"></line></svg>
							</i>
							<h3 className="tg-contactus-office-title">Registered Office</h3>
						</div>
						<p>C/O. Mr. Chittaranjan Bhoi 2nd floor, near Budhi mangala Temple, Bhoisahi, Balasore, Odisha 756001</p>
						<div className="map-container">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.38!2d86.92!3d21.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19fdbe2ef7f815%3A0x97157f00e2609799!2sMAA%20BUDHI%20MANGALA%20TEMPLE!5e0!3m2!1sen!2sin!4v1700000000000" allowFullScreen loading="lazy" title="Registered Office"></iframe>
						</div>
						<a href="https://www.google.com/maps/dir/?api=1&destination=MAA+BUDHI+MANGALA+TEMPLE+Balasore&destination_place_id=ChIJXTgfLr_1HDoRmZdg4sB_FZw" target="_blank" rel="noopener noreferrer" className="directions-btn">
							Get Directions 
							<svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "6px", verticalAlign: "middle" }}><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
						</a>
					</div>
				</section>
			</div>
		</div>
	);
}

export default ContactUs;
