import { useEffect, useRef } from "react";
import SEO from "./components/SEO";
import "./partnersPage.css";
import heroVideoSrc from "./assets/partnersPageImages/8523654-hd_1920_1080_25fps.mp4";
import academicHeightsLogo from "./assets/partnersPageImages/academic-heights-logo.webp";
import agpnImage from "./assets/partnersPageImages/AGPN.webp";
import armyGoodwillSchoolUri from "./assets/partnersPageImages/Army Goodwill School Uri.webp";
import bhatkalEducationSociety from "./assets/partnersPageImages/Bhatkal Education Society.webp";
import cbLogo from "./assets/partnersPageImages/CB Logo.webp";
import codeKidsTechnology from "./assets/partnersPageImages/Code Kids Technology.webp";
import deepRootsPreSchoolBikaner from "./assets/partnersPageImages/Deep Roots Pre School Bikaner.webp";
import delhiCambridgeSchool from "./assets/partnersPageImages/Delhi Cambridge School.webp";
import dhanraj from "./assets/partnersPageImages/Dhanraj.webp";
import evergreenSchool from "./assets/partnersPageImages/Evergreen School.webp";
import govtGirlsHighSchoolRairangpurOdisha from "./assets/partnersPageImages/Govt. Girls High School, Rairangpur, Odisha.webp";
import greenValleySchoolTebo from "./assets/partnersPageImages/Green Valley School Tebo.webp";
import gyanVikashSchool from "./assets/partnersPageImages/Gyan Vikash School.webp";
import gurukulPublicSchoolOdisha from "./assets/partnersPageImages/Gurukul Public School, Odisha.webp";
import gvLovo from "./assets/partnersPageImages/GV Lovo.webp";
import harimayaInternationalSchool from "./assets/partnersPageImages/Harimaya International School.webp";
import hemSheela from "./assets/partnersPageImages/HemSheela.webp";
import immortalInternationalSchool from "./assets/partnersPageImages/Immortal International School.webp";
import jajooInternationalSchool from "./assets/partnersPageImages/Jajoo International School.webp";
import jivatKashi from "./assets/partnersPageImages/Jivat-Kashi.webp";
import kvs from "./assets/partnersPageImages/KVS.webp";
import magadhamInternationalSchool from "./assets/partnersPageImages/Magadham International School.webp";
import montfortCentreOfEducationTuraMeghalaya from "./assets/partnersPageImages/Montfort Centre of Education, Tura, Meghalaya.webp";
import motherSuhagEducationCentreFatehpur from "./assets/partnersPageImages/Mother Suhag Education Centre Fatehpur.webp";
import mungiabariLogo from "./assets/partnersPageImages/Mungiabari Logo.webp";
import nilbagan from "./assets/partnersPageImages/Nilbagan.webp";
import nobleSchoolAlipur from "./assets/partnersPageImages/Noble School Alipur.webp";
import northDelhiPublicSchool from "./assets/partnersPageImages/North Delhi Public School.webp";
import oakLeafHighSchool from "./assets/partnersPageImages/Oak Leaf High School.webp";
import phulbaniPublicSchool from "./assets/partnersPageImages/Phulbani Public School.webp";
import rakeshAcademyPilani from "./assets/partnersPageImages/Rakesh Academy Pilani.webp";
import sanskritiTheGurukulGuwahatiAssam from "./assets/partnersPageImages/Sanskriti The Gurukul, Guwahati, Assam.webp";
import santSinghSukhaSinghGroupOfSchoolsAndCollege from "./assets/partnersPageImages/Sant Singh sukha Singh Group of schools and college.webp";
import shemfordSrSecSchoolHaldwani300x300 from "./assets/partnersPageImages/Shemford-Sr.-Sec.-School-Haldwani-300x300.webp";
import shemrockSchoolBalaghat from "./assets/partnersPageImages/Shemrock School Balaghat.webp";
import shikshaBhavanMontessoriSchool from "./assets/partnersPageImages/Shiksha bhavan Montessori School_.webp";
import shreeKunjilalGulkandiDeviPublicSchoolKagarol from "./assets/partnersPageImages/Shree Kunjilal Gulkandi Devi Public School - Kagarol.webp";
import spv from "./assets/partnersPageImages/SPV.webp";
import sriGuruTegBahadurPublicSchool from "./assets/partnersPageImages/Sri Guru Teg Bahadur Public School.webp";
import stJoansSchools from "./assets/partnersPageImages/St Joans Schools.webp";
import stMaryPublicInterCollege from "./assets/partnersPageImages/St Mary Public Inter College.webp";
import stXaviersPublicSchoolChatrapur300x300 from "./assets/partnersPageImages/St.-Xaviers-Public-School-Chatrapur-300x300.webp";
//partners scroll images
import maaEducation from "./assets/partnersPageImages/MAA Education logo 400x400.webp";
import Austineducator from "./assets/partnersPageImages/Austin Educator.webp";
import sarvamKuteeram from "./assets/partnersPageImages/Sarvam Kutteram.webp";
import cyberpathashala from "./assets/partnersPageImages/cyber pathashala.webp";
import rmcElecricals from "./assets/partnersPageImages/rmcelecricals.webp";
import epicdigitallabs from "./assets/partnersPageImages/epicdigitallabs.webp";
import vidyodam from "./assets/partnersPageImages/Vidyodam Logo.webp";

function PartnersPage() {
	const rootRef = useRef(null);
	const videoRef = useRef(null);


	const institutionalSchools = [
		{ name: "Shemrock School Balaghat", logo: shemrockSchoolBalaghat },
		{ name: "St. Joans School", logo: stJoansSchools },
		{ name: "North Delhi Public School", logo: northDelhiPublicSchool },
		{ name: "Noble School Alipur", logo: nobleSchoolAlipur },
		{ name: "Nilbagan Model School, Assam", logo: nilbagan },
		{ name: "Magadham International School", logo: magadhamInternationalSchool },
		{ name: "Jajoo International School", logo: jajooInternationalSchool },
		{ name: "Harimaya International School", logo: harimayaInternationalSchool },
		{ name: "Gurukul Public School, Odisha", logo: gurukulPublicSchoolOdisha },
		{ name: "Green Valley School Tebo", logo: greenValleySchoolTebo },
		{
			name: "Govt. Girls High School, Rairangpur, Odisha",
			logo: govtGirlsHighSchoolRairangpurOdisha,
		},
		{
			name: "Shree Kunjilal Gulkandi Devi Public School - Kagarol",
			logo: shreeKunjilalGulkandiDeviPublicSchoolKagarol,
		},
		{ name: "Delhi Cambridge School", logo: delhiCambridgeSchool },
		{ name: "Chaman Bhartiya School", logo: cbLogo },
		{ name: "Army Goodwill School Uri", logo: armyGoodwillSchoolUri },
		{ name: "Evergreen School", logo: evergreenSchool },
		{ name: "Montfort Centre of Education, Tura, Meghalaya", logo: montfortCentreOfEducationTuraMeghalaya },
		{ name: "Mother Suhag Education Centre, Fatehpur", logo: motherSuhagEducationCentreFatehpur },
		{ name: "Mungiabari School", logo: mungiabariLogo },
		{ name: "Sanskriti The Gurukul, Guwahati, Assam", logo: sanskritiTheGurukulGuwahatiAssam },
		{ name: "St Mary Public Inter College", logo: stMaryPublicInterCollege },
		{ name: "Immortal International School", logo: immortalInternationalSchool },
		{ name: "Jivat Kashi", logo: jivatKashi },
		{ name: "St. Xavier's Public School, Chatrapur", logo: stXaviersPublicSchoolChatrapur300x300 },
		{ name: "Academic Heights", logo: academicHeightsLogo },
		{ name: "Shemford Sr. Sec. School, Haldwani", logo: shemfordSrSecSchoolHaldwani300x300 },
		{ name: "Hem Sheela Model School", logo: hemSheela },
		{ name: "Sant Singh Sukha Singh Group of Schools and College", logo: santSinghSukhaSinghGroupOfSchoolsAndCollege },
		{ name: "Sri Guru Teg Bahadur Public School", logo: sriGuruTegBahadurPublicSchool },
		{ name: "Phulbani Public School", logo: phulbaniPublicSchool },
		{ name: "Shiksha Bhavan Montessori School", logo: shikshaBhavanMontessoriSchool },
		{ name: "Oak Leaf High School", logo: oakLeafHighSchool },
		{ name: "AGPN Convent", logo: agpnImage },
		{ name: "Bhatkal Education Society", logo: bhatkalEducationSociety },
		{ name: "Code Kids Technology", logo: codeKidsTechnology },
		{ name: "KVS", logo: kvs },
		{ name: "GV Lovo", logo: gvLovo },
		{ name: "Dhanraj", logo: dhanraj },
		{ name: "Deep Roots Pre School Bikaner", logo: deepRootsPreSchoolBikaner },
		{ name: "Gyan Vikash School", logo: gyanVikashSchool },
		{ name: "Rakesh Academy Pilani", logo: rakeshAcademyPilani },
		{ name: "SPV", logo: spv },
	];

	const regionalPartners = [
		{
			name: "Maa Education",
			badge: "UTTAR PRADESH",
			address: "Meerut, UP",
			website: "https://www.example.com/maa-education",
			logo: maaEducation,
		},
		{
			name: "RMC Electrical & Instrumentation",
			badge: "ASSAM",
			address: "Assam",
			website: "https://www.example.com/rmc-electrical",
			logo: rmcElecricals,
		},
		{
			name: "Sarvam Kuteeram",
			badge: "KARNATAKA",
			address: "Bangalore",
			website: "https://www.example.com/sarvam-kuteeram",
			logo: sarvamKuteeram,
		},
		{
			name: "Vidyodam",
			badge: "ANDHRA PRADESH",
			address: "Andhra Pradesh",
			website: "https://www.example.com/vidyodam",
			logo: vidyodam,
		},
		{
			name: "Austin Educator",
			badge: "KARNATAKA",
			address: "Mangalore, Karnataka",
			website: "https://www.example.com/austin-educator",
			logo: Austineducator,
		},
		{
			name: "The Cyber Pathshala",
			badge: "MADHYA PRADESH",
			address: "Vidisha, MP",
			website: "https://www.cyberpathshala.in/",
			logo: cyberpathashala,
		},
		{
			name: "Epic Digital Labs",
			badge: "MAHARASHTRA",
			address: "MAHARASHTRA",
			website: "https://epicdigital.in/",
			logo: epicdigitallabs,
		},
	];

	useEffect(() => {
		const root = rootRef.current;
		const videoElement = videoRef.current;
		
		if (!root || !videoElement) {
			return undefined;
		}

		const playVideo = () => {
			if (!videoElement) {
				return;
			}
			videoElement.muted = true; // Ensure muted for autoplay
			const playPromise = videoElement.play();
			if (playPromise && typeof playPromise.catch === "function") {
				playPromise.catch(() => {
					// Retry after a short delay
					setTimeout(() => {
						videoElement.play().catch(() => {});
					}, 100);
				});
			}
		};

		// Try multiple events to ensure playback
		videoElement.addEventListener("loadeddata", playVideo);
		videoElement.addEventListener("canplay", playVideo);
		videoElement.addEventListener("canplaythrough", playVideo);
		
		// Try to play immediately
		playVideo();

		const tiltElements = root.querySelectorAll("[data-tilt]");
		if (typeof window !== "undefined" && window.VanillaTilt) {
			window.VanillaTilt.init(tiltElements, {
				max: 15,
				speed: 400,
				glare: true,
				"max-glare": 0.4,
				scale: 1.05,
			});
		}

		const schools = root.querySelectorAll(".partners-school-logo-card");
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry, index) => {
					if (entry.isIntersecting) {
						setTimeout(() => {
							entry.target.style.opacity = "1";
							entry.target.style.transform = "translateY(0) scale(1)";
						}, index * 30);
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
		);

		schools.forEach((school) => {
			school.style.opacity = "0";
			school.style.transform = "translateY(20px) scale(0.8)";
			school.style.transition =
				"all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
			observer.observe(school);
		});

		const anchorLinks = root.querySelectorAll('a[href^="#"]');
		const handleAnchorClick = (event) => {
			event.preventDefault();
			const targetId = event.currentTarget.getAttribute("href");
			const targetEl = root.querySelector(targetId);
			if (targetEl) {
				targetEl.scrollIntoView({ behavior: "smooth" });
			}
		};

		anchorLinks.forEach((anchor) => {
			anchor.addEventListener("click", handleAnchorClick);
		});

		return () => {
			anchorLinks.forEach((anchor) => {
				anchor.removeEventListener("click", handleAnchorClick);
			});
			if (videoElement) {
				videoElement.removeEventListener("loadeddata", playVideo);
				videoElement.removeEventListener("canplay", playVideo);
				videoElement.removeEventListener("canplaythrough", playVideo);
			}
			observer.disconnect();
			tiltElements.forEach((el) => {
				if (el.vanillaTilt) {
					el.vanillaTilt.destroy();
				}
			});
		};
	}, []);

	return (
		<div className="partners-page-root" ref={rootRef}>
			<SEO 
				title="STEM Education Partners in India | TechyGuide Network"
				description="Discover TechyGuide's partner network across India including STEM lab collaborators, robotics education partners, and technology learning institutions."
				canonical="https://techyguide.com/techyguide-partners-stem-education-india"
			/>
			<section className="partners-hero-video-section">
				<video
					ref={videoRef}
					autoPlay
					muted
					loop
					playsInline
					className="partners-back-video"
					id="partners-hero-video"
					src={heroVideoSrc}
					preload="auto"
				>
					Your browser does not support the video tag.
				</video>

				<div className="partners-video-overlay"></div>

				<div className="partners-hero-content">
					<div className="partners-hero-label">COLLABORATIVE ECOSYSTEM</div>
					<h1>
						TechyGuide Partners   <br /> 
					</h1>
					<h2 className="partners-gradient-text">Collaborative STEM Network </h2>
					<p>
						TechyGuide partners with schools and tech leaders across India to expand STEM learning through robotics labs, AI modules, coding programs and IoT training. 
					</p>

					<div className="partners-stat-glass-container">
						<div className="partners-stat-glass">
							<h3>50+</h3>
							<p>Schools Onboard</p>
						</div>
						<div className="partners-stat-glass">
							<h3>4+</h3>
							<p>States Covered</p>
						</div>
						<div className="partners-stat-glass">
							<h3>10k+</h3>
							<p>Students Impacted</p>
						</div>
					</div>
				</div>
			</section>

			<section id="partners" className="partners-section-spacer">
				<div className="partners-container">
					<div className="partners-section-title">
						<h2><span className="partners-heading-accent">Regional</span> Tech Partners</h2>
						<p>Our regional partners operating under the TechyGuide mandate. </p>
					</div>

					<div className="partners-cards-marquee">
						<div className="partners-cards-track">
							<div className="partners-cards-group">
								{regionalPartners.map((partner) => (
									<div className="partners-glass-card" data-tilt key={partner.name}>
										<div className="partners-card-badge">{partner.badge}</div>
										<div className="partners-card-icon">
											<img src={partner.logo} alt={`${partner.name} logo`} loading="lazy" />
										</div>
										<h3>{partner.name}</h3>
										<p className="partners-address">{partner.address}</p>
										<div className="partners-card-contact">
											{/* <a href={partner.website} target="_blank" rel="noreferrer">
												<i className="fas fa-globe"></i> Website
											</a> */}
										</div>
									</div>
								))}
							</div>

							<div className="partners-cards-group" aria-hidden="true">
								{regionalPartners.map((partner) => (
									<div className="partners-glass-card" data-tilt key={`${partner.name}-duplicate`}>
										<div className="partners-card-badge">{partner.badge}</div>
										<div className="partners-card-icon">
											<img src={partner.logo} alt="" loading="lazy" aria-hidden="true" />
										</div>
										<h3>{partner.name}</h3>
										<p className="partners-address">{partner.address}</p>
										<div className="partners-card-contact">
											{/* <a href={partner.website} target="_blank" rel="noreferrer">
												<i className="fas fa-globe"></i> Website
											</a> */}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="schools" className="partners-section-spacer">
				<div className="partners-container">
					<div className="partners-section-title">
						<h2><span className="partners-heading-accent">Institutional</span> Network</h2>
						<p>Proudly powering STEM Labs in these esteemed institutions.</p>
					</div>

					<div className="partners-school-glass-grid">
						{institutionalSchools.map((school) => (
							<div
								className="partners-school-logo-card"
								title={school.name}
								key={school.name}
							>
								<img src={school.logo} alt={school.name} loading="lazy" />
								<span>{school.name}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="testimonials" className="partners-section-spacer">
				<div className="partners-container">
					<div className="partners-section-title">
						<h2><span className="partners-heading-accent">Voices</span> of Impact</h2>
						<p>What the community is saying about TechyGuide.</p>
					</div>
				</div>

				<div className="partners-marquee-wrapper">
					<div className="partners-marquee-content">
						<div className="partners-testimonial-glass">
							<div className="partners-quote-icon">
								<i className="fas fa-quote-left"></i>
							</div>
							<p>
								"This is an AMAZING GIFT for me! The robotics kit changed how I
								look at engineering."
							</p>
							<div className="partners-user-info">
								<div className="partners-avatar">S</div>
								<span>Student, Grade 8</span>
							</div>
						</div>
						<div className="partners-testimonial-glass">
							<div className="partners-quote-icon">
								<i className="fas fa-quote-left"></i>
							</div>
							<p>
								"TechyGuide workshops brought real innovation to our labs. The
								trainers are excellent."
							</p>
							<div className="partners-user-info">
								<div className="partners-avatar">P</div>
								<span>Principal, DPS</span>
							</div>
						</div>
						<div className="partners-testimonial-glass">
							<div className="partners-quote-icon">
								<i className="fas fa-quote-left"></i>
							</div>
							<p>
								"My daughter loved the 3D Pen activity. It really sparked her
								creativity."
							</p>
							<div className="partners-user-info">
								<div className="partners-avatar">M</div>
								<span>Parent</span>
							</div>
						</div>
						<div className="partners-testimonial-glass">
							<div className="partners-quote-icon">
								<i className="fas fa-quote-left"></i>
							</div>
							<p>"The curriculum is perfectly aligned with the NEP 2020 standards."</p>
							<div className="partners-user-info">
								<div className="partners-avatar">T</div>
								<span>Science HOD</span>
							</div>
						</div>
						<div className="partners-testimonial-glass">
							<div className="partners-quote-icon">
								<i className="fas fa-quote-left"></i>
							</div>
							<p>
								"This is an AMAZING GIFT for me! The robotics kit changed how I
								look at engineering."
							</p>
							<div className="partners-user-info">
								<div className="partners-avatar">S</div>
								<span>Student, Grade 8</span>
							</div>
						</div>
						<div className="partners-testimonial-glass">
							<div className="partners-quote-icon">
								<i className="fas fa-quote-left"></i>
							</div>
							<p>"TechyGuide workshops brought real innovation to our labs."</p>
							<div className="partners-user-info">
								<div className="partners-avatar">P</div>
								<span>Principal, DPS</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default PartnersPage;
