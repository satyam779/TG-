import { Suspense } from 'react';
import Header from '../Header.jsx';
import FooterSection from '../FooterSection.jsx';
import WhatsAppButton from '../WhatsAppButton.jsx';
import { Outlet, useLocation } from 'react-router-dom';
import RouteLoader from './RouteLoader.jsx';

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <main key={location.pathname} className="page-transition">
        <Suspense fallback={<RouteLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <FooterSection />
      <WhatsAppButton />
    </>
  );
};

export default Layout;
