// src/components/PaymentMethodCard.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PURPLE_LIGHT = '#D5A7E8';
const PURPLE_DARK = '#4F1D7B';
const CARD_ICON = '💳';

interface PaymentMethodCardProps {
  cardNumber: string;
  onPressChangeCard: () => void;
}

export function PaymentMethodCard({
  cardNumber,
  onPressChangeCard,
}: PaymentMethodCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>MÉTODO DE PAGAMENTO</Text>
      <View style={styles.content}>
        <Text style={styles.icon}>{CARD_ICON}</Text>
        <Text style={styles.cardNumber}>Visa final {cardNumber}</Text>
        <TouchableOpacity
          onPress={onPressChangeCard}
          style={styles.changeButton}
        >
          <Text style={styles.changeText}>Alterar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: PURPLE_LIGHT,
    borderRadius: 8,
    padding: 20,
    marginVertical: 10,
    width: '100%',
  },
  title: {
    color: PURPLE_DARK,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    marginRight: 10,
  },
  cardNumber: {
    flex: 1,
    color: PURPLE_DARK,
    fontSize: 16,
  },
  changeButton: {
    padding: 5,
  },
  changeText: {
    color: PURPLE_DARK,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
