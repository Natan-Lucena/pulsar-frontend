// src/pages/subscription/SubscriptionScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { NavBar } from '../../components/navbar';
import { BottomTabBar } from '../../components/bottomTabBar';
import { PlanCard } from '../../components/planCard';
import { PaymentMethodCard } from '../../components/paymentMethodCard';
import { InvoiceHistoryCard } from '../../components/invoiceHistoryCard';

const PURPLE_DARK = '#4F1D7B';
const PADDING_BOTTOM_TAB = 60;

type SubscriptionScreenNavigationProp = {
  navigate: (screen: string) => void;
};

export function SubscriptionScreen() {
  const navigation = useNavigation<SubscriptionScreenNavigationProp>();

  const handleCancelSubscription = () => console.log('Assinatura Cancelada');

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
        <Text style={styles.screenTitle}>MINHA ASSINATURA</Text>
        <Text style={styles.sectionTitle}>SEU PLANO</Text>

        <PlanCard
          planName="Plano Pro"
          price={20.0}
          renewalDate="14 de dezembro de 2025"
          status="Ativa"
          onPressChangePlan={() => console.log('Navegar para Mudar de Plano')}
        />

        <PaymentMethodCard
          cardNumber="**** 1234"
          onPressChangeCard={() => console.log('Navegar para Alterar Cartão')}
        />

        <InvoiceHistoryCard
          onPress={() => console.log('Navegar para Histórico de Faturas')}
        />

        <TouchableOpacity
          onPress={handleCancelSubscription}
          style={styles.cancelButton}
        >
          <Text style={styles.cancelButtonText}>Cancelar assinatura</Text>
        </TouchableOpacity>
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
    marginBottom: 20,
  },
  sectionTitle: {
    color: PURPLE_DARK,
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    marginTop: 10,
    marginBottom: 5,
  },
  cancelButton: {
    marginTop: 30,
    padding: 10,
  },
  cancelButtonText: {
    color: 'brown',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});
