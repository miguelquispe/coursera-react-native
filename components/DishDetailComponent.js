import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Alert,
  PanResponder,
} from 'react-native';
import {Card, Icon} from 'react-native-elements';

import {connect} from 'react-redux';
import {postFavorite} from '../redux/ActionCreators';
import {baseUrl} from '../shared/baseUrl';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    favorites: state.favorites,
  };
};

const mapDispatchToProps = dispatch => ({
  postFavorite: dishId => dispatch(postFavorite(dishId)),
});

const RenderDish = props => {
  const {dish} = props;

  let handleViewRef = React.createRef();

  const recognizeDrag = ({moveX, moveY, dx, dy}) => {
    if (dx < -200) {
      return true;
    } else {
      return false;
    }
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (e, gestureState) => {
      return true;
    },
    onPanResponderGrant: () => {
      handleViewRef.current
        .rubberBand(1000)
        .then(endState =>
          console.log(endState.finished ? 'finished' : 'cancelled'),
        );
    },
    onPanResponderEnd: (e, gestureState) => {
      console.log('pan responder end', gestureState);
      if (recognizeDrag(gestureState)) {
        Alert.alert(
          'Add to favorites?',
          'Are you sure you wish to add ' + dish.name + ' to favorite',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () =>
                props.favorite
                  ? console.log('Already favorite')
                  : props.onPress(),
            },
          ],
          {cancelable: false},
        );
        return true;
      }
    },
  });

  if (dish != null) {
    return (
      <Animatable.View
        animation="fadeInDown"
        duration={2000}
        delay={1000}
        ref={handleViewRef}
        {...panResponder.panHandlers}>
        <Card featuredTitle={dish.name} image={{uri: baseUrl + dish.image}}>
          <Text style={{margin: 10}}>{dish.description}</Text>
          <Icon
            raised
            reverse
            name={props.favorite ? 'heart' : 'heart-o'}
            type="font-awesome"
            color="#f50"
            onPress={() =>
              props.favorite ? console.log('Already favorite') : props.onPress()
            }
          />
        </Card>
      </Animatable.View>
    );
  } else {
    return (
      <View>
        <Text>NO hay detail</Text>
      </View>
    );
  }
};

const RenderComments = props => {
  const comments = props.comments;

  const renderCommentItem = ({item, index}) => {
    return (
      <View key={index} style={{margin: 10}}>
        <Text style={{fontSize: 14}}>{item.comment}</Text>
        <Text style={{fontSize: 12}}>{item.rating}</Text>
        <Text style={{fontSize: 12}}>
          {'--' + item.author + ', ' + item.date}
        </Text>
      </View>
    );
  };

  return (
    <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
      <Card title="Comments">
        <FlatList
          data={comments}
          renderItem={renderCommentItem}
          keyExtractor={item => item.id.toString()}
        />
      </Card>
    </Animatable.View>
  );
};

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
    };
  }

  markFavorite(dishId) {
    this.props.postFavorite(dishId);
    // this.setState({favorites: this.state.favorites.concat(dishId)});
  }

  static navigationOptions = {
    title: 'Dish Details',
  };

  render() {
    const dishId = this.props.navigation.getParam('dishId', '');
    return (
      <ScrollView>
        <RenderDish
          dish={this.props.dishes.dishes[+dishId]}
          favorite={this.props.favorites.some(el => el === dishId)}
          onPress={() => this.markFavorite(dishId)}
        />
        <RenderComments
          comments={this.props.comments.comments.filter(
            comment => comment.dishId === dishId,
          )}
        />
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DishDetail);
