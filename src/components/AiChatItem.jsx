import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

import { useState } from 'react';


const AiChatItem = () => {

  const [ai, setAi] = useState("");

  const onChangeAi = (text) => {
    setAi(text)
  }

  return (
    <View style={AiChatItemStyle.container}>
      <View style={AiChatItemStyle.SendChat}>
        <TextInput
          placeholder="채팅을 입력하세요"
          style={AiChatItemStyle.input}
          onChange={onChangeAi}
          value={ai}
        />
        <TouchableOpacity style={AiChatItemStyle.sendButton}>
          <Image
            source={require('../../assets/images/Send.png')}
            style={AiChatItemStyle.sendIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const AiChatItemStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // 하단 정렬
    paddingBottom: 30,
    paddingHorizontal: 10,
  },
  SendChat: {
    flexDirection: 'row', // 가로 배치
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#E7EBEF',
    borderRadius: 30,
    height: 60,
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
  },
  sendButton: {
    width: 45,
    height: 45,
    borderRadius: 22.5, // 원형
    backgroundColor: '#4C8ADB', // 버튼 배경
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000', // 그림자
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4, // 안드로이드 그림자
  },
  sendIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff', // 아이콘 색상 흰색으로
  },
});

export default AiChatItem;
