
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  StatusBar,
  Navigator
} from 'react-native';

export default class Home extends Component{
  constructor(){
    super();
    this.state={}
  }

  render(){
      return(
          <View><Text>最新优惠</Text></View>
      );
  }
}