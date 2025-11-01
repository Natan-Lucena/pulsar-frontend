import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';

import { AppButton } from '../../components/button';
import { AppInput } from '../../components/appInput';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const WHITE = '#FFFFFF';
const PURPLE_DARK = '#4F1D7B';
const PURPLE_BUTTON_DARK = '#6A3297';

type RegisterScreenNavigationProp = {
  navigate: (screen: 'Welcome') => void;
};

export function RegisterScreen() {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const handleCreateAccount = () => {
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={PURPLE_DARK} />

      <View style={styles.waveTop} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <Text style={styles.title}>BEM-VINDO AO{'\n'}PULSAR</Text>

          <View style={styles.inputArea}>
            <AppInput placeholder="Nome" autoCapitalize="words" />
            <AppInput placeholder="Email" keyboardType="email-address" />
            <AppInput placeholder="Senha" secureTextEntry />
            <AppInput placeholder="Confirme sua senha" secureTextEntry />
          </View>

          <View style={styles.buttonWrapper}>
            <AppButton
              title="Criar conta"
              onPress={handleCreateAccount}
              variant="primary"
              style={styles.createAccountButton}
              titleStyle={styles.createAccountButtonText}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
  },
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
    marginBottom: 20,
  },
  createAccountButton: {
    backgroundColor: PURPLE_BUTTON_DARK,
    width: 200,
    position: 'static',
    marginTop: 10,
  },
  createAccountButtonText: {
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
