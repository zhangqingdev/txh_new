
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  InteractionManager,
  StatusBar,
  Platform,
} from 'react-native';


import ScrollableTabView,{ ScrollableTabBar } from 'react-native-scrollable-tab-view';


export default class AllCategory extends Component{

  componentDidMount(){
    InteractionManager.runAfterInteractions(()=>{
      //
      console.log('InteractionManager....MyMessage');
    });
  }

  render(){
    const{navigator}=this.props;
      console.log('InteractionManager....render');
    return(
      <View style={styles.container}>
      <StatusBar
       backgroundColor='#1a191f'
       barStyle='light-content'
       animated={true}
       hidden={false}
      />
      {Platform.OS=='ios'?<View style={{height:15,backgroundColor:'#ce3d3a'}}/>:null}
      <ScrollableTabView
      initialPage={0}
      scrollWithoutAnimation={true}
      renderTabBar={()=><ScrollableTabBar
                    underlineColor='#ce3d3a'
                    activeTextColor='#fff'
                    inactiveTextColor='rgba(255, 255, 255, 0.7)'
                    underlineHeight={0}
                    textStyle={{ fontSize: 15 }}
                    tabStyle={{ paddingBottom: 0 }}
                    backgroundColor='#ce3d3a'
                    tabStyle={{paddingLeft:12,paddingRight:12}}
                   />}
      >
     <View tabLabel='女装' style={styles.itemLayout}><Text >测试</Text></View>
     <View tabLabel='男装'  style={styles.itemLayout}><Text>测试</Text></View>
     <View tabLabel='女鞋' style={styles.itemLayout}><Text >测试</Text></View>
     <View tabLabel='男鞋'  style={styles.itemLayout}><Text >测试</Text></View>
     <View tabLabel='内衣'  style={styles.itemLayout}><Text >测试</Text></View>
     <View tabLabel='美妆'  style={styles.itemLayout}><Text >测试</Text></View>
     <View tabLabel='配饰'  style={styles.itemLayout}><Text >测试</Text></View>
     <View tabLabel='鞋品'  style={styles.itemLayout}><Text >测试</Text></View>
     <View tabLabel='箱包'  style={styles.itemLayout}><Text >测试</Text></View>
     <View tabLabel='母婴'  style={styles.itemLayout}><Text >测试</Text></View>
     <View tabLabel='居家'  style={styles.itemLayout}><Text >测试</Text></View>
     <View tabLabel='美食'  style={styles.itemLayout}><Text >测试</Text></View>
     <View tabLabel='数码'  style={styles.itemLayout}><Text >测试</Text></View>
     <View tabLabel='家电'  style={styles.itemLayout}><Text >测试</Text></View>
     <View tabLabel='户外运动'  style={styles.itemLayout}><Text >测试</Text></View>
     <View tabLabel='图书音像'  style={styles.itemLayout}><Text >测试</Text></View>
     <View tabLabel='其它'  style={styles.itemLayout}><Text >测试</Text></View>
     </ScrollableTabView>
     </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  itemLayout:{flex:1,alignItems:'center',justifyContent:'center'}
});
