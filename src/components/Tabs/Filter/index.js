import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '~/utils/colors';
import {
  Container,
  Content,
  Label
} from './styles';

export default function Filter() {
  return (
    <Container>
      <Content>
        <Label>Filtros</Label>
        <Icon name="list" size={25} color={colors.gray} />
      </Content>
      <Content>
        <Label>Ordenar</Label>
        <Icon name="keyboard-arrow-down" size={25} color={colors.gray} />
      </Content>
      <Content>
        <Label>Entrega Grátis</Label>
      </Content>
      <Content>
        <Label>Distância</Label>
        <Icon name="keyboard-arrow-down" size={25} color={colors.gray} />
      </Content>
      <Content>
        <Label>Entrega iFood</Label>
      </Content>
      <Content isLast>
        <Label>Super Restaurante</Label>
      </Content>
    </Container>
  );
}
