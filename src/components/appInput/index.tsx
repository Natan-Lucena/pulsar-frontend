import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

const PURPLE_LIGHT = '#D5A7E8';

interface AppInputProps extends TextInputProps {
  placeholder: string;
}

export function AppInput(props: AppInputProps) {
  return (
    <TextInput style={styles.input} placeholderTextColor="#4F1D7B" {...props} />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: PURPLE_LIGHT,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 20,
    fontSize: 18,
    color: '#4F1D7B',
    width: '100%',
  },
});
