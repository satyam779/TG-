import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header.jsx'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import RouteLoader from './components/RouteLoader.jsx'
import Layout from './components/Layout.jsx'
import SEO from './components/SEO.jsx'

import './BlogsPage/BlogsPage.css';

// Lazy load below-the-fold sections
const ShopSection = lazy(() => import('./ShopSection'));
const SchoolSection = lazy(() => import('./SchoolSection'));
const CollaborationSection = lazy(() => import('./CollaborationSection'));
const FranchiseSection = lazy(() => import('./FranchiseSection'));
const RobothroneSection = lazy(() => import('./RobothroneSection.jsx'));
const GallerySection = lazy(() => import('./GallerySection.jsx'));
const CommunitySection = lazy(() => import('./CommunitySection.jsx'));

// Lazy load Pages
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
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/ai-robotics-stem-education-india" replace />} />
          <Route path="/ai-robotics-stem-education-india" element={<HomePage />} />
          <Route path="/government-csr-stem-robotics-education-initiatives" element={<ImpactProgramPage />} />
          <Route path="/impact-program" element={<Navigate to="/government-csr-stem-robotics-education-initiatives" replace />} />

          <Route path="/i-bot-iot-robotics-kit-for-students/" element={<IBoT />} />
          <Route path="/ibot" element={<Navigate to="/i-bot-iot-robotics-kit-for-students/" replace />} />

          <Route path="/tebot-robotics-kit-for-schools" element={<TeBoT />} />
          <Route path="/tebot" element={<Navigate to="/tebot-robotics-kit-for-schools" replace />} />

          <Route path="/e-blox-modular-electronics-kit-for-kids/" element={<EBlox />} />
          <Route path="/e-blox" element={<Navigate to="/e-blox-modular-electronics-kit-for-kids/" replace />} />

          <Route path="/add-on-robotics-kits-for-students" element={<EAddOnKit />} />
          <Route path="/add-on-kits" element={<Navigate to="/add-on-robotics-kits-for-students" replace />} />

          <Route path="/robothrone" element={<RobothronePage />} />

          <Route path="/cbse-ai-robotics-lab-setup-nep-2020" element={<AIRoboticsLabCBSE />} />
          <Route path="/ai-roboticslab-cbse" element={<Navigate to="/cbse-ai-robotics-lab-setup-nep-2020" replace />} />

          <Route path="/ai-robotics-lab-icse-schools-india" element={<AIRoboticLabICSE />} />
          <Route path="/ai-roboticslab-icse" element={<Navigate to="/ai-robotics-lab-icse-schools-india" replace />} />

          <Route path="/stem-labs-for-schools" element={<StemLab />} />
          <Route path="/schools/stem-lab" element={<Navigate to="/stem-labs-for-schools" replace />} />

          <Route path="/stem-tinkering-lab-for-schools-india" element={<StemTinkeringLab />} />
          <Route path="/schools/stem-tinkering-lab" element={<Navigate to="/stem-tinkering-lab-for-schools-india" replace />} />

          <Route path="/cbse-composite-skill-lab-setup-for-schools-india" element={<CompositeSkillLab />} />
          <Route path="/schools/composite-skill-lab" element={<Navigate to="/cbse-composite-skill-lab-setup-for-schools-india" replace />} />

          <Route path="/stem-robotics-workshops-for-schools-india" element={<WorkshopPage />} />
          <Route path="/schools/workshop" element={<Navigate to="/stem-robotics-workshops-for-schools-india" replace />} />

          <Route path="/robotics-coding-franchise-india" element={<FranchisePage />} />
          <Route path="/franchise" element={<Navigate to="/robotics-coding-franchise-india" replace />} />

          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />

          <Route path="/blogs" element={<BlogsPageWrapper />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />

          <Route path="/about-techyguide" element={<AboutUsPage />} />
          <Route path="/about-us" element={<Navigate to="/about-techyguide" replace />} />

          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

          <Route path="/techyguide-partners-stem-education-india" element={<PartnersPage />} />
          <Route path="/partners" element={<Navigate to="/techyguide-partners-stem-education-india" replace />} />

          <Route path="/contact-techyguide/" element={<ContactUs />} />
          <Route path="/contact-us" element={<Navigate to="/contact-techyguide/" replace />} />

          <Route path="/careers-techyguide-stem-education-jobs" element={<CareersPage />} />
          <Route path="/careers" element={<Navigate to="/careers-techyguide-stem-education-jobs" replace />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

function HomePage() {
  return (
    <>
      <SEO
        title="AI Robotics STEM Education India | Labs, Kits & Courses"
        description="Explore AI, Robotics & STEM education in India with TechyGuide. Build innovation labs, DIY kits, workshops & courses for schools and students."
      />
      <HeroSection />
      <AboutSection />
      <Suspense fallback={<RouteLoader />}>
        <ShopSection />
        <SchoolSection />
        <CollaborationSection />
        <FranchiseSection />
        <RobothroneSection />
        <GallerySection />
        <CommunitySection />
      </Suspense>
    </>
  )
}

function ImpactProgramPage() {
  return (
    <>
      <SEO
        title="Government & CSR STEM Education Programs | TechyGuide Impact"
        description="Explore TechyGuide's Government and CSR initiatives empowering students with STEM, robotics, AI, and coding through innovation labs, workshops, and teacher training across India."
        canonical="https://techyguide.in/government-csr-stem-robotics-education-initiatives"
      />
      <ImpactProgram />
    </>
  )
}

function BlogsPageWrapper() {
  return (
    <div className="blogs-root">
      <SEO title="Blogs | TechyGuide STEM Education Insights" />
      <BlogHome />
    </div>
  );
}

function BlogPostPage() {
  return (
    <div className="blogs-root">
      <BlogPost />
    </div>
  );
}

export default App
