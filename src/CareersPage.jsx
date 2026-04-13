import { useEffect, useMemo, useRef, useState } from 'react';
import SEO from './components/SEO';
import './CareersPage.css';
//About Working at TechyGuide images
import aboutWorking1 from './assets/CareersPageImages/About Working at TechyGuide - 1.webp';
import aboutWorking2 from './assets/CareersPageImages/About Working at TechyGuide - 2.webp';
import aboutWorking3 from './assets/CareersPageImages/About Working at TechyGuide - 3.webp';
import aboutWorking4 from './assets/CareersPageImages/About Working at TechyGuide - 4.webp';
//Why Join Us images
import whyJionUs1 from './assets/CareersPageImages/Why Join Us - 1.webp';
import whyJionUs2 from './assets/CareersPageImages/Why Join Us - 2.webp';
import whyJionUs3 from './assets/CareersPageImages/Why Join Us - 3.webp';
import whyJionUs4 from './assets/CareersPageImages/Why Join Us - 4.webp';




const openings = [
  {
    title: 'Robotics Trainer',
    location: 'Bengaluru / Hybrid',
    experience: '0-2 Years',
    description:
      'Deliver hands-on robotics sessions for schools and mentor learners in prototyping and STEM projects.'
  },
  // {
  //   title: 'STEM Educator',
  //   location: 'Pan India / Travel',
  //   experience: '0-2 Years',
  //   description:
  //     'Design engaging STEM lesson flows and support schools in implementing innovation-focused curriculum.'
  // },
  // {
  //   title: 'IoT Engineer',
  //   location: 'Bengaluru / On-site',
  //   experience: '2-4 Years',
  //   description:
  //     'Build and test IoT-enabled learning kits and create real-world classroom applications for connected systems.'
  // },
  
 
  {
    title: 'Sales Executive (EdTech)',
    location: 'Pan India',
    experience: '0-2 Years',
    description:
      'Partner with schools and institutions to enable adoption of robotics, AI, and STEM learning solutions.'
  }
];

const aboutHighlights = [
  {
    title: 'Innovation-driven culture',
    image: aboutWorking1
  },
  {
    title: 'Hands-on learning environment',
    image: aboutWorking2
  },
  {
    title: 'Work on real-world robotics projects',
    image: aboutWorking3
  },
  {
    title: 'Opportunity to impact education',
    image: aboutWorking4
  }
];

const benefits = [
  {
    title: 'Career Growth Opportunities',
    image: whyJionUs1
  },
  {
    title: 'Work with Latest Technologies (AI, IoT, Robotics)',
    image: whyJionUs2
  },
  {
    title: 'Training & Skill Development',
    image: whyJionUs3
  },
  {
    title: 'Opportunity to work with schools nationwide',
    image: whyJionUs4
  }
];

const positionOptions = ['Robotics Trainer', 'STEM Educator', 'IoT Engineer', 'Frontend Developer', 'Backend Developer', 'Sales Executive (EdTech)', 'Other'];
const experienceOptions = ['Fresher', '0-1 Years', '1-3 Years', '3-5 Years', '5+ Years'];
const HR_EMAIL_ENDPOINT = 'https://formsubmit.co/hr@techyguide.in';

function CareersPage() {
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: ''
  });
  const [quickApplyData, setQuickApplyData] = useState({
    name: '',
    email: ''
  });
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [quickApplySubmitted, setQuickApplySubmitted] = useState(false);
  const [applicationSubmitting, setApplicationSubmitting] = useState(false);
  const [quickApplySubmitting, setQuickApplySubmitting] = useState(false);
  const [applicationError, setApplicationError] = useState('');
  const [quickApplyError, setQuickApplyError] = useState('');
  const [applicationResumeName, setApplicationResumeName] = useState('');
  const [quickResumeName, setQuickResumeName] = useState('');
  const [applicationResumeFile, setApplicationResumeFile] = useState(null);
  const [quickResumeFile, setQuickResumeFile] = useState(null);
  const applicationResumeRef = useRef(null);
  const quickApplyResumeRef = useRef(null);
  const applicationSubmitInProgressRef = useRef(false);
  const quickSubmitInProgressRef = useRef(false);

  const openingIds = useMemo(
    () =>
      openings.map((job) => ({
        ...job,
        id: `tg-open-role-${job.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
      })),
    []
  );


  const scrollToOpenings = () => {
    document.getElementById('tg-careers-openings')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const scrollToApplication = () => {
    document.getElementById('tg-careers-application')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const applyForRole = (role) => {
    setApplicationData((prev) => ({ ...prev, position: role }));
    scrollToApplication();
  };

  const handleApplicationChange = (event) => {
    const { name, value } = event.target;
    setApplicationData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuickApplyChange = (event) => {
    const { name, value } = event.target;
    setQuickApplyData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMainResumeUpload = (event) => {
    const file = event.target.files?.[0];
    setApplicationResumeFile(file || null);
    setApplicationResumeName(file ? file.name : '');
  };

  const handleQuickResumeUpload = (event) => {
    const file = event.target.files?.[0];
    setQuickResumeFile(file || null);
    setQuickResumeName(file ? file.name : '');
  };

  const handleApplicationSubmit = (event) => {
    event.preventDefault();

    if (!applicationResumeFile) {
      setApplicationError('Please upload your resume before submitting.');
      setApplicationSubmitted(false);
      return;
    }

    setApplicationSubmitting(true);
    setApplicationError('');
    setApplicationSubmitted(false);
    applicationSubmitInProgressRef.current = true;
    event.currentTarget.submit();
  };

  const handleQuickApplySubmit = (event) => {
    event.preventDefault();

    if (!quickResumeFile) {
      setQuickApplyError('Please upload your resume before submitting.');
      setQuickApplySubmitted(false);
      return;
    }

    setQuickApplySubmitting(true);
    setQuickApplyError('');
    setQuickApplySubmitted(false);
    quickSubmitInProgressRef.current = true;
    event.currentTarget.submit();
  };

  const handleApplicationIframeLoad = () => {
    if (!applicationSubmitInProgressRef.current) {
      return;
    }

    applicationSubmitInProgressRef.current = false;
    setApplicationSubmitting(false);
    setApplicationSubmitted(true);
    setApplicationData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      message: ''
    });
    setApplicationResumeName('');
    setApplicationResumeFile(null);
    if (applicationResumeRef.current) {
      applicationResumeRef.current.value = '';
    }
  };

  const handleQuickIframeLoad = () => {
    if (!quickSubmitInProgressRef.current) {
      return;
    }

    quickSubmitInProgressRef.current = false;
    setQuickApplySubmitting(false);
    setQuickApplySubmitted(true);
    setQuickApplyData({ name: '', email: '' });
    setQuickResumeName('');
    setQuickResumeFile(null);
    if (quickApplyResumeRef.current) {
      quickApplyResumeRef.current.value = '';
    }
  };

  return (
    <main className="tg-careers-page">
      <SEO 
        title="Careers at TechyGuide | STEM, Robotics, AI & IoT Jobs"
        description="Explore careers at TechyGuide in STEM education, robotics, AI, and IoT. Join our team of engineers, educators, and innovators."
        canonical="https://techyguide.com/careers-techyguide-stem-education-jobs"
      />
      <section className="tg-careers-hero">
        <div className="tg-careers-hero-shapes" aria-hidden="true">
          <span className="tg-careers-dot tg-careers-dot-1"></span>
          <span className="tg-careers-dot tg-careers-dot-2"></span>
          <span className="tg-careers-dot tg-careers-dot-3"></span>
          <span className="tg-careers-dot tg-careers-dot-4"></span>
        </div>
        <div className="container tg-careers-hero-content">
          <p className="tg-careers-kicker">Careers at TechyGuide</p>
          <br className="tg-careers-mobile-br" />
          <h1>Build the Future of STEM Education with TechyGuide</h1>
          <br className="tg-careers-mobile-br" />
          <p className="tg-careers-subheading">
            Join a passionate team of innovators, robotics engineers, and educators shaping the next generation of learners.
          </p>
          <br className="tg-careers-mobile-br" />
          <div className="tg-careers-hero-actions">
            <button type="button" className="tg-careers-btn tg-careers-btn-primary" onClick={scrollToOpenings}>
              View Open Positions
            </button>
            <button type="button" className="tg-careers-btn tg-careers-btn-secondary" onClick={scrollToApplication}>
              Apply Now
            </button>
          </div>
        </div>
      </section>

      <section className="tg-careers-section tg-careers-about">
        <div className="container">
          <div className="tg-careers-section-head"><br/><br/>
            <h2>About Working at TechyGuide</h2>
            <p>
              We are a STEM education company focused on Robotics, AI, IoT, and Innovation Labs. Our team includes Robotics
              Engineers, Trainers, and Innovation Experts who work with schools across India and build products like TeBot,
              iBot, and TechBots.
            </p>
          </div>
          <div className="tg-careers-about-grid">
            {aboutHighlights.map((item) => (
              <article className="tg-careers-about-card" key={item.title}>
                <img className="tg-careers-card-image" src={item.image} alt={item.title} />
                <div className="tg-careers-card-content">
                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tg-careers-section tg-careers-benefits">
        <div className="container">
          <div className="tg-careers-section-head">
            <h2>Why Join Us</h2>
            <p>Grow your career while working with advanced technology and a mission-driven education team.</p>
          </div>
          <div className="tg-careers-benefits-grid">
            {benefits.map((benefit) => (
              <article className="tg-careers-benefit-card" key={benefit.title}>
                <img className="tg-careers-card-image" src={benefit.image} alt={benefit.title} />
                <div className="tg-careers-card-content">
                  <h3>{benefit.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tg-careers-openings" className="tg-careers-section tg-careers-openings">
        <div className="container">
          <div className="tg-careers-section-head">
            <h2>Current Openings</h2>
            <p>Explore opportunities to build the future of robotics, AI, and STEM learning with us.</p>
          </div>
          <div className="tg-careers-openings-grid">
            {openingIds.map((role) => (
              <article className="tg-careers-job-card" key={role.id}>
                <h3>{role.title}</h3>
                <div className="tg-careers-job-meta">
                  <span>{role.location}</span>
                  <span>{role.experience}</span>
                </div>
                <p>{role.description}</p>
                <button type="button" className="tg-careers-btn tg-careers-btn-primary" onClick={() => applyForRole(role.title)}>
                  Apply Now
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tg-careers-application" className="tg-careers-section tg-careers-form-section">
        <div className="container">
          <iframe
            title="General application submission"
            name="tg-careers-general-submit"
            className="tg-careers-hidden-submit-frame"
            onLoad={handleApplicationIframeLoad}
          ></iframe>
          <div className="tg-careers-section-head">
            <h2>General Application</h2>
            <p>Share your details and resume. We will review your profile and connect for relevant opportunities.</p>
          </div>
          <form
            className="tg-careers-form"
            onSubmit={handleApplicationSubmit}
            action={HR_EMAIL_ENDPOINT}
            method="POST"
            encType="multipart/form-data"
            target="tg-careers-general-submit"
          >
            <input type="hidden" name="_subject" value={`Career Application - ${applicationData.position || 'General Role'}`} />
            <input type="hidden" name="Form Type" value="General Application" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_replyto" value={applicationData.email} />
            <div className="tg-careers-form-grid">
              <label className="tg-careers-field">
                Full Name
                <input name="fullName" value={applicationData.fullName} onChange={handleApplicationChange} required />
              </label>
              <label className="tg-careers-field">
                Email
                <input type="email" name="email" value={applicationData.email} onChange={handleApplicationChange} required />
              </label>
              <label className="tg-careers-field">
                Phone Number
                <input type="tel" name="phone" value={applicationData.phone} onChange={handleApplicationChange} required />
              </label>
              <label className="tg-careers-field">
                Position Applying For
                <select name="position" value={applicationData.position} onChange={handleApplicationChange} required>
                  <option value="">Select Position</option>
                  {positionOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label className="tg-careers-field">
                Experience
                <select name="experience" value={applicationData.experience} onChange={handleApplicationChange} required>
                  <option value="">Select Experience</option>
                  {experienceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label className="tg-careers-field tg-careers-field-file">
                Upload Resume (PDF/DOC)
                <input
                  ref={applicationResumeRef}
                  type="file"
                  name="attachment"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={handleMainResumeUpload}
                  required
                />
                <span className="tg-careers-file-name">{applicationResumeName || 'No file selected'}</span>
              </label>
              <label className="tg-careers-field tg-careers-field-full">
                Message / Cover Letter
                <textarea
                  rows="5"
                  name="message"
                  value={applicationData.message}
                  onChange={handleApplicationChange}
                  placeholder="Tell us about your interest and strengths"
                  required
                ></textarea>
              </label>
            </div>
            <button type="submit" className="tg-careers-btn tg-careers-btn-primary" disabled={applicationSubmitting}>
              {applicationSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
            {applicationSubmitted ? (
              <p className="tg-careers-success" role="status">
                Thank you. Your application has been submitted successfully.
              </p>
            ) : null}
            {applicationError ? (
              <p className="tg-careers-error" role="alert">
                {applicationError}
              </p>
            ) : null}
          </form>
        </div>
      </section>

      <section className="tg-careers-section tg-careers-quick-apply">
        <div className="container tg-careers-quick-wrap">
          <iframe
            title="Quick apply submission"
            name="tg-careers-quick-submit"
            className="tg-careers-hidden-submit-frame"
            onLoad={handleQuickIframeLoad}
          ></iframe>
          <div>
            <h2>Didn't find a suitable role?</h2>
            <p>
              Submit your profile and we will get back to you when a suitable opportunity opens.
            </p>
          </div>
          <form
            className="tg-careers-quick-form"
            onSubmit={handleQuickApplySubmit}
            action={HR_EMAIL_ENDPOINT}
            method="POST"
            encType="multipart/form-data"
            target="tg-careers-quick-submit"
          >
            <input type="hidden" name="_subject" value={`Career Quick Profile - ${quickApplyData.name || 'Candidate'}`} />
            <input type="hidden" name="Form Type" value="Quick Apply" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_replyto" value={quickApplyData.email} />
            <label className="tg-careers-field">
              Name
              <input name="name" value={quickApplyData.name} onChange={handleQuickApplyChange} required />
            </label>
            <label className="tg-careers-field">
              Email
              <input type="email" name="email" value={quickApplyData.email} onChange={handleQuickApplyChange} required />
            </label>
            <label className="tg-careers-field tg-careers-field-file">
              Resume Upload
              <input
                ref={quickApplyResumeRef}
                type="file"
                name="attachment"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={handleQuickResumeUpload}
                required
              />
              <span className="tg-careers-file-name">{quickResumeName || 'No file selected'}</span>
            </label>
            <button type="submit" className="tg-careers-btn tg-careers-btn-primary" disabled={quickApplySubmitting}>
              {quickApplySubmitting ? 'Submitting...' : 'Submit Profile'}
            </button>
            {quickApplySubmitted ? (
              <p className="tg-careers-success" role="status">
                Profile received. We will reach out when a matching role opens.
              </p>
            ) : null}
            {quickApplyError ? (
              <p className="tg-careers-error" role="alert">
                {quickApplyError}
              </p>
            ) : null}
          </form>
        </div>
      </section>

      <section className="tg-careers-cta">
        <div className="container tg-careers-cta-inner">
          <h2>Join Us in Transforming Education</h2>
          <button type="button" className="tg-careers-btn tg-careers-btn-dark" onClick={scrollToApplication}>
            Apply Now
          </button>
        </div>
      </section>
    </main>
  );
}

export default CareersPage;
