// components/HeroWrapper.tsx
"use client";

import React, { useRef } from 'react';
import Hero from './Hero';
import HowItsWork from './HowItsWork';

const HeroWrapper: React.FC = () => {
  const howItsWorkRef = useRef<HTMLDivElement>(null);

  const scrollToHowItsWork = () => {
    if (howItsWorkRef.current) {
      howItsWorkRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero scrollToHowItsWork={scrollToHowItsWork} />
      <div ref={howItsWorkRef}>
        <HowItsWork />
      </div>
    </>
  );
};

export default HeroWrapper;
