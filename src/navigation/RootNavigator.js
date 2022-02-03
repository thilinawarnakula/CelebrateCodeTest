import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNavigator from './HomeNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                    name="Home" 
                    component={HomeNavigator}
                    options={{
                        headerShown: false,
                    }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default (RootNavigator);