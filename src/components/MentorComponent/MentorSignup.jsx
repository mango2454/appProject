import React from "react"
import { styles } from "./MentorLogin"


import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation } from "@react-navigation/native";

import { useState } from "react";

const MentorSignup = () => {

  const [mentorSignup, setMentorSignup] = useState({
    name: "",
    email: "",
    password: ""
  })

  const mentorSignupName = (text) => {
    setMentorSignup({
      ...mentorSignup,
      name: text
    })
  }
  const mentorSignupEmail = (text) => {
    setMentorSignup({
      ...mentorSignup,
      email: text
    })
  }
  const mentorSignupPassword = (text) => {
    setMentorSignup({
      ...mentorSignup,
      password: text
    })
  }


  const navigation = useNavigation()

  const goMentorChooseValue = () => {
    navigation.navigate('MentorChooseValue');
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
              onChange={mentorSignupName}
              value={mentorSignup.name}
            ></TextInput>
          </View>
          <View style={styles.gap}>
            <Text style={styles.fontSize}>Email</Text>
            <TextInput
              style={styles.form}
              placeholder="이메일을 입력하세요"
              onChange={mentorSignupEmail}
              value={mentorSignup.email}
            ></TextInput>
          </View>
          <View style={styles.gap}>
            <Text style={styles.fontSize}>Password</Text>
            <TextInput
              style={styles.form}
              placeholder="비밀번호를 입력하세요"
              onChange={mentorSignupPassword}
              value={mentorSignup.password}
            ></TextInput>
          </View>

          <TouchableOpacity
            onPress={goMentorChooseValue}
            style={styles.loginBtn}
          >
            <Text style={styles.loginFont}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

export default MentorSignup;