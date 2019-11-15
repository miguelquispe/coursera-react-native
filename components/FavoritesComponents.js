import React, {Component} from 'react';
import {View, FlatList, Text, TouchableHighlight, Alert} from 'react-native';
import {ListItem} from 'react-native-elements';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Loading} from './LoadingComponent';

import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';
import {deleteFavorite} from '../redux/ActionCreators';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    favorites: state.favorites,
  };
};

const mapDispatchToProps = dispatch => ({
  deleteFavorite: dishId => dispatch(deleteFavorite(dishId)),
});

class Favorites extends Component {
  static navigationOptions = {
    title: 'My Favorites',
  };

  closeRow(rowMap, rowKey) {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  }

  deleteRow(rowMap, rowKey) {
    this.closeRow(rowMap, rowKey.index);
    this.props.deleteFavorite(rowKey.item.id);
  }

  // onRowDidOpen = (rowKey, rowMap) => {
  //   console.log('Row key: ', rowKey);
  //   console.log('Row map: ', rowMap);
  // };

  render() {
    const {navigate} = this.props.navigation;

    const renderMenuItem = ({item, index}) => {
      return (
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
          <ListItem
            key={index}
            title={item.name}
            subtitle={item.description}
            hideChevron={true}
            onPress={() => navigate('DishDetail', {dishId: item.id})}
            leftAvatar={{source: {uri: baseUrl + item.image}}}
          />
        </Animatable.View>
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
      <SwipeListView
        data={this.props.dishes.dishes.filter(dish =>
          this.props.favorites.some(el => el === dish.id),
        )}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderMenuItem}
        renderHiddenItem={(data, rowMap) => (
          <TouchableHighlight
            style={{flex: 1}}
            onPress={() => {
              Alert.alert(
                'Delete Favorite',
                'Are you sure you wish to delete the favorite' +
                  data.item.name +
                  '? ' +
                  data.item.id,
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel'),
                    style: 'cancel',
                  },
                  {
                    text: 'OK',
                    onPress: () => this.deleteRow(rowMap, data),
                  },
                ],
                {cancelable: false},
              );
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                backgroundColor: 'red',
              }}>
              <Text>Delete</Text>
            </View>
          </TouchableHighlight>
        )}
        disableRightSwipe={true}
        rightOpenValue={-100}
        onRowDidOpen={this.onRowDidOpen}
      />
      // <FlatList
      //   data={this.props.dishes.dishes.filter(dish =>
      //     this.props.favorites.some(el => el === dish.id),
      //   )}
      //   renderItem={renderMenuItem}
      //   keyExtractor={item => item.id.toString()}
      // />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
