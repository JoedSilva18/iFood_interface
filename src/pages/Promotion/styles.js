import styled from 'styled-components/native';
import colors from '~/utils/colors';

export const Container = styled.ScrollView`
  padding: 10px 20px 10px 20px;
  background: ${colors.white};
`;

export const RestaurantTabs = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`
  margin-top: 30px;
  margin-bottom: 40px;
`;
export const RestaurantImages = styled.Image`
  margin-right: ${props => (props.isLast ? '0px' : '15px')};
  border-radius: 5px;
`;
