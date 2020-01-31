import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { formatPrice } from '~/utils/format';
import api from '~/services/api';
import {
  Container,
  Header,
  Title,
  SubTitle,
  Item,
  Image,
  Labels,
  FoodName,
  Prices,
  Price,
  OldPrice
} from './styles';

export default function BestSellers({ navigation }) {
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    async function loadBestSellers() {
      const response = await api.get('bestSellers');
      const data = response.data.map(item => ({
        ...item,
        priceFormatted: formatPrice(item.price),
        oldPriceFormatted: formatPrice(item.oldPrice)
      }))
      setBestSellers(data);
    }
    loadBestSellers();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Mais vendidos em promoção</Title>
        <SubTitle>Ver mais</SubTitle>
      </Header>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={bestSellers}
        renderItem={({ item }) => (
          <Item onPress={() => {
            navigation.navigate('Food', {
              id: item.id
            })
          }}>
            <Image source={{ uri: item.logo }} />
            <Labels>
              <FoodName>{item.name}</FoodName>
              <Prices>
                <Price>{item.priceFormatted}</Price>
                <OldPrice>{item.oldPriceFormatted}</OldPrice>
              </Prices>
            </Labels>
          </Item>
        )}
        keyExtractor={item => item.id}
      />
    </Container>
  );
}
