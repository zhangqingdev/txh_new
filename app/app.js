
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

import TabNavigator from 'react-native-tab-navigator';
import AllCategory from '../app/view/AllCategory';
import Home from '../app/view/Home';
import NineZone from '../app/view/NineZone';
const TabNavigatorItem =TabNavigator.Item;
const TAB_NORMAL_1=require('../images/tabbar_1.png');
const TAB_NORMAL_2=require('../images/tabbar_2.png');
const TAB_NORMAL_3=require('../images/tabbar_3.png');
const TAB_NORMAL_4=require('../images/tabbar_4.png');

const TAB_PRESS_1=require('../images/tabbar_1_press.png');
const TAB_PRESS_2=require('../images/tabbar_2_press.png');
const TAB_PRESS_3=require('../images/tabbar_3_press.png');
const TAB_PRESS_4=require('../images/tabbar_4_press.png');

export default class txh extends Component {
  constructor(){
    super();
    this.state={
      selectedTab:'Home',
    }
  }
  
  onPress(tabName){
    if(tabName){
      this.setState(
        {
          selectedTab:tabName,
        }
      );
    }
  }

    renderTabView(title,tabName,tabContent,isBadge,childView){
      var tabNomal;
      var tabPress;
      switch (tabName) {
        case 'Home':
          tabNomal=TAB_NORMAL_1;
          tabPress=TAB_PRESS_1;
          break;
      case 'NineZone':
        tabNomal=TAB_NORMAL_2;
        tabPress=TAB_PRESS_2;
        break;
      case 'AllCategory':
        tabNomal=TAB_NORMAL_4;
        tabPress=TAB_PRESS_4;
        break;
        default:
    }
    return(
        <TabNavigatorItem
         title={title}
         renderIcon={()=><Image style={styles.tabIcon} source={tabNomal}/>}
         renderSelectedIcon={()=><Image style={styles.tabIcon} source={tabPress}/>}
         selected={this.state.selectedTab===tabName}
         selectedTitleStyle={{color:'#f85959'}}
         onPress={()=>this.onPress(tabName)}
        >
        {childView}
        </TabNavigatorItem>
      );
 }

    /**
    自定义tabbar
    **/
   tabBarView(){
     return (
       <View style={{flex:1}}>
       <TabNavigator
        tabBarStyle={styles.tab}
       >
       {this.renderTabView('最新优惠','Home','最新优惠',true,this.createChildView('Home'))}
       {this.renderTabView('9块9专区','NineZone','9块9专区',false,this.createChildView('NineZone'))}
       {this.renderTabView('全部分类','AllCategory','全部分类',false,this.createChildView('AllCategory'))}
       </TabNavigator>
       </View>
     );
   }

   createChildView(tag){
       let renderView;
       switch(tag){
           case 'Home':
           renderView=<Home/>;
              break;
            case 'NineZone':
              renderView=<NineZone/>;
               break;
            case 'AllCategory':
              renderView=<AllCategory/>;
               break;
            default:
               break;
       }
       return (<View style={styles.container}>{renderView}</View>)
   }

   render() {
     var tabBarView=this.tabBarView();
     return (
       <View style={styles.container}>
         {tabBarView}
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#F5FCFF',
   },
   welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
   },
   instructions: {
     textAlign: 'center',
     color: '#333333',
     marginBottom: 5,
   },
   tab:{
     height: 52,
     alignItems:'center',
     backgroundColor:'#f4f5f6',
   },
   tabIcon:{
     width:25,
     height:25,
   },
   badgeView:{
     width:22,
     height:14 ,
     backgroundColor:'#f85959',
     borderWidth:1,
     marginLeft:10,
     marginTop:5,
     borderColor:'#FFF',
     alignItems:'center',
     justifyContent:'center',
     borderRadius:8,
   },
   badgeText:{
     color:'#fff',
     fontSize:8,
   }
 });
