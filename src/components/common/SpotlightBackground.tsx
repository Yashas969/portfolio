import React from 'react';
import { useSpotlight } from '../../hooks/useSpotlight';

export const SpotlightBackground: React.FC = () => {
  const { position, opacity } = useSpotlight();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Static top glow gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-radial-gradient opacity-80 pointer-events-none" />

      {/* Dynamic Mouse Spotlight */}
      <div
        className="absolute transition-opacity duration-300 pointer-events-none"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(138, 176, 171, 0.08), transparent 80%)`,
          inset: 0,
        }}
      />
    </div>
  );
};
