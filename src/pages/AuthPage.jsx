import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';

const AuthPage = () => {
  const [auth, setAuth] = useState('signup');

  return (
    <View style={styles.AuthBack}>
      {/* 상단 구름 이미지 */}
      <Image
        style={styles.clouds}
        source={require('../../assets/images/clouds.png')}
      />

      {/* 바탕 바 영역 */}
      <View style={styles.Bar}>
        {/* 선택된 폼 표시 */}
        {auth === 'signup' ? <SignUpForm /> : <LoginForm />}

        {/* 로그인/회원가입 스위치 버튼 */}
        <View style={styles.switchContainer}>
          <TouchableOpacity
            onPress={() => setAuth('login')}
            style={[
              styles.switchButton,
              auth === 'login' ? styles.activeButton : styles.inactiveButton
            ]}
          >
            <Text style={styles.switchText}>로그인</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setAuth('signup')}
            style={[
              styles.switchButton,
              auth === 'signup' ? styles.activeButton : styles.inactiveButton
            ]}
          >
            <Text style={styles.switchText}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  AuthBack: {
    flex: 1,
    backgroundColor: '#449CEF',
  },
  clouds: {
    width: '100%',
    height: 230,
    resizeMode: 'cover',
  },
  Bar: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
    justifyContent:'space-between',
    paddingTop: 30,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 350,
    height: 50,
    backgroundColor: '#D0D8E0', // 전체 바탕 연한 회색
    borderRadius: 30,
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 50
  },
  switchButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
    height: 40,
    borderRadius: 20,
  },
  activeButton: {
    backgroundColor: '#ffffff', // 선택된 버튼 흰색
  },
  inactiveButton: {
    backgroundColor: '#b3b5b8ff', // 선택되지 않은 버튼 연한 회색
  },
  switchText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default AuthPage;
