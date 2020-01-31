import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import colors from '~/utils/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.white};
`;

export const Header = styled.View`
  width: 100%;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${colors.white_smoke};
`;

export const ContentHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Image = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 50px;
`;

export const Labels = styled.View`
  margin-left: 10px;
`;

export const NameText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${colors.black};
`;

export const EditText = styled.Text`
  font-size: 13px;
  color: ${colors.gray};
`;

export const Nav = styled.View`
  margin: 30px 0 20px 0;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(0, 0, 0, 0.2);
`;

export const NavInfo = styled.View`
  flex-direction: row;
`;

export const NavLabels = styled.View`
  margin-left: 15px;
`;

export const NavText = styled.Text`
  margin-top: ${props => (props.isMain ? '0px' : '6px')};
  font-size: ${props => (props.isMain ? '17px' : '15px')};
  color: ${props => (props.isMain ? colors.black : colors.gray)};
`;

export const NavDescription = styled.Text`
  font-size: 13px;
  color: ${colors.gray};
`;

export const Body = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  padding: 10px;
`;
