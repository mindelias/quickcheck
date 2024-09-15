import {useEffect, useState} from 'react';
import {useRealm} from '@realm/react';

function useCheckNewDevice() {
  const realm = useRealm();
  const [isNewDevice, setIsNewDevice] = useState(null as boolean | null);

  useEffect(() => {
    const checkNewDevice = async () => {
      try {
        const users = realm.objects('User');
        const stores = realm.objects('Store');

        // Check if both users and stores are empty
        setIsNewDevice(users.isEmpty() && stores.isEmpty());
      } catch (error) {
        console.error('Failed to open a realm or read objects:', error);
        setIsNewDevice(false); // Consider handling errors differently or setting a specific state
      }
    };

    checkNewDevice();
  }, [realm]);

  return isNewDevice;
}

export default useCheckNewDevice;
