import React from 'react';
import andamento from '~/assets/andamento.png';
import {
  Container,
  Image,
  Title,
  Description
} from './styles';

export default function Requests() {
  return (
    <Container>
      <Image source={andamento} />
      <Title>Nenhum pedido em andamento</Title>
      <Description>Que tal experimentar um lugar novo? É só selecionar Início</Description>
    </Container>
  );
}

Requests.navigationOptions = {
  title: 'ANDAMENTO',
};
