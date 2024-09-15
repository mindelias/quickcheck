import dayjs from 'dayjs';
import uuid from 'react-native-uuid';

export const createAdminRole = () => {
  return {
    id: 'admin',
    name: 'Admin',
    permissions: [
      {
        id: 'all',
        name: 'All',
      },
    ],
  };
};

export const buildCreateStorePayload = (
  data: TUserData,
  deviceInfo: Pick<TDevice, 'deviceId' | 'deviceName'>,
) => {
  // console.log('Data NEW', data);

  const existingStores: StoreFormData[] = [];
  const storePayload = {
    storeName: data.storeName,
    ain: data.ain,
    emailAddress: data.emailAddress,
    country: data.country.label,
    state: data.state.label,
    address: data.address,
    devices: [
      {
        deviceId: deviceInfo.deviceId,
        deviceName: deviceInfo.deviceName,
        location: data.state.label,
      },
    ],
  };
  const payload = {
    fullName: data.fullName,
    emailAddress: data.emailAddress,
    phoneNumber: data.phoneNumber,
    password: data.password,
    pin: data.pin,
    stores: [...existingStores, storePayload],
  };
  return payload;
};

export const buildAddNewStorePayload = (
  data: Partial<TUserData>,
  userData: TUserData,
  deviceInfo: Pick<TDevice, 'deviceId' | 'deviceName'>,
) => {
  // console.log('Data Existing', data);
  const storePayload = {
    storeName: data.storeName,
    ain: userData?.stores?.[0]?.ain || '',
    emailAddress: userData.emailAddress,
    country: data.country.label,
    state: data.state.label,
    address: data.address,
    devices: [
      {
        deviceId: deviceInfo.deviceId,
        deviceName: deviceInfo.deviceName,
        location: data.state.label,
      },
    ],
  };

  return [storePayload];
};

export const buildRestoreStorePayload = (
  store: StoreFormData,
  userData: TUserData,
  deviceInfo: Pick<TDevice, 'deviceId' | 'deviceName'>,
) => {
  const storePayload = {...store}; // Create a shallow copy of the store to avoid mutating the input directly

  storePayload.id = storePayload.serverId || (uuid.v4() as string);
  storePayload.emailAddress = userData.emailAddress;
  // Function to filter out null and empty device entries
  const filterDevices = (devices: TDevice[]) => {
    return devices.filter(
      device =>
        device != null && // Ensure the device is not null
        device.deviceId != null &&
        device.deviceId !== '' && // Ensure deviceId is neither null nor empty
        device.deviceName != null &&
        device.deviceName !== '', // Ensure deviceName is neither null nor empty
    );
  };

  // Check and filter existing devices, then add new device info
  if (storePayload.devices && storePayload.devices.length > 0) {
    storePayload.devices = filterDevices(storePayload.devices);
  } else {
    storePayload.devices = []; // Initialize devices if not present
  }

  // Always add the new device info
  storePayload.devices.push({
    deviceId: deviceInfo.deviceId,
    deviceName: deviceInfo.deviceName,
    location: store.state,
    terminalId: deviceInfo.deviceId,
  });

  if (!storePayload.createdOn) {
    storePayload.createdOn = dayjs().toISOString();
  }
  const payload = {
    ...userData,

    stores: [storePayload],
  };

  return payload;
};
