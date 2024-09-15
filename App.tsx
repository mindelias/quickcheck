import React, {useCallback, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import './src/global.css';
import {PaperProvider} from 'react-native-paper';
import RootNavigation from './src/navigation/RootNavigation';
import {QueryClient, QueryClientProvider} from 'react-query';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {enGB, registerTranslation} from 'react-native-paper-dates';
import {AppState} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import useAuthtStore from './src/store/auth/signup.store';
import SplashScreen from 'react-native-splash-screen';
registerTranslation('en-GB', enGB);

function App(): React.JSX.Element {
  const queryClient = new QueryClient();
  const {updateStoreData} = useAuthtStore();

  const [currentAppState, setCurrentAppState] = useState(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      console.log('nextAppState', nextAppState);
      if (
        currentAppState.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
      }
      setCurrentAppState(nextAppState);
    });

    return () => {
      subscription.remove();
    };
  }, [currentAppState]);
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  const getDeviceId = useCallback(async () => {
    let deviceId = await DeviceInfo.getUniqueId();
    let deviceName = await DeviceInfo.getDeviceName();
    updateStoreData({deviceInfo: {deviceId, deviceName}});
    console.log('Device ID:', deviceId);
  }, [updateStoreData]);

  useEffect(() => {
    getDeviceId();
  }, [getDeviceId]);
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NavigationContainer>
          <GestureHandlerRootView style={{flex: 1}}>
            <RootNavigation />
          </GestureHandlerRootView>
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}

export default App;
