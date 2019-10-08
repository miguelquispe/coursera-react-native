import React, {Component} from 'react';
import {View, Text, Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishDetailComponent';

const MenuNavigator = createStackNavigator(
  {
    Menu: {screen: Menu},
    DishDetail: {screen: DishDetail},
  },
  {
    initialRouteName: 'Menu',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#512DA8',
      },
      headerTintColor: '#fff',
      headerTitleColor: {
        color: '#fff',
      },
    },
  },
);

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constans.statusBarHeight,
        }}>
        <MenuNavigator />
      </View>
    );
  }
}

export default Main;
