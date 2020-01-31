import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '~/utils/colors';
import {
  InputField,
  TInput
} from './styles';

export default function Input() {
  return (
    <InputField>
      <Icon name="search" size={32} color={colors.red} />
      <TInput placeholder="Prato ou restaurante" />
    </InputField>
  );
}
