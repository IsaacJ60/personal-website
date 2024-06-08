// src/components/GradientBackground.js

import React, { useState, useEffect } from 'react';
import './GradientBackground.css';

function GradientBackground() {
  const [gradientStyle, setGradientStyle] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPercent = (clientX / window.innerWidth) * 100;
      const yPercent = (clientY / window.innerHeight) * 100;

      const gradient = `radial-gradient(at ${xPercent}% ${yPercent}%, #006400, #111111)`;
      setGradientStyle({ background: gradient });
    };

    // Set initial gradient style when the component mounts
    handleMouseMove({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 7 });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className="gradient-background" style={gradientStyle}></div>;
}

export default GradientBackground;
