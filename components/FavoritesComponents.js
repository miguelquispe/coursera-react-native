import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';
import {ListItem} from 'react-native-elements';
import {Loading} from './LoadingComponent';

import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    favorites: state.favorites,
  };
};

class Favorites extends Component {
  static navigationOptions = {
    title: 'My Favorites',
  };

  render() {
    const {navigate} = this.props.navigation;
    const renderMenuItem = ({item, index}) => {
      return (
        <ListItem
          key={index}
          title={item.name}
          subtitle={item.description}
          hideChevron={true}
          onPress={() => navigate('DishDetail', {dishId: item.id})}
          leftAvatar={{source: {uri: baseUrl + item.image}}}
        />
      );
    };

    if (this.props.dishes.isLoading) {
      return <Loading />;
    } else if (this.props.dishes.errMess) {
      return (
        <View>
          <Text>{this.props.dishes.errMes}</Text>
        </View>
      );
    }

    return (
      <FlatList
        data={this.props.dishes.dishes.filter(dish =>
          this.props.favorites.some(el => el === dish.id),
        )}
        renderItem={renderMenuItem}
        keyExtractor={item => item.id.toString()}
      />
    );
  }
}

export default connect(mapStateToProps)(Favorites);
