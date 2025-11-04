import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MentorChooseValueItem from '../../components/MentorComponent/MentorChooseValueItem';

// 📱 현재 화면 너비 가져오기
const screenWidth = Dimensions.get('window').width;

const MentorChooseValue = () => {
  return (
    <LinearGradient
      colors={['#ffffff', '#449CEF']}
      start={{ x: 0, y: -1.5 }}
      end={{ x: 0, y: 1.2 }}
      style={ChooseValueStyle.ChooseValueBack}
    >
      {/* ✅ 이미지와 텍스트 겹치는 부분 */}
      <View style={ChooseValueStyle.imageContainer}>
        <Image
          style={ChooseValueStyle.ChooseValueImage}
          source={require('../../../assets/images/clouds.png')}
          resizeMode="cover" // ✅ 꽉 차게
        />
        <Text style={ChooseValueStyle.ChooseValueTitle}>Mentor Talk</Text>
      </View>

      {/* 아래 텍스트 */}

      <View style={ChooseValueStyle.ChooseValueBar}>
        <View style={ChooseValueStyle.textContainer}>
          <Text style={ChooseValueStyle.greeting}>안녕하세요</Text>
          <Text style={ChooseValueStyle.subText}>
            원하시는 분야를 선택해주세요
          </Text>
        </View>

        {/* 선택 아이템 */}
        <View style={ChooseValueStyle.ItemBox}>
          <MentorChooseValueItem />
        </View>
      </View>
    </LinearGradient>
  );
};

const ChooseValueStyle = StyleSheet.create({
  ChooseValueBack: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imageContainer: {
    position: 'relative',
    width: screenWidth, // ✅ 화면 너비로 변경
    height: 230, // 필요에 따라 조정
    alignItems: 'center',
    justifyContent: 'center',
  },
  ChooseValueImage: {
    width: '100%', // ✅ 부모 컨테이너 꽉 채움
    height: '100%',
  },
  ChooseValueTitle: {
    position: 'absolute',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#1A60BC',
    textAlign: 'center',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  greeting: {
    fontSize: 45,
    fontWeight: '600',
    color: '#1f4e88',
  },
  subText: {
    fontSize: 23,
    color: '#1f4e88',
    fontWeight: 'bold',
  },
  ChooseValueBar: {
    width: '100%',
    height: 750,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  ItemBox: {
    paddingTop: 50,
    alignItems: 'center',
  },
});

export default MentorChooseValue;
