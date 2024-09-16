import React, {useCallback, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';
import RootNavigation from './src/navigation/RootNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import {connectToDatabase, createTables} from './src/services/db-services/db';

function App(): React.JSX.Element {
  const [dbReady, setDbReady] = useState(false);

  const loadData = useCallback(async () => {
    try {
      const db = await connectToDatabase();
      await createTables(db);
      setDbReady(true);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // Hide the splash screen once the database is ready
  useEffect(() => {
    if (dbReady) {
      SplashScreen.hide();
    }
  }, [dbReady]);

  useEffect(() => {
    loadData();
  }, [loadData]);
  return (
    <PaperProvider>
      <NavigationContainer>
        <GestureHandlerRootView style={{flex: 1}}>
          <RootNavigation />
        </GestureHandlerRootView>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
