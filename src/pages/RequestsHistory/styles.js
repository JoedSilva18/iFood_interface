import styled from 'styled-components/native';
import colors from '~/utils/colors';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background: ${colors.white_smoke};
  padding: 0 20px;
`;
