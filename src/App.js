import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Bytes from './components/Bytes';
import Projects from './components/Projects';
import DebugSchool from './components/DebugSchool';
import Archives from './components/Archives';
import Learn from './components/Learn';
import UX from './components/BeyondUX';
import Link from './components/Links'; // this is your /links page
import './App.css';

import AfrihealsCareers from './components/works/afriheals-careers';
import Afribreath from './components/works/afribreath';
import Karpture from './components/works/karpture';

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
          <Route path="/bytes" element={<Bytes />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/debug-school" element={<DebugSchool />} />
          <Route path="/Archives" element={<Archives />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/blocks" element={<UX />} />
          <Route path="/links" element={<Link />} />

          <Route path="/works/afriheals-careers" element={<AfrihealsCareers />} />
          <Route path="/works/afribreath" element={<Afribreath />} />
          <Route path="/works/karpture" element={<Karpture />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
};

export default App;
