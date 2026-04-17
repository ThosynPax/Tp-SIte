import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Link from './components/Links';
import Lab from './components/Lab';
import useEnvironment from './hooks/useEnvironment';
import './App.css';

const LayoutWrapper = ({ children, theme }) => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/links';
  const isLabPage = location.pathname === '/lab';

  useEffect(() => {
    if (isLabPage) {
      document.body.className = `theme-dark`;
    } else {
      document.body.className = `theme-${theme}`;
    }
  }, [isLabPage, theme]);

  return (
    <div className={isLabPage ? `theme-dark` : `theme-${theme}`}>
      {!(hideHeaderFooter || isLabPage) && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

const App = () => {
  const { theme } = useEnvironment();

  return (
    <>
      <Router>
        <LayoutWrapper theme={theme}>
          <Routes>
            <Route path="/" element={<Main theme={theme} />} />
            <Route path="/lab" element={<Lab theme={theme} />} />
            <Route path="/links" element={<Link />} />
          </Routes>
        </LayoutWrapper>
      </Router>
    </>
  );
};

export default App;
