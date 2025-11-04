import React from "react";

import { View, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";

const BottomBar = () => {

    const navigation = useNavigation();
    
      const GoChatList = () => {
        navigation.navigate('ChatList');
      };

      const goHome = () => {
        navigation.navigate('MentorChoose')
      }

    return(
      <View style={BottomBarStyle.bottomBar}>
        <TouchableOpacity>
          <Image source={require('../../assets/images/Message circle.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={goHome}>
          <Image source={require('../../assets/images/Home.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={GoChatList}>
          <Image source={require('../../assets/images/Message circle.png')} />
        </TouchableOpacity>
      </View>
    )
}

const BottomBarStyle = StyleSheet.create({
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

export default BottomBar