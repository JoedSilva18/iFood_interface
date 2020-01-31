import React, { useState, useEffect } from 'react';
import api from '~/services/api';
import {
  LastRestaurantsLabels,
  LastRestaurantsTitle,
  LastRestaurantsSubTitle,
  LastRestaurantsTabs,
  LastRestaurantItem,
  CoverImage,
  LastRestaurantImage,
  RestaurantClose,
  CloseText,
  LastRestaurantText,
} from './styles';

export default function LastRestaurants() {
  const [lastRestaurants, setLastRestaurants] = useState([]);

  useEffect(() => {
    async function loadLastRestaurants() {
      const response = await api.get('/lastRestaurants');

      setLastRestaurants(response.data);
    }
    loadLastRestaurants();
  }, []);

  return (
    <>
      <LastRestaurantsLabels>
        <LastRestaurantsTitle>Últimos restaurantes</LastRestaurantsTitle>
        <LastRestaurantsSubTitle>Ver mais</LastRestaurantsSubTitle>
      </LastRestaurantsLabels>
      <LastRestaurantsTabs
        horizontal
        showsHorizontalScrollIndicator={false}
        data={lastRestaurants}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <LastRestaurantItem>
            <CoverImage>
              <LastRestaurantImage source={{ uri: item.logo }} />
              {!item.isOpen ?
                <RestaurantClose>
                  <CloseText>Fechado</CloseText>
                </RestaurantClose> : null}
            </CoverImage>
            <LastRestaurantText>{item.title}</LastRestaurantText>
          </LastRestaurantItem>
        )}
      />
    </>
  );
}
