// src/pages/subscription/PlanSelectionScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { NavBar } from '../../components/navbar';
import { BottomTabBar } from '../../components/bottomTabBar';
import { PlanSelectionCard } from '../../components/planSelectionCard';

const PURPLE_DARK = '#4F1D7B';
const PADDING_BOTTOM_TAB = 60;

type PlanSelectionScreenNavigationProp = {
  navigate: (screen: string) => void;
};

export function PlanSelectionScreen() {
  const navigation = useNavigation<PlanSelectionScreenNavigationProp>();

  const handlePlanChange = () => {
    navigation.navigate('subscription');
  };

  return (
    <View style={styles.container}>
      <NavBar
        onLogoPress={() => navigation.navigate('profile')}
        onProfilePress={() => navigation.navigate('dashboard')}
        isBackButton={true}
      />

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollPadding}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.screenTitle}>ESCOLHA O PLANO IDEAL</Text>

        <PlanSelectionCard
          planName="Plano Pro"
          price={20.0}
          features={['5 automações', '10.000 mensagens']}
          status="Ativo"
          onSelectPlan={handlePlanChange}
        />

        <PlanSelectionCard
          planName="Plano Basic"
          price={15.0}
          features={['3 automações', '7.000 mensagens']}
          status="Inativo"
          onSelectPlan={handlePlanChange}
        />

        <PlanSelectionCard
          planName="Plano Pobre"
          price={10.0}
          features={['1 automação', '5.000 mensagens']}
          status="Inativo"
          onSelectPlan={handlePlanChange}
        />
      </ScrollView>

      <BottomTabBar
        onHomePress={() => navigation.navigate('dashboard')}
        onSettingsPress={() => navigation.navigate('settings')}
        onUsersPress={() => navigation.navigate('profile')}
        activeScreen="settings"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollPadding: {
    paddingBottom: PADDING_BOTTOM_TAB + 20,
    alignItems: 'center',
  },
  screenTitle: {
    color: PURPLE_DARK,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
});
