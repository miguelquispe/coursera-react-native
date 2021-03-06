import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ToastAndroid,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {createAppContainer, SafeAreaView} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  createDrawerNavigator,
  DrawerNavigatorItems,
} from 'react-navigation-drawer';
import {Icon} from 'react-native-elements';

import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Reservation from './ReservationComponent';
import Favorites from './FavoritesComponents';
import Login from './LoginComponent';

import {connect} from 'react-redux';
import {
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders,
} from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.comments,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
});

const MenuNavigator = createStackNavigator(
  {
    Menu: {
      screen: Menu,
      navigationOptions: ({navigation}) => ({
        headerLeft: (
          <Icon
            name="bars"
            type="font-awesome"
            size={24}
            color="white"
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),
    },
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

const LoginNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: ({navigation}) => ({
        headerLeft: (
          <Icon
            name="bars"
            type="font-awesome"
            size={24}
            color="white"
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#512DA8',
      },
      title: 'Login',
      headerTintColor: '#fff',
      headerTitleColor: {
        color: '#fff',
      },
    },
  },
);

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => ({
        headerLeft: (
          <Icon
            name="bars"
            type="font-awesome"
            size={24}
            color="white"
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),
    },
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
    About: {
      screen: About,
      navigationOptions: ({navigation}) => ({
        headerLeft: (
          <Icon
            name="bars"
            type="font-awesome"
            size={24}
            color="white"
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),
    },
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
    Contact: {
      screen: Contact,
      navigationOptions: ({navigation}) => ({
        headerLeft: (
          <Icon
            name="bars"
            type="font-awesome"
            size={24}
            color="white"
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),
    },
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

const ReservationNavigator = createStackNavigator(
  {
    Reservation: {
      screen: Reservation,
      navigationOptions: ({navigation}) => ({
        headerLeft: (
          <Icon
            name="bars"
            type="font-awesome"
            size={24}
            color="white"
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),
    },
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

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: {
      screen: Favorites,
      navigationOptions: ({navigation}) => ({
        headerLeft: (
          <Icon
            name="bars"
            type="font-awesome"
            size={24}
            color="white"
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),
    },
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

const customDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{top: 'always', horizontal: 'never'}}>
      <View style={styles.drawerHeader}>
        <View style={{flex: 1}}>
          <Image
            source={require('./images/logo.png')}
            style={styles.drawerImage}
          />
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.drawerHeaderText}>Restaurant Con Fusion</Text>
        </View>
      </View>
      <DrawerNavigatorItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const MainNavigator = createDrawerNavigator(
  {
    Login: {
      screen: LoginNavigator,
      navigationOptions: {
        title: 'Login',
        drawerLabel: 'Login',
        drawerIcon: ({tinColor}) => (
          <Icon name="sign-in" size={24} type="font-awesome" color={tinColor} />
        ),
      },
    },
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        title: 'Home',
        drawerLabel: 'Home',
        drawerIcon: ({tinColor}) => (
          <Icon name="home" size={24} type="font-awesome" color={tinColor} />
        ),
      },
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        title: 'About Us',
        drawerLabel: 'About Us',
        drawerIcon: ({tinColor}) => (
          <Icon
            name="info-circle"
            size={24}
            type="font-awesome"
            color={tinColor}
          />
        ),
      },
    },
    Menu: {
      screen: MenuNavigator,
      navigationOptions: {
        title: 'Menu',
        drawerLabel: 'Menu',
        drawerIcon: ({tinColor}) => (
          <Icon name="list" size={24} type="font-awesome" color={tinColor} />
        ),
      },
    },
    Contact: {
      screen: ContactNavigator,
      navigationOptions: {
        title: 'Contact',
        drawerLabel: 'Contact',
        drawerIcon: ({tinColor}) => (
          <Icon
            name="address-card"
            size={22}
            type="font-awesome"
            color={tinColor}
          />
        ),
      },
    },
    Favorites: {
      screen: FavoritesNavigator,
      navigationOptions: {
        title: 'My Favorites',
        drawerLabel: 'My Favorites',
        drawerIcon: ({tinColor}) => (
          <Icon name="heart" size={24} type="font-awesome" color={tinColor} />
        ),
      },
    },
    Reservation: {
      screen: ReservationNavigator,
      navigationOptions: {
        title: 'Reserve Table',
        drawerLabel: 'Reserve Table',
        drawerIcon: ({tinColor}) => (
          <Icon name="cutlery" size={24} type="font-awesome" color={tinColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    drawerBackgroundColor: '#D1C4E9',
    contentComponent: customDrawerContentComponent,
  },
);

const AppContainer = createAppContainer(MainNavigator);

class Main extends Component {
  suscription = null;

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();

    NetInfo.fetch().then(connectionInfo => {
      ToastAndroid.show(
        'Initial Network Connectivity Type: ' + connectionInfo.type,
        ToastAndroid.LONG,
      );
    });

    this.suscription = NetInfo.addEventListener(this.handleConnectivityChange);
  }

  componentWillUnmount() {
    this.suscription && this.suscription();
  }

  handleConnectivityChange = connectionInfo => {
    switch (connectionInfo.type) {
      case 'none':
        ToastAndroid.show('You are now offline!', ToastAndroid.LONG);
        break;
      case 'wifi':
        ToastAndroid.show('You are now connected to WiFi!', ToastAndroid.LONG);
        break;
      case 'cellular':
        ToastAndroid.show(
          'You are now connected to Cellular!',
          ToastAndroid.LONG,
        );
        break;
      case 'unknown':
        ToastAndroid.show(
          'You now have unknown connection!',
          ToastAndroid.LONG,
        );
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === 'ios' ? 0 : 0,
        }}>
        <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#512DA8',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60,
  },
});

// export default AppContainer;
export default connect(mapStateToProps, mapDispatchToProps)(Main);
