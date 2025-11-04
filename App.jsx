/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FirstPage from "./src/pages/FirstPage";
import LoginAndSignUp from "./src/pages/LoginAndSignUp";
import AuthPage from "./src/pages/AuthPage";
import ChooseValue from "./src/pages/ChooseValue";
import LoginForm from "./src/components/LoginForm";
import MentorChoose from "./src/pages/MentorChoose";
import Mentor from "./src/pages/Mentor";
import { userContext } from "./src/Context/userContext";
import AiChat from "./src/pages/AiChat";
import Chat from "./src/pages/Chat";
import ChatList from "./src/pages/ChatList";
import MentorAuth from "./src/pages/MentorPage/MentorAuth";
import MentorList from "./src/pages/MentorPage/MentorList";
import MentorImpormation from "./src/pages/MentorPage/MentorImportmation";
import MentorChooseValue from "./src/pages/MentorPage/MentorChooseValue";
import ProfileWrite from "./src/pages/MentorPage/ProfileWrite";


const Stack = createNativeStackNavigator();

const MentorData = [
  {
    id: 1,
    name: '카피바라',
    job: '프론트 앤드 개발자',
    status: '소프트웨어학과 2020졸업',
    introduce: `안녕하세요 웹개발 1년차 개발자입니다.스타트업부터 대기업까지 다양한 환경에서 프론트엔드 개발을 해왔습니다. 취업 준비부터 커리어 전환, 이직 준비까지 도와드릴 수 있습니다.`,
    career: `프론트앤드 개발자 스타트업 기업에서 
    19년도부터25년도까기 일했습니다`,
  },
  {
    id: 2,
    name: '해피바라',
    job: '프론트 앤드 개발자',
    status: '빅데이터과 2020졸업',
    introduce: `안녕하세요 웹개발 2년차 개발자입니다.
    스타트업부터 대기업까지 다양한 환경에서 프론트엔드 개발
    을 해왔습니다. 취업 준비부터 커리어 전환, 이직 준
    비까지 도와드릴 수 있습니다.`,
    career: `프론트앤드 개발자 스타트업 기업에서 19년도부터25년도까기 일했습니다`,
  },
  {
    id: 3,
    name: '피코파크',
    job: '프론트 앤드 개발자',
    status: '소프트웨어학과 2022졸업',
    introduce: `안녕하세요 웹개발 3년차 개발자입니다.
    스타트업부터 대기업까지 다양한 환경에서 프론트엔드 개발
    을 해왔습니다. 취업 준비부터 커리어 전환, 이직 준
    비까지 도와드릴 수 있습니다.`,
    career: `프론트앤드 개발자 스타트업 기업에서 
    19년도부터25년도까기 일했습니다`,
  },
  {
    id: 4,
    name: '베르스타핀',
    job: '프론트 앤드 개발자',
    status: '소프트웨어학과 1999졸업',
    introduce: `안녕하세요 웹개발 4년차 개발자입니다.
    스타트업부터 대기업까지 다양한 환경에서 프론트엔드 개발
    을 해왔습니다. 취업 준비부터 커리어 전환, 이직 준
    비까지 도와드릴 수 있습니다.`,
    career: `프론트앤드 개발자 스타트업 기업에서 
    19년도부터25년도까기 일했습니다`,
  },
  {
    id: 5,
    name: '베르스타핀',
    job: '프론트 앤드 개발자',
    status: '소프트웨어학과 1999졸업',
    introduce: `안녕하세요 웹개발 5년차 개발자입니다.
    스타트업부터 대기업까지 다양한 환경에서 프론트엔드 개발
    을 해왔습니다. 취업 준비부터 커리어 전환, 이직 준
    비까지 도와드릴 수 있습니다.`,
    career: `프론트앤드 개발자 스타트업 기업에서 
    19년도부터25년도까기 일했습니다`,
  },
  {
    id: 6,
    name: '베르스타핀',
    job: '프론트 앤드 개발자',
    status: '소프트웨어학과 1999졸업',
    introduce: `안녕하세요 웹개발 6년차 개발자입니다.
    스타트업부터 대기업까지 다양한 환경에서 프론트엔드 개발
    을 해왔습니다. 취업 준비부터 커리어 전환, 이직 준
    비까지 도와드릴 수 있습니다.`,
    career: `프론트앤드 개발자 스타트업 기업에서 
    19년도부터25년도까기 일했습니다`,
  },
  {
    id: 7,
    name: '베르스타핀',
    job: '프론트 앤드 개발자',
    status: '소프트웨어학과 1999졸업',
    introduce: `안녕하세요 웹개발 7년차 개발자입니다.
    스타트업부터 대기업까지 다양한 환경에서 프론트엔드 개발
    을 해왔습니다. 취업 준비부터 커리어 전환, 이직 준
    비까지 도와드릴 수 있습니다.`,
    career: `프론트앤드 개발자 스타트업 기업에서 
    19년도부터25년도까기 일했습니다`,
  },
];

function App() {  

  

  return (
    <userContext.Provider
      value={{
        MentorData,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="FirstPage"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="FirstPage" component={FirstPage} />
          <Stack.Screen name="LoginAndSignUp" component={LoginAndSignUp} />
          <Stack.Screen name="LoginForm" component={LoginForm} />
          <Stack.Screen name="AuthPage" component={AuthPage} />
          <Stack.Screen name="ChooseValue" component={ChooseValue} />
          <Stack.Screen name="MentorChoose" component={MentorChoose} />
          <Stack.Screen name="Mentor" component={Mentor} />
          <Stack.Screen name="AiChat" component={AiChat} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="ChatList" component={ChatList} />
          <Stack.Screen name="MentorAuth" component={MentorAuth} />
          <Stack.Screen name="MentorList" component={MentorList} />
          <Stack.Screen name="MentorImpormation" component={MentorImpormation} />
          <Stack.Screen name="MentorChooseValue" component={MentorChooseValue} />
          <Stack.Screen name="ProfileWrite" component={ProfileWrite} />
        </Stack.Navigator>
      </NavigationContainer>
    </userContext.Provider>
  );
}


export default App;
