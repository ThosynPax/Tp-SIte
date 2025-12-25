import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Link from './components/Links';
import useEnvironment from './hooks/useEnvironment';
import SeasonalOverlay from './components/SeasonalOverlay';
import './App.css';

const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/links';

  return (
    <>
      {!hideHeaderFooter && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

const App = () => {
  const { theme, season } = useEnvironment();

  useEffect(() => {
    // Also apply theme class to body for global background/transition
    document.body.className = `theme-${theme} season-${season.toLowerCase()}`;
  }, [theme, season]);

  return (
    <div className={`theme-${theme} season-${season.toLowerCase()}`}>
      <SeasonalOverlay season={season} />
      <Router>
        <LayoutWrapper>
          <Routes>
            <Route path="/" element={<Main theme={theme} season={season} />} />
            <Route path="/links" element={<Link />} />
          </Routes>
        </LayoutWrapper>
      </Router>
    </div>
  );
};

export default App;
