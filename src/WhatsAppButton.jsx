import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './WhatsAppButton.css';

function WhatsAppButton() {
  const [isShifted, setIsShifted] = useState(false);
  const { pathname } = useLocation();

  const schoolKeywords = [
    'cbse-ai-robotics-lab-setup-nep-2020',
    'ai-roboticslab-cbse',
    'ai-robotics-lab-icse-schools-india',
    'ai-roboticslab-icse',
    'stem-labs-for-schools',
    'schools/stem-lab',
    'stem-tinkering-lab-for-schools-india',
    'schools/stem-tinkering-lab',
    'cbse-composite-skill-lab-setup-for-schools-india',
    'schools/composite-skill-lab',
    'stem-robotics-workshops-for-schools-india',
    'schools/workshop'
  ];

  const isSchoolRoute = (path = pathname) => {
    if (!path) return false;
    const lower = path.toLowerCase();
    return schoolKeywords.some(k => lower.includes(k));
  };

  const hideOnThisRoute = isSchoolRoute();

  useEffect(() => {
    const togglePosition = () => {
      if (window.pageYOffset > 300) {
        setIsShifted(true);
      } else {
        setIsShifted(false);
      }
    };

    window.addEventListener('scroll', togglePosition);
    return () => {
      window.removeEventListener('scroll', togglePosition);
    };
  }, []);

  if (hideOnThisRoute) return null;

  return (
    <a
      href="https://wa.me/919114036376"
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-button ${isShifted ? 'shifted' : ''}`}
      aria-label="Chat with us on WhatsApp"
      title="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}

export default WhatsAppButton;
