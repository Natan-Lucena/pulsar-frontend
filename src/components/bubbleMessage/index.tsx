import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PURPLE_LIGHT = '#D5A7E8';

interface BubbleMessageProps {
  message: string;
}

export function BubbleMessage({ message }: BubbleMessageProps) {
  return (
    <View style={bubbleStyles.wrapper}>
      <View style={bubbleStyles.bubble}>
        <Text style={bubbleStyles.messageText}>{message}</Text>
      </View>
      <View style={bubbleStyles.bubbleTip} />
    </View>
  );
}

const bubbleStyles = StyleSheet.create({
  wrapper: {
    alignSelf: 'flex-start',
    width: '80%',
    marginBottom: 40,
  },
  bubble: {
    backgroundColor: PURPLE_LIGHT,
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  messageText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4F1D7B',
    lineHeight: 30,
  },
  bubbleTip: {
    position: 'absolute',
    top: -5,
    right: 5,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 15,
    borderTopWidth: 15,
    borderLeftColor: 'transparent',
    borderTopColor: PURPLE_LIGHT,
    transform: [{ rotate: '45deg' }],
  },
});
