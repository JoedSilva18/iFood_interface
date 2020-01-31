import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import colors from '~/utils/colors';

export const Content = styled.View`
  margin-top: 15px;
`;

export const Info = styled.View`
  margin: 10px 0 10px 0;
  background: ${colors.white};
  padding: 17px;
  border-radius: 5px;
  elevation: 3;
`;

export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  padding-bottom: 20px;
  align-items: center;
  margin-bottom: 15px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
`;

export const Date = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const HeaderLabels = styled.View`
  margin-left: 20px;
`;

export const Title = styled.Text`
  font-size: 15px;
  color: ${colors.black};
`;

export const Status = styled.Text`
  color: ${colors.light_gray};
`;

export const Body = styled.View``;

export const Description = styled.View`
  padding-bottom: 20px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
`;

export const DescriptionText = styled.Text`
  font-size: 15px;
  color: ${colors.light_gray};
`;

export const Evaluate = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 0 15px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
`;

export const EvaluateText = styled.Text`
  color: ${colors.black};
  font-size: 15px;
`;

export const Buttons = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 50px 0 50px;
`;

export const Button = styled.TouchableOpacity``;

export const ButtonText = styled.Text`
  font-size: 15px;
  color: ${colors.red};
`;

