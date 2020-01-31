import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from 'react-navigation-stack';

import Splash from '~/pages/Splash';
import Dashboard from '~/pages/Dashboard';
import Search from '~/pages/Search';
import RequestsHistory from '~/pages/RequestsHistory';
import Promotion from '~/pages/Promotion';
import Requests from './pages/Requests';
import Profile from '~/pages/Profile';
import Food from '~/pages/Food';

const Main = createStackNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        headerShown: false,
      }
    },
    Promotion: {
      screen: Promotion,
      navigationOptions: ({ navigation }) => ({
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon name="chevron-left" size={35} color="red" />
          </TouchableOpacity>
        ),
        title: 'PROMOÇÕES',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#333',
          fontSize: 15,
          fontWeight: 'bold'
        },
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        }
      }),
    },
    Food: {
      screen: Food,
      navigationOptions: ({ navigation }) => ({
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon name="chevron-left" size={35} color="red" />
          </TouchableOpacity>
        ),
        title: 'DETALHES DO ITEM',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#333',
          fontSize: 15,
          fontWeight: 'bold'
        },
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        }
      }),
    }
  }
)

Main.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};

  if (routeName === 'Food') {
    navigationOptions.tabBarVisible = false;
  }

  return navigationOptions;
};

const Routes = createAppContainer(
  createSwitchNavigator({
    Splash: createSwitchNavigator({
      Splash
    }),
    App: createBottomTabNavigator({
      Dashboard: {
        screen: Main,
        navigationOptions: {
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="home" size={20} color={tintColor} />
          )
        }
      },
      Search: {
        screen: Search,
        navigationOptions: {
          tabBarLabel: 'Busca',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="search" size={20} color={tintColor} />
          )
        }
      },
      Request: {
        screen: createStackNavigator(
          {
            Request: {
              screen: createMaterialTopTabNavigator(
                {
                  RequestsHistory,
                  Requests,
                },
                {
                  navigationOptions: {
                    title: 'PEDIDOS',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                      color: '#333',
                      fontSize: 13,
                      fontWeight: 'bold'
                    },
                    headerStyle: {
                      elevation: 0,
                      shadowOpacity: 0,
                      borderBottomWidth: 0,
                    }
                  },
                  tabBarOptions: {
                    activeTintColor: 'red',
                    labelStyle: {
                      fontSize: 15,
                      color: 'gray',
                    },
                    style: {
                      backgroundColor: '#fff',
                      elevation: 0,
                      shadowOpacity: 0,
                      borderBottomWidth: 0,
                      borderBottomWidth: 1,
                      borderBottomColor: '#DDD'
                    },
                    indicatorStyle: {
                      backgroundColor: 'red',
                    },
                  },
                }
              ),
            },
          },
          {
            navigationOptions: {
              tabBarLabel: 'Pedidos',
              tabBarIcon: ({ tintColor }) => (
                <Icon name="receipt" size={20} color={tintColor} />
              ),
            },
          }
        ),
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="person-outline" size={20} color={tintColor} />
          )
        },
      }
    },
      {
        tabBarOptions: {
          keyboardHidesTabBar: true,
          activeTintColor: '#333',
          inactiveTintCOlor: 'rgba(255, 255, 255, 0.6)'
        }
      })
  })
);

export default Routes;
