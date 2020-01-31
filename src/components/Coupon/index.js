import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  CouponButton,
  CouponContent,
  CouponImage,
  CouponLabels,
  CouponTitle,
  CouponSubTitle
} from './styles';

export default function Coupon({ image, title, subtitle, color }) {
  return (
    <CouponButton>
      <CouponContent>
        <CouponImage source={image} />
        <CouponLabels>
          <CouponTitle>{title}</CouponTitle>
          <CouponSubTitle>{subtitle}</CouponSubTitle>
        </CouponLabels>
      </CouponContent>
      <Icon name="keyboard-arrow-right" size={24} color={color} />
    </CouponButton>
  );
}
