import Header from '../Header.jsx';
import FooterSection from '../FooterSection.jsx';
import WhatsAppButton from '../WhatsAppButton.jsx';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <FooterSection />
      <WhatsAppButton />
    </>
  );
};

export default Layout;
