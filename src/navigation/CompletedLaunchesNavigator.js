import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HOME_SCREEN } from './NavigationConstants';

import CompletedLaunchesPage from '../pages/completedLaunchesPage/index.component';
import DetailsPage from '../pages/detailsPage /index.component';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName={HOME_SCREEN.COMPLETED_COMING_LAUNCHES_PAGE}
    >
      <Stack.Screen
        name={HOME_SCREEN.COMPLETED_COMING_LAUNCHES_PAGE}
        component={CompletedLaunchesPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={HOME_SCREEN.DETAILS_PAGE}
        component={DetailsPage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
