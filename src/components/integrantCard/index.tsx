// src/components/IntegrantCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PURPLE_LIGHT = '#D5A7E8';
const PURPLE_DARK = '#4F1D7B';
const PERSON_ICON = '👤';

interface IntegrantCardProps {
  name: string;
}

export function IntegrantCard({ name }: IntegrantCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.icon}>{PERSON_ICON}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 60,
    backgroundColor: PURPLE_LIGHT,
    borderRadius: 8,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  name: {
    color: PURPLE_DARK,
    fontSize: 18,
    fontWeight: '500',
  },
  icon: {
    color: PURPLE_DARK,
    fontSize: 24,
  },
});
