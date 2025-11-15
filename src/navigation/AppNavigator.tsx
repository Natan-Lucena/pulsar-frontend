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
import { ConfigurationScreen } from '../pages/configuration';
import { DashboardScreen } from '../pages/dashboard';
import { AutomationsScreen } from '../pages/automationScreen';
import { AutomationDetailScreen } from '../pages/automationDetailsScreen';
import { ProfileScreen } from '../pages/profileScreen';
import { SubscriptionScreen } from '../pages/subscriptonScreen';
import { PlanSelectionScreen } from '../pages/planSelectionScreen';

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
        <Stack.Screen name="configuration" component={ConfigurationScreen} />
        <Stack.Screen name="dashboard" component={DashboardScreen} />
        <Stack.Screen name="automationsScreen" component={AutomationsScreen} />
        <Stack.Screen
          name="automationDetailScreen"
          component={AutomationDetailScreen}
        />
        <Stack.Screen name="profile" component={ProfileScreen} />
        <Stack.Screen name="subscription" component={SubscriptionScreen} />
        <Stack.Screen name="planSelection" component={PlanSelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
