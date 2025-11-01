import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  View,
  TextStyle,
} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant: 'primary' | 'secondary' | 'google';
  style?: ViewStyle;
  icon?: React.ReactNode;
  titleStyle?: TextStyle;
}

const PURPLE_LIGHT = '#D5A7E8';
const PURPLE_DARK = '#4F1D7B';

export function AppButton({
  title,
  onPress,
  variant,
  style,
  icon,
  titleStyle,
}: ButtonProps) {
  const isGoogle = variant === 'google';

  const buttonStyles = isGoogle ? styles.googleButton : styles.defaultButton;
  const textStyles = isGoogle ? styles.googleText : styles.defaultText;

  return (
    <TouchableOpacity
      style={[buttonStyles, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {icon && <View style={styles.iconContainer}>{icon}</View>}

      <Text style={[textStyles, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  defaultButton: {
    backgroundColor: PURPLE_LIGHT,
    paddingVertical: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  defaultText: {
    color: PURPLE_DARK,
    fontSize: 18,
    fontWeight: '700',
  },
  googleButton: {
    backgroundColor: PURPLE_LIGHT,
    paddingVertical: 15,
    borderRadius: 8,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  googleText: {
    color: PURPLE_DARK,
    fontSize: 18,
    fontWeight: '700',
  },
  iconContainer: {
    marginRight: 10,
  },
});
