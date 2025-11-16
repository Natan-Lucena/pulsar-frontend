// src/pages/groups/GroupManagementScreen.tsx
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
import { GroupCard } from '../../components/groupCard';

const PURPLE_DARK = '#4F1D7B';
const PURPLE_BUTTON = '#6D3F9B';
const PADDING_BOTTOM_TAB = 60;

const mockGroups = ['Grupo 1', 'Grupo 2', 'Grupo 3'];

type GroupManagmementScreenNavigationProp = {
  navigate: (screen: string) => void;
};

export function GroupManagementScreen() {
  const navigation = useNavigation<GroupManagmementScreenNavigationProp>();

  const handleGroupPress = (groupName: string) => {
    console.log(`Grupo selecionado: ${groupName}`);
    navigation.navigate('groupDetails');
  };

  const handleCreateNew = () => {
    console.log('Navegar para tela de Criação de Novo Grupo');
  };

  return (
    <View style={styles.container}>
      <NavBar
        onLogoPress={() => navigation.navigate('dashboard')}
        onProfilePress={() => navigation.navigate('profile')}
      />

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollPadding}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.screenTitle}>SEUS GRUPOS</Text>

        {mockGroups.map((group, index) => (
          <GroupCard
            key={index}
            groupName={group}
            onPress={() => handleGroupPress(group)}
          />
        ))}

        <TouchableOpacity style={styles.newButton} onPress={handleCreateNew}>
          <Text style={styles.newButtonText}>CRIAR NOVO</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomTabBar
        onHomePress={() => navigation.navigate('dashboard')}
        onSettingsPress={() => navigation.navigate('settings')}
        onUsersPress={() => navigation.navigate('groupManagement')}
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
    paddingHorizontal: 30, // Um pouco mais de padding lateral para o design
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
  newButton: {
    width: '70%', // Botão parece menor que 100% na imagem
    paddingVertical: 15,
    backgroundColor: PURPLE_BUTTON,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    flexDirection: 'row', // Para a seta
    alignSelf: 'flex-start', // Centraliza o botão
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  newButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
});
