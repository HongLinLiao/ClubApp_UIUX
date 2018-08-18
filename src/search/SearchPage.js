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
        <ScrollView>

          <SearchBar
            containerStyle={styles.srarchBar}//外框顏色無法
            inputStyle={styles.searchInput}
            icon={{ type: 'font-awesome', name: 'search' }}
            placeholder='搜尋'
          />

          <View styles={styles.searchView}>

          <View style={styles.blackL}>
            <ImageBackground source={require('../../img/dog.jpg')} imageStyle={styles.searchL}
              style={styles.searchConL}>
              
                <View style={styles.clubTopTextView}>
                  <Text style={styles.clubNameText}>狗醫師社</Text>
                  <Text style={styles.clubLeaderText}>社長 Emmal</Text>
                </View>
                <View style={styles.clubIntroTextView}>
                <Text style={styles.clubIntroText}>hoijhnicwmhriurhcwunoig</Text>
                </View>
              

            </ImageBackground>
            </View>
          

            <View style={styles.beFlexEnd}>
              <ImageBackground source={require('../../img/flower.jpg')} imageStyle={styles.searchR}
                style={styles.searchConR}>
              
                <View style={styles.clubText}>
                  <View style={styles.clubTopText}>
                    <Text style={styles.clubNameText}>紫藤花社</Text>
                    <Text style={styles.clubLeaderText}>社長 Emmal</Text>
                  </View>
                  <Text style={styles.clubIntroText}>hoijhnicwmhriurhcwunoig</Text>
                </View>
                
              </ImageBackground>
            </View>


            <ImageBackground source={require('../../img/kongfu.jpg')} imageStyle={styles.searchL}
              style={styles.searchConL}>
              <View style={styles.clubText}>
                <View style={styles.clubTopText}>
                  <Text style={styles.clubNameText}>空手道社</Text>
                  <Text style={styles.clubLeaderText}>社長 Emmal</Text>
                </View>
                <Text style={styles.clubIntroText}>hoijhnicwmhriurhcwunoig</Text>
              </View>

            </ImageBackground>


            <View style={styles.beFlexEnd}>
              <ImageBackground source={require('../../img/dance.jpg')} imageStyle={styles.searchR}
                style={styles.searchConR}>

                <View style={styles.clubText}>
                  <View style={styles.clubTopText}>
                    <Text style={styles.clubNameText}>舞蹈社</Text>
                    <Text style={styles.clubLeaderText}>社長 Emmal</Text>
                  </View>
                  <Text style={styles.clubIntroText}>hoijhnicwmhriurhcwunoig</Text>
                </View>

              </ImageBackground>
            </View>



          </View>
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


  searchBar: {
    width: '100%',
    backgroundColor: '#ece289',
    borderColor: '#ece289',
    // color:'#ece289',
    borderRadius: 10,
    borderWidth: 1,
  },
  searchInput: {
    backgroundColor: '#f1c483',

  },
  searchView: {
    flex: 15,
  },

  blackL:{
    backgroundColor:'#000000',
    height: 125,
    width: 350,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    shadowOffset: { width: 5, height: 5, },
    shadowColor: '#000000',
    shadowRadius: 10,
    shadowOpacity: 0.5,
    marginBottom: 20,
    elevation: 10,
  },
  searchL: {
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    
    //borderRadius:40,
    

  },
  searchR: {
     borderTopLeftRadius: 40,
     borderBottomLeftRadius: 40,
    //borderRadius: 40,
   

  },

  searchConR: {
    height: 125,
    width: 350,
    backgroundColor: '#9d9d9d',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 5, height: 5, },
    shadowColor: '#000000',
    shadowRadius: 10,
    shadowOpacity: 0.5,
    marginBottom: 20,
    elevation: 10,
    borderTopLeftRadius:40,
    borderBottomLeftRadius: 40,
    overflow:'hidden',
    opacity:0.5,
  },
  searchConL: {
    height: 125,
    width: 350,
    backgroundColor: '#9d9d9d',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 5, height: 5, },
    shadowColor: '#000000',
    shadowRadius: 10,
    shadowOpacity: 0.5,
    marginBottom: 20,
    elevation: 10,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    overflow:'hidden',
    opacity:0.5,
  },
  beFlexEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    
  },
  clubText: {
    padding: 20,
    backgroundColor: '#ffffff',
    opacity: 0.7,
  },
  clubTopTextView: {
    flexDirection: 'row',
    //backgroundColor:'rgba(255, 255, 255, 0.5)',
  },
  clubNameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    opacity: 1,
  },
  clubLeaderText: {
    fontSize: 10,
    padding: 2,
    color: '#ffffff',
    opacity: 1,
  },
  clubIntroTextView:{
    backgroundColor:'rgba(255, 255, 255, 0.8)',

  },
  clubIntroText: {
    padding: 8,
    color: '#000000',
    
  },
  tabBar: {
    height: 50,
    backgroundColor: '#f6b456',
  },



});
