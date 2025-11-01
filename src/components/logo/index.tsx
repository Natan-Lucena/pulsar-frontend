import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import IconePulsar from '../../../assets/logo-without-background.png';

const PURPLE_DARK = '#4F1D7B';

export function Logo() {
  return (
    <View style={styles.logoContainer}>
      <Image source={IconePulsar} style={styles.iconImage} />
      <Text style={styles.text}>PULSAR</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iconImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  text: {
    color: PURPLE_DARK,
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
