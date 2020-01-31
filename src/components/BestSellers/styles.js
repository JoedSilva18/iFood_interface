import styled from 'styled-components/native';
import colors from '~/utils/colors';

export const Container = styled.View`
  margin-top: 30px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

export const Title = styled.Text`
  margin-bottom: 15px;
  font-size: 20px;
  color: ${colors.black};
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  color: ${colors.red};
`;

export const Item = styled.TouchableOpacity`
  margin-bottom: 10px;
  margin-right: 10px;
  align-items: flex-start;
`;

export const Image = styled.Image`
  width: 160px;
  height: 110px;
  border-radius: 5px;
`;

export const Labels = styled.View`
`;

export const FoodName = styled.Text`
  margin-top: 10px;
  max-width: 150px;
  font-size: 15px;
  color: ${colors.black};
  font-weight: bold;
`;

export const Prices = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
`;

export const Price = styled.Text`
  font-size: 17px;
  color: ${colors.green};
`;

export const OldPrice = styled.Text`
  margin-left: 10px;
  text-decoration: line-through;
  color: ${colors.light_gray};
`;
