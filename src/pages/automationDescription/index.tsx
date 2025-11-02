// src/pages/automationDescription/index.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import { NavBar } from '../../components/navbar';
import { BubbleMessage } from '../../components/bubbleMessage';
import { BottomTabBar } from '../../components/bottomTabBar';
import { AppInput } from '../../components/appInput';

import RobotAsset from '../../../assets/robot-icon.png';
import { useNavigation } from '@react-navigation/native';

const PURPLE_DARK = '#4F1D7B';
const PURPLE_MEDIUM = '#8B459B';
const PADDING_BOTTOM_TAB = 60;
const TEXTAREA_HEIGHT = 250;

type AutomationDescriptionScreenNavigationProp = {
  navigate: (screen: 'configuration') => void;
};

export function AutomationDescriptionScreen() {
  const navigation = useNavigation<AutomationDescriptionScreenNavigationProp>();
  const navigate = () => {
    navigation.navigate('configuration');
  };

  return (
    <View style={styles.container}>
      <NavBar
        onLogoPress={() => navigate()}
        onProfilePress={() => navigate()}
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
        <BubbleMessage message="Já que você prioriza rapidez e confiabilidade, faça uma descrição que vamos implementar!" />

        <Text style={styles.questionTitle}>Descreva sua automação:</Text>
        <AppInput
          placeholder="Escreva aqui...."
          multiline={true}
          textAlignVertical="top"
          style={styles.textArea}
        />
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigate()}
          activeOpacity={0.8}
        >
          <Text style={styles.nextButtonText}>Próximo</Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomTabBar
        onHomePress={() => navigate()}
        onSettingsPress={() => navigate()}
        onUsersPress={() => navigate()}
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
  questionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: PURPLE_DARK,
    marginTop: 30,
    marginBottom: 10,
    lineHeight: 30,
    width: '100%',
  },
  textArea: {
    height: TEXTAREA_HEIGHT,
    paddingVertical: 15,
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
