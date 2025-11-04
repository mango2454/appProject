import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const ProfileWrite = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [nickname, setNickname] = useState('');
  const [education, setEducation] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [career, setCareer] = useState('');

  // 📸 이미지 선택
  const pickImage = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' });
    if (result.assets && result.assets.length > 0) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>프로필을 작성해주세요</Text>
      </View>

      <View style={styles.card}>
        {/* 프로필 이미지 */}
        <TouchableOpacity
          style={styles.profileImageContainer}
          onPress={pickImage}
        >
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <View style={styles.placeholder}>
              <Text style={styles.placeholderText}>+</Text>
            </View>
          )}
        </TouchableOpacity>

        {/* 닉네임 */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>닉네임</Text>
          <TextInput
            style={styles.input}
            placeholder="사용하실 이름을 적어주세요"
            value={nickname}
            onChangeText={setNickname}
          />
        </View>

        {/* 학력 정보 */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>학력 정보</Text>
          <TextInput
            style={styles.input}
            placeholder="ex) 소프트웨어 학과 · 2020년 졸업"
            value={education}
            onChangeText={setEducation}
          />
        </View>

        {/* 소개 */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>소개</Text>
          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="자기소개 해주세요 (최대 3줄)"
            multiline
            value={introduction}
            onChangeText={setIntroduction}
          />
        </View>

        {/* 경력 */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>경력</Text>
          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="ex) 프론트엔드 개발자 · 2019 - 2021"
            multiline
            value={career}
            onChangeText={setCareer}
          />
        </View>

        {/* 작성 완료 버튼 */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>작성 완료</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileWrite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F0FA',
  },
header: {
  paddingVertical: 20,
  alignItems: 'center',
  height: 110,
  justifyContent: 'flex-end', // 👈 아래쪽 정렬
},
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#334E9E',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  profileImageContainer: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  placeholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#D8E3F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 40,
    color: '#7A8BAA',
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#FAFAFA',
  },
  button: {
    backgroundColor: '#4472C4',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
