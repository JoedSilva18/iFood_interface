import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import logo from '~/assets/logo.png';
import {
  Container,
  Logo,
  Text,
  Background
} from './styles';

export default function Splash({ navigation }) {

  const logoScale = new Animated.Value(0.8);
  const textY = new Animated.Value(0);

  useEffect(() => {
    function animated() {
      Animated.sequence([
        Animated.timing(logoScale, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true
        }),
        Animated.timing(textY, {
          toValue: 70,
          duration: 1000,
        })
      ]).start(() => {
        setTimeout(() => {
          navigation.navigate('Dashboard');
        }, 1000);
      });
    }
    animated();
  }, [logoScale, textY]);
  return (
    <Container>
      <Logo source={logo} style={{
        transform: [
          {
            scale: logoScale.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          }
        ]
      }} />
      <Text style={{
        transform: [
          {
            translateY: textY
          }
        ]
      }}>Clone</Text>
      <Background />
    </Container>
  );
}
