// src/pages/groups/GroupManagementScreen.tsx
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
import { GroupCard } from '../../components/groupCard';

const Checkbox = ({
  label,
  selected,
  onPress,
}: {
  label: string;
  selected: boolean;
  onPress: () => void;
}) => (
  <TouchableOpacity style={modalStyles.checkboxContainer} onPress={onPress}>
    <View
      style={[modalStyles.checkbox, selected && modalStyles.checkboxSelected]}
    >
      {selected && <Text style={modalStyles.checkmark}>✓</Text>}
    </View>
    <Text style={modalStyles.checkboxLabel}>{label}</Text>
  </TouchableOpacity>
);

const PURPLE_DARK = '#4F1D7B';
const PURPLE_BUTTON = '#6D3F9B';
const PURPLE_BUTTON_DELETE = '#D9534F';
const PURPLE_LIGHT = '#D5A7E8';
const GRAY_MEDIUM = '#9A9A9A';
const PADDING_BOTTOM_TAB = 60;

const INITIAL_GROUPS = [
  'Setor Administrativo',
  'Equipe Backend',
  'Equipe Frontend',
];
const availableChannels = ['Discord', 'Telegram', 'Whatsapp', 'Slack'];

type GroupManagmementScreenNavigationProp = {
  navigate: (screen: string) => void;
};

export function GroupManagementScreen() {
  const navigation = useNavigation<GroupManagmementScreenNavigationProp>();

  const [groups, setGroups] = useState<string[]>(INITIAL_GROUPS);
  const [isCreateModalVisible, setCreateModalVisible] = useState(false);

  const [isRemoveModalVisible, setRemoveModalVisible] = useState(false);
  const [groupsToRemove, setGroupsToRemove] = useState<string[]>([]);

  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupDescription, setNewGroupDescription] = useState('');
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);

  const handleGroupPress = (groupName: string) => {
    console.log(`Grupo selecionado: ${groupName}`);
    navigation.navigate('groupDetails');
  };

  const handleCreateNew = () => {
    setCreateModalVisible(true);
  };

  const toggleChannel = (channel: string) => {
    setSelectedChannels(prev =>
      prev.includes(channel)
        ? prev.filter(c => c !== channel)
        : [...prev, channel],
    );
  };

  const handleConfirmCreation = () => {
    const trimmedName = newGroupName.trim();

    if (!trimmedName) {
      Alert.alert('Erro', 'O nome do grupo não pode estar vazio.');
      return;
    }

    if (selectedChannels.length === 0) {
      Alert.alert('Aviso', 'Selecione pelo menos um canal.');
    }

    setGroups(prevGroups => [...prevGroups, trimmedName]);

    setNewGroupName('');
    setNewGroupDescription('');
    setSelectedChannels([]);
    setCreateModalVisible(false);
  };

  const handleCancelCreation = () => {
    setNewGroupName('');
    setNewGroupDescription('');
    setSelectedChannels([]);
    setCreateModalVisible(false);
  };

  const handleRemoveGroups = () => {
    setRemoveModalVisible(true);
  };

  const toggleGroupToRemove = (group: string) => {
    setGroupsToRemove(prev =>
      prev.includes(group) ? prev.filter(g => g !== group) : [...prev, group],
    );
  };

  const handleConfirmRemoval = () => {
    if (groupsToRemove.length === 0) {
      Alert.alert('Aviso', 'Selecione pelo menos um grupo para remover.');
      return;
    }

    setGroups(prevGroups =>
      prevGroups.filter(g => !groupsToRemove.includes(g)),
    );

    console.log(`Grupos Removidos: ${groupsToRemove.join(', ')}`);

    setGroupsToRemove([]);
    setRemoveModalVisible(false);
  };

  const handleCancelRemoval = () => {
    setGroupsToRemove([]);
    setRemoveModalVisible(false);
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

        {groups.map((group, index) => (
          <GroupCard
            key={index}
            groupName={group}
            onPress={() => handleGroupPress(group)}
          />
        ))}

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.newButton} onPress={handleCreateNew}>
            <Text style={styles.newButtonText}>CRIAR NOVO</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.removeButton}
            onPress={handleRemoveGroups}
          >
            <Text style={styles.removeButtonText}>REMOVER GRUPO(S)</Text>
          </TouchableOpacity>
        </View>
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
        visible={isCreateModalVisible}
        onRequestClose={handleCancelCreation}
      >
        <View style={modalStyles.centeredView}>
          <View style={modalStyles.modalView}>
            <Text style={modalStyles.modalTitle}>Criar Novo Grupo</Text>
            <TextInput
              style={modalStyles.input}
              placeholder="Nome do Grupo (Obrigatório)"
              placeholderTextColor="#999"
              value={newGroupName}
              onChangeText={setNewGroupName}
            />
            <TextInput
              style={[modalStyles.input, modalStyles.textArea]}
              placeholder="Descrição do Grupo (Opcional)"
              placeholderTextColor="#999"
              value={newGroupDescription}
              onChangeText={setNewGroupDescription}
              multiline={true}
            />
            <Text style={modalStyles.checkboxHeader}>Canais Suportados:</Text>
            <View style={modalStyles.channelContainer}>
              {availableChannels.map(channel => (
                <Checkbox
                  key={channel}
                  label={channel}
                  selected={selectedChannels.includes(channel)}
                  onPress={() => toggleChannel(channel)}
                />
              ))}
            </View>
            <View style={modalStyles.buttonGroup}>
              <TouchableOpacity
                style={[modalStyles.button, modalStyles.buttonCancel]}
                onPress={handleCancelCreation}
              >
                <Text style={modalStyles.textStyle}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[modalStyles.button, modalStyles.buttonConfirm]}
                onPress={handleConfirmCreation}
              >
                <Text style={modalStyles.textStyle}>Criar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isRemoveModalVisible}
        onRequestClose={handleCancelRemoval}
      >
        <View style={modalStyles.centeredView}>
          <View style={modalStyles.modalView}>
            <Text style={modalStyles.modalTitle}>Remover Grupo(s)</Text>

            <ScrollView style={modalStyles.scrollArea}>
              {groups.length > 0 ? (
                groups.map((group, index) => (
                  <Checkbox
                    key={index}
                    label={group}
                    selected={groupsToRemove.includes(group)}
                    onPress={() => toggleGroupToRemove(group)}
                  />
                ))
              ) : (
                <Text style={modalStyles.emptyListText}>
                  Nenhum grupo disponível para remoção.
                </Text>
              )}
            </ScrollView>

            <View style={modalStyles.buttonGroup}>
              <TouchableOpacity
                style={[modalStyles.button, modalStyles.buttonCancel]}
                onPress={handleCancelRemoval}
              >
                <Text style={modalStyles.textStyle}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[modalStyles.button, modalStyles.buttonRemove]}
                onPress={handleConfirmRemoval}
              >
                <Text style={modalStyles.textStyle}>Remover</Text>
              </TouchableOpacity>
            </View>
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
  screenTitle: {
    color: PURPLE_DARK,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },

  newButton: {
    width: '70%',
    paddingVertical: 15,
    backgroundColor: PURPLE_BUTTON,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  newButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  removeButton: {
    width: '70%',
    paddingVertical: 15,
    backgroundColor: PURPLE_BUTTON_DELETE,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  removeButtonText: {
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
    width: '90%',
    maxHeight: '80%',
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
  scrollArea: {
    maxHeight: 250,
    marginBottom: 15,
  },
  emptyListText: {
    textAlign: 'center',
    color: GRAY_MEDIUM,
    fontStyle: 'italic',
    marginTop: 10,
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
  textArea: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 15,
  },
  checkboxHeader: {
    color: PURPLE_DARK,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
  },
  channelContainer: {
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingRight: 10,
  },
  checkbox: {
    height: 24,
    width: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: PURPLE_DARK,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: PURPLE_BUTTON,
    borderColor: PURPLE_BUTTON,
  },
  checkmark: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkboxLabel: {
    color: PURPLE_DARK,
    fontSize: 16,
    flexShrink: 1,
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
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonCancel: {
    backgroundColor: GRAY_MEDIUM,
  },
  buttonConfirm: {
    backgroundColor: PURPLE_BUTTON,
  },
  buttonRemove: {
    backgroundColor: PURPLE_BUTTON_DELETE,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});
