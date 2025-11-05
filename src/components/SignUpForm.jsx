import React from "react"
import { styles } from "./LoginForm"
import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";





import { View, Text, TextInput, TouchableOpacity } from 'react-native';






const SignUpForm = () => {

  const [signup, setSignUp] = useState({
    email: "",
    name: "",
    password: ""
  })

    useEffect(() => {
      const SignupSubmit = () => {
        const API_Signup = "/register";
      };
    }, [signup]);



  const SignupEmail = (text) => {
    setSignUp({
      ...signup,
      email: text
    })
  }
  const SignupName = (text) => {
    setSignUp({
      ...signup,
      name: text
    })
  }
  const SignupPassword = (text) => {
    setSignUp({
      ...signup,
      password: text
    })
  }


    return (
      <View>
        <View>
          <Text style={styles.title}>Get Start</Text>
          <Text style={styles.title2}>새 계정을 만드세요</Text>
        </View>

        <View style={styles.formBox}>
          <View style={styles.gap}>
            <Text style={styles.fontSize}>Full Name</Text>
            <TextInput
              style={styles.form}
              placeholder="이름을 입력하세요"
              onChange={SignupName}
              value={signup.name}
            ></TextInput>
          </View>
          <View style={styles.gap}>
            <Text style={styles.fontSize}>Email</Text>
            <TextInput
              style={styles.form}
              placeholder="이메일을 입력하세요"
              onChange={SignupEmail}
              value={signup.email}
            ></TextInput>
          </View>
          <View style={styles.gap}>
            <Text style={styles.fontSize}>Password</Text>
            <TextInput
              style={styles.form}
              placeholder="비밀번호를 입력하세요"
              onChange={SignupPassword}
              value={signup.password}
            ></TextInput>
          </View>

          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginFont}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

export default SignUpForm