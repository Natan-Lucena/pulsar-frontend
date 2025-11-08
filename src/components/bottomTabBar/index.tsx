// src/components/BottomTabBar.tsx
import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import HouseIcon from '../../../assets/house-icon.png';
import GearIcon from '../../../assets/gear-icon.png';
import UsersIcon from '../../../assets/users-icon.png';

const { width } = Dimensions.get('window');

const PURPLE_DARK = '#4F1D7B';
const PURPLE_LIGHT = '#D5A7E8';
const WHITE = 'white';
const ICON_SIZE = 30;
const HEIGHT = 60;

interface BottomTabBarProps {
  onHomePress?: () => void;
  onSettingsPress?: () => void;
  onUsersPress?: () => void;
  activeScreen?: 'home' | 'settings' | 'users';
}

export function BottomTabBar({
  onHomePress,
  onSettingsPress,
  onUsersPress,
  activeScreen = 'settings',
}: BottomTabBarProps) {
  const getTintColor = (screen: 'home' | 'settings' | 'users') => {
    return activeScreen === screen ? PURPLE_LIGHT : WHITE;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onHomePress}
        activeOpacity={0.7}
        style={styles.button}
      >
        <Image
          source={HouseIcon}
          style={[styles.icon, { tintColor: getTintColor('home') }]}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onSettingsPress}
        activeOpacity={0.7}
        style={styles.button}
      >
        <Image
          source={GearIcon}
          style={[styles.icon, { tintColor: getTintColor('settings') }]}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onUsersPress}
        activeOpacity={0.7}
        style={styles.button}
      >
        <Image
          source={UsersIcon}
          style={[styles.icon, { tintColor: getTintColor('users') }]}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: HEIGHT,
    backgroundColor: PURPLE_DARK,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    zIndex: 10,
    shadowOpacity: 0,
    elevation: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },

  button: {
    height: HEIGHT,
    width: width / 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderBottomWidth: 0,
  },

  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
  },
});
