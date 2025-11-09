// src/components/ProfilePicture.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PURPLE_MEDIUM = '#6D3F9B';
const PURPLE_DARK = '#4F1D7B';
const PROFILE_SIZE = 100;

interface ProfilePictureProps {
  name: string;
  email: string;
}

export function ProfilePicture({ name, email }: ProfilePictureProps) {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />

      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.emailText}>{email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  circle: {
    width: PROFILE_SIZE,
    height: PROFILE_SIZE,
    borderRadius: PROFILE_SIZE / 2,
    backgroundColor: PURPLE_MEDIUM,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: PURPLE_DARK,
  },
  emailText: {
    fontSize: 14,
    color: PURPLE_DARK,
    opacity: 0.7,
    marginBottom: 20,
  },
});
