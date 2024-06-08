// src/components/ExperiencesPage.js

import React from 'react';
import './ExperiencesPage.css';
import GradientBackground from '../GradientBackground/GradientBackground';

const ExperiencesPage = () => {
  const experiences = [
    {
      company: 'CodeQuest',
      position: 'Co-Founder',
      duration: 'Jun 2023 - Present',
      description: 'Worked in a team of 5 to run a weeklong coding summer camp for grades 5-8. Taught 15+ campers the fundamentals of Python and the Pygame graphics library.',
    },
    {
      company: 'Believe Initiative',
      position: 'Student Director',
      duration: 'Jun 2023 - Apr 2024',
      description: 'Collaborated with 2 team members and the Believe Initiative to run workshops and the Believe Leadership course. Led 500+ chapters with 15000+ students across North America.',
    },
    {
      company: 'STEMist Education',
      position: 'CS Assistant Instructor & Hackathon Organizer',
      duration: 'Jun 2023 - Apr 2024',
      description: 'Assisted and advised for computer science curriculum. Worked in a group of 5 to organize STEMist Hacks 2. Planned & oversaw workshops and activities.',
    },
    {
      company: 'University of Windsor',
      position: 'Research Assistant',
      duration: 'Jun 2023 - Aug 2023',
      description: 'Summarized and compiled research papers related to back-translation and data-augmentation. Modified and created new code for the ReQue project.',
    },
    {
      company: 'Riverside Minor Baseball Association',
      position: 'Office Employee',
      duration: 'Apr 2023 - Aug 2023',
      description: 'Full-stack developer, maintaining and populating website with news articles, sponsorships, and notices. Used MS Excel to create and manage rosters and schedules for 6 different age groups with 30+ teams and 360+ players.',
    },
    {
      company: 'Inspirit AI',
      position: 'AI & SEO Blogging Intern',
      duration: 'Apr 2023 - Jun 2023',
      description: 'Wrote 10+ blogs about computer science and competitions using SEO strategies.',
    },
    {
      company: 'Vincent Massey Secondary School',
      position: 'Computer Science Club Teacher',
      duration: 'Jun 2023 - Jun 2024',
      description: 'Taught 15+ students algorithms and data structures in preparation for the CCC.',
    },
    {
      company: 'Hack Club',
      position: 'VMHC Software Executive & Teacher',
      duration: 'Sep 2023 - Jun 2024',
      description: 'Taught a group of 30+ students the basics of Web Development.',
    },
    // Add more experiences as needed
  ];

  return (
    <div>
    <GradientBackground />
    <div className="experiences-page">
      <h1>Experience</h1>
      <div className="experiences-container">
        {experiences.map((experience, index) => (
          <div className="experience-card" key={index}>
            <h2>{experience.company}</h2>
            <p>{experience.position}</p>
            <p>{experience.duration}</p>
            <p>{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default ExperiencesPage;
