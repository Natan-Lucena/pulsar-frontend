import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';
import { NavBar } from '../../components/navbar';
import { BottomTabBar } from '../../components/bottomTabBar';
import { DashboardGeneral } from '../../components/dashboardGeneral';

const WHITE = '#FFFFFF';
const PURPLE_DARK = '#4F1D7B';

export function DashboardScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={PURPLE_DARK} />
      <NavBar />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <DashboardGeneral name="Grafico Discord" />
        <DashboardGeneral name="Dados Slack" />
      </ScrollView>

      <BottomTabBar activeScreen="home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 80 : 60, // apenas o suficiente pra não colar no footer
  },
});
