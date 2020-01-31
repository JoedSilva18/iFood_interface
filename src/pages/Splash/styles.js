import styled from 'styled-components';
import { Animated } from 'react-native';
import colors from '~/utils/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${colors.red};
`;

export const Background = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  height: 57%;
  background: ${colors.red};
  z-index: 2;
`;

export const Text = styled(Animated.Text)`
  position: absolute;
  font-size: 30px;
  color: ${colors.white};
  z-index: 2;
`;

export const Logo = styled(Animated.Image)`
  width: 121px;
  height: 65px;
  z-index: 3;
`;
