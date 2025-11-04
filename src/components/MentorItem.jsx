import React, { useContext } from "react"

import { View,Text,  } from "react-native"
import { StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native"


const MentorItem = ({mentor}) => {




    return (
      <View style={MentorItemStyle.MentorItem}>
        <View style={MentorItemStyle.MentorItemTop}>
          <View style={MentorItemStyle.MentorProfile}></View>
          <View>
            <Text style={MentorItemStyle.name}>{mentor.name}</Text>
            <Text style={MentorItemStyle.job}>{mentor.job}</Text>
          </View>
          <View>
            <TouchableOpacity style={MentorItemStyle.MsgBtn}>
              <Text style={MentorItemStyle.BtnTxt}>메세지 보내기</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={MentorItemStyle.status}>
          <Text style={MentorItemStyle.Title}>학력 정보</Text>
          <Text style={MentorItemStyle.subTitle}>{mentor.status}</Text>
        </View>

        <View style={MentorItemStyle.field}>
          <Text style={MentorItemStyle.Title}>전문분야</Text>
          <View style={MentorItemStyle.list}>
            <View style={MentorItemStyle.listItem}>
              <Text style={MentorItemStyle.ItemListTxt}>react</Text>
            </View>
            <View style={MentorItemStyle.listItem}>
              <Text style={MentorItemStyle.ItemListTxt}>typescript</Text>
            </View>
            <View style={MentorItemStyle.listItem}>
              <Text style={MentorItemStyle.ItemListTxt}>vue</Text>
            </View>
          </View>
        </View>

        <View style={MentorItemStyle.introduce}>
          <Text style={MentorItemStyle.Title}>소개</Text>
          <Text style={MentorItemStyle.subTitle}>{mentor.introduce}</Text>
        </View>

        <View style={MentorItemStyle.career}>
          <Text style={MentorItemStyle.Title}>경력</Text>
          <Text style={MentorItemStyle.subTitle}>{mentor.career}</Text>
        </View>
      </View>
    );
}

const MentorItemStyle = StyleSheet.create({
  MentorItem: {
    width: 400,
    height: 750,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  MentorItemTop: {
    width: '85%',
    height: 100,
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  MentorProfile: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'blue',
  },
  MsgBtn: {
    width: 140,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#3884E8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BtnTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  job: {
    fontSize: 15,
    marginTop: 4,
  },
  status: {
    width: '85%',
    height: 100,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    gap: 10,
  },
  field: {
    width: '85%',
    height: 100,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    gap: 10,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  listItem: {
    width: 90,
    height: 30,
    backgroundColor: '#DCE2EA',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  },
  introduce: {
    width: '85%',
    height: 170,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    gap: 10,
  },
  career: {
    width: '85%',
    marginTop: 20,
    gap: 10,
  },
  Title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 15,
    textAlign: 'left'
  },
  ItemListTxt: {
    fontWeight: 'bold'
  },
  content: {
    textAlign: 'center'
  }
});

export default MentorItem