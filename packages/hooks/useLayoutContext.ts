import { useContext, createContext } from 'react';

export const LayoutContext = createContext<any>(null);

const useLayoutContext = () => {
  const layoutContext = useContext(LayoutContext);
  if (layoutContext == null) {
    throw Error('useLayoutContext: Please provide layoutContext value.');
  }
  return layoutContext;
};

export default useLayoutContext;
