import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Header from './components/Header';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <NavTabs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<Project />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


