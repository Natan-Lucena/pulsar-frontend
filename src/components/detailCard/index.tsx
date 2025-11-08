// src/components/DetailCard.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PURPLE_MEDIUM = '#8E67AE';
const PURPLE_URL = '#6D3F9B';

interface DetailCardProps {
  label: string;
  value: string;
  type: 'info' | 'url' | 'copy';
  onPress?: () => void;
}

export function DetailCard({ label, value, type, onPress }: DetailCardProps) {
  const isUrl = type === 'url' || type === 'copy';
  const backgroundColor = isUrl ? PURPLE_URL : PURPLE_MEDIUM;

  const getIcon = () => {
    if (type === 'url' || type === 'copy') {
      return '📋';
    }
    if (label.includes('Canal')) {
      return '✉️';
    }
    if (label.includes('Dados')) {
      return '📝';
    }
    return '';
  };

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor }]}
      onPress={onPress}
      disabled={!onPress && type !== 'copy'}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{getIcon()}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.labelText}>{label}</Text>
        <Text style={styles.valueText}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    fontSize: 20,
    color: 'white',
  },
  textContainer: {
    flex: 1,
  },
  labelText: {
    fontSize: 12,
    color: 'white',
    opacity: 0.8,
  },
  valueText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});
