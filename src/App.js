import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Bytes from './components/Bytes';
import Projects from './components/Projects';
import Story from './components/story';
import Archives from './components/Archives';
import Learn from './components/Learn';
import UX from './components/BeyondUX';
import './App.css';


import AfrihealsCareers from './components/works/afriheals-careers';
import Afribreath from './components/works/afribreath';
import Karpture from './components/works/karpture';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/bytes" element={<Bytes />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/story" element={<Story />} />
          <Route path="/Archives" element={<Archives />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/blocks" element={<UX />} />
          {/* Add more routes here as needed */}

          <Route path="/works/afriheals-careers" element={<AfrihealsCareers />} />
          <Route path="/works/afribreath" element={<Afribreath />} />
           <Route path="/works/karpture" element={<Karpture />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
