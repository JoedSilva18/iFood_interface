import styled from 'styled-components/native';
import colors from '~/utils/colors';

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  background: ${colors.white_smoke};
  padding: 5px 15px 5px 15px;
  margin-right: ${props => (props.isLast ? '0px' : '15px')};
  border-radius: 4px;
`;

export const Label = styled.Text`
  margin-right: 8px;
  color: ${colors.gray};
`;
