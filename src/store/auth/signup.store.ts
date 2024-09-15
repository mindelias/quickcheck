import {create} from 'zustand';

interface AuthStoreState {
  formData: TUserData;
  userData: TUserData | null;
  storeType: TStoreType;
  store: StoreFormData | null;
  loading: boolean;
  isLoggedIn: boolean;
  deviceInfo: Pick<TDevice, 'deviceId' | 'deviceName'> | null;
  showBackgroundImage: boolean;
  updateFormData: (data: any) => void;
  updateStoreData: (data: any) => void;

  //   resetFormData: () => void;
}
const initialFormData = {
  fullName: '',
  emailAddress: '',
  phoneNumber: '',
  password: '',
  pin: '',
  storeName: '',
  ain: '',
  address: '',
  country: {
    value: '',
    label: '',
  },
  state: {
    value: '',
    label: '',
  },
};

const useAuthtStore = create<AuthStoreState>(set => ({
  // initial state
  formData: initialFormData,
  userData: null,
  store: null,
  deviceInfo: null,

  loading: false,
  isLoggedIn: false,
  showBackgroundImage: true,
  storeType: 'new',
  updateFormData: (data: any) => {
    set(state => ({
      ...state,
      formData: {
        ...state.formData,
        ...data,
      },
    }));
  },
  updateStoreData: (data: any) => {
    set(state => ({
      ...state,
      ...data,
    }));
  },
}));

export default useAuthtStore;
