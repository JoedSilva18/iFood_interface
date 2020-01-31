import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import StarReview from 'react-native-star-review';
import api from '~/services/api';
import colors from '~/utils/colors';
import {
  Content,
  Info,
  Header,
  Date,
  Image,
  HeaderLabels,
  Title,
  Status,
  Body,
  Description,
  DescriptionText,
  Evaluate,
  EvaluateText,
  Buttons,
  Button,
  ButtonText
} from './styles';

export default function Request() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    async function loadRequests() {
      const response = await api.get('requests');
      setRequests(response.data);
    }
    loadRequests();
  }, []);

  return (
    <FlatList
      data={requests}
      renderItem={({ item }) => (
        <Content>
          <Date>{item.date}</Date>
          <Info>
            <Header>
              <Image source={{ uri: item.logo }} />
              <HeaderLabels>
                <Title>{item.title}</Title>
                <Status>{`${item.status} - ${item.code}`}</Status>
              </HeaderLabels>
            </Header>
            <Body>
              <Description>
                <DescriptionText>{item.description}
                </DescriptionText>
              </Description>
              <Evaluate>
                <EvaluateText>Avalie seu pedido</EvaluateText>
                <StarReview
                  ratings={item.evaluation}
                  disableReview={true}
                  starColor={colors.yellow}
                />
              </Evaluate>
              <Buttons>
                <Button onPress={() => { }}>
                  <ButtonText>Ajuda</ButtonText>
                </Button>
                <Button onPress={() => { }}>
                  <ButtonText>Detalhes</ButtonText>
                </Button>
              </Buttons>
            </Body>
          </Info>
        </Content>
      )}
      keyExtractor={item => item.id}
    />
  );
}
