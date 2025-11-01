import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Logo } from '../../components/logo';

const { width } = Dimensions.get('window');

const WHITE = '#FFFFFF';
const PURPLE_DARK = '#4F1D7B';

type LandingScreenNavigationProp = {
  navigate: (screen: 'Welcome') => void;
};

export function LandingScreen() {
  const navigation = useNavigation<LandingScreenNavigationProp>();

  const handleLogoClick = () => {
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={PURPLE_DARK} />

      <View style={styles.waveTop} />

      <TouchableOpacity
        style={styles.content}
        onPress={handleLogoClick}
        activeOpacity={0.8}
      >
        <Logo />
      </TouchableOpacity>

      <View style={styles.waveBottom} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    position: 'relative',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  waveTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: 150,
    backgroundColor: PURPLE_DARK,
    borderBottomLeftRadius: width * 0.8,
    borderBottomRightRadius: width * 0.4,
    transform: [{ scaleX: 1.2 }],
    zIndex: 1,
  },
  waveBottom: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: width,
    height: 200,
    backgroundColor: PURPLE_DARK,
    borderTopLeftRadius: width * 0.5,
    borderTopRightRadius: width * 0.9,
    transform: [{ scaleX: 1.2 }],
    zIndex: 1,
  },
});
