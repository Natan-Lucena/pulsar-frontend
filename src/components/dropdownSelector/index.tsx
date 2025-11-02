// src/components/dropdownSelector.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AppInputIcon } from '../appInputIcon';

const PURPLE_LIGHT = '#D5A7E8';
const PURPLE_DARK = '#4F1D7B';

interface DropdownSelectorProps {
  placeholder: string;
  options: string[];
  selectedValues: string[];
  onSelect: (value: string) => void;
}

export function DropdownSelector({
  placeholder,
  options,
  selectedValues,
  onSelect,
}: DropdownSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const displayValue =
    selectedValues.length > 0
      ? `${selectedValues.length} Grupo${
          selectedValues.length > 1 ? 's' : ''
        } Selecionado${selectedValues.length > 1 ? 's' : ''}`
      : placeholder;

  return (
    <View style={styles.container}>
      <AppInputIcon
        placeholder={displayValue}
        iconType="dropdown"
        isSelect={true}
        onPress={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <View style={styles.dropdownList}>
          {options.map(option => (
            <TouchableOpacity
              key={option}
              style={[
                styles.optionItem,
                selectedValues.includes(option) && styles.selectedOptionItem,
              ]}
              onPress={() => onSelect(option)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedValues.includes(option) && styles.selectedOptionText,
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
  },
  dropdownList: {
    position: 'absolute',
    top: 60,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: PURPLE_LIGHT,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  optionItem: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: PURPLE_LIGHT,
  },
  selectedOptionItem: {
    backgroundColor: PURPLE_LIGHT,
  },
  optionText: {
    fontSize: 16,
    color: PURPLE_DARK,
  },
  selectedOptionText: {
    fontWeight: 'bold',
    color: PURPLE_DARK,
  },
});
