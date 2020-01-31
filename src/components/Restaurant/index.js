import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '~/utils/colors';
import { formatPrice } from '~/utils/format';
import Filter from '~/components/Tabs/Filter';
import api from '~/services/api';
import {
  Container,
  Logo,
  RestaurantItem,
  RestaurantInfo,
  RestaurantName,
  RestaurantLabels,
  RestaurantsLabels,
  RestaurantsTitle,
  RestaurantsSubTitle,
  RestaurantEvaluation,
  EvaluationText,
  RestaurantCategory,
  RestaurantDistance,
  RestaurantTime,
  Minutes,
  Price
} from './styles';

export default function Restaurant({ title, filter, subtitle, horizontal }) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function loadRestaurants() {
      const response = await api.get('restaurants');
      const data = response.data.map(item => ({
        ...item,
        priceFormatted: formatPrice(item.tax)
      }))
      setRestaurants(data);
    }
    loadRestaurants();
  }, []);

  return (
    <Container>
      <RestaurantsLabels>
        <RestaurantsTitle>{title}</RestaurantsTitle>
        {subtitle ? <RestaurantsSubTitle>Ver mais</RestaurantsSubTitle> : null}
      </RestaurantsLabels>
      {filter ? <Filter /> : null}
      <FlatList
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={restaurants}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <RestaurantItem key={item.key} horizontal={horizontal}>
            <Logo source={{ uri: item.logo }} />
            <RestaurantInfo>
              <RestaurantName>{item.text}</RestaurantName>
              <RestaurantLabels>
                <RestaurantEvaluation>
                  <Icon name="star" size={12} color={colors.yellow} />
                  <EvaluationText>{item.evaluate}</EvaluationText>
                </RestaurantEvaluation>
                <RestaurantCategory>{item.category}</RestaurantCategory>
                <RestaurantDistance>{`${item.distance}km`}</RestaurantDistance>
              </RestaurantLabels>
              <RestaurantTime>
                <Minutes>{`${item.minutes} min`}</Minutes>
                <Price isFree={item.tax}>{item.tax !== 0 ? item.priceFormatted : 'Grátis'}</Price>
              </RestaurantTime>
            </RestaurantInfo>
          </RestaurantItem>
        )}
      />
    </Container>
  );
}
