import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LandingScreen } from '../pages/landing';
import { WelcomeScreen } from '../pages/welcome';
import { RegisterScreen } from '../pages/register';
import { LoginScreen } from '../pages/login';
import { AutomationWizardScreen } from '../pages/automationWizard';
import { AutomationDescriptionScreen } from '../pages/automationDescription';
import { CommunicationChannelsScreen } from '../pages/communicationChannels';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="automationWizard"
          component={AutomationWizardScreen}
        />
        <Stack.Screen
          name="automationDescription"
          component={AutomationDescriptionScreen}
        />
        <Stack.Screen
          name="communicationChannels"
          component={CommunicationChannelsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
