import React, { useContext } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MentorImpormationItem from '../../components/MentorComponent/MentorImpormationItem';
import { useRoute, useNavigation } from '@react-navigation/native';
import { userContext } from '../../Context/userContext';

const MentorImpormation = () => {
  const { MentorData } = useContext(userContext);
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;

  const mentor = MentorData.find(m => m.id === id);

  const backMentorList = () => {
    navigation.navigate('MentorList');
  };

  return (
    <View style={MentorsStyle.MentorBackStyle}>
      <View style={MentorsStyle.MentorHead}>
        <TouchableOpacity
          onPress={backMentorList}
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <Image
            style={MentorsStyle.MentorImage}
            source={require('../../../assets/images/arrow.png')}
          />
          <Text style={MentorsStyle.MentorText}>목록으로 돌아가기</Text>
        </TouchableOpacity>
      </View>

      {/* 자세한 내용 컴포넌트 */}
      <View style={MentorsStyle.MentorContainer}>
        <MentorImpormationItem mentor={mentor} />
      </View>
    </View>
  );
};

const MentorsStyle = StyleSheet.create({
  MentorBackStyle: {
    flex: 1,
    backgroundColor: '#e9f4ff',
  },
  MentorHead: {
    width: '100%',
    height: 110,
    justifyContent: 'center',
    marginTop: 20,
  },
  MentorImage: {
    width: 50,
    height: 30,
    marginLeft: 20,
  },
  MentorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  MentorText: {
    fontSize: 18,
    marginLeft: 10,
  },
});

export default MentorImpormation;
