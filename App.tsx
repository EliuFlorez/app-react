import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import SplashScreen from './screens/SplashScreen';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [userToken, setUserToken] = React.useState(null);

  if (!isLoadingComplete) {
    return <SplashScreen />;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation userToken={userToken} colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
