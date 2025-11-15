"use client";

import { createContext, useContext, useState } from "react";

const GDPRContext = createContext();

export function GDPRProvider({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const [forceShow, setForceShow] = useState(false);

  const showBanner = () => {
    setForceShow(true);
    setIsVisible(true);
  };

  return (
    <GDPRContext.Provider value={{ isVisible, setIsVisible, showBanner, forceShow, setForceShow }}>
      {children}
    </GDPRContext.Provider>
  );
}

export function useGDPR() {
  const context = useContext(GDPRContext);
  if (!context) {
    throw new Error("useGDPR must be used within GDPRProvider");
  }
  return context;
}

