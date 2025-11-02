import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import RobotAsset from '../../../assets/robot-icon.png';
import { NavBar } from '../../components/navbar';
import { BubbleMessage } from '../../components/bubbleMessage';
import { PrioritySlider } from '../../components/prioritySlider';
import { BottomTabBar } from '../../components/bottomTabBar';
import { useNavigation } from '@react-navigation/native';

const PURPLE_DARK = '#4F1D7B';
const PURPLE_MEDIUM = '#8B459B';
const PADDING_BOTTOM_TAB = 60;

type AutomationWizardScreenNavigationProp = {
  navigate: (screen: string) => void;
};

export function AutomationWizardScreen() {
  const navigation = useNavigation<AutomationWizardScreenNavigationProp>();

  const navigate = (screen: string) => {
    navigation.navigate(screen);
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
        <BubbleMessage message="Vamos criar sua primeira automoção!" />
        <Text style={styles.questionTitle}>
          O que você prioriza em sua automatização?
        </Text>
        <PrioritySlider label="Rapidez" initialValue={0.5} />
        <PrioritySlider label="Segurança" initialValue={0.5} />
        <PrioritySlider label="Custo" initialValue={0.5} />
        <PrioritySlider label="Manutenção" initialValue={0.5} />
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigate('automationDescription')}
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
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollPadding: {
    paddingBottom: PADDING_BOTTOM_TAB + 20 + 80,
  },
  robotIcon: {
    width: 80,
    height: 80,
    alignSelf: 'flex-end',
    marginRight: 0,
    marginTop: 10,
    marginBottom: -30,
    zIndex: 5,
  },
  questionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: PURPLE_DARK,
    marginTop: 30,
    marginBottom: 40,
    lineHeight: 30,
    width: '80%',
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
