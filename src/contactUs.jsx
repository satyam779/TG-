import React, { useEffect, useState } from 'react';
import './contactUs.css';
import school1 from './assets/contactUsImages/school1.png';
import school2 from './assets/contactUsImages/school2.png';
import school3 from './assets/contactUsImages/school3.jpg';
import school4 from './assets/contactUsImages/school4.jpg';
import school5 from './assets/contactUsImages/school5.jpg';
import school6 from './assets/contactUsImages/school6.png';
import school7 from './assets/contactUsImages/school7.jpg';
import school8 from './assets/contactUsImages/school8.png';
import school9 from './assets/contactUsImages/school9.png';
// contactus image
import contactusimg from './assets/contactUsImages/Contact us - 1.png';

function ContactUs() {
	const [activeFaqIndex, setActiveFaqIndex] = useState(1);

	useEffect(() => {
		const previousTitle = document.title;
		const existingMetaDescription = document.querySelector('meta[name="description"]');
		const previousMetaDescriptionContent = existingMetaDescription?.getAttribute("content") ?? null;
		const existingCanonical = document.querySelector('link[rel="canonical"]');
		const previousCanonicalHref = existingCanonical?.getAttribute("href") ?? null;

		document.title = "Contact TechyGuide | STEM & Robotics Lab Setup India";

		let metaDescription = existingMetaDescription;
		if (metaDescription) {
			metaDescription.setAttribute(
				"content",
				"Contact TechyGuide for CBSE STEM labs, robotics labs, and AI learning solutions for schools. Get expert support, lab setup consultation, and training."
			);
		} else {
			metaDescription = document.createElement("meta");
			metaDescription.setAttribute("name", "description");
			metaDescription.setAttribute(
				"content",
				"Contact TechyGuide for CBSE STEM labs, robotics labs, and AI learning solutions for schools. Get expert support, lab setup consultation, and training."
			);
			document.head.appendChild(metaDescription);
		}

		let canonicalLink = existingCanonical;
		if (canonicalLink) {
			canonicalLink.setAttribute("href", "https://techyguide.com/contact-techyguide/");
		} else {
			canonicalLink = document.createElement("link");
			canonicalLink.setAttribute("rel", "canonical");
			canonicalLink.setAttribute("href", "https://techyguide.com/contact-techyguide/");
			document.head.appendChild(canonicalLink);
		}

		return () => {
			document.title = previousTitle;

			if (metaDescription) {
				if (previousMetaDescriptionContent === null && !existingMetaDescription) {
					metaDescription.remove();
				} else if (previousMetaDescriptionContent !== null) {
					metaDescription.setAttribute("content", previousMetaDescriptionContent);
				}
			}

			if (canonicalLink) {
				if (previousCanonicalHref === null && !existingCanonical) {
					canonicalLink.remove();
				} else if (previousCanonicalHref !== null) {
					canonicalLink.setAttribute("href", previousCanonicalHref);
				}
			}
		};
	}, []);

	useEffect(() => {
		let faLink = document.getElementById('tg-contactus-fa');

		if (!faLink) {
			faLink = document.createElement('link');
			faLink.id = 'tg-contactus-fa';
			faLink.rel = 'stylesheet';
			faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
			document.head.appendChild(faLink);
		}
	}, []);

	const handleFaqClick = (index) => {
		setActiveFaqIndex((current) => (current === index ? -1 : index));
	};

	return (
		<div className="tg-contactus-page">
			<div className="main-wrapper">
				<div className="split-container">
					<section className="left-panel">
						<div className="content-wrapper">
							<div className="badge">Official Partners</div>
							<h1 className="tg-contactus-title">Build Your <span>Dream Lab</span> Today.</h1>
							<img className="tg-contactus-heading-image" src={contactusimg} alt="Dream Lab setup visual" />
							<p className="description">TechyGuide provides turnkey solutions for CBSE Composite Skill Labs, STEM Tinkering, and ICSE Robotics. Fully compliant with government mandates. </p>

							<ul className="features">
								<li>
									<div className="icon-box"><i className="fa-solid fa-check"></i></div>
									<div><strong>100% Compliant</strong><p>Meets NCF-SE & CBSE Circular 75/2024 norms.</p></div>
								</li>
								<li>
									<div className="icon-box"><i className="fa-solid fa-user-graduate"></i></div>
									<div><strong>Teacher Training</strong><p>5-Day Master Trainer program included.</p></div>
								</li>
								<li>
									<div className="icon-box"><i className="fa-solid fa-microchip"></i></div>
									<div><strong>Turnkey Setup</strong><p>Hardware, Software, Furniture & Branding.</p></div>
								</li>
							</ul>

							<hr className="divider" />

							<div className="contact-footer">
								<div className="footer-item"><i className="fa-solid fa-phone"></i> +91 91140 36376</div>
								<div className="footer-item"><i className="fa-solid fa-envelope"></i> reachus@techyguide.in</div>
							</div>
						</div>
					</section>

					<section className="right-panel">
						{/* <div className="form-card"> */}
							<iframe
								src="https://in.bigin.online/org60029825901/forms/contact-us-form"
								width="100%"
								height="650"
								scrolling="no"
								frameBorder="0"
								title="Contact Us Form"
								style={{ border: "none" }}
							></iframe>
						{/* </div> */}
					</section>
				</div>

				<section className="logo-cloud premium-showcase">
					<div className="container">
						<p className="showcase-title">Official Partners & Paving the Way in <span>700+ Schools</span></p>
						<div className="logo-viewport">
							<div className="logo-track colorful-grid">
								<div className="logo-item color-1"><img src={school1} alt="CBSE" /></div>
								<div className="logo-item color-2"><img src={school2} alt="STEM Partner" /></div>
								<div className="logo-item color-3"><img src={school3} alt="ICSE" /></div>
								<div className="logo-item color-4"><img src={school4} alt="Robotics Partner" /></div>
								<div className="logo-item color-5"><img src={school5} alt="Govt. Partner" /></div>
								<div className="logo-item color-5"><img src={school6} alt="Govt. Partner" /></div>
								<div className="logo-item color-5"><img src={school7} alt="Govt. Partner" /></div>
								<div className="logo-item color-5"><img src={school8} alt="Govt. Partner" /></div>
								<div className="logo-item color-5"><img src={school9} alt="Govt. Partner" /></div>
								<div className="logo-item color-1"><img src={school1} alt="CBSE" /></div>
								<div className="logo-item color-2"><img src={school2} alt="STEM Partner" /></div>
								<div className="logo-item color-3"><img src={school3} alt="ICSE" /></div>
								<div className="logo-item color-4"><img src={school4} alt="Robotics Partner" /></div>
								<div className="logo-item color-5"><img src={school5} alt="Govt. Partner" /></div>
								<div className="logo-item color-5"><img src={school6} alt="Govt. Partner" /></div>
								<div className="logo-item color-5"><img src={school7} alt="Govt. Partner" /></div>
								<div className="logo-item color-5"><img src={school8} alt="Govt. Partner" /></div>
								<div className="logo-item color-5"><img src={school9} alt="Govt. Partner" /></div>
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
							<button className="faq-question" type="button" onClick={() => handleFaqClick(0)}>What is the space requirement for a CBSE Lab? <i className="fa-solid fa-plus"></i></button>
							<div className="faq-answer">
								<p>We recommend a minimum of 600–800 sq. ft. for a standard setup. However, our solutions are flexible and can be customized to fit your available room size.</p>
							</div>
						</div>
						<div className={"faq-item " + (activeFaqIndex === 1 ? 'active' : '')}>
							<button className="faq-question" type="button" onClick={() => handleFaqClick(1)}>Is your hardware compliant with CBSE Circular 75/2024? <i className="fa-solid fa-plus"></i></button>
							<div className="faq-answer">
								<p>Yes, all our turnkey setups, hardware, and curriculum materials are 100% compliant with the latest NCF-SE and CBSE mandates.</p>
							</div>
						</div>
						<div className={"faq-item " + (activeFaqIndex === 2 ? 'active' : '')}>
							<button className="faq-question" type="button" onClick={() => handleFaqClick(2)}>Do you provide teacher training? <i className="fa-solid fa-plus"></i></button>
							<div className="faq-answer">
								<p>Absolutely. Every Dream Lab setup includes our 5-Day Master Trainer program to ensure your faculty is fully equipped to teach Robotics and STEM modules.</p>
							</div>
						</div>
					</div>
				</section>

				<section className="office-map-section">
					<div className="office-card">
						<div className="office-header"><i className="fa-solid fa-building"></i><h3 className="tg-contactus-office-title">Corporate Office</h3></div>
						<p>80, 2nd Floor, 1st Main, A Narayanapura Main Rd, near Hanuman Temple, VSR Layout, Bengaluru, Karnataka 560016</p>
						<div className="map-container">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.64024508474!2d77.6713!3d12.9942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae116c29197455%3A0xdebe7d9cbf33e070!2sTechyGuide%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1700000000000" allowFullScreen loading="lazy" title="Corporate Office"></iframe>
						</div>
						<a href="https://www.google.com/maps/dir/?api=1&destination=TechyGuide+Pvt.+Ltd.+Bengaluru&destination_place_id=ChIJVXQb2TIRrjsRcOAzv5x9vt4" target="_blank" rel="noreferrer" className="directions-btn">
							Get Directions <i className="fa-solid fa-location-arrow"></i>
						</a>
					</div>

					<div className="office-card">
						<div className="office-header"><i className="fa-solid fa-map-location-dot"></i><h3 className="tg-contactus-office-title">Registered Office</h3></div>
						<p>C/O. Mr. Chittaranjan Bhoi 2nd floor, near Budhi mangala Temple, Bhoisahi, Balasore, Odisha 756001</p>
						<div className="map-container">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.38!2d86.92!3d21.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19fdbe2ef7f815%3A0x97157f00e2609799!2sMAA%20BUDHI%20MANGALA%20TEMPLE!5e0!3m2!1sen!2sin!4v1700000000000" allowFullScreen loading="lazy" title="Registered Office"></iframe>
						</div>
						<a href="https://www.google.com/maps/dir/?api=1&destination=MAA+BUDHI+MANGALA+TEMPLE+Balasore&destination_place_id=ChIJXTgfLr_1HDoRmZdg4sB_FZw" target="_blank" rel="noreferrer" className="directions-btn">
							Get Directions <i className="fa-solid fa-location-arrow"></i>
						</a>
					</div>
				</section>
			</div>
		</div>
	);
}

export default ContactUs;
