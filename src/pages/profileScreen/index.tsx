// src/pages/profile/ProfileScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { NavBar } from '../../components/navbar';
import { BottomTabBar } from '../../components/bottomTabBar';
import { ProfilePicture } from '../../components/profilePicture';
import { PaymentManagerCard } from '../../components/paymentManagerCard';
import { InvoiceHistoryItem } from '../../components/invoiceHistoryItem';
import { useNavigation } from '@react-navigation/native';

const PURPLE_DARK = '#4F1D7B';
const PURPLE_MEDIUM = '#6D3F9B';
const PADDING_BOTTOM_TAB = 60;

const INVOICES = [
  { month: 'nov', amount: 20.0, status: 'Paga' },
  { month: 'set', amount: 20.0, status: 'Paga' },
];

type ProfileScreenNavigationProp = {
  navigate: (screen: string) => void;
};

export function ProfileScreen() {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const navigate = (screen: string) => {
    navigation.navigate(screen);
  };

  const handleManage = () => {
    navigate('subscription');
  };
  const handleChangeCard = () => console.log('Alterar Cartão');
  const handleInvoicePress = (month: string) =>
    console.log(`Ver detalhes da fatura de ${month}`);
  const handleViewAllInvoices = () => console.log('Ver todas as faturas');

  return (
    <View style={styles.container}>
      <NavBar
        onLogoPress={() => navigate('dashboard')}
        onProfilePress={() => navigate('dashboard')}
        isBackButton={true}
      />

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollPadding}
        showsVerticalScrollIndicator={false}
      >
        <ProfilePicture
          name="Maria Alice Alves"
          email="mariadenatan@gmail.com"
        />

        <PaymentManagerCard
          currentPlan="Plano pro"
          nextRenewalDate="14 de dez"
          cardNumber="**** 1234"
          onManagePress={handleManage}
          onCardChangePress={handleChangeCard}
        />

        <View style={styles.historySection}>
          <View style={styles.historyHeader}>
            <Text style={styles.historyTitle}>HISTÓRICO DE FATURAS</Text>
            <TouchableOpacity onPress={handleViewAllInvoices}>
              <Text style={styles.viewAllText}>Ver todas</Text>
            </TouchableOpacity>
          </View>

          {INVOICES.map((invoice, index) => (
            <InvoiceHistoryItem
              key={index}
              month={invoice.month}
              amount={invoice.amount}
              status={invoice.status as any}
              onPress={() => handleInvoicePress(invoice.month)}
            />
          ))}
        </View>
      </ScrollView>

      <BottomTabBar
        onHomePress={() => navigate('Home')}
        onSettingsPress={() => navigate('Settings')}
        onUsersPress={() => navigate('Users')}
        activeScreen="users"
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
  historySection: {
    width: '100%',
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  historyTitle: {
    color: PURPLE_DARK,
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewAllText: {
    color: PURPLE_MEDIUM,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
