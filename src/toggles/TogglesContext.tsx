import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Toggles } from './toggles';

type TogglesContextType = {
  toggles: Toggles;
  settToggles: React.Dispatch<React.SetStateAction<Toggles>>;
};

const TogglesContext = createContext<TogglesContextType | undefined>(undefined);

export const TogglesProvider = ({ children }: { children: ReactNode }) => {
  const [toggles, settToggles] = useState<Toggles>({});
  return (
    <TogglesContext.Provider value={{ toggles, settToggles }}>{children}</TogglesContext.Provider>
  );
};

export const useToggles = () => {
  const context = useContext(TogglesContext);
  if (!context) {
    throw new Error('useToggles must be used within a TogglesProvider');
  }
  return context;
};

// import { useState } from 'react';
// import { Toggles } from './toggles';
//
//
// const [TogglesProvider, useToggles] = createUseContext(() => {
//   const [toggles, settToggles] = useState<Toggles>({});
//   TogglesProvider.displayName = 'TOGGLES_PROVIDER';
//
//   return { toggles, settToggles };
// });
//
// export { TogglesProvider, useToggles };
//
