import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Bytes from './components/Bytes';
import Works from './components/Works';
import Projects from './components/Projects';
import Media from './components/media-kits';
import Archives from './components/Archives';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/bytes" element={<Bytes />} />
          <Route path="/Works" element={<Works />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/media-kits" element={<Media />} />
          <Route path="/Archives" element={<Archives />} />
          {/* Add more routes here as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
