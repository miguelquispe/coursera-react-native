import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';

const MenuNavigator = createStackNavigator(
  {
    Menu: {screen: Menu},
    DishDetail: {screen: DishDetail},
  },
  {
    initialRouteName: 'Menu',
    defaultNavigationOptions: {
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
    defaultNavigationOptions: {
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

const AboutNavigator = createStackNavigator(
  {
    About: {screen: About},
  },
  {
    defaultNavigationOptions: {
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

const ContactNavigator = createStackNavigator(
  {
    Contact: {screen: Contact},
  },
  {
    defaultNavigationOptions: {
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
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        title: 'About Us',
        drawerLabel: 'About Us',
      },
    },
    Menu: {
      screen: MenuNavigator,
      navigationOptions: {
        title: 'Menu',
        drawerLabel: 'Menu',
      },
    },
    Contact: {
      screen: ContactNavigator,
      navigationOptions: {
        title: 'Contact',
        drawerLabel: 'Contact',
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
