import React from 'react';
import { View, Text, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { AppButton } from '../../components/button';
import { Logo } from '../../components/logo';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const WHITE = '#FFFFFF';
const PURPLE_DARK = '#4F1D7B';

type WelcomeScreenNavigationProp = {
  navigate: (screen: 'Register' | 'Login') => void;
};

export function WelcomeScreen() {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();
  const handleStartRegistration = () => {
    navigation.navigate('Register');
  };
  const handleExistingAccount = () => {
    navigation.navigate('Login');
  };
  const handleGoogleLogin = () => console.log('Login com Google');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={PURPLE_DARK} />

      <View style={styles.waveTop} />

      <View style={styles.content}>
        <View style={styles.logoWrapper}>
          <Logo />
        </View>

        <View style={styles.buttonArea}>
          <AppButton
            title="Começar registro!"
            onPress={handleStartRegistration}
            variant="primary"
          />

          <AppButton
            title="Já tenho uma conta"
            onPress={handleExistingAccount}
            variant="secondary"
          />

          <View style={styles.separatorContainer}>
            <View style={styles.line} />
            <Text style={styles.separatorText}>Or continue with</Text>
            <View style={styles.line} />
          </View>

          <AppButton
            title=""
            onPress={handleGoogleLogin}
            variant="google"
            icon={<Text style={styles.googleIcon}>G</Text>}
            style={styles.googleButton}
          />
        </View>
      </View>

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
    paddingHorizontal: 30,
    paddingTop: '20%',
    paddingBottom: 40,
    zIndex: 2,
  },
  logoWrapper: {
    marginBottom: 40,
  },
  buttonArea: {
    width: '100%',
    alignItems: 'center',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  separatorText: {
    marginHorizontal: 10,
    color: '#888',
    fontSize: 14,
  },
  googleIcon: {
    fontSize: 24,
    fontWeight: 'bold',
    color: PURPLE_DARK,
    marginRight: 10,
  },
  googleButton: {
    height: 55,
  },
  waveTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: 100,
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
