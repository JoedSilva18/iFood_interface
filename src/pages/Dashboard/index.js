import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated } from 'react-native';
import colors from '~/utils/colors';
import Type from '~/components/Tabs/Type';
import LastRestaurants from '~/components/Tabs/LastRestaurants';
import Category from '~/components/Tabs/Category';
import Restaurant from '~/components/Restaurant';
import Coupon from '~/components/Coupon';
import Posters from '~/components/Posters';
import Input from '~/components/Input';
import cupom from '~/assets/cupom.png';
import {
  Container,
  Header,
  Body,
  AddressField,
  Address
} from './styles';

export default function Dashboard({ navigation }) {

  const scrollOffset = new Animated.Value(0);

  return (
    <Container>
      <Header style={[
        {
          marginTop: scrollOffset.interpolate({
            inputRange: [0, 140],
            outputRange: [0, -60],
            extrapolate: 'clamp'
          }),
          borderWidth: scrollOffset.interpolate({
            inputRange: [0, 140],
            outputRange: [0, 1],
            extrapolate: 'clamp'
          }),
          borderColor: '#d6d7da'
        }
      ]}>
        <AddressField>
          <Address>Avenida Brasil, 850</Address>
          <Icon name="keyboard-arrow-down" size={20} color={colors.red} />
        </AddressField>
        <Input />
      </Header>
      <Body
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: { y: scrollOffset }
            }
          }
        ])}
      >
        <Coupon image={cupom}
          title="Cupom de R$10"
          subtitle="Válido até 20/01"
          color={colors.red} />

        <Type navigation={navigation} />
        <Posters />
        <LastRestaurants />
        <Category />

        <Restaurant
          title="Restaurantes"
          filter={true}
          subTitle={false}
          horizontal={false}
        />
      </Body>
    </Container >
  );
}

