import React from "react"
import { styles } from "./LoginForm"


import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const SignUpForm = () => {
    return (
      <View>
        <View>
          <Text style={styles.title}>Get Start</Text>
          <Text style={styles.title2}>새 계정을 만드세요</Text>
        </View>

        <View style={styles.formBox}>
          <View style={styles.gap}>
            <Text style={styles.fontSize}>Full Name</Text>
            <TextInput style={styles.form} placeholder="이름을 입력하세요"></TextInput>
          </View>
          <View style={styles.gap}>
            <Text style={styles.fontSize}>Email</Text>
            <TextInput style={styles.form} placeholder="이메일을 입력하세요"></TextInput>
          </View>
          <View style={styles.gap}>
            <Text style={styles.fontSize}>Password</Text>
            <TextInput style={styles.form} placeholder="비밀번호를 입력하세요"></TextInput>
          </View>

          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginFont}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

export default SignUpForm