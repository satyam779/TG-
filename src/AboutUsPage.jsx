import SEO from './components/SEO';
import './AboutUsPage.css'
import teamimg1 from './assets/AboutUsImages/Team 1.webp';
import founderImage from './assets/AboutUsImages/5.webp';
import workspace1 from './assets/AboutUsImages/Our Team & Workspace - 1.webp';
import workspace2 from './assets/AboutUsImages/Our Team & Workspace - 2.webp';
import workspace3 from './assets/AboutUsImages/Our Team & Workspace - 3.webp';
import workspace4 from './assets/AboutUsImages/Our Team & Workspace - 4.webp';
import ourjourney from './assets/AboutUsImages/Asset_Website_About us page - Milestone 1.webp';
import heroImage from './assets/AboutUsImages/Hero.webp';

function AboutUsPage() {
	const workspaceImages = [
		{ src: workspace1, alt: 'College campus block' },
		{ src: workspace2, alt: 'College library tower' },
		{ src: workspace3, alt: 'College innovation studio' },
		{ src: workspace4, alt: 'Student activity zone' }
	];


	return (
		<div className="aboutus-page-root">
			<SEO
				title="About | TechyGuide STEM, Robotics & AI Education Company"
				description="Learn about TechyGuide, a STEM education and technology company providing robotics kits, AI courses, coding programs, IoT solutions, and hands-on innovation learning."
				canonical="https://techyguide.in/about-techyguide"
			/>
			<section
				className="hero"
				style={{
					'--about-hero-image': `url(${heroImage})`,
					'--about-hero-mobile-image': `url(${workspace2})`,
				}}
			>
				<div className="hero-content">
					<h1>Robotics, AI & STEM Innovators </h1>
					<p>
						TechyGuide builds robotics, AI, coding and IoT solutions, empowering students, educators and businesses through practical STEM learning and Educating .
					</p>
				</div>
			</section>

			<section className="about">
				<div className="container about-grid">
					<div>
						<h2>Who We Are</h2>
						<p>
							TechyGuide is a technology-driven company focused on advancing STEM education through robotics, AI, coding and engineering learning. We empower students, educators and innovators with hands-on tools, practical training and modern technology programs that build creativity, technical skills and real-world thinking.
						</p>
						{/* <p>
							From startups to enterprises, we partner with clients to turn ideas
							into powerful digital products.
						</p> */}
					</div>
					<img src={teamimg1} alt="Office" loading="lazy" />
				</div>
			</section>

			<section className="values">
				<div className="container">
					<h2>Our Core Values</h2>

					<div className="values-grid">
						<div className="value-card">
							<h3>Innovation</h3>
							<p>We constantly evolve with modern technologies.</p>
						</div>
						<div className="value-card">
							<h3>Quality</h3>
							<p>Clean code, strong architecture, and reliable delivery.</p>
						</div>
						<div className="value-card">
							<h3>Transparency</h3>
							<p>Clear communication and honest collaboration.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="journey-section">
				<div className="container">
					<h2 className="journey-heading">Our Journey</h2>
					<div className="journey-image-container">
						<img
							src={ourjourney}
							alt="TechyGuide Journey Timeline"
							className="journey-image"
							loading="lazy"
						/>
					</div>
				</div>
			</section>

			{/* Meet the Team section — commented out
			<section className="team">
				<div className="container">
					<h2>Meet the Team</h2>

					<div className="team-grid">
						<div className="team-card">
							<img src={teamImage} alt="Rahul Sharma - Frontend Developer" />
							<h3>Rahul Sharma</h3>
							<span>Frontend Developer</span>
						</div>

						<div className="team-card">
							<img src={teamImage} alt="Anjali Verma - Backend Developer" />
							<h3>Anjali Verma</h3>
							<span>Backend Developer</span>
						</div>

						<div className="team-card">
							<img src={teamImage} alt="Mohit Kumar - Full Stack Engineer" />
							<h3>Mohit Kumar</h3>
							<span>Full Stack Engineer</span>
						</div>

						<div className="team-card">
							<img src={teamImage} alt="Pooja Singh - Project Manager" />
							<h3>Pooja Singh</h3>
							<span>Project Manager</span>
						</div>
					</div>
				</div>
			</section>
			*/}

			{/* Meet our Founder */}
			<section className="founder-section">
				<div className="container about-grid">
					<div>
						<h2 style={{ color: 'orange', textAlign: 'center', fontSize: '2.64rem' }}>Meet Our Founder</h2>
						<br />
						<p>
							<b>Pradeep Kumar Jena</b> is the visionary founder of TechyGuide, a passionate educator and technology entrepreneur who has dedicated his career to transforming STEM education across India. With a background in engineering and a deep belief in hands-on learning, he built TechyGuide from the ground up to bridge the gap between classroom theory and real-world innovation.
						</p>
						<p>
							Under his leadership, TechyGuide has empowered thousands of students and educators through robotics kits, AI programs, coding workshops, and IoT learning solutions — reaching 700+ schools across the country.
						</p>
					</div>
					<img src={founderImage} alt="Founder - Pradeep Kumar Jena" loading="lazy" />
				</div>
			</section>

			<section className="gallery">
				<div className="container">
					<h2>Our Team & Workspace</h2>
					<br></br>

					<div className="workspace-gallery">
						<div className="workspace-row">
							<img src={workspace4} alt={workspaceImages[0].alt} loading="lazy" className="large-img" />
							<img src={workspace2} alt={workspaceImages[1].alt} loading="lazy" className="small-img" />
						</div>

						<div className="workspace-row reverse">
							<img src={workspace3} alt={workspaceImages[2].alt} loading="lazy" className="large-img" />
							<img src={workspace1} alt={workspaceImages[3].alt} loading="lazy" className="small-img" />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default AboutUsPage
