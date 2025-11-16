// src/pages/automations/AutomationsScreen.tsx
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
import { AutomationCard } from '../../components/automationCard';
import { useNavigation } from '@react-navigation/native';

const PURPLE_DARK = '#4F1D7B';
const PURPLE_BUTTON = '#6D3F9B';
const PADDING_BOTTOM_TAB = 60;

const MOCK_AUTOMATIONS = [
  { id: '1', platform: 'Discord' },
  { id: '2', platform: 'Telegram' },
  { id: '3', platform: 'Whatsapp' },
];

type AutomationScreenNavigationProp = {
  navigate: (screen: string) => void;
};

export function AutomationsScreen() {
  const navigation = useNavigation<AutomationScreenNavigationProp>();
  const navigate = (screen: string) => {
    navigation.navigate(screen);
  };
  const goToDetails = () => {
    navigate('automationDetailScreen');
  };
  const goToCreateNew = () => {
    navigate('automationWizard');
  };

  return (
    <View style={styles.container}>
      <NavBar
        onLogoPress={() => navigate('dashboard')}
        onProfilePress={() => navigate('profile')}
      />

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollPadding}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>SUAS AUTOMOÇÕES</Text>

        <View style={styles.listContainer}>
          {MOCK_AUTOMATIONS.map(automation => (
            <AutomationCard
              key={automation.id}
              platform={automation.platform}
              onPress={() => goToDetails()}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.createButton} onPress={goToCreateNew}>
          <Text style={styles.createButtonText}>CRIAR NOVA</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomTabBar
        onHomePress={() => navigation.navigate('dashboard')}
        onSettingsPress={() => navigation.navigate('settings')}
        onUsersPress={() => navigation.navigate('groupManagement')}
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: PURPLE_DARK,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  listContainer: {
    width: '100%',
    marginBottom: 50,
  },
  createButton: {
    backgroundColor: PURPLE_BUTTON,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    maxWidth: 300,
    marginBottom: 20,
  },
  createButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
