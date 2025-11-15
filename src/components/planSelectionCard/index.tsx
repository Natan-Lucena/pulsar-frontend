// src/components/PlanSelectionCard.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';

const PURPLE_MEDIUM = '#6D3F9B';
const PURPLE_DARK = '#4F1D7B';
const GREEN_ACTIVE = '#A6E3B5';
const CHECK_ICON = '✓';

interface PlanSelectionCardProps {
  planName: string;
  price: number;
  features: string[];
  status?: 'Ativo' | 'Inativo';
  onSelectPlan: (plan: string) => void;
}

export function PlanSelectionCard({
  planName,
  price,
  features,
  status,
  onSelectPlan,
}: PlanSelectionCardProps) {
  const [isModalVisible, setModalVisible] = useState(false);
  const formattedPrice = `R$ ${price.toFixed(2).replace('.', ',')}`;

  const handleSelectPlan = () => {
    if (status === 'Ativo') {
      Alert.alert('Plano Ativo', 'Este plano já está ativo.');
      return;
    }
    setModalVisible(true);
  };

  const confirmSelection = () => {
    setModalVisible(false);
    onSelectPlan(planName);
  };

  const handleSim = () => {
    confirmSelection();
  };

  return (
    <View style={styles.cardWrapper}>
      <TouchableOpacity
        style={styles.card}
        onPress={handleSelectPlan}
        activeOpacity={0.8}
      >
        <View style={styles.header}>
          <Text style={styles.planName}>{planName}</Text>
          {status === 'Ativo' && (
            <View style={[styles.statusBadge, styles.activeBadge]}>
              <Text style={styles.statusText}>Ativo</Text>
            </View>
          )}
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{formattedPrice}</Text>
          <Text style={styles.pricePerMonth}>/mês</Text>
        </View>

        <View style={styles.featuresContainer}>
          {features.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <Text style={styles.checkIcon}>{CHECK_ICON}</Text>
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>
              Tem certeza que deseja mudar de plano?
            </Text>
            <Text style={styles.modalText}>
              Você está prestes a selecionar o plano {planName}.
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.buttonModal, styles.buttonCancel]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>Não</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttonModal, styles.buttonConfirm]}
                onPress={handleSim}
              >
                <Text style={styles.textStyle}>Sim</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    width: '100%',
    marginVertical: 10,
  },
  card: {
    backgroundColor: PURPLE_MEDIUM,
    borderRadius: 8,
    padding: 20,
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
    backgroundColor: 'gray',
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
  featuresContainer: {
    marginTop: 10,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  checkIcon: {
    color: GREEN_ACTIVE,
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
  },
  featureText: {
    color: 'white',
    fontSize: 14,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: PURPLE_DARK,
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 16,
    color: PURPLE_DARK,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonModal: {
    borderRadius: 6,
    padding: 10,
    elevation: 2,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonCancel: {
    backgroundColor: '#9A9A9A',
  },
  buttonConfirm: {
    backgroundColor: PURPLE_DARK,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
