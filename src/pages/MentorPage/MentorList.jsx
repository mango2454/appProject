import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MentorListItem from '../../components/MentorComponent/MentorListItem';

const MentorList = () => {
  const navigation = useNavigation();

  return (
    <View style={MentorListStyle.MentorBack}>
      {/* 상단 타이틀 */}
      <View style={MentorListStyle.MentorHeader}>
        <Text style={MentorListStyle.MentorHeaderMainTitle}>안녕하세요</Text>
        <Text style={MentorListStyle.MentorHeaderSubTitle}>
          선택한 분야의 맨토를 만나보세요
        </Text>
      </View>

      {/* 멘토 리스트 */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={MentorListStyle.scrollContent}
      >
        <View style={MentorListStyle.ItemContainer}>
          <MentorListItem />
        </View>
      </ScrollView>

      {/* 하단바 */}
      <View style={MentorListStyle.bottomBar}>
        {/* 홈 버튼 (가운데) */}
        <TouchableOpacity style={MentorListStyle.homeButton}>
          <Image
            source={require('../../../assets/images/Home.png')}
            style={MentorListStyle.icon}
          />
        </TouchableOpacity>

        {/* 메시지 버튼 (오른쪽 아래 고정) */}
        <TouchableOpacity style={MentorListStyle.messageButton}>
          <Image
            source={require('../../../assets/images/Message circle.png')}
            style={MentorListStyle.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const MentorListStyle = StyleSheet.create({
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
    alignItems: 'center',
    paddingBottom: 120,
  },
  ItemContainer: {
    width: '90%',
    alignItems: 'center',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: '#1A60BC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeButton: {
    position: 'absolute',
    bottom: 25,
    alignSelf: 'center', // 중앙 고정
  },
  messageButton: {
    position: 'absolute',
    bottom: 25,
    right: 25, // 오른쪽 하단 고정
  },
  icon: {
    width: 55,
    height: 45,
  },
});

export default MentorList;
