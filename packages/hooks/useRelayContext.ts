import { useContext } from 'react';
import { ReactRelayContext } from 'react-relay';

const useRelayContext = () => {
  const relayContext = useContext(ReactRelayContext);
  if (relayContext == null) {
    throw Error('useRelayContext: Please provide relayContext value.');
  }
  return relayContext;
};

export default useRelayContext;
