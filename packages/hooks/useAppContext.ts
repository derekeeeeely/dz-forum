import { useContext, createContext } from 'react';
import { SingletonRouter } from 'next/router';

interface AppContext {
  router: SingletonRouter;
}

export const AppContext = createContext<AppContext | null>(null);

const useAppContext = () => {
  const appContext = useContext(AppContext);
  if (appContext == null) {
    throw Error('useAppContext: Please provide AppContext value.');
  }
  return appContext;
};

export default useAppContext;
