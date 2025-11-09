import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  ImageSourcePropType,
} from 'react-native';

import LogoAsset from '../../../assets/logo-without-background.png';
import ProfileAsset from '../../../assets/profile-icon.png';
import BackAsset from '../../../assets/back-arrow-icon.png';

const { width } = Dimensions.get('window');

const PURPLE_DARK = '#4F1D7B';
const ICON_SIZE = 36;
const PADDING_HORIZONTAL = 15;
const HEIGHT = 70;

interface NavBarProps {
  onLogoPress?: () => void;
  onProfilePress?: () => void;
  hideProfileIcon?: boolean;
  profileIconSource?: ImageSourcePropType;

  isBackButton?: boolean;
}

export function NavBar({
  onLogoPress,
  onProfilePress,
  hideProfileIcon = false,
  profileIconSource,
  isBackButton = false,
}: NavBarProps) {
  const leftIconSource = isBackButton ? BackAsset : LogoAsset;
  const leftPressHandler = onLogoPress;

  const rightIconSource = isBackButton
    ? LogoAsset
    : profileIconSource || ProfileAsset;
  const rightPressHandler = isBackButton ? onProfilePress : onProfilePress;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={leftPressHandler}
        activeOpacity={0.7}
        style={styles.logoButton}
      >
        <Image
          source={leftIconSource}
          style={styles.logoIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {!hideProfileIcon && (
        <TouchableOpacity
          onPress={rightPressHandler}
          activeOpacity={0.7}
          style={styles.profileButton}
        >
          <Image
            source={rightIconSource}
            style={styles.profileIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
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
    justifyContent: 'space-between',
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingTop: Platform.OS === 'android' ? 10 : 0,
    zIndex: 10,
  },
  logoButton: {
    height: HEIGHT,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  profileButton: {
    height: HEIGHT,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  logoIcon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    tintColor: 'white',
  },
  profileIcon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    tintColor: 'white',
  },
});
