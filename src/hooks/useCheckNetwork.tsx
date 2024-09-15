import {useState, useEffect} from 'react';
import {useNetInfo} from '@react-native-community/netinfo';

const useNetworkStatus = () => {
  const netInfo = useNetInfo();
  const [isConnected, setIsConnected] = useState<boolean | null>(false);

  useEffect(() => {
    // console.log('Network INFO:', netInfo);
    setIsConnected(netInfo?.isConnected);
  }, [netInfo]);

  return isConnected;
};

// const useNetworkStatus = () => {
//   const [isConnected, setIsConnected] = useState(false);

//   useEffect(() => {
//     const unsubscribe = NetInfo.addEventListener(state => {
//       setIsConnected(state.isConnected as boolean);
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return isConnected;
// };
//

// const useNetworkStatus = () => {
//   const [isConnected, setIsConnected] = useState<boolean | null>(null);

//   useEffect(() => {
//     // Subscribe to network state changes
//     const unsubscribe = NetInfo.addEventListener(state => {
//       console.log('Network status changed:', state.isConnected);
//       setIsConnected(state.isConnected as boolean);
//     });

//     // Fetch the initial network state
//     NetInfo.fetch().then(state => {
//       console.log('Initial network status:', state.isConnected);
//       setIsConnected(state.isConnected as boolean);
//     });

//     // Clean up on component unmount
//     return () => unsubscribe();
//   }, []);

//   return isConnected;
// };

export default useNetworkStatus;
