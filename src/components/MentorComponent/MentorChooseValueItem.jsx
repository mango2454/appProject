import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MentorChooseValueData = [
  { id: 1, name: '프론트 분야 맨토찾기' },
  { id: 2, name: '백엔드 분야 맨토찾기' },
  { id: 3, name: '기획자 분야 맨토찾기' },
  { id: 4, name: '디자인 분야 맨토찾기' },
  { id: 5, name: '진학 분야 맨토찾기' },
];

const MentorChooseValueItem = () => {
  const navigation = useNavigation();

  const GoProfileWrite = () => {
    navigation.navigate('ProfileWrite');
  };
  return (
    <View style={styles.container}>
      {MentorChooseValueData.map(item => (
        <TouchableOpacity
          onPress={GoProfileWrite}
          key={item.id}
          style={styles.itemButton}
        >
          <View style={styles.box} />
          <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 30 },
  itemButton: {
    width: 350,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    gap: 30,
  },
  box: { width: 40, height: 40, backgroundColor: 'blue', marginLeft: 20 },
  itemText: { fontSize: 20, fontWeight: 'bold' },
});

export default MentorChooseValueItem;
