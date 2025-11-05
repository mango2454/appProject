import React, { useState, useRef } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';

// ⭐️ 외부 컴포넌트 임포트 (파일명이 'RightTalkContent.js'와 'LeftTalkContent.js'라고 가정)
import RightTalkContent from './RightTalkContent';
import LeftTalkContent from './leftTalkContent'; // ⭐️ 대문자로 수정하여 파일명 오류 방지

const ChatItem = () => {
  const [chat, setChat] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: '안녕하세요! 상대방 메시지입니다.', sender: 'other' },
    { id: 2, text: '반갑습니다. 제가 보낸 메시지입니다.', sender: 'self' },
  ]);

  // ScrollView Ref 생성
  const scrollViewRef = useRef(null);

  const onChangeChat = text => {
    setChat(text);
  };

  const onSendMessage = () => {
    if (chat.trim()) {
      const newMessage = {
        id: Date.now(),
        text: chat.trim(),
        sender: 'self',
      };

      setMessages(prevMessages => [...prevMessages, newMessage]);
      setChat('');
    }
  };

  // 스크롤을 끝으로 이동시키는 함수
  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  const renderMessage = item => {
    if (item.sender === 'self') {
      return <RightTalkContent key={item.id} message={item.text} />;
    } else {
      return <LeftTalkContent key={item.id} message={item.text} />;
    }
  };

  return (
    <View style={styles.container}>
      {/* 채팅 메시지 영역 */}
      <ScrollView
        style={styles.messageContainer}
        ref={scrollViewRef}
        onContentSizeChange={scrollToBottom}
      >
        {messages.map(renderMessage)}
      </ScrollView>

      {/* 채팅 입력 영역 */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="채팅을 입력하세요"
          style={styles.input}
          value={chat}
          onChangeText={onChangeChat}
          onSubmitEditing={onSendMessage}
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
    // ⭐️ 원래 스타일 유지: 전체 배경색
    backgroundColor: '#F5F5F5',
  },
  messageContainer: {
    flex: 1,
    // ⭐️ 원래 스타일 복구: 메시지 영역 배경색
    backgroundColor: '#E9F4FF',
    padding: 10, // 원래 스타일에서 복구
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
