import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const ChatItem = () => {
  return (
    <View style={styles.container}>
      {/* 채팅 메시지 영역 */}
      <View style={styles.messageContainer}>
        {/* 여기에 채팅 메시지 컴포넌트 렌더링 예정 */}
      </View>

      {/* 채팅 입력 영역 */}
      <View style={styles.inputContainer}>
        <TextInput placeholder="채팅을 입력하세요" style={styles.input} />
        <TouchableOpacity style={styles.sendButton}>
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
    backgroundColor: '#F5F5F5', // 전체 배경
  },
  messageContainer: {
    flex: 1,
    backgroundColor: '#E9F4FF', // 채팅 보여질 영역 배경
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20, // 아래에서 살짝 띄움
    backgroundColor: '#fff',
    borderRadius: 30,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // 안드로이드 그림자
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
