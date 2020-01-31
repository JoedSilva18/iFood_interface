import styled from 'styled-components';
import { Animated } from 'react-native';
import colors from '~/utils/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.white};
`;

export const Header = styled(Animated.View)`
  padding: 0 20px 10px 20px;
`;

export const Body = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  padding: 10px 20px 10px 20px;
`;

export const AddressField = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 15px 0 30px 0;
`;

export const Address = styled(Animated.Text)`
  margin-right: 4px;
  font-weight: bold;
`;

export const RestaurantLabel = styled.Text`
  font-size: 20px;
  color: ${colors.black};
  font-weight: bold;
`;
