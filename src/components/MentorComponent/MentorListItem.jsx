import React, { useContext } from "react"

import { View, Text, Image, StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native"
import { userContext } from "../../Context/userContext"
import { useNavigation } from "@react-navigation/native"



const MentorListItem = () => {

  const navigation = useNavigation();


  const {MentorData} = useContext(userContext)

    return (
      <View>
        {MentorData.map(item => (
          <View style={MentorItemStyle.mentorContainer} key={item.id}>
            <View style={MentorItemStyle.Top}>
              <View style={MentorItemStyle.profile}></View>
              <View>
                <Text>{item.name}</Text>
                <Text>{item.job}</Text>
              </View>
            </View>

            <View>
              <View style={MentorItemStyle.Bottom}>
                <Text style={{fontWeight: 'bold'}}>{item.status}</Text>
                <TouchableOpacity style={MentorItemStyle.BottomBtn}
                onPress={() => (navigation.navigate('MentorImpormation', {
                    id: item.id
                }))}
                >
                  <Text style={{ color: '#ffffff', lineHeight: 40 }}>프로필 보기</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
}

const MentorItemStyle = StyleSheet.create({
  mentorContainer: {
    borderWidth: 1,
    borderColor: 'black',
    width: 400,
    height: 190,
    borderRadius: 30,
    marginBottom: 40,
    backgroundColor: 'white'
  },
  profile: {
    width: 40,
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 50,
  },
  Top: {
    width: '80%',
    height: 90,
    flexDirection: 'row',
    left: 30,
    gap: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  TopBtn: {
    width: 100,
    height: 40,
    backgroundColor: '#2A76DA',
    borderRadius: 10,
  },
  TopBtnText: {
    color: 'white',
    textAlign: 'center',
    lineHeight: 40,
  },
  Bottom: {
    height: 90,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 40,
  },
  BottomBtn: {
    flexDirection: 'row',
    width: 300,
    height: 40,
    backgroundColor: '#2A76DA',
    borderRadius: 10,
    justifyContent: 'center',
    
  },
});


export default MentorListItem;