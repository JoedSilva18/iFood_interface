import React from 'react';
import PromotionIcon from '~/assets/promotion.png';
import CoffeeIcon from '~/assets/coffee.png';
import HoldIcon from '~/assets/hold.png';
import CandiesIcon from '~/assets/candies.png';
import DonationIcon from '~/assets/donation.png';
import {
  TypeTabs,
  TypeContent,
  Images,
  TypeText,
} from './styles';

export default function Type({ navigation }) {

  console.log()
  return (
    <TypeTabs>
      <TypeContent onPress={() => navigation.navigate('Promotion')}>
        <Images source={PromotionIcon} />
        <TypeText>Promoções</TypeText>
      </TypeContent>
      <TypeContent>
        <Images source={CoffeeIcon} />
        <TypeText>Café & Padaria</TypeText>
      </TypeContent>
      <TypeContent>
        <Images source={HoldIcon} />
        <TypeText>Pra Retirar</TypeText>
      </TypeContent>
      <TypeContent>
        <Images source={CandiesIcon} />
        <TypeText>Doces</TypeText>
      </TypeContent>
      <TypeContent isLast>
        <Images source={DonationIcon} />
        <TypeText>Doação</TypeText>
      </TypeContent>
    </TypeTabs>
  );
}
