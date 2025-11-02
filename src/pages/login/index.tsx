import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { AppButton } from '../../components/button';
import { AppInput } from '../../components/appInput';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const WHITE = '#FFFFFF';
const PURPLE_DARK = '#4F1D7B';
const PURPLE_BUTTON_DARK = '#6A3297';

type LoginScreenNavigationProp = {
  navigate: (screen: 'automationWizard') => void;
};

export function LoginScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const handleLogin = () => {
    navigation.navigate('automationWizard');
  };
  const handleForgotPassword = () => console.log('Esqueceu a senha?');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={PURPLE_DARK} />

      <View style={styles.waveTop} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <Text style={styles.title}>BEM-VINDO DE{'\n'}VOLTA</Text>

          <View style={styles.inputArea}>
            <AppInput placeholder="Email" keyboardType="email-address" />
            <AppInput placeholder="Senha" secureTextEntry />
          </View>

          <TouchableOpacity
            onPress={handleForgotPassword}
            style={styles.forgotPasswordButton}
          >
            <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <AppButton
            title="Entrar"
            onPress={handleLogin}
            variant="primary"
            style={styles.loginButton}
            titleStyle={styles.loginButtonText}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    position: 'relative',
  },
  scrollContent: {
    paddingBottom: 40,
    minHeight: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    paddingHorizontal: 30,
    zIndex: 2,
  },
  title: {
    color: PURPLE_DARK,
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 40,
    marginTop: 150,
    alignSelf: 'flex-start',
  },
  inputArea: {
    width: '100%',
    marginBottom: 10,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 40,
  },
  forgotPasswordText: {
    color: PURPLE_DARK,
    fontSize: 14,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: PURPLE_BUTTON_DARK,
    width: 200,
    marginTop: 10,
    alignSelf: 'center',
  },
  loginButtonText: {
    color: WHITE,
    fontSize: 18,
    fontWeight: '700',
  },
  waveTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: 120,
    backgroundColor: PURPLE_DARK,
    borderBottomLeftRadius: width * 0.9,
    borderBottomRightRadius: width * 0.1,
    transform: [{ scaleX: 1.2 }],
    zIndex: 1,
  },
});
