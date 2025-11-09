// src/components/PaymentManagerCard.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PURPLE_CARD = '#D5A7E8';
const PURPLE_BUTTON = '#6D3F9B';
const PURPLE_DARK = '#4F1D7B';

interface PaymentManagerCardProps {
  currentPlan: string;
  nextRenewalDate: string;
  cardNumber: string;
  onManagePress: () => void;
  onCardChangePress: () => void;
}

export function PaymentManagerCard({
  currentPlan,
  nextRenewalDate,
  cardNumber,
  onManagePress,
  onCardChangePress,
}: PaymentManagerCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>PAGAMENTOS E ASSINATURA</Text>

      <View style={styles.infoRow}>
        <View>
          <Text style={styles.label}>Plano atual</Text>
          <Text style={styles.label}>Próxima Renovação</Text>
        </View>
        <View style={styles.alignRight}>
          <Text style={styles.value}>{currentPlan}</Text>
          <Text style={styles.value}>{nextRenewalDate}</Text>
        </View>
      </View>

      <View style={[styles.infoRow, styles.cardRow]}>
        <Text style={styles.cardIcon}>💳</Text>
        <Text style={styles.label}>Visa final {cardNumber}</Text>
        <TouchableOpacity onPress={onCardChangePress}>
          <Text style={styles.changeLink}>Alterar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.manageButton} onPress={onManagePress}>
        <Text style={styles.manageButtonText}>GERENCIAR ASSINATURA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: PURPLE_CARD,
    padding: 20,
    borderRadius: 8,
    marginBottom: 30,
  },
  header: {
    color: PURPLE_DARK,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    color: PURPLE_DARK,
    lineHeight: 24,
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
    color: PURPLE_DARK,
    lineHeight: 24,
  },
  alignRight: {
    alignItems: 'flex-end',
  },
  cardRow: {
    marginTop: 15,
    borderTopWidth: 1,
    borderTopColor: 'rgba(79, 29, 123, 0.1)',
    paddingTop: 10,
    alignItems: 'center',
  },
  cardIcon: {
    fontSize: 18,
    marginRight: 10,
    color: PURPLE_DARK,
  },
  changeLink: {
    fontSize: 14,
    color: PURPLE_BUTTON,
    fontWeight: 'bold',
  },
  manageButton: {
    backgroundColor: PURPLE_BUTTON,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  manageButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
