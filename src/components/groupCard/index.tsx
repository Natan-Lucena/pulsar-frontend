// src/components/GroupCard.tsx
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const PURPLE_LIGHT = '#D5A7E8';
const PURPLE_DARK = '#4F1D7B';
const ARROW_ICON = '→';

interface GroupCardProps {
  groupName: string;
  onPress: () => void;
}

export function GroupCard({ groupName, onPress }: GroupCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.groupName}>{groupName}</Text>
      <Text style={styles.arrowIcon}>{ARROW_ICON}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 90,
    backgroundColor: PURPLE_LIGHT,
    borderRadius: 8,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  groupName: {
    color: PURPLE_DARK,
    fontSize: 20,
    fontWeight: 'bold',
  },
  arrowIcon: {
    color: PURPLE_DARK,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
