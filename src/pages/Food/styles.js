import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '~/utils/colors';

export const Container = styled.View`
  padding: 15px;
  background: ${colors.white};
  height: 100%;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})``

export const FoodInfo = styled.View`
  margin-top: 25px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
`;

export const FoodImage = styled.Image`
  height: 200px;
  width: 100%;
  border-radius: 5px;
`;

export const FoodTitle = styled.Text`
  font-size: 25px;
  color: ${colors.black};
  font-weight: bold;
`;

export const FoodDescription = styled.Text`
  font-size: 16px;
  color: ${colors.gray};
`;

export const FoodPrices = styled.View`
  margin-top: 15px;
  flex-direction: row;
  align-items: center;
`;

export const Price = styled.Text`
  font-size: 21px;
  color: ${colors.green};
`;

export const OldPrice = styled.Text`
  font-size: 15px;
  margin-left: 10px;
  text-decoration: line-through;
  color: ${colors.gainsboro};
`;

export const RestaurantButton = styled.TouchableOpacity`
  margin: 30px 0 30px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 3px;
  border: 1px solid ${colors.white_smoke};
  padding :15px 15px 15px 15px;
`;

export const RestaurantLabels = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: red;
  font-size: 15px;
  margin-left: 10px;
`;

export const TimeText = styled.Text``;

export const Observation = styled.View`
  margin-top: 15px;
  padding: 5px;
`;

export const HObservation = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

export const ObservationTitle = styled.Text`
  margin-left: 10px;
  color: ${colors.black};
  font-weight: bold;
`;

export const CharNumber = styled.Text`
  color: ${colors.light_gray};
`;

export const ObservartionField = styled.TextInput`
  margin-top: 10px;
  padding: 15px;
  height: 80px;
  border-radius: 5px;
  border: 2px solid ${colors.white_smoke};
`;

export const BuyContainer = styled.View`
  padding-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-width: 1px;
  border-top-color: ${colors.gainsboro};
`;

export const Amount = styled.View`
  width: 30%;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  padding: 15px 20px 15px 20px;
  border-radius: 5px;
  border: 1px solid ${colors.white_smoke};
`;

export const AmountText = styled.Text`
  font-size: 15px;
  color: ${colors.black};
`;

export const BuyButton = styled(RectButton)`
  flex-direction: row;
  justify-content: space-between;
  width: 65%;
  padding: 15px 20px 15px 20px;
  background: red;
  border-radius: 5px;
`;

export const BuyText = styled.Text`
  font-size: 15px;
  color: ${colors.white};
  font-weight: bold;
`;

