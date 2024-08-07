// components/ScrollHandler.tsx
"use client"; // Add this to make it a client component

import { useRef, useEffect } from 'react';

interface ScrollHandlerProps {
  scrollToHowItsWork: () => void;
}

const ScrollHandler: React.FC<ScrollHandlerProps> = ({ scrollToHowItsWork }) => {
  const howItsWorkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && howItsWorkRef.current) {
      scrollToHowItsWork();
    }
  }, [scrollToHowItsWork]);

  return <div ref={howItsWorkRef} />;
};

export default ScrollHandler;
