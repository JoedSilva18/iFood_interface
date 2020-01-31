import styled from 'styled-components/native';
import colors from '~/utils/colors';

export const Container = styled.View`
  background: ${colors.white};
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 50px 0 50px;
`;

export const Image = styled.Image`
  width: 300px;
  height: 300px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${colors.black};
`;

export const Description = styled.Text`
  margin-top: 15px;
  text-align: center;
  font-size: 14px;
  color: ${colors.gray};
`;
