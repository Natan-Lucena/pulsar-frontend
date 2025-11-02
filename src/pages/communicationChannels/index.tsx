// src/pages/communicationChannels/index.tsx
import React, { useState } from 'react';
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
import { AppCheckbox } from '../../components/appCheckBox';

import RobotAsset from '../../../assets/robot-icon.png';
import { useNavigation } from '@react-navigation/native';

const PURPLE_DARK = '#4F1D7B';
const PURPLE_MEDIUM = '#8B459B';
const PADDING_BOTTOM_TAB = 60;

type CommunicationScreenNavigationProp = {
  navigate: (screen: string) => void;
};

export function CommunicationChannelsScreen() {
  const navigation = useNavigation<CommunicationScreenNavigationProp>();

  const navigate = (screen: string) => {
    navigation.navigate(screen);
  };

  const [channels, setChannels] = useState({
    discord: false,
    telegram: false,
    whathzapp: false,
    slack: false,
  });

  const toggleCheckbox = (channel: keyof typeof channels) => {
    setChannels(prev => ({
      ...prev,
      [channel]: !prev[channel],
    }));
  };

  const handleNext = () => {
    console.log('Canais Selecionados:', channels);
    navigate('automationDescription');
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
        <BubbleMessage message="Boa, querer uma automatização veloz é uma boa alternativa! Agora mostre quais meios você gostaria de utilizar!" />

        <Text style={styles.questionTitle}>
          Quais meios de comunicação você deseja utilizar?
        </Text>

        <View style={styles.checkboxList}>
          <AppCheckbox
            label="Discord"
            checked={channels.discord}
            onPress={() => toggleCheckbox('discord')}
          />
          <AppCheckbox
            label="Telegram"
            checked={channels.telegram}
            onPress={() => toggleCheckbox('telegram')}
          />
          <AppCheckbox
            label="Whatsapp"
            checked={channels.whathzapp}
            onPress={() => toggleCheckbox('whathzapp')}
          />
          <AppCheckbox
            label="Slack"
            checked={channels.slack}
            onPress={() => toggleCheckbox('slack')}
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
  questionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: PURPLE_DARK,
    marginTop: 25,
    marginBottom: 20,
    lineHeight: 30,
    width: '100%',
  },
  checkboxList: {
    marginTop: 10,
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
