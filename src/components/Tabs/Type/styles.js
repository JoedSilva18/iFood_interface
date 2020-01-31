import styled from 'styled-components';
import colors from '~/utils/colors';

export const TypeTabs = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`
  margin-top: 25px;
`;

export const TypeContent = styled.TouchableOpacity`
  align-items: center;
  margin-right: ${props => (props.isLast ? '0px' : '10px')};
`;

export const TypeText = styled.Text`
  color: ${colors.black};
`;

export const Images = styled.Image`
`;
