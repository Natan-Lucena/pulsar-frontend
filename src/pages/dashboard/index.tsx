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
import { useNavigation } from '@react-navigation/native';

const WHITE = '#FFFFFF';
const PURPLE_DARK = '#4F1D7B';

type DashboardScreenNavigationProp = {
  navigate: (screen: string) => void;
};

export function DashboardScreen() {
  const navigation = useNavigation<DashboardScreenNavigationProp>();
  const navigate = (value: string) => {
    navigation.navigate(value);
  };
  const handleOnSettingPress = () => navigate('automationsScreen');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={PURPLE_DARK} />
      <NavBar onProfilePress={() => navigate('profile')} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <DashboardGeneral name="Grafico Discord" />
        <DashboardGeneral name="Dados Slack" />
      </ScrollView>

      <BottomTabBar
        activeScreen="home"
        onSettingsPress={handleOnSettingPress}
      />
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
    paddingBottom: Platform.OS === 'ios' ? 80 : 60,
  },
});
