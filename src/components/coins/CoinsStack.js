import React from 'react';
import CoinsScreen from './CoinsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import CoinDetailScreen from './CoinsDetailScreen';

const Stack = createStackNavigator();

const CoinsStack = () => {
    return (
        <Stack.Navigator>

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