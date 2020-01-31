import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '~/utils/format';
import colors from '~/utils/colors';
import api from '~/services/api';
import {
  Container,
  Content,
  FoodInfo,
  FoodImage,
  FoodTitle,
  FoodDescription,
  FoodPrices,
  Price,
  OldPrice,
  RestaurantButton,
  RestaurantLabels,
  ButtonText,
  TimeText,
  Observation,
  HObservation,
  Label,
  ObservationTitle,
  CharNumber,
  ObservartionField,
  BuyContainer,
  Amount,
  AmountText,
  BuyButton,
  BuyText,
} from './styles';

export default function Food({ navigation }) {
  const [food, setFood] = useState({});
  const id = navigation.getParam('id');

  useEffect(() => {
    async function loadFood() {
      const response = await api.get(`/bestSellers?id=${id}`);
      const data = {
        ...response.data[0],
        priceFormatted: formatPrice(response.data[0].price),
        oldPriceFormatted: formatPrice(response.data[0].oldPrice)
      }
      setFood(data);
    }
    loadFood();
  }, []);

  return (
    <Container>
      <Content>
        <FoodImage source={{ uri: food.logo }} />
        <FoodInfo>
          <FoodTitle>{food.name}</FoodTitle>
          <FoodDescription>{food.description}</FoodDescription>
          <FoodPrices>
            <Price>{food.priceFormatted}</Price>
            <OldPrice>{food.oldPriceFormatted}</OldPrice>
          </FoodPrices>

          <RestaurantButton>
            <RestaurantLabels>
              <Icon name="store" size={15} color={colors.red} />
              <ButtonText>{food.restaurantName}</ButtonText>
            </RestaurantLabels>
            <TimeText>{`${food.restaurantTime} min`}</TimeText>
          </RestaurantButton>
        </FoodInfo>
        <Observation>
          <HObservation>
            <Label>
              <Icon name="chat" size={20} color="#000" />
              <ObservationTitle>Alguma observação?</ObservationTitle>
            </Label>
            <CharNumber>0/140</CharNumber>
          </HObservation>
          <ObservartionField
            placeholder="Ex: Tirar a cebola, maionese à parte, ponto da carne etc"
            textAlignVertical={'top'}
            multiline={true}
          />
        </Observation>
      </Content>
      <BuyContainer>
        <Amount>
          <Icon name="remove" size={15} color={colors.gray} />
          <AmountText> 1 </AmountText>
          <Icon name="add" size={15} color={colors.red} />
        </Amount>
        <BuyButton>
          <BuyText>Adicionar</BuyText>
          <BuyText>{food.priceFormatted}</BuyText>
        </BuyButton>
      </BuyContainer>
    </Container>
  );
}
