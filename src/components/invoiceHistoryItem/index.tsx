// src/components/InvoiceHistoryItem.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PURPLE_CARD = '#D5A7E8';
const PURPLE_DARK = '#4F1D7B';
const GREEN_PAID = '#4CAF50';

interface InvoiceHistoryItemProps {
  month: string;
  amount: number;
  status: 'Paga' | 'Pendente';
  onPress: () => void;
}

export function InvoiceHistoryItem({
  month,
  amount,
  status,
  onPress,
}: InvoiceHistoryItemProps) {
  const statusColor = status === 'Paga' ? GREEN_PAID : PURPLE_DARK;

  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.leftContent}>
        <Text style={styles.icon}>$</Text>
        <View>
          <Text style={styles.monthText}>Fatura de {month}</Text>
          <Text style={styles.amountText}>
            R$ {amount.toFixed(2).replace('.', ',')}
          </Text>
        </View>
      </View>
      <View style={styles.rightContent}>
        <Text style={[styles.statusText, { color: statusColor }]}>
          {status}
        </Text>
        <Text style={styles.arrow}>→</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: PURPLE_CARD,
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 18,
    color: PURPLE_DARK,
    marginRight: 10,
    padding: 5,
    borderRadius: 4,
  },
  monthText: {
    fontSize: 16,
    color: PURPLE_DARK,
    fontWeight: '500',
  },
  amountText: {
    fontSize: 14,
    color: PURPLE_DARK,
    opacity: 0.7,
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 5,
  },
  arrow: {
    fontSize: 20,
    color: PURPLE_DARK,
  },
});
