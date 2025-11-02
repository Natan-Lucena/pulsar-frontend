// src/components/appCheckbox.tsx (Solução Final - Usando Unicode)
import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const PURPLE_DARK = '#4F1D7B';
const PURPLE_MEDIUM = '#8B459B';

interface AppCheckboxProps {
  label: string;
  checked: boolean;
  onPress: () => void;
}

export function AppCheckbox({ label, checked, onPress }: AppCheckboxProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={[styles.checkbox, checked && styles.checkedCheckbox]}>
        {checked && <Text style={styles.checkIcon}>✓</Text>}
      </View>

      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  checkbox: {
    width: 28,
    height: 28,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: PURPLE_MEDIUM,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  checkedCheckbox: {
    backgroundColor: PURPLE_MEDIUM,
    borderColor: PURPLE_MEDIUM,
  },
  checkIcon: {
    fontSize: 24,
    color: 'white',
    lineHeight: 24,
    marginTop: -2,
  },
  label: {
    fontSize: 18,
    color: PURPLE_DARK,
    fontWeight: '600',
  },
});
