import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const RestaurantImages = styled.Image`
  width: 350px;
  height: 180px;
  margin-right: ${props => (props.isLast ? '0px' : '15px')};
  border-radius: 5px;
`;
