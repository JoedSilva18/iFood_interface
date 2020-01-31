import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import api from '~/services/api';
import {
  Container,
  RestaurantImages
} from './styles';

export default function Posters() {

  const [posters, setPosters] = useState([]);

  useEffect(() => {
    async function loadRestaurants() {
      const response = await api.get('posters');
      setPosters(response.data);
    }
    loadRestaurants();
  }, []);

  return (
    <Container>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={posters}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <RestaurantImages source={{ uri: item.uri }} />
        )}
      />
    </Container>
  );
}
