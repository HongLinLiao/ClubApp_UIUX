import React, { Component } from 'react';
import { Text, View, StyleSheet ,ScrollView, 
  onPressLearnMore, TouchableOpacity, Image,ImageBackground} from 'react-native';

import { Constants } from 'expo';
import { Button ,SearchBar,Icon} from 'react-native-elements';
import StatusBarPaddingIOS from 'react-native-ios-status-bar-padding';
 


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBarPaddingIOS style={{backgroundColor: '#8080c0'}}/>
      <ScrollView>
         
              <SearchBar  
              containerStyle={styles.srarchBar}
              inputStyle={styles.searchInput}
              icon={{ type: 'font-awesome', name: 'search' }}
              placeholder='搜尋'/>
           
        <View styles={styles.searchView}>

            <View style={styles.searchConL}>
                <View style={styles.clubText}>
                    <Text style={styles.clubNameText}>長庚大學狗醫師社</Text>
                    <Text style={styles.clubIntroText}>hoijhnicwmhriurhcwunoig</Text>
                </View>
                <View style={styles.clubHead}>
                </View>
            </View>
            <View style={styles.searchConR}>
                <View style={styles.clubHead}>
                </View>
                <View style={styles.clubText}>
                  <Text style={styles.clubNameText}>長庚大學熱舞社</Text>
                  <Text style={styles.clubIntroText}>hoijhnicwmhriurhcwunoig</Text>
                </View>          
              </View>
              <View style={styles.searchConL}>
                <View style={styles.clubText}>
                    <Text style={styles.clubNameText}>長庚大學狗醫師社</Text>
                    <Text style={styles.clubIntroText}>hoijhnicwmhriurhcwunoig</Text>
                </View>
                <View style={styles.clubHead}>
                </View>
            </View>
            <View style={styles.searchConR}>
                <View style={styles.clubHead}>
                </View>
                <View style={styles.clubText}>
                  <Text style={styles.clubNameText}>長庚大學熱舞社</Text>
                  <Text style={styles.clubIntroText}>hoijhnicwmhriurhcwunoig</Text>
                </View>          
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
  
  container:{
    flex:1,
    flexDirection: 'column',
  },
 

  searchBar:{
      width:'100%',
      backgroundColor: '#123456',
  },
  searchInput:{
    backgroundColor: '#f3e1ce',
  },
  searchView:{
    flex:15,
  },
  searchConL:{
    height:140,
    backgroundColor:'#ffaf60',
    flexDirection:'row',
    borderTopRightRadius:100,
    borderBottomRightRadius:100,
    justifyContent:'center',
    alignItems: 'center',
    shadowOffset:{ width: 5, height: 5, },
    shadowColor:'#000000',
    shadowRadius: 10,
    shadowOpacity: 0.5
  },
  searchConR:{
    height:140,
    backgroundColor:'#82d900',
    flexDirection:'row',
    borderTopLeftRadius:100,
    borderBottomLeftRadius:100,
    justifyContent:'center',
    alignItems: 'center',
    shadowOffset:{ width: 5, height: 5, },
    shadowColor:'#000000',
    shadowRadius: 10,
    shadowOpacity: 0.5
  },
  clubHead:{
    backgroundColor:'#4f4f4f',
    borderRadius:100,
    width:100,
    height:100,
    shadowRadius:10,
    shadowOffset:{ width: 5, height: 5, },
    shadowColor:'#000000',
    shadowRadius: 10,
    shadowOpacity: 0.5,

  },
  clubText:{
      padding:20
  },
clubNameText:{
    fontSize:20,
},
clubIntroText:{
    padding:8
},
  tabBar:{
    height:50,
    backgroundColor:'#8080c0',
   
    
  },

 

});
