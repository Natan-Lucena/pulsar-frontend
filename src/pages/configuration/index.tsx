// src/pages/configuration/index.tsx (Atualizado com Nome da Automação)
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
// Lembre-se de ter instalado: npm i @react-native-community/datetimepicker
import DateTimePicker from '@react-native-community/datetimepicker';

import { NavBar } from '../../components/navbar';
import { BubbleMessage } from '../../components/bubbleMessage';
import { BottomTabBar } from '../../components/bottomTabBar';
import { AppInputIcon } from '../../components/appInputIcon';
import { DropdownSelector } from '../../components/dropdownSelector';

import RobotAsset from '../../../assets/robot-icon.png';

const PURPLE_MEDIUM = '#8B459B';
const PADDING_BOTTOM_TAB = 60;

const GROUP_OPTIONS = [
  'Grupo 1: Clientes VIP',
  'Grupo 2: Leads Novos',
  'Grupo 3: Suporte',
];

export function ConfigurationScreen() {
  const navigate = (screen: string) => console.log(`Navegando para: ${screen}`);

  const [automationName, setAutomationName] = useState('');
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<Date>(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [chaveApi1, setChaveApi1] = useState('');
  const [chaveApi2, setChaveApi2] = useState('');

  const toggleGroupSelection = (group: string) => {
    setSelectedGroups(prev =>
      prev.includes(group) ? prev.filter(g => g !== group) : [...prev, group],
    );
  };

  const onTimeChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || selectedTime;
    setShowTimePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setSelectedTime(currentDate);
    }
  };

  const handleNext = () => {
    console.log('Nome da Automação:', automationName);
    console.log('Grupos:', selectedGroups);
    console.log('Horário:', selectedTime.toLocaleTimeString());
    navigate('FinalStep');
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <View style={styles.container}>
      <NavBar
        onLogoPress={() => navigate('Home')}
        onProfilePress={() => navigate('Profile')}
      />
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollPadding}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={RobotAsset}
          style={styles.robotIcon}
          resizeMode="contain"
        />
        <BubbleMessage message="Falta pouco! Agora vamos configurar sua automação." />

        <View style={styles.inputList}>
          <AppInputIcon
            placeholder="Nome da sua automação"
            iconType="none"
            isSelect={false}
            value={automationName}
            onChangeText={setAutomationName}
          />

          <DropdownSelector
            placeholder="Selecione um ou mais grupos"
            options={GROUP_OPTIONS}
            selectedValues={selectedGroups}
            onSelect={toggleGroupSelection}
          />

          <AppInputIcon
            placeholder={formatTime(selectedTime)}
            iconType="watch"
            isSelect={true}
            onPress={() => setShowTimePicker(true)}
          />

          {showTimePicker && (
            <DateTimePicker
              testID="timePicker"
              value={selectedTime}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={onTimeChange}
            />
          )}

          <AppInputIcon
            placeholder="Digite sua chave de API (1)"
            iconType="key"
            isSelect={false}
            value={chaveApi1}
            onChangeText={setChaveApi1}
          />

          <AppInputIcon
            placeholder="Digite sua chave de API (2)"
            iconType="key"
            isSelect={false}
            value={chaveApi2}
            onChangeText={setChaveApi2}
          />
        </View>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNext}
          activeOpacity={0.8}
        >
          <Text style={styles.nextButtonText}>Próximo</Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomTabBar
        onHomePress={() => navigate('Home')}
        onSettingsPress={() => navigate('Settings')}
        onUsersPress={() => navigate('Users')}
        activeScreen="settings"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  robotIcon: {
    width: 80,
    height: 80,
    alignSelf: 'flex-end',
    marginRight: 0,
    marginTop: 10,
    marginBottom: -30,
    zIndex: 5,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollPadding: {
    paddingBottom: PADDING_BOTTOM_TAB + 40,
  },
  inputList: {
    marginTop: 15,
  },
  nextButton: {
    backgroundColor: PURPLE_MEDIUM,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
