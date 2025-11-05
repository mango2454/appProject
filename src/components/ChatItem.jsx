import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
} from 'react-native';

const ChatItem = () => {
  const [chat, setChat] = useState(''); // 현재 입력 중인 메시지
  const [messages, setMessages] = useState([]); // 전송된 메시지 목록

  const onChangeChat = text => {
    setChat(text);
  };

  const onSendMessage = () => {
    if (chat.trim()) {
      // 빈 메시지 전송 방지
      setMessages([...messages, chat]); // 메시지 목록에 추가
      setChat(''); // 입력창 초기화
    }
  };

  return (
    <View style={styles.container}>
      {/* 채팅 메시지 영역 */}
      <View style={styles.messageContainer}>
        {messages.map((message, index) => (
          <View key={index} style={styles.messageBubble}>
            <Text style={styles.messageText}>{message}</Text>
          </View>
        ))}
      </View>

      {/* 채팅 입력 영역 */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="채팅을 입력하세요"
          style={styles.input}
          value={chat}
          onChangeText={onChangeChat}
          onSubmitEditing={onSendMessage} // 키보드 엔터로도 전송
        />
        <TouchableOpacity style={styles.sendButton} onPress={onSendMessage}>
          <Image
            source={require('../../assets/images/Send.png')}
            style={styles.sendIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  messageContainer: {
    flex: 1,
    backgroundColor: '#E9F4FF',
    padding: 10,
  },
  messageBubble: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 15,
    marginBottom: 8,
    alignSelf: 'flex-start',
    maxWidth: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 30,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: 'transparent',
  },
  sendButton: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#4C8ADB',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  sendIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
});

export default ChatItem;
