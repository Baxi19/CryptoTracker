import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CoinsStack from 'CryptoTracker/src/components/coins/CoinsStack';

const App = () => {
  return (
    <NavigationContainer>
      <CoinsStack/>
    </NavigationContainer>
  );
};

export default App;
