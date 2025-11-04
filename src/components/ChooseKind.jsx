import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MentorAuth from '../pages/MentorPage/MentorAuth';

const ChooseKind = () => {
  // 버튼 클릭 시 AuthPage로 이동
  const navigation  = useNavigation();

  const goMentorAuth = () => {
    navigation.navigate('MentorAuth');
  }

  const GoAuthPage = () => {
    navigation.navigate('AuthPage')
  }

  return (
    <View style={styles.background}>
      <View style={styles.topBox}>
        <Text style={styles.title1}>선택해주세요</Text>
        <Text style={styles.title2}>어떤 역할로 시작하시겠어요?</Text>
      </View>

      <View style={styles.bottomBox}>
        {/* 멘티 버튼 */}
        <TouchableOpacity onPress={GoAuthPage} style={styles.button}>
          <Text style={styles.buttonText1}>멘티로 시작하기</Text>
          <Text style={styles.buttonText2}>선배에게 조언을 받고싶어요</Text>
        </TouchableOpacity>

        {/* 멘토 버튼 */}
        <TouchableOpacity onPress={goMentorAuth} style={styles.button}>
          <Text style={styles.buttonText1}>멘토로 시작하기</Text>
          <Text style={styles.buttonText2}>후배에게 경험을 나누고싶어요</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    width: 350,
    height: 400,
    borderRadius: 30,
  },
  topBox: {
    width: 350,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  title1: {
    fontSize: 40,
    color: '#1A60BC',
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 20,
    color: '#1F4E8B',
    fontWeight: 'bold',
  },
  bottomBox: {
    width: 350,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 35,
  },
  button: {
    width: 250,
    height: 80,
    backgroundColor: '#2C75D4',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  buttonText1: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  buttonText2: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
});

export default ChooseKind;
