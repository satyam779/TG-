import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
//import reactLogo from './assets/react.svg'
//import './App.css'
import Header from './Header.jsx'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import ShopSection from './ShopSection'
import SchoolSection from './SchoolSection'
import CollaborationSection from './CollaborationSection'
import FranchiseSection from './FranchiseSection'
import RobothroneSection from './RobothroneSection.jsx'
import GallerySection from './GallerySection.jsx'
import CommunitySection from './CommunitySection.jsx'
import FooterSection from './FooterSection.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'
//import SocialMediaIcons from './SocialMediaIcons.jsx'
import RouteLoader from './components/RouteLoader.jsx'
// import OpenResources from './OpenResources.jsx' // Commented out - Coming Soon
//Blogs Import

import './BlogsPage/BlogsPage.css';

const ImpactProgram = lazy(() => import('./ImpactProgram.jsx'));
const IBoT = lazy(() => import('./productPages/I-BoT.jsx'));
const FranchisePage = lazy(() => import('./FranchisePage.jsx'));
const RobothronePage = lazy(() => import('./RobothronePage.jsx'));
const AIRoboticsLabCBSE = lazy(() => import('./ForschoolsPages/AI-RoboticLabCBSE.jsx'));
const AIRoboticLabICSE = lazy(() => import('./ForschoolsPages/AI-RoboticLabICSE.jsx'));
const StemTinkeringLab = lazy(() => import('./ForschoolsPages/StemTinkeringLab.jsx'));
const StemLab = lazy(() => import('./ForschoolsPages/StemLab.jsx'));
const CompositeSkillLab = lazy(() => import('./ForschoolsPages/CompositeSkillLab.jsx'));
const WorkshopPage = lazy(() => import('./ForschoolsPages/WorkshopPage.jsx'));
const CoursesPage = lazy(() => import('./coursesPage.jsx'));
const ShopPage = lazy(() => import('./ShopPage.jsx'));
const CheckOutPage = lazy(() => import('./CheckOutPage.jsx'));
const PaymentSuccess = lazy(() => import('./PaymentSuccess.jsx'));
const PrivacyPolicyPage = lazy(() => import('./privacyPolicypage.jsx'));
const TeBoT = lazy(() => import('./productPages/TeBoT.jsx'));
const EBlox = lazy(() => import('./productPages/E-Blox.jsx'));
const EAddOnKit = lazy(() => import('./productPages/AddOnKit.jsx'));
const AboutUsPage = lazy(() => import('./AboutUsPage.jsx'));
const PartnersPage = lazy(() => import('./partnersPage.jsx'));
const ContactUs = lazy(() => import('./contactUs.jsx'));
const CareersPage = lazy(() => import('./CareersPage.jsx'));
const NotFound = lazy(() => import('./404'));
const BlogHome = lazy(() => import('./BlogsPage/pages/BlogHome'));
const BlogPost = lazy(() => import('./BlogsPage/pages/BlogPost'));

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function App() {
 return (
  <>
    <ScrollToTop />
    {/* <SocialMediaIcons /> */}
    <Header/>
    <Suspense fallback={<RouteLoader />}>
      <Routes>
        <Route path="/" element={<Navigate to="/ai-robotics-stem-education-india" replace />} />
        <Route path="/ai-robotics-stem-education-india" element={<HomePage />} />
        <Route path="/government-csr-stem-robotics-education-initiatives" element={<ImpactProgram />} />
        <Route path="/impact-program" element={<Navigate to="/government-csr-stem-robotics-education-initiatives" replace />} />
        <Route path="/i-bot-iot-robotics-kit-for-students/" element={<IBoTPage />} />
        <Route path="/ibot" element={<Navigate to="/i-bot-iot-robotics-kit-for-students/" replace />} />
        <Route path="/tebot-robotics-kit-for-schools" element={<TeBoTPage />} />
        <Route path="/tebot" element={<Navigate to="/tebot-robotics-kit-for-schools" replace />} />
        <Route path="/e-blox-modular-electronics-kit-for-kids/" element={<EBloxPage />} />
        <Route path="/e-blox" element={<Navigate to="/e-blox-modular-electronics-kit-for-kids/" replace />} />
        <Route path="/add-on-robotics-kits-for-students" element={<EAddOnKitPage />} />
        <Route path="/add-on-kits" element={<Navigate to="/add-on-robotics-kits-for-students" replace />} />
        <Route path="/robothrone" element={<RobothronePageWrapper />} />
        <Route path="/cbse-ai-robotics-lab-setup-nep-2020" element={<AIRoboticsLabCBSEPage />} />
        <Route path="/ai-roboticslab-cbse" element={<Navigate to="/cbse-ai-robotics-lab-setup-nep-2020" replace />} />
        <Route path="/ai-robotics-lab-icse-schools-india" element={<AIRoboticLabICSEPage />} />
        <Route path="/ai-roboticslab-icse" element={<Navigate to="/ai-robotics-lab-icse-schools-india" replace />} />
        <Route path="/stem-labs-for-schools" element={<StemLabPage />} />
        <Route path="/schools/stem-lab" element={<Navigate to="/stem-labs-for-schools" replace />} />
        <Route path="/stem-tinkering-lab-for-schools-india" element={<StemTinkeringLabPage />} />
        <Route path="/schools/stem-tinkering-lab" element={<Navigate to="/stem-tinkering-lab-for-schools-india" replace />} />
        <Route path="/cbse-composite-skill-lab-setup-for-schools-india" element={<CompositeSkillLabPage />} />
        <Route path="/schools/composite-skill-lab" element={<Navigate to="/cbse-composite-skill-lab-setup-for-schools-india" replace />} />
        <Route path="/stem-robotics-workshops-for-schools-india" element={<WorkshopPageWrapper />} />
        <Route path="/schools/workshop" element={<Navigate to="/stem-robotics-workshops-for-schools-india" replace />} />
        <Route path="/robotics-coding-franchise-india" element={<FranchisePageWrapper />} />
        <Route path="/franchise" element={<Navigate to="/robotics-coding-franchise-india" replace />} />
        <Route path="/courses" element={<CoursesPageWrapper />} />
        <Route path="/shop" element={<ShopPageWrapper />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/blogs" element={<BlogsPageWrapper />} />
        <Route path="/blog/:id" element={<BlogPostWrapper />} />
        {/* <Route path="/open-learning-library-stem-resources" element={<OpenResourcesWrapper />} /> */}
        {/* <Route path="/open-resources" element={<Navigate to="/open-learning-library-stem-resources" replace />} /> */}
        {/* OpenResources routes commented out -this page is Coming Soon */}
        <Route path="/about-techyguide" element={<AboutUsPageWrapper />} />
        <Route path="/about-us" element={<Navigate to="/about-techyguide" replace />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPageWrapper />} />
        <Route path="/techyguide-partners-stem-education-india" element={<PartnersPageWrapper />} />
        <Route path="/partners" element={<Navigate to="/techyguide-partners-stem-education-india" replace />} />
        <Route path="/contact-techyguide/" element={<ContactUsPageWrapper />} />
        <Route path="/contact-us" element={<Navigate to="/contact-techyguide/" replace />} />
        <Route path="/careers-techyguide-stem-education-jobs" element={<CareersPageWrapper />} />
        <Route path="/careers" element={<Navigate to="/careers-techyguide-stem-education-jobs" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
    <WhatsAppButton/>
  </>
)
}

function HomePage() {
  useEffect(() => {
    // Set page title
    document.title = 'AI Robotics STEM Education India | Labs, Kits & Courses';

    // Set or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore AI, Robotics & STEM education in India with TechyGuide. Build innovation labs, DIY kits, workshops & courses for schools and students.');
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', 'Explore AI, Robotics & STEM education in India with TechyGuide. Build innovation labs, DIY kits, workshops & courses for schools and students.');
      document.head.appendChild(metaDescription);
    }

    // Add or update canonical tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', 'https://techyguide.com/ai-robotics-stem-education-india');
      document.head.appendChild(canonicalLink);
    }
  }, []);

  return (
    <>
    <HeroSection/>
    <AboutSection/>
    <ShopSection/>
    <SchoolSection/>
    <CollaborationSection/>
    <FranchiseSection/>
    <RobothroneSection/>
    <GallerySection/>
    <CommunitySection/>
    <FooterSection/>
    </>
  )
}

function IBoTPage() {
  return (
    <>
      <IBoT />
      <FooterSection />
    </>
  );
}

function TeBoTPage() {
  return (
    <>
      <TeBoT />
      <FooterSection />
    </>
  );
}

function EBloxPage() {
  return (
    <>
      <EBlox />
      <FooterSection />
    </>
  );
}

function FranchisePageWrapper() {
  return (
    <>
      <FranchisePage />
      <FooterSection />
    </>
  );
}

function AIRoboticsLabCBSEPage() {
  return (
    <>
      <AIRoboticsLabCBSE />
      <FooterSection />
    </>
  );
}

function AIRoboticLabICSEPage() {
  return (
    <>
      <AIRoboticLabICSE />
      <FooterSection />
    </>
  );
}

function StemTinkeringLabPage() {
  return (
    <>
      <StemTinkeringLab />
      <FooterSection />
    </>
  );
}

function StemLabPage() {
  return (
    <>
      <StemLab />
      <FooterSection />
    </>
  );
}

function CompositeSkillLabPage() {
  return (
    <>
      <CompositeSkillLab />
      <FooterSection />
    </>
  );
}

function WorkshopPageWrapper() {
  return (
    <>
      <WorkshopPage />
      <FooterSection />
    </>
  );
}

function CoursesPageWrapper() {
  return (
    <>
      <CoursesPage />
      <FooterSection />
    </>
  );
}

function ShopPageWrapper() {
  return (
    <>
      <ShopPage />
      <FooterSection />
    </>
  );
}

function PrivacyPolicyPageWrapper() {
  return (
    <>
      <PrivacyPolicyPage />
      <FooterSection />
    </>
  );
}

function EAddOnKitPage() {
  return (
    <>
      <EAddOnKit />
      <FooterSection />
    </>
  );
}

function RobothronePageWrapper() {
  return (
    <>
      <RobothronePage />
      <FooterSection />
    </>
  );
}

// OpenResourcesWrapper commented out - Coming Soon
// function OpenResourcesWrapper() {
//   return (
//     <>
//       <OpenResources />
//       <FooterSection />
//     </>
//   );
// }

function AboutUsPageWrapper() {
  return (
    <>
      <AboutUsPage />
      <FooterSection />
    </>
  );
}

function PartnersPageWrapper() {
  return (
    <>
      <PartnersPage />
      <FooterSection />
    </>
  );
}

function ContactUsPageWrapper() {
  return (
    <>
      <ContactUs />
      <FooterSection />
    </>
  );
}

function CareersPageWrapper() {
  return (
    <>
      <CareersPage />
      <FooterSection />
    </>
  );
}

function BlogsPageWrapper() {
  return (
    <>
      <div className="blogs-root">
        <BlogHome />
      </div>
      <FooterSection />
    </>
  );
}

function BlogPostWrapper() {
  return (
    <>
      <div className="blogs-root">
        <BlogPost />
      </div>
      <FooterSection />
    </>
  );
}


export default App
