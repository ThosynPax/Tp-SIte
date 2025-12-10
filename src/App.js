import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import DebugSchool from './components/DebugSchool';
import Learn from './components/Learn';
import Link from './components/Links';
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
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/debug-school" element={<DebugSchool />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/links" element={<Link />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
};

export default App;
