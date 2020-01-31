import styled from 'styled-components/native';
import colors from '~/utils/colors';

export const LastRestaurantsLabels = styled.View`
  margin-bottom: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

export const LastRestaurantsTitle = styled.Text`
  font-size: 20px;
  color: ${colors.black};
  font-weight: bold;
`;

export const LastRestaurantsSubTitle = styled.Text`
  color: ${colors.red};
`;

export const LastRestaurantsTabs = styled.FlatList`
  margin-bottom: 40px;
`;

export const CoverImage = styled.View`
  border-right-width: 1px;
  border-right-color: ${colors.white_smoke};
`;

export const LastRestaurantItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: ${props => (props.isLast ? '0px' : '10px')};
  width: 270px;
  background: ${colors.white};
  border-radius: 5px;
  border: 2px solid ${colors.white_smoke};
`;

export const LastRestaurantImage = styled.Image`
  margin: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const RestaurantClose = styled.View`
  justify-content: center;
  align-items: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background: rgba(0,0,0, 0.4);
  position: absolute;
  width: 70px;
  height: 70px;
`;

export const CloseText = styled.Text`
  font-size: 12px;
  color: ${colors.white};
  font-weight: bold;
`;

export const LastRestaurantText = styled.Text`
  margin-left: 30px;
  font-weight: bold;
  color: ${colors.black};
`;
