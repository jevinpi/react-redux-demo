import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux'; // 引入connect函数
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types'
import Counter from './../components/Counter';
import * as countAction from '../actions/counterAction';

class MainPageView extends Component{
  static navigationOptions = {
    title: 'MainPage',
  }
  render() {
    const { test, changeName, count, increment, decrement, user } = this.props;
    return (
      <View>
        <Text>MainPage</Text>
        <Text>{this.props.user.name}</Text>
        <TouchableOpacity onPress={test}>
          <Text>Press</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={changeName}>
          <Text>changeName</Text>
        </TouchableOpacity>
        <Counter count={count} incrementFn={increment} decrementFn={decrement} />
      </View>
    )
  }
}

export default MainPage = connect(
  (state) => ({
    test: () => {
      console.warn(11111)
    },
    user: state.loginIn.user,
    count: state.count.count
  }),
  (dispatch) => ({
    changeName: () =>{
      dispatch({
        type: 'LOGIN_IN_DONE',
        user: {
          name:'kobe',
          age: 38
        },
        isSuccess: true
      })
    },
    increment: () => dispatch(countAction.increment()),
    decrement: () => dispatch(countAction.decrement())
  })
)(MainPageView)