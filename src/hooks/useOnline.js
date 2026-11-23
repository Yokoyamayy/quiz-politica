import NetInfo from '@react-native-community/netinfo';
import { useEffect, useState } from 'react';

export function useOnline() {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    const cancelar = NetInfo.addEventListener((estado) => {

      setOnline(!!estado.isConnected && estado.isInternetReachable !== false);
    });

    return cancelar;
  }, []);

  return online;
}
