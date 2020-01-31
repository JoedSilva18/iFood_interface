import React from 'react';
import Request from '~/components/Request';
import { Container } from './styles';

export default function RequestsHistory() {
  return (
    <Container>
      <Request />
    </Container>
  );
}

RequestsHistory.navigationOptions = {
  title: 'ANTERIORES',
};
