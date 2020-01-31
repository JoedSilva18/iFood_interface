import React from 'react';
import acai from '~/assets/acai.png';
import bebidas from '~/assets/bebidas.png';
import japonesa from '~/assets/japonesa.png';
import pizza from '~/assets/pizza.png';
import lanches from '~/assets/lanches.png';
import {
  CategoryLabel,
  CategoryTabs,
  CategoryItem,
  CategoryImage,
  CategoryText,
} from './styles';

export default function Category() {
  return (
    <>
      <CategoryLabel>Categorias</CategoryLabel>
      <CategoryTabs>
        <CategoryItem>
          <CategoryImage source={acai} />
          <CategoryText>Açaí</CategoryText>
        </CategoryItem>
        <CategoryItem>
          <CategoryImage source={lanches} />
          <CategoryText>Lanches</CategoryText>
        </CategoryItem>
        <CategoryItem>
          <CategoryImage source={bebidas} />
          <CategoryText>Bebidas</CategoryText>
        </CategoryItem>
        <CategoryItem>
          <CategoryImage source={japonesa} />
          <CategoryText>Japonesa</CategoryText>
        </CategoryItem>
        <CategoryItem isLast>
          <CategoryImage source={pizza} />
          <CategoryText>Pizza</CategoryText>
        </CategoryItem>
      </CategoryTabs>
    </>
  );
}
