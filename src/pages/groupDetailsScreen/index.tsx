// src/pages/groups/GroupDetailScreen.tsx
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
import { IntegrantCard } from '../../components/integrantCard';

const PURPLE_DARK = '#4F1D7B';
const PURPLE_BUTTON = '#6D3F9B';
const PURPLE_REMOVE = '#A44242';
const PADDING_BOTTOM_TAB = 60;

// Dados de exemplo
const groupName = 'GRUPO 5';
const mockIntegrantes = [
  'Integrantes 1',
  'Integrantes 2',
  'Integrantes 3',
  'Integrantes 4',
  'Integrantes 5',
];

type GroupDetailsScreenNavigationProp = {
  navigate: (screen: string) => void;
};

export function GroupDetailScreen() {
  const navigation = useNavigation<GroupDetailsScreenNavigationProp>();
  const navigate = (value: string) => {
    navigation.navigate(value);
  };
  const handleAdd = () => {
    console.log('Adicionar Novo Integrante');
  };

  const handleRemove = () => {
    console.log('Modo de Remoção Ativado / Remover Grupo');
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
        <Text style={styles.groupTitle}>{groupName}</Text>
        <Text style={styles.sectionTitle}>INTEGRANTES:</Text>

        <View style={styles.integrantList}>
          {mockIntegrantes.map((name, index) => (
            <IntegrantCard key={index} name={name} />
          ))}
        </View>

        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <Text style={styles.buttonText}>ADICIONAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.removeButton} onPress={handleRemove}>
          <Text style={styles.buttonText}>REMOVER</Text>
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
    paddingHorizontal: 30,
  },
  scrollPadding: {
    paddingBottom: PADDING_BOTTOM_TAB + 20,
    alignItems: 'center',
  },
  groupTitle: {
    color: PURPLE_DARK,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    color: PURPLE_DARK,
    fontSize: 18,
    fontWeight: 'bold',
    width: '100%',
    marginBottom: 5,
  },
  integrantList: {
    width: '100%',
    marginBottom: 30,
  },
  addButton: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: PURPLE_BUTTON,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  removeButton: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: PURPLE_REMOVE,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
