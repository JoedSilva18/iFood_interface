import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import colors from '~/utils/colors';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 10px 20px 10px 20px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.white_smoke};
  background: ${colors.white};
`;

export const InputField = styled.View`
  margin-top: 1px;
  flex-direction: row;
  align-items: center;
  padding: 0 10px 0 10px;
  background: ${colors.white_smoke};
  border-radius: 4px;
`;

export const TInput = styled.TextInput``;

export const TicketButton = styled.View`
  margin-top: 20px;
  padding: 10px 10px 10px 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${colors.white_smoke};
`;

export const Body = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
   padding: 10px 20px 10px 20px;
   background: ${colors.white};
`;

export const SearchContent = styled.View`
  margin-top: 20px;
`;

export const SearchLabel = styled.Text`
  font-size: 17px;
  color: ${colors.black};
  font-weight: bold;
`;

export const CategoryContent = styled.View`
  margin-top: 50px;
`;

export const CategoryLabel = styled.Text`
  font-size: 17px;
  color: ${colors.black};
  font-weight: bold;
`;

export const SearchField = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(0, 0, 0, 0.2);
`;

export const SearchText = styled.Text`
  font-size: 17px;
  margin-left: 15px;
  color: ${colors.gray};
`;

export const CategoryList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2
})`
  margin-top: 30px;
`;

export const MenuImage = styled.Image`
  border-radius: 8px;
  margin-bottom: 5px;
  margin-right: 8px;
  width: 170px;
  height: 80px;
`;
