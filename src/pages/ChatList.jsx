import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import BottomBar from '../components/BottomBar';
import ChatListItem from '../components/ChatListItem';
import MentorChatListItem from '../components/MentorComponent/MentorChatListItem';

import { useNavigation } from '@react-navigation/native';

const ChatList = () => {

    const navigation = useNavigation();
const GoBack = () => {
  navigation.navigate('MentorChoose')
};


  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={GoBack} style={styles.arrowButton}>
          <Image
            source={require('../../assets/images/arrow.png')}
            style={styles.arrowImage}
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Message</Text>
      </View>

      {/* 가운데 View - 채팅 리스트 등 */}
      <ScrollView
        style={styles.content}
        contentContainerStyle={{ padding: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* 여기에 ChatItem 컴포넌트를 렌더링하면 됩니다 */}
        <ChatListItem />
      </ScrollView>

      {/* 하단 바 */}
      <View style={styles.bottomBar}>
        <BottomBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#83b8e9ff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#83b8e9ff',
    paddingHorizontal: 15,
    position: 'relative',
    height: 130,
    paddingBottom: 15,
  },
  arrowButton: {
    position: 'absolute',
    left: 15,
    bottom: 20,
  },
  arrowImage: {
    width: 40,
    height: 40,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1A60Bc',
    marginBottom: 15,
  },
  content: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
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

export default ChatList;
