import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '~/utils/colors';
import gift from '~/assets/gift.png';
import Coupon from '~/components/Coupon';
import {
  Container,
  Header,
  ContentHeader,
  Image,
  Labels,
  NameText,
  EditText,
  Nav,
  NavItem,
  NavInfo,
  NavLabels,
  NavText,
  NavDescription,
  Body
} from './styles';

export default function Profile() {
  return (
    <Container>
      <Header>
        <ContentHeader>
          <Image
            source={
              { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9EFYLY2VE0Cxtqx4bV_sZ17r7j5sWtumSE7uSdTw7Fd2cRJsw" }
            }
          />
          <Labels>
            <NameText>Joed Silva</NameText>
            <EditText>Editar perfil</EditText>
          </Labels>
        </ContentHeader>
        <Icon name="keyboard-arrow-right" size={30} color={colors.gainsboro} />
      </Header>
      <Body>

        <Coupon
          image={gift}
          title="Ganhe R$15 indicando o iFood"
          subtitle="Convide seus amigos"
          color={colors.gainsboro}
        />

        <Nav>
          <NavItem>
            <NavInfo>
              <Icon name="notifications-none" size={33} color={colors.gray} />
              <NavLabels>
                <NavText isMain>Notificações</NavText>
                <NavDescription>Minha central de notificações</NavDescription>
              </NavLabels>
            </NavInfo>
            <Icon name="keyboard-arrow-right" size={24} color={colors.gainsboro} />
          </NavItem>
          <NavItem>
            <NavInfo>
              <Icon name="account-balance-wallet" size={33} color={colors.gray} />
              <NavLabels>
                <NavText isMain>Carteira</NavText>
                <NavDescription>Meu saldo e QR code</NavDescription>
              </NavLabels>
            </NavInfo>
            <Icon name="keyboard-arrow-right" size={24} color={colors.gainsboro} />
          </NavItem>
          <NavItem>
            <NavInfo>
              <Icon name="card-giftcard" size={33} color={colors.gray} />
              <NavLabels>
                <NavText isMain>Cupons</NavText>
                <NavDescription>Meus cupons de desconto</NavDescription>
              </NavLabels>
            </NavInfo>
            <Icon name="keyboard-arrow-right" size={24} color={colors.gainsboro} />
          </NavItem>
          <NavItem>
            <NavInfo>
              <Icon name="favorite-border" size={33} color={colors.gray} />
              <NavLabels>
                <NavText isMain>Favoritos</NavText>
                <NavDescription>Meus locais favoritos</NavDescription>
              </NavLabels>
            </NavInfo>
            <Icon name="keyboard-arrow-right" size={24} color={colors.gainsboro} />
          </NavItem>
          <NavItem>
            <NavInfo>
              <Icon name="credit-card" size={33} color={colors.gray} />
              <NavLabels>
                <NavText isMain>Pagamento</NavText>
                <NavDescription>Minhas formas de pagamento</NavDescription>
              </NavLabels>
            </NavInfo>
            <Icon name="keyboard-arrow-right" size={24} color={colors.gainsboro} />
          </NavItem>
          <NavItem>
            <NavInfo>
              <Icon name="home" size={33} color={colors.gray} />
              <NavLabels>
                <NavText isMain>Endereços</NavText>
                <NavDescription>Meus endereços de entrega</NavDescription>
              </NavLabels>
            </NavInfo>
            <Icon name="keyboard-arrow-right" size={24} color={colors.gainsboro} />
          </NavItem>
        </Nav>

        <Nav>
          <NavItem>
            <NavInfo>
              <Icon name="help-outline" size={33} color={colors.light_gray} />
              <NavLabels>
                <NavText>Ajuda</NavText>
              </NavLabels>
            </NavInfo>
            <Icon name="keyboard-arrow-right" size={24} color={colors.gainsboro} />
          </NavItem>
          <NavItem>
            <NavInfo>
              <Icon name="settings-applications" size={33} color={colors.light_gray} />
              <NavLabels>
                <NavText>Configurações</NavText>
              </NavLabels>
            </NavInfo>
            <Icon name="keyboard-arrow-right" size={24} color={colors.gainsboro} />
          </NavItem>
          <NavItem>
            <NavInfo>
              <Icon name="security" size={33} color={colors.light_gray} />
              <NavLabels>
                <NavText>Segurança</NavText>
              </NavLabels>
            </NavInfo>
            <Icon name="keyboard-arrow-right" size={24} color={colors.gainsboro} />
          </NavItem>
          <NavItem>
            <NavInfo>
              <Icon name="store" size={33} color={colors.light_gray} />
              <NavLabels>
                <NavText>Sugerir restaurantes</NavText>
              </NavLabels>
            </NavInfo>
            <Icon name="keyboard-arrow-right" size={24} color={colors.gainsboro} />
          </NavItem>
          <NavItem>
            <NavInfo>
              <Icon name="shopping-cart" size={33} color={colors.light_gray} />
              <NavLabels>
                <NavText>Seja parceiro</NavText>
              </NavLabels>
            </NavInfo>
            <Icon name="keyboard-arrow-right" size={24} color={colors.gainsboro} />
          </NavItem>
        </Nav>
      </Body>
    </Container >
  );
}
