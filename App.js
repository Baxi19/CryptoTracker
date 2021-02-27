import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CoinsStack from 'CryptoTracker/src/components/coins/CoinsStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Colors from 'CryptoTracker/src/res/colors';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <Tabs.Navigator
        tabBarOptions={{
          tintColor: "#fefefe",
          style: {
          backgroundColor: Colors.blackPearl
          }
        }}  
      >
        <Tabs.Screen
          name="Coins"
          component={CoinsStack}
          options={{
              tabBarIcon: ({size, color}) => 
                <Image 
                  style={{tintColor: color, width: size, height: size }}
                  source={require('CryptoTracker/src/assets/bank.png')}
                />
          }}
        />
      </Tabs.Navigator>

    </NavigationContainer>
  );
};

export default App;
