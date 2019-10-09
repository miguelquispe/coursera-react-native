import React, {Component} from 'react';
import {View, Text, Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Home from './HomeComponent';
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

const HomeNavigator = createStackNavigator(
  {
    Home: {screen: Home},
  },
  {
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

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        title: 'Home',
        drawerLabel: 'Home',
      },
    },
    Menu: {
      screen: MenuNavigator,
      navigationOptions: {
        title: 'Menu',
        drawerLabel: 'Menu',
      },
    },
  },
  {
    drawerBackgroundColor: '#D1C4E9',
  },
);

const AppContainer = createAppContainer(MainNavigator);

// class Main extends Component {
//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           paddingTop: Platform.OS === 'ios' ? 0 : 20,
//         }}>
//         <AppContainer />
//       </View>
//     );
//   }
// }

export default AppContainer;
