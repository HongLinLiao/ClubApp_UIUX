import React, { Component } from 'react';
import { Text, View, StyleSheet ,ScrollView,TouchableOpacity } from 'react-native';
import { Constants } from 'expo';

import StatusBarPaddingIOS from 'react-native-ios-status-bar-padding';
 

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBarPaddingIOS style={{backgroundColor: '#ca8ec2'}}/>
          
            <View style={styles.calendar}>
              <View style={styles.selectMonth}>
                <TouchableOpacity><Text>back</Text></TouchableOpacity>
                <Text style={styles.monthText}>AUG</Text>
                <TouchableOpacity><Text>next</Text></TouchableOpacity>            
              </View>

              <View style={styles.dates}>
              <Text style={styles.dayText}>SUN MON TUE WED THU FRI SAT</Text>
              
              </View>
            <ScrollView horizontal={true}>
            <View style={styles.activityPoster}>
              <View style={styles.posters}></View>
              <View style={styles.posters}></View>
              <View style={styles.posters}></View>
              <View style={styles.posters}></View>
              <View style={styles.posters}></View>
              <View style={styles.posters}></View>
            </View>
            </ScrollView>
            </View>
          


        <View style={styles.tabBar}>
        
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,     
  },
  calendar:{
    flex:1,
    //backgroundColor:'#ffe153',
    
  },
  selectMonth:{
    height:70,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',

  },
  monthText:{
    fontSize:20,
    fontWeight:'bold',
    textShadowColor:'#6c6c6c',
    textShadowRadius:2,
    textShadowOffset:{width:2,height:2},
  },
  dates:{
    borderWidth:2,
    height:350,
  },
  dayText:{
    fontSize:24,
    backgroundColor:'#c6ccd2',
  },
  dateText:{
    fontSize:40,
  },
  activityPoster:{
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  posters:{
    height:175,
    width:100,
    borderWidth:2,
  },

  tabBar:{
    height:50,
    backgroundColor:'#8080c0'
  },
});
