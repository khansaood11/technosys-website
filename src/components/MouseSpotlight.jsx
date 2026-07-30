import React, { useState, useEffect } from 'react';

export default function MouseSpotlight() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden lg:block"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 240, 255, 0.05), transparent 80%)`
      }}
    />
  );
}
