import { useContext } from 'react';
import { AppContext } from './AppContextState';

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp må brukes innenfor en AppProvider');
  }
  return context;
};
