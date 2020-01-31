import styled from 'styled-components';
import colors from '~/utils/colors';

export const Container = styled.View`
  margin: 20px 0 20px 0;
`;

export const RestaurantLabel = styled.Text`
  margin-bottom: 15px;
  font-size: 20px;
  color: ${colors.black};
  font-weight: bold;
`;

export const Logo = styled.Image`
  width: 65px;
  height: 70px;
  border-radius: 50px;
`;

export const RestaurantItem = styled.View`
  flex-direction: row;
  margin-top: 10px;
  margin-right: ${props => props.horizontal ? '20px' : '0px'};
  padding : 10px;
  background: ${colors.white};
  width: ${props => props.horizontal ? '320px' : '100%'};
  height: 100px;
  border: 1px solid ${colors.gainsboro};
  border-radius: 5px;
  elevation: 1px;
`;

export const RestaurantInfo = styled.View`
  margin-left: 20px;
`;

export const RestaurantName = styled.Text`
  font-size: 16px;
  color: ${colors.black};
  font-weight: bold;
  margin-bottom: 5px;
`;

export const RestaurantLabels = styled.View`
  flex-direction: row;
`;

export const RestaurantsLabels = styled.View`
  margin-bottom: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

export const RestaurantsTitle = styled.Text`
  font-size: 20px;
  color: ${colors.black};
  font-weight: bold;
`;

export const RestaurantsSubTitle = styled.Text`
  color: ${colors.red};
`;

export const RestaurantEvaluation = styled.Text`
  color: ${colors.yellow};
  font-weight: bold;
`;

export const EvaluationText = styled.Text``;

export const RestaurantCategory = styled.Text`
  margin-left: 10px;
  color: ${colors.gray};
`;

export const RestaurantDistance = styled.Text`
  margin-left: 10px;
  color: ${colors.gray};
`;

export const RestaurantTime = styled.View`
  margin-top: 10px;
  flex-direction: row;
`;

export const Minutes = styled.Text`
  color: ${colors.gray};
`;

export const Price = styled.Text`
  margin-left: 10px;
  color: ${props => (props.isFree ? colors.gray : colors.green)};
`;
