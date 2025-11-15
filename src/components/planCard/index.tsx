// src/components/PlanCard.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PURPLE_MEDIUM = '#6D3F9B';
const PURPLE_DARK = '#4F1D7B';
const GREEN_ACTIVE = '#A6E3B5';

interface PlanCardProps {
  planName: string;
  price: number;
  renewalDate: string;
  status: 'Ativa' | 'Inativa';
  onPressChangePlan: () => void;
}

export function PlanCard({
  planName,
  price,
  renewalDate,
  status,
  onPressChangePlan,
}: PlanCardProps) {
  const formattedPrice = `R$ ${price.toFixed(2).replace('.', ',')}`;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.planName}>{planName}</Text>
        <View
          style={[styles.statusBadge, status === 'Ativa' && styles.activeBadge]}
        >
          <Text style={styles.statusText}>{status}</Text>
        </View>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{formattedPrice}</Text>
        <Text style={styles.pricePerMonth}>/mês</Text>
      </View>

      <Text style={styles.renewalText}>Próxima renovação em {renewalDate}</Text>

      <TouchableOpacity style={styles.button} onPress={onPressChangePlan}>
        <Text style={styles.buttonText}>MUDAR DE PLANO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: PURPLE_MEDIUM,
    borderRadius: 8,
    padding: 20,
    marginVertical: 10,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  planName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusBadge: {
    backgroundColor: 'gray', // Cor padrão
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  activeBadge: {
    backgroundColor: GREEN_ACTIVE,
  },
  statusText: {
    color: PURPLE_DARK,
    fontSize: 12,
    fontWeight: 'bold',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginVertical: 5,
  },
  priceText: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: 40,
  },
  pricePerMonth: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
  renewalText: {
    color: 'white',
    fontSize: 14,
    marginBottom: 20,
  },
  button: {
    backgroundColor: PURPLE_DARK,
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
