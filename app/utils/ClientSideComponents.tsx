// app/utils/ClientSideComponents.tsx
"use client";

import { useEffect } from 'react';
import { WOW } from 'wowjs';
import 'animate.css/animate.min.css';

const ClientSideComponents = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    new WOW({
      live: false,
    }).init();
  }, []);

  return <>{children}</>;
};

export default ClientSideComponents;
