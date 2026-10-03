import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import LabHeader from './components/LabHeader';
import LabFooter from './components/LabFooter';
import Link from './components/Links';
import Lab from './components/Lab';
import Resources from './components/Resources';
import LabStory from './components/lab/LabStory';
import LabProducts from './components/lab/LabProducts';
import LabStore from './components/lab/LabStore';
import LabPodcast from './components/lab/LabPodcast';
import LabNewsletter from './components/lab/LabNewsletter';
import LabMagazine from './components/lab/LabMagazine';
import LabResources from './components/lab/LabResources';
import LabResearch from './components/lab/LabResearch';
import LabPrivacy from './components/lab/LabPrivacy';
import PageWrapper from './components/PageWrapper';
import NotFound from './components/NotFound';
import useEnvironment from './hooks/useEnvironment';
import './App.css';

const LayoutWrapper = ({ children, theme }) => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/links';
  const isLabPage = location.pathname.startsWith('/lab');
  const isResourcesPage = location.pathname === '/resources';

  useEffect(() => {
    // Scroll to top or hash on route change
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo(0, 0);
      setTimeout(() => window.scrollTo(0, 0), 0);
    }

    if (isLabPage) {
      document.body.className = `theme-lab`;
      document.body.style.borderTop = 'none';
    } else if (isResourcesPage) {
      document.body.className = `theme-dark`;
      document.body.style.borderTop = 'none';
    } else {
      document.body.className = `theme-${theme}`;
      document.body.style.borderTop = '';
    }
  }, [location.pathname, location.hash, isLabPage, isResourcesPage, theme]);

  return (
    <div className={isLabPage ? `theme-lab` : (isResourcesPage ? `theme-dark` : `theme-${theme}`)}>
      {!(hideHeaderFooter || isResourcesPage) && (isLabPage ? <LabHeader /> : <Header />)}
      {children}
      {!hideHeaderFooter && (isLabPage ? <LabFooter /> : <Footer />)}
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
            <Route path="/" element={<PageWrapper title="Home"><Main theme={theme} /></PageWrapper>} />
            <Route path="/lab" element={<PageWrapper title="The Lab" isLab={true}><Lab theme={theme} /></PageWrapper>} />
            <Route path="/lab/story" element={<PageWrapper title="Story" isLab={true}><LabStory theme={theme} /></PageWrapper>} />
            <Route path="/lab/products" element={<PageWrapper title="Portfolio" isLab={true}><LabProducts theme={theme} /></PageWrapper>} />
            <Route path="/lab/store" element={<PageWrapper title="Store" isLab={true}><LabStore theme={theme} /></PageWrapper>} />
            <Route path="/lab/podcast" element={<PageWrapper title="Podcast" isLab={true}><LabPodcast theme={theme} /></PageWrapper>} />
            <Route path="/lab/newsletter" element={<PageWrapper title="Newsletter" isLab={true}><LabNewsletter theme={theme} /></PageWrapper>} />
            <Route path="/lab/magazine" element={<PageWrapper title="Magazine" isLab={true}><LabMagazine theme={theme} /></PageWrapper>} />
            <Route path="/lab/resources" element={<PageWrapper title="Lab Resources" isLab={true}><LabResources theme={theme} /></PageWrapper>} />
            <Route path="/lab/research" element={<PageWrapper title="Research" isLab={true}><LabResearch theme={theme} /></PageWrapper>} />
            <Route path="/lab/privacy" element={<PageWrapper title="Privacy Policy" isLab={true}><LabPrivacy theme={theme} /></PageWrapper>} />
            <Route path="/resources" element={<PageWrapper title="Resources"><Resources theme={theme} /></PageWrapper>} />
            <Route path="/links" element={<PageWrapper title="Links"><Link /></PageWrapper>} />
            <Route path="*" element={<PageWrapper title="Page Not Found"><NotFound /></PageWrapper>} />
          </Routes>
        </LayoutWrapper>
      </Router>
    </>
  );
};

export default App;
