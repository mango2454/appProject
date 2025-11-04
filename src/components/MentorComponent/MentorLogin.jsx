import React from "react"

import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";



const MentorLogin = () => {

  const navigation = useNavigation();
  const goMentorList = () => {
    navigation.navigate('MentorList');
  }

    return (
      <View>
        <View>
          <Text style={styles.title}>Get Start</Text>
          <Text style={styles.title2}>로그인하여 시작하세요</Text>
        </View>

        <View style={styles.formBox}>
          <View style={styles.gap}>
            <Text style={styles.fontSize}>email</Text>
            <TextInput
              style={styles.form}
              placeholder="이메일을 입력하세요"
            ></TextInput>
          </View>

          <View style={styles.gap}>
            <Text style={styles.fontSize}>password</Text>
            <TextInput
              style={styles.form}
              placeholder="비밀번호를 입력하세요"
            ></TextInput>
          </View>

          <TouchableOpacity onPress={goMentorList} style={styles.loginBtn}>
            <Text style={styles.loginFont}>로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}
export const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: '#1A60BC',
    fontFamily: 'bold',
    textAlign: 'center',
  },
  title2: {
    fontSize: 25,
    color: '#1F4E8B',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  formBox: {
    marginTop: 30,
    gap: 20,
  },
  form: {
    width: 350,
    height: 60,
    borderRadius: 10, // 모서리 둥글게
    backgroundColor: '#E7EBEF',
    fontSize: 18,
    paddingLeft: 20,
  },
  loginBtn: {
    width: 350,
    height: 50,
    backgroundColor: '#2A76DA',
    borderRadius: 20,
    marginTop: 30,
  },
  loginFont: {
    fontFamily: 'bold',
    fontSize: 25,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    lineHeight: 50,
  },
  gap: {
    gap: 10,
  },
  fontSize: {
    fontSize: 20,
    fontFamily: 'bold',
  },
});



export default MentorLogin;