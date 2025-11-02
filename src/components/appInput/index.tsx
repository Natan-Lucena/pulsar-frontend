import React from 'react';
import { TextInput, StyleSheet, TextInputProps, ViewStyle } from 'react-native';

const PURPLE_LIGHT = '#D5A7E8';
const PURPLE_DARK = '#4F1D7B';

interface AppInputProps extends TextInputProps {
  placeholder: string;
  style?: ViewStyle | ViewStyle[];
}

export function AppInput(props: AppInputProps) {
  const { style, ...restProps } = props;

  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor={PURPLE_DARK}
      {...restProps}
    />
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
    color: PURPLE_DARK,
    width: '100%',
  },
});
