import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

interface PrioritySliderProps {
  label: string;
  secondLabel: string;
  initialValue?: number;
}

const PURPLE_DARK = '#4F1D7B';
const PURPLE_MEDIUM = '#8B459B';
const PURPLE_LIGHT = '#D5A7E8';

export function PrioritySlider({
  label,
  secondLabel,
  initialValue = 0.5,
}: PrioritySliderProps) {
  const [value, setValue] = useState(initialValue);

  return (
    <View style={sliderStyles.container}>
      <View style={sliderStyles.labelRow}>
        <Text style={sliderStyles.labelText}>{label}</Text>
        <Text style={sliderStyles.labelText}>{secondLabel}</Text>
      </View>
      <Slider
        style={sliderStyles.slider}
        minimumValue={0}
        maximumValue={1}
        step={0.01}
        value={value}
        onValueChange={setValue}
        minimumTrackTintColor={PURPLE_MEDIUM}
        maximumTrackTintColor={PURPLE_LIGHT}
        thumbTintColor={PURPLE_MEDIUM}
      />
    </View>
  );
}

const sliderStyles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 25,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  labelText: {
    fontSize: 14,
    color: PURPLE_DARK,
    fontWeight: '600',
  },
  slider: {
    width: '100%',
    height: 30,
    paddingHorizontal: 0,
  },
});
