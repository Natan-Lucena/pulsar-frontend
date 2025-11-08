// src/components/AutomationCard.tsx
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const PURPLE_LIGHT = '#D5A7FF';
const PURPLE_DARK = '#4F1D7B';
interface AutomationCardProps {
  platform: string;
  onPress: () => void;
}

export function AutomationCard({ platform, onPress }: AutomationCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.platformText}>{platform}</Text>
      <Text style={styles.arrow}>→</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: PURPLE_LIGHT,
    padding: 20,
    marginVertical: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  platformText: {
    fontSize: 18,
    fontWeight: '600',
    color: PURPLE_DARK,
  },
  arrow: {
    fontSize: 24,
    fontWeight: 'bold',
    color: PURPLE_DARK,
  },
});
