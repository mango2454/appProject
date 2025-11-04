import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AiChatItem from '../components/AiChatItem';

import { useNavigation } from '@react-navigation/native';

const AiChat = () => {

      const navigation = useNavigation();
  
      const Back = () => {
          navigation.navigate('MentorChoose');
      }
  return (
    <View style={AiChatStyle.AiChatBack}>
      {/* 구름 배경 */}
      <View style={AiChatStyle.cloudContainer}>
        <Image
          source={require('../../assets/images/clouds.png')}
          style={AiChatStyle.cloudImage}
        />

        {/* 구름 위에 겹치는 화살표 + AI 이미지 */}
        <View style={AiChatStyle.overlayContainer}>
          <TouchableOpacity onPress={Back}>
            <Image
              source={require('../../assets/images/arrow.png')}
              style={AiChatStyle.arrowImage}
            />
          </TouchableOpacity>
          <View style={AiChatStyle.aiContainer}>
            <Image
              source={require('../../assets/images/Group 27.png')}
              style={AiChatStyle.aiImage}
            />
          </View>
        </View>
      </View>

      {/* 아래 콘텐츠 */}
      <View style={AiChatStyle.contentContainer}>
        <AiChatItem />
      </View>
    </View>
  );
};

const AiChatStyle = StyleSheet.create({
  AiChatBack: {
    flex: 1,
    backgroundColor: '#9CC3F6',
  },

  // 구름 배경 가로 전체 채우기
  cloudContainer: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  cloudImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },

  // 구름 위 겹치는 부분
  overlayContainer: {
    position: 'absolute',
    top: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowImage: {
    width: 45,
    height: 45,
    marginLeft: 10, // 왼쪽 여백
  },
  aiContainer: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -30 }], // aiImage 너비 / 2 만큼 이동
  },
  aiImage: {
    width: 60,
    height: 60,
  },

  contentContainer: {
    width: '100%',
    height: 800,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
    
  },
});

export default AiChat;
