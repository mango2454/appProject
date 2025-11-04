import React from 'react';
import { useEffect } from 'react';
import { Text, StyleSheet, Image, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

function FirstPage({ navigation }) {
  
    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.navigate('LoginAndSignUp');
        }, 2000);

        return () => clearTimeout(timer)
    },[navigation])

  return (
    <LinearGradient
      colors={['#449CEF', '#FFFFFF']} // 위쪽: 하늘색, 아래쪽: 흰색
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1.2 }}
      style={styles.background}
    >
      {/* 텍스트 중앙용 컨테이너 */}
      <View style={styles.center}>
        <Text style={styles.text}>Mentor Talk</Text>
      </View>

      {/* 이미지 하단 */}
      <Image
        source={require('../../assets/images/clouds.png')}
        style={styles.image}
      />
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center', // 가로 중앙 정렬
    justifyContent: 'space-between', // 텍스트와 이미지 사이 공간 균등
    paddingVertical: 20, // 상하 여백
  },
  center: {
    flex: 1,
    justifyContent: 'center', // 세로 중앙 정렬
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FFF',
  },
  image: {
    width: 500,
    height: 300,
  },
});

export default FirstPage;
