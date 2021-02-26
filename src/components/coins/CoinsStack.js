import React from 'react';
import CoinsScreen from './CoinsScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const CoinsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Coins" component={CoinsScreen}/>
        </Stack.Navigator>
    );
}

export default CoinsStack;