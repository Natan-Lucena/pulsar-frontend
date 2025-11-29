// src/pages/groups/GroupDetailScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { NavBar } from '../../components/navbar';
import { BottomTabBar } from '../../components/bottomTabBar';
import { IntegrantCard } from '../../components/integrantCard';

const PURPLE_DARK = '#4F1D7B';
const PURPLE_BUTTON = '#6D3F9B';
const PURPLE_REMOVE = '#A44242';
const PADDING_BOTTOM_TAB = 60;
const PURPLE_LIGHT = '#D5A7E8';
const GRAY_MEDIUM = '#9A9A9A';

const groupName = 'GRUPO 5';

type Integrant = {
  id: number;
  name: string;
};

const initialIntegrants: Integrant[] = [
  { id: 1, name: 'Natan Lucena' },
  { id: 2, name: 'Alice Lucena' },
  { id: 3, name: 'Enzo Hariel' },
  { id: 4, name: 'Jefferson Kennedy' },
  { id: 5, name: 'Matheus dos Santos' },
];

type GroupDetailsScreenNavigationProp = {
  navigate: (screen: string) => void;
  goBack: () => void;
};

export function GroupDetailScreen() {
  const navigation = useNavigation<GroupDetailsScreenNavigationProp>();

  const [integrants, setIntegrants] = useState<Integrant[]>(initialIntegrants);
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [isRemoveModalVisible, setRemoveModalVisible] = useState(false);

  const [newMemberName, setNewMemberName] = useState('');
  const [newMemberKey, setNewMemberKey] = useState('');

  const handleConfirmAdd = () => {
    if (!newMemberName || !newMemberKey) {
      Alert.alert('Erro', 'Preencha o nome e a chave de acesso.');
      return;
    }

    const newId = Math.max(...integrants.map(i => i.id), 0) + 1;
    const newMember: Integrant = { id: newId, name: newMemberName };

    setIntegrants(prev => [...prev, newMember]);
    console.log(`Adicionar: ${newMemberName}, Chave: ${newMemberKey}.`);

    setNewMemberName('');
    setNewMemberKey('');
    setAddModalVisible(false);
  };

  const handleRemoveMember = (memberId: number) => {
    console.log(`Removendo membro com ID: ${memberId}`);
    setIntegrants(prev => prev.filter(i => i.id !== memberId));
  };

  return (
    <View style={styles.container}>
      <NavBar
        onLogoPress={() => navigation.goBack()}
        onProfilePress={() => navigation.navigate('profile')}
        isBackButton={true}
      />

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollPadding}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.groupTitle}>{groupName}</Text>
        <Text style={styles.sectionTitle}>INTEGRANTES:</Text>

        <View style={styles.integrantList}>
          {integrants.map(member => (
            <IntegrantCard key={member.id} name={member.name} />
          ))}
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setAddModalVisible(true)}
        >
          <Text style={styles.buttonText}>ADICIONAR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => setRemoveModalVisible(true)}
        >
          <Text style={styles.buttonText}>REMOVER</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomTabBar
        onHomePress={() => navigation.navigate('dashboard')}
        onSettingsPress={() => navigation.navigate('settings')}
        onUsersPress={() => navigation.navigate('groupManagement')}
        activeScreen="users"
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={isAddModalVisible}
        onRequestClose={() => setAddModalVisible(false)}
      >
        <View style={modalStyles.centeredView}>
          <View style={modalStyles.modalView}>
            <Text style={modalStyles.modalTitle}>Adicionar Novo Membro</Text>

            <TextInput
              style={modalStyles.input}
              placeholder="Nome do Membro"
              placeholderTextColor="#999"
              value={newMemberName}
              onChangeText={setNewMemberName}
            />

            <TextInput
              style={modalStyles.input}
              placeholder="Chave de Acesso"
              placeholderTextColor="#999"
              value={newMemberKey}
              onChangeText={setNewMemberKey}
            />

            <View style={modalStyles.buttonGroup}>
              <TouchableOpacity
                style={[modalStyles.button, modalStyles.buttonCancel]}
                onPress={() => setAddModalVisible(false)}
              >
                <Text style={modalStyles.textStyle}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[modalStyles.button, modalStyles.buttonConfirm]}
                onPress={handleConfirmAdd}
              >
                <Text style={modalStyles.textStyle}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isRemoveModalVisible}
        onRequestClose={() => setRemoveModalVisible(false)}
      >
        <View style={modalStyles.centeredView}>
          <View style={modalStyles.modalViewList}>
            <Text style={modalStyles.modalTitle}>Selecione para Remover</Text>

            <ScrollView style={modalStyles.memberListScroll}>
              {integrants.map(member => (
                <View key={member.id} style={modalStyles.memberRow}>
                  <Text style={modalStyles.memberName}>{member.name}</Text>
                  <TouchableOpacity
                    style={modalStyles.removeMemberButton}
                    onPress={() => handleRemoveMember(member.id)}
                  >
                    <Text style={modalStyles.removeMemberText}>REMOVER</Text>
                  </TouchableOpacity>
                </View>
              ))}
              {integrants.length === 0 && (
                <Text style={modalStyles.modalText}>
                  Nenhum membro restante.
                </Text>
              )}
            </ScrollView>

            <TouchableOpacity
              style={[
                modalStyles.button,
                modalStyles.fullWidthButton,
                modalStyles.closeButton,
              ]}
              onPress={() => setRemoveModalVisible(false)}
            >
              <Text style={modalStyles.textStyle}>FECHAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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

const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 30,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalViewList: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: PURPLE_DARK,
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 16,
    color: PURPLE_DARK,
  },
  input: {
    height: 50,
    backgroundColor: PURPLE_LIGHT,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: PURPLE_DARK,
    fontSize: 16,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    borderRadius: 6,
    padding: 12,
    elevation: 2,
  },
  buttonCancel: {
    backgroundColor: GRAY_MEDIUM,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonConfirm: {
    backgroundColor: PURPLE_BUTTON,
    flex: 1,
    marginHorizontal: 5,
  },
  fullWidthButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  memberListScroll: {
    maxHeight: 300,
    width: '100%',
  },
  memberRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: PURPLE_LIGHT,
  },
  memberName: {
    color: PURPLE_DARK,
    fontSize: 16,
    flex: 1,
  },
  removeMemberButton: {
    backgroundColor: PURPLE_REMOVE,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  removeMemberText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: PURPLE_BUTTON,
  },
});
