import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ChooseKind from '../components/ChooseKind';

function LoginAndSignUp() {
  return (
    <LinearGradient
      colors={['#449CEF', '#FFFFFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1.2 }}
      style={styles.back}
    >
      <View>
        <Image
          style={styles.cloud}
          source={require('../../assets/images/clouds.png')}
        />
      </View>
      <View>
        <ChooseKind />
      </View>
      <View>
        <Image
          style={styles.cloud}
          source={require('../../assets/images/clouds.png')}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  back: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cloud: {
    width: 500,
    height: 300,
  },
});

export default LoginAndSignUp;
