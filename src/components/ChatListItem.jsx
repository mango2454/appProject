import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { userContext } from '../Context/userContext';

const ChatListItem = () => {
  const { MentorData } = useContext(userContext);

  if (!MentorData || MentorData.length === 0) return null;

  return (
    <View style={styles.container}>
      {MentorData.map(item => (
        <View key={item.id} style={styles.card}>
          {/* 프로필 */}
          <View style={styles.profile}></View>

          {/* 이름 + 내용 */}
          <View style={styles.info}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.message}>안녕하세요</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#E9F4FF',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    borderBottomWidth: 1,
    
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2A76DA',
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  message: {
    fontSize: 14,
    color: '#333',
  },
});

export default ChatListItem;
