// src/pages/automations/AutomationDetailScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { NavBar } from '../../components/navbar';
import { BottomTabBar } from '../../components/bottomTabBar';
import { DetailCard } from '../../components/detailCard';
import { DashboardGeneral } from '../../components/dashboardGeneral';
import { useNavigation } from '@react-navigation/native';

const PURPLE_DARK = '#4F1D7B';
const PURPLE_MSG = '#D5A7E8';
const PURPLE_EDIT = '#6D3F9B';
const PURPLE_CANCEL = '#B58DCF';
const GREEN_TAG = '#A3D9A5';
const BROWN_TAG = '#D1B48C';
const PADDING_BOTTOM_TAB = 60;

const AUTOMATION_URL = 'URL WW.TELEGRAM.COM';

type AutomatioDetailsScreenNavigationProp = {
  navigate: (screen: string) => void;
};

export function AutomationDetailScreen() {
  const navigation = useNavigation<AutomatioDetailsScreenNavigationProp>();
  const navigate = (screen: string) => {
    navigation.navigate(screen);
  };
  const handleEdit = () => console.log('Editar Automação');
  const handleCancel = () => console.log('Cancelar por Hoje');

  return (
    <View style={styles.container}>
      <NavBar
        onLogoPress={() => navigate('dashboard')}
        onProfilePress={() => navigate('profile')}
      />

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollPadding}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.headerTitle}>DETALHES DA AUTOMOÇÃO</Text>
        <View style={styles.messageBubble}>
          <Text style={styles.messageText}>
            Boa vinda aos clientes Esta automação envia uma mensagem de
            boas-vindas calorosa para novos clientes logo após o cadastro,
            adiciona uma tag para segmentação e notifica a equipe de vendas para
            um acompanhamento pessoal.
          </Text>
        </View>
        <View style={styles.tagContainer}>
          <View style={[styles.tag, { backgroundColor: GREEN_TAG }]}>
            <Text style={styles.tagText}>Rapidez</Text>
          </View>
          <View style={[styles.tag, { backgroundColor: BROWN_TAG }]}>
            <Text style={styles.tagText}>Desempenho</Text>
          </View>
          <View style={[styles.tag, { backgroundColor: GREEN_TAG }]}>
            <Text style={styles.tagText}>Rapidez</Text>
          </View>
        </View>

        <DashboardGeneral name="Grafico Discord" />
        <Text style={styles.detailsHeader}>Detalhes</Text>

        <DetailCard label="Canal" value="Telegram, Email" type="info" />
        <DetailCard
          label="Dados coletados"
          value="Nome, número, email"
          type="info"
        />
        <DetailCard
          label={AUTOMATION_URL}
          value=""
          type="copy"
          onPress={() => console.log('Copiar URL')}
        />

        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: PURPLE_EDIT }]}
          onPress={handleEdit}
        >
          <Text style={styles.actionButtonText}>EDITAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: PURPLE_CANCEL }]}
          onPress={handleCancel}
        >
          <Text style={styles.actionButtonText}>CANCELAR POR HOJE</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomTabBar
        onHomePress={() => navigation.navigate('dashboard')}
        onSettingsPress={() => navigation.navigate('settings')}
        onUsersPress={() => navigation.navigate('groupManagement')}
        activeScreen="settings"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollPadding: {
    paddingBottom: PADDING_BOTTOM_TAB + 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: PURPLE_DARK,
    textAlign: 'left',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  messageBubble: {
    backgroundColor: PURPLE_MSG,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  messageText: {
    color: PURPLE_DARK,
    fontSize: 14,
    lineHeight: 20,
  },
  tagContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    width: '100%',
  },
  tag: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginRight: 8,
  },
  tagText: {
    color: PURPLE_DARK,
    fontSize: 12,
    fontWeight: 'bold',
  },
  detailsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: PURPLE_DARK,
    width: '100%',
    marginTop: 20,
  },
  actionButton: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
