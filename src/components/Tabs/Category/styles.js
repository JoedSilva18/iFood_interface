import styled from 'styled-components/native';
import colors from '~/utils/colors';

export const CategoryLabel = styled.Text`
  margin-bottom: 15px;
  font-size: 20px;
  color: ${colors.black};
  font-weight: bold;
`;

export const CategoryTabs = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`
  margin-bottom: 30px;
`;

export const CategoryItem = styled.View`
  align-items: center;
  margin-right: ${props => (props.isLast ? '0px' : '15px')};
`;

export const CategoryImage = styled.Image`
  width: 100px;
  height: 70px;
  border-radius: 5px;
`;

export const CategoryText = styled.Text`
  color: ${colors.black};
`;
