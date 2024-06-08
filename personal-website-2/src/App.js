import React from 'react';
import HomePage from './components/HomePage/HomePage.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuBar from './components/MenuBar/MenuBar.js';
import ProjectPage from './components/ProjectPage/ProjectPage.js';
import PortfolioPage from './components/PortfolioPage/PortfolioPage.js';
import ExperiencesPage from './components/ExperiencesPage/ExperiencesPage.js';

const App = () => {
  return (
      <BrowserRouter>
        <MenuBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectPage />} />
          <Route path="links" element={<PortfolioPage />} />
          <Route path="experience" element={<ExperiencesPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App