import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
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
import useEnvironment from './hooks/useEnvironment';
import './App.css';

const LayoutWrapper = ({ children, theme }) => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/links';
  const isLabPage = location.pathname.startsWith('/lab');
  const isResourcesPage = location.pathname === '/resources';

  useEffect(() => {
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
  }, [isLabPage, isResourcesPage, theme]);

  return (
    <div className={isLabPage ? `theme-lab` : (isResourcesPage ? `theme-dark` : `theme-${theme}`)}>
      {!(hideHeaderFooter || isLabPage || isResourcesPage) && <Header />}
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
            <Route path="/lab" element={<Lab theme={theme} />}>
              <Route index element={<LabStory />} />
              <Route path="story" element={<LabStory />} />
              <Route path="products" element={<LabProducts />} />
              <Route path="store" element={<LabStore />} />
              <Route path="podcast" element={<LabPodcast />} />
              <Route path="newsletter" element={<LabNewsletter />} />
              <Route path="magazine" element={<LabMagazine />} />
              <Route path="resources" element={<LabResources />} />
            </Route>
            <Route path="/resources" element={<Resources theme={theme} />} />
            <Route path="/links" element={<Link />} />
          </Routes>
        </LayoutWrapper>
      </Router>
    </>
  );
};

export default App;
