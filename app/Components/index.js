'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  StatusBar,
} from 'react-native';


export default class  CustomTabBar extends React.Component{
   constructor(props) {
        super(props);
        this.state = {};
    }
    var selectedTabIcons:[];
    var unselectedTabIcon:[];
} 


var styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 6,
  },
  tabs: {
    height: 45,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  icon: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 0,
    left: 20,
  },
  labelText:{
    fontSize: 8,
  },
  separator: {
    height: 0.5,
    backgroundColor: 'gray'
  }
});
