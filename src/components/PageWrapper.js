import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageWrapper = ({ children, title, isLab = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // 1. Dynamic Title
    if (title) {
      document.title = isLab ? `${title} | The Product Lab by Thosyn Pax` : `${title} | Thosyn Pax`;
    } else {
      document.title = "Thosyn Pax — Product Architect";
    }

    // 2. Entrance Animation Trigger
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 30); // slight delay ensures class applies after render

    return () => clearTimeout(timer);
  }, [location.pathname, title, isLab]);

  return (
    <div className={`hektor-page-transition ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default PageWrapper;
