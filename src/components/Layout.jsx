import Header from '../Header.jsx';
import FooterSection from '../FooterSection.jsx';
import WhatsAppButton from '../WhatsAppButton.jsx';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <main key={location.pathname} className="page-transition">
        <Outlet />
      </main>
      <FooterSection />
      <WhatsAppButton />
    </>
  );
};

export default Layout;
