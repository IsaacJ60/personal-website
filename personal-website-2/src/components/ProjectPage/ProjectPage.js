// src/components/ProjectPage.js

import React from 'react';
import './ProjectPage.css';
import GradientBackground from '../GradientBackground/GradientBackground';

const projects = [
  { name: 'HealthScreen', image: 'images/healthscreen.png', githubLink: 'https://github.com/IsaacJ60/healthscreen', details: 'A medical screening application for patient use in free clinics in Detroit, Michigan, for an underserved patient population.' },
  { name: 'KanBoy', image: 'images/kanboy.png', githubLink: 'https://github.com/jaydenvii/kanboy', details: 'The only Discord studying bot you\'ll ever need.' },
  { name: 'PowerNote', image: 'images/powernote.png', githubLink: 'https://github.com/IsaacJ60/masseyhacksIX', details: 'An AI-powered flashcard and note generator.' },
  { name: 'Alan\'s Adventure', image: 'images/alansadventure.png', githubLink: 'https://github.com/IsaacJ60/alanadventure', details: 'A Downwell inspired game, made using Java Swing.' },
  { name: 'FyLy', image: 'images/fyly.png', githubLink: 'https://github.com/jaydenvii/hackthe6ix2023', details: 'An AI-powered file organizer and command line app.' },
  { name: 'SideSchedule', image: 'images/sideschedule.png', githubLink: 'https://github.com/jaydenvii/side-schedule', details: 'An AI-powered scheduler app, with Google Calendar Integration.' },
  { name: 'SurveyScreen', image: 'images/surveyscreen.png', githubLink: 'https://github.com/IsaacJ60/recesshacks-node16', details: 'An AI-powered general health screening tool, made using React.js' },
  { name: 'Arkanoid', image: 'images/arkanoid.png', githubLink: 'https://github.com/IsaacJ60/arkanoid', details: 'A remake of the popular game Arkanoid, made in Java Swing.' },
  { name: 'AOT Paint', image: 'images/aotpaint.png', githubLink: 'https://github.com/IsaacJ60/aotpaintfinal', details: 'Recreation of MS Paint with Attack on Titan theme made using PyGame.' },
  { name: 'Human Benchmark', image: 'images/humanbenchmark.png', githubLink: 'https://github.com/IsaacJ60/human-benchmark', details: 'PyGame benchmarking tool for measuring motor skills and memory.' },
  { name: 'Dungeons of Denneria', image: 'images/sololeveling.png', githubLink: 'https://github.com/IsaacJ60/ICS3U-FSE', details: 'Solo Leveling themed dungeon crawler made with PyGame.' },
  // Add more projects as needed
];

const ProjectPage = () => {
  return (
    <div>
    <GradientBackground />
    <div className="project-page">
      <h1>CS Projects</h1>
      <div className="project-container">
      {projects.map((project, index) => (
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-card" key={index}>
          <div className="project-overlay">
            <img src={process.env.PUBLIC_URL + '/' + project.image} alt={project.name} />
          </div>
          <div className="project-details">
            <h2>{project.name}</h2>
            <p>{project.details}</p>
          </div>
        </a>
      ))}
    </div>
    </div>
    </div>
  );
};

export default ProjectPage;
