import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import MentorChooseItem from '../components/MentorChooseItem';
import BottomBar from '../components/BottomBar';

import { useNavigation } from '@react-navigation/native';

const MentorChoose = () => {

  const navigation = useNavigation();

  const GoAiChat = () => {
    navigation.navigate('AiChat')
  }




  return (
    <View style={MenTorChooseStyle.MentorBack}>
      {/* 상단 타이틀 */}
      <View style={MenTorChooseStyle.MentorHeader}>
        <Text style={MenTorChooseStyle.MentorHeaderMainTitle}>안녕하세요</Text>
        <Text style={MenTorChooseStyle.MentorHeaderSubTitle}>
          선택한 분야의 맨토를 만나보세요
        </Text>
      </View>

      {/* 멘토 리스트 */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={MenTorChooseStyle.scrollContent} // ✅ 추가
      >
        <View style={MenTorChooseStyle.ItemContainer}>
          <MentorChooseItem />
        </View>
      </ScrollView>

      <TouchableOpacity onPress={GoAiChat} style={MenTorChooseStyle.AiBar}>
        <Image source={require('../../assets/images/Group 27.png')} />
      </TouchableOpacity>

      {/* 하단바 */}
      <View>
          <BottomBar />
      </View>
    </View>
  );
};

const MenTorChooseStyle = StyleSheet.create({
  MentorBack: {
    flex: 1,
    backgroundColor: '#e9f4ff',

  },
  MentorHeader: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MentorHeaderMainTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1A60BC',
  },
  MentorHeaderSubTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A60BC',
  },
  scrollContent: {
    alignItems: 'center', // ✅ ScrollView 내용 전체를 가운데로
    paddingBottom: 120, // ✅ 하단바 안가리게 여백
  },
  ItemContainer: {
    width: '90%', // ✅ 아이템이 화면 중앙에 위치하도록
    alignItems: 'center',
  },
  AiBar: {
    position: 'absolute',
    right: 15,
    bottom: 150,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: '#1A60BC',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});

export default MentorChoose;
