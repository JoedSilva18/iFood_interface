import React from 'react';
import Posters from '~/components/Posters'
import Restaurant from '~/components/Restaurant';
import BestSellers from '~/components/BestSellers';
import { Container } from './styles';

export default function Promotion({ navigation }) {
  return (
    <Container>

      <Posters />
      <Restaurant
        title="Taxa grátis pra você"
        filter={false}
        subtitle={true}
        horizontal={true}
      />
      <BestSellers navigation={navigation} />

      <Restaurant
        title="Restaurantes"
        filter={false}
        subtitle={false}
        horizontal={false}
      />
    </Container>
  );
}
