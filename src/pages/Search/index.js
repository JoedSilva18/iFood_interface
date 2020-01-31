import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '~/utils/colors';
import api from '~/services/api';
import Input from '~/components/Input';
import cardapio0 from '~/assets/search/cardapio0.png';
import cardapio1 from '~/assets/search/cardapio1.png';
import cardapio2 from '~/assets/search/cardapio2.png';
import cardapio3 from '~/assets/search/cardapio3.png';
import cardapio4 from '~/assets/search/cardapio4.png';
import cardapio5 from '~/assets/search/cardapio5.png';
import cardapio6 from '~/assets/search/cardapio6.png';
import cardapio7 from '~/assets/search/cardapio7.png';
import cardapio8 from '~/assets/search/cardapio8.png';
import cardapio9 from '~/assets/search/cardapio9.png';
import {
  Container,
  Header,
  Body,
  SearchContent,
  SearchLabel,
  CategoryContent,
  CategoryLabel,
  SearchText,
  SearchField,
  CategoryList,
  MenuImage
} from './styles';

const menus = [
  cardapio0,
  cardapio1,
  cardapio2,
  cardapio3,
  cardapio4,
  cardapio5,
  cardapio6,
  cardapio7,
  cardapio8,
  cardapio9,
];

export default function Search() {

  const [recents, setRecents] = useState([]);

  useEffect(() => {
    async function loadRecentes() {
      const response = await api.get('recentes');
      setRecents(response.data);
    }
    loadRecentes()
  }, []);
  return (
    <Container>
      <Header>
        <Input />
      </Header>
      <Body>
        <SearchContent>
          <SearchLabel>Buscas Recentes</SearchLabel>
          <FlatList
            data={recents}
            renderItem={({ item }) => (
              <SearchField>
                <Icon name="access-time" size={20} color={colors.gray} />
                <SearchText>{item.title}</SearchText>
              </SearchField>
            )}
            keyExtractor={item => item.id}
          />
        </SearchContent>
        <CategoryContent>
          <CategoryLabel>Categoria</CategoryLabel>
          <CategoryList
            data={menus}
            renderItem={({ item }) => (
              <MenuImage source={item} />
            )}
            keyExtractor={item => item}
          />
        </CategoryContent>
      </Body>
    </Container>
  );
}
