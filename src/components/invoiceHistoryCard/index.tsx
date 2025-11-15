// src/components/InvoiceHistoryCard.tsx
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const PURPLE_LIGHT = '#D5A7E8';
const PURPLE_DARK = '#4F1D7B';
const ARROW_ICON = '>';

interface InvoiceHistoryCardProps {
  onPress: () => void;
}

export function InvoiceHistoryCard({ onPress }: InvoiceHistoryCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>HISTÓRICO DE FATURAS</Text>
      <Text style={styles.arrow}>{ARROW_ICON}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: PURPLE_LIGHT,
    borderRadius: 8,
    padding: 20,
    marginVertical: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: PURPLE_DARK,
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrow: {
    color: PURPLE_DARK,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
