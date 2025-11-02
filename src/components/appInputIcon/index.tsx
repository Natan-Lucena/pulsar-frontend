import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';

import WATCH_ICON from '../../../assets/watch-icon.png';
import KEY_ICON from '../../../assets/key-icon.png';
import DROPDOWN_ICON from '../../../assets/dropdown-icon.png';

const PURPLE_LIGHT = '#D5A7E8';
const PURPLE_DARK = '#4F1D7B';
const PURPLE_MEDIUM = '#8B459B';

interface AppInputIconProps extends TextInputProps {
  placeholder: string;
  iconType?: 'watch' | 'key' | 'dropdown' | 'none';
  onPress?: () => void;
  isSelect?: boolean;
}

export function AppInputIcon({
  placeholder,
  iconType = 'none',
  isSelect = false,
  onPress,
  ...restProps
}: AppInputIconProps) {
  const getIconSource = (): ImageSourcePropType | null => {
    switch (iconType) {
      case 'watch':
        return WATCH_ICON;
      case 'key':
        return KEY_ICON;
      case 'dropdown':
        return DROPDOWN_ICON;
      default:
        return null;
    }
  };

  const IconComponent = getIconSource();
  const Wrapper = isSelect ? TouchableOpacity : View;

  const InputContent = isSelect ? (
    <Text style={styles.placeholderText}>{placeholder}</Text>
  ) : (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      placeholderTextColor={PURPLE_DARK}
      {...restProps}
    />
  );

  return (
    <Wrapper
      style={styles.wrapper}
      onPress={isSelect ? onPress : undefined}
      activeOpacity={isSelect ? 0.8 : 1}
    >
      <View style={styles.inputContainer}>
        {InputContent}
        {IconComponent && <Image source={IconComponent} style={styles.icon} />}
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 20,
    width: '100%',
  },
  inputContainer: {
    backgroundColor: PURPLE_LIGHT,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
  },
  textInput: {
    fontSize: 18,
    color: PURPLE_DARK,
    flex: 1,
    padding: 0,
  },
  placeholderText: {
    fontSize: 18,
    color: PURPLE_DARK,
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
    tintColor: PURPLE_MEDIUM,
  },
});
