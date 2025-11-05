import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LeftTalkContent = ({ message }) => {
  return (
    <View style={styles.container}>
      {/* 프로필 이미지 자리 (View로 모양만 잡음) */}
      <View style={styles.profilePlaceholder} />

      {/* 채팅 말풍선 부분 */}
      <View style={styles.messageBubble}>
        <Text style={styles.messageText}>{message}</Text>{' '}
        {/* 텍스트 렌더링 확인 */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 8,
    marginHorizontal: 10,
  },
  profilePlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#bdbdbd',
    marginRight: 8,
  },
  messageBubble: {
    backgroundColor: '#e0e0e0',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    maxWidth: '75%',
  },
  messageText: {
    fontSize: 16,
    color: '#333333',
  },
});

export default LeftTalkContent;
