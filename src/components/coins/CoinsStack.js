import React from 'react';
import CoinsScreen from 'CryptoTracker/src/components/coins/CoinsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import CoinDetailScreen from 'CryptoTracker/src/components/coinDetail/CoinsDetailScreen';
import Colors from 'CryptoTracker/src/res/colors';


const Stack = createStackNavigator();

const CoinsStack = () => {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.blackPearl,
                    shadowColor: Colors.blackPearl
                },
                headerTintColor: Colors.white
            }}
        >

            <Stack.Screen 
                name="Coins" 
                component={CoinsScreen}
            />
            
            <Stack.Screen 
                name="CoinDetail" 
                component={CoinDetailScreen} 
            />

        </Stack.Navigator>
    );
}

export default CoinsStack;