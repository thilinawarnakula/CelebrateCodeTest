import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UpcomingLaunchesNavigator from './UpcomingLaunchesNavigator';
import CompletedLaunchesNavigator from './CompletedLaunchesNavigator';
import { HOME_SCREEN } from './NavigationConstants';
import {
    COLORS
} from '../utilities/colors';

import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();


const RootNavigator = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={HOME_SCREEN.UP_COMING_LAUNCHES}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === HOME_SCREEN.UP_COMING_LAUNCHES) {
                            iconName = 'rocket1';
                        } else if (route.name === HOME_SCREEN.COMPLETE_LAUNCHES) {
                            iconName = 'calendar';
                        }
                        return <AntDesign name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: COLORS.primary,
                    tabBarInactiveTintColor: COLORS.gray1,
                })}>
                <Tab.Screen
                    name={HOME_SCREEN.UP_COMING_LAUNCHES}
                    component={UpcomingLaunchesNavigator}
                    options={{
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name={HOME_SCREEN.COMPLETE_LAUNCHES}
                    component={CompletedLaunchesNavigator}
                    options={{
                        headerShown: false,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}


export default (RootNavigator);