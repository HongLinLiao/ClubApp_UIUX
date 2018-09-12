import React, { Component } from 'react';
import {
  Text, View, StyleSheet, ScrollView,
  onPressLearnMore, TouchableOpacity, Image, ImageBackground
} from 'react-native';

import { Constants } from 'expo';
import { Button, SearchBar, Icon } from 'react-native-elements';
import StatusBarPaddingIOS from 'react-native-ios-status-bar-padding';




export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBarPaddingIOS style={{ backgroundColor: '#f6b456' }} />

        <View style={styles.searchView}>
          <Text style={styles.searchText}>搜尋 (ex:長庚大學)</Text>

        </View>
        

        <ScrollView>
          <TouchableOpacity style={styles.card}>
            <ImageBackground source={require('../../img/clubBack.jpg')} 
            style={styles.clubBackground}>
              <View style={styles.placeView}>
              <Text style={styles.placeText}>桃園市龜山區</Text>
              </View>
            </ImageBackground>
            <View style={styles.clubNameView}>
              <Text style={styles.clubNameText}>長庚大學</Text>
              <Text style={styles.clubNameText}>紫藤花親善社</Text>
            </View>
            <View style={styles.clubIntroView}>
              <Text style={styles.clubIntroText}>GVFCDSEDRTFGYUHJIMBVCDRFTGYHUJIMNJUH</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <ImageBackground source={require('../../img/clubBack.jpg')} 
            style={styles.clubBackground}>
              <View style={styles.placeView}>
              <Text style={styles.placeText}>桃園市龜山區</Text>
              </View>
            </ImageBackground>
            <View style={styles.clubNameView}>
              <Text style={styles.clubNameText}>長庚大學</Text>
              <Text style={styles.clubNameText}>紫藤花親善社</Text>
            </View>
            <View style={styles.clubIntroView}>
              <Text style={styles.clubIntroText}>GVFCDSEDRTFGYUHJIMBVCDRFTGYHUJIMNJUH</Text>
            </View>
          </TouchableOpacity>






        </ScrollView>


        <View style={styles.tabBar}>

        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
  },
  searchView:{
    height:30,
    
    borderWidth:1,
    borderColor:'rgba(102,102,102,0.2)',
    justifyContent:'center',
    marginTop:10,
    marginLeft: 10,
    marginRight: 10,
  },
  searchText:{
    fontSize:20,
    color:'rgba(102,102,102,0.5)',
    paddingHorizontal:10,
  },
  card:{
    flex:1,
    height:300,
    borderWidth:1 ,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal:10,
    borderColor: 'rgba(102,102,102,0.1)',
  },
  clubBackground:{
    flex:5,
    alignItems:'flex-end',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    
  },
  placeView:{
    backgroundColor:'rgba(0,0,0,0.7)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin:10,
    borderRadius:30
  },
  placeText:{
    color:'#ffffff',
    fontSize:15,
    
  },
  clubNameView:{
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    borderBottomWidth:1,
    borderBottomColor: 'rgba(102,102,102,0.5)',
    marginHorizontal: 10,
  },
  clubNameText:{
    fontSize:21,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  clubIntroView:{
    flex:2,
    paddingVertical: 10,
    paddingLeft: 150,
    paddingRight: 10,
  },
  clubIntroText:{
    fontSize:18,
    color:'rgba(102,102,102,0.8)',
  },
  tabBar: {
    height: 50,
    backgroundColor: '#f6b456',
  },



});
