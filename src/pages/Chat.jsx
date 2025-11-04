import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ChatItem from '../components/ChatItem';
import { useNavigation } from '@react-navigation/native';

const Chat = () => {
  const route = useRoute();
  const { mentorId, mentorName } = route.params;

    const navigation = useNavigation();

    const goBack = () => {
      navigation.navigate('ChatList')
    }

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.arrowButton}>
          <Image
            source={require('../../assets/images/arrow.png')}
            style={styles.arrowImage}
          />
        </TouchableOpacity>

        <View style={styles.profileBox}></View>

        <Text style={styles.mentorName}>{mentorName}</Text>
      </View>

      {/* 채팅 영역 */}
      <View style={styles.chatContainer}>
        <ChatItem />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row', // 가로 정렬
    alignItems: 'center', // 세로 가운데 정렬
    backgroundColor: '#fff', // 흰색 배경
    borderBottomWidth: 1, // 아래쪽 경계선
    borderBottomColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 15,
    height:100,
    marginTop: 30
  },
  arrowButton: {
    marginRight: 10,
  },
  arrowImage: {
    width:  40,
    height: 40,
  },
  profileBox: {
    width: 40,
    height: 40,
    borderRadius: 20, // 원형
    backgroundColor: '#2A76DA', // 임시 색상
    marginRight: 10,
  },
  mentorName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  chatContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});

export default Chat;
