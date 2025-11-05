import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RightTalkContent = ({ message }) => {
  return (
    <View style={styles.container}>
      <View style={styles.messageBubble}>
        <Text style={styles.messageText}>{message}</Text>{' '}
        {/* 텍스트 렌더링 확인 */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    marginVertical: 8,
    marginHorizontal: 10,
  },
  messageBubble: {
    backgroundColor: '#34b7f1',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    maxWidth: '75%',
  },
  messageText: {
    fontSize: 16,
    color: '#ffffff',
  },
});

export default RightTalkContent;
