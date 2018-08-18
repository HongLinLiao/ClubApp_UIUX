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

          

          
            <ImageBackground source={require('../../img/dog.jpg')} imageStyle={styles.searchConL}
              style={styles.searchConL}>
              <View style={styles.blackL}>
                <View style={styles.clubTopTextView}>
                  <Text style={styles.clubNameText}>狗醫師社</Text>
                  <Text style={styles.clubSchoolText}>長庚大學</Text>
                </View>
                <View style={styles.clubIntroView}>
                  <Text style={styles.clubIntroText}>社團時間:周一~周五18:00~19:30</Text>
                  <Text style={styles.clubIntroText}>溜溜狗</Text>
                  <Text style={styles.clubIntroText}>指導老師:Dr.dog</Text>
                </View>
              
                </View>
            </ImageBackground>
          
          

            <View style={styles.beFlexEnd}>
              <ImageBackground source={require('../../img/flower.jpg')} imageStyle={styles.searchConR}
                style={styles.searchConR}>
              <View style={styles.blackR}>
              <View style={styles.clubTopTextView}>
              <Text style={styles.clubNameText}>紫藤花社</Text>
              <Text style={styles.clubSchoolText}>長庚大學</Text>
            </View>
            <View style={styles.clubIntroView}>
              <Text style={styles.clubIntroText}>社團時間:周一~周五18:00~19:30</Text>
              <Text style={styles.clubIntroText}>美姿美儀，美麗皮膚管理</Text>
              <Text style={styles.clubIntroText}>指導老師:Dr.flower</Text>
            </View>
          
                </View>
              </ImageBackground>
            </View>


            <View style={styles.blackL}/>
        


            



         
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
  

  blackL:{
    backgroundColor:'rgba(0,0,0,0.5)',
    height: 125,
    width: 350,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#000000',
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 10,
    
  },
  blackR:{
    backgroundColor:'rgba(0,0,0,0.5)',
    height: 125,
    width: 350,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius:40,
    borderBottomLeftRadius: 40,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#000000',
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 10,
    
  },

  searchConR: {
    height: 125,
    width: 350,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    borderTopLeftRadius:40,
    borderBottomLeftRadius: 40,
    overflow:'hidden',
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
  searchConL: {
    height: 125,
    width: 350,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    overflow:'hidden',
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
  },
  beFlexEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    
  },
  
  clubTopTextView: {
    flexDirection: 'row',
    alignItems:'flex-end',
  },
  clubNameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    
  },
  clubSchoolText: {
    fontSize: 12,
    padding: 2,
    color: '#ffffff',
    
  },
  clubIntroView:{
    backgroundColor:'rgba(255, 255, 255, 0.3)',
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    margin:5,
  },
  clubIntroText:{
    fontSize:17,
    color:'#ffffff'
  },
  tabBar: {
    height: 50,
    backgroundColor: '#f6b456',
  },



});
