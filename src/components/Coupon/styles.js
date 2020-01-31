import styled from 'styled-components/native';
import colors from '~/utils/colors';

export const CouponButton = styled.View`
  margin-top: 20px;
  padding: 10px 10px 10px 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${colors.white_smoke};
  background: ${colors.white};
  elevation: 1;
`;

export const CouponImage = styled.Image`
  width: 50px;
  height: 50px;
`;

export const CouponContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CouponLabels = styled.View`
  margin-left: 10px;
`;

export const CouponTitle = styled.Text`
  color: ${colors.black};
  font-weight: bold;
`;

export const CouponSubTitle = styled.Text`
  color: ${colors.silver};
`;
