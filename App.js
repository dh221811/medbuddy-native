import React, { useEffect } from 'react';
import Home from './screens/Home';
import { ScreenOrientation } from 'expo';
import { AppRegistry } from 'react-native';

export default function App() {
  useEffect(() => {
    async function setOrientation() {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
    }
    setOrientation();

    // Don't forget to unlock the orientation when the component unmounts
    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);

  return <Home />;
}


