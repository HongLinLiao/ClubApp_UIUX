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
      <StatusBarPaddingIOS style={{backgroundColor: '#ece289'}}/>
      <ScrollView>
         
              <SearchBar  
              containerStyle={styles.srarchBar}//外框顏色無法
              inputStyle={styles.searchInput}
              icon={{ type: 'font-awesome', name: 'search' }}
              placeholder='搜尋'/>
           
        <View styles={styles.searchView}>

            <View style={styles.searchConL}>
                <View style={styles.clubText}>
                <View style={styles.clubTopText}>
                <Text style={styles.clubNameText}>狗醫師社</Text>
                <Text style={styles.clubLeaderText}>社長 Emmal</Text>
              </View>
                    <Text style={styles.clubIntroText}>hoijhnicwmhriurhcwunoig</Text>
                </View>
                <View style={styles.clubHead}>
                </View>
            </View>

            <View style={styles.beFlexEnd}>
            <View style={styles.searchConR}>
                <View style={styles.clubHead}>
                </View>
                <View style={styles.clubText}>
                <View style={styles.clubTopText}>
                <Text style={styles.clubNameText}>紫藤花社</Text>
                <Text style={styles.clubLeaderText}>社長 Emmal</Text>
              </View>
                  <Text style={styles.clubIntroText}>hoijhnicwmhriurhcwunoig</Text>
                </View>          
              </View>
              </View>

              <View style={styles.searchConL}>
                <View style={styles.clubText}>
                  <View style={styles.clubTopText}>
                    <Text style={styles.clubNameText}>空手道社</Text>
                    <Text style={styles.clubLeaderText}>社長 Emmal</Text>
                  </View>
                    <Text style={styles.clubIntroText}>hoijhnicwmhriurhcwunoig</Text>
                  
                </View>
                <View style={styles.clubHead}>
                </View>
            </View>

            <View style={styles.beFlexEnd}>
            <View style={styles.searchConR}>
                <View style={styles.clubHead}>
                </View>
                <View style={styles.clubText}>
                <View style={styles.clubTopText}>
                <Text style={styles.clubNameText}>民俗舞蹈社</Text>
                <Text style={styles.clubLeaderText}>社長 Emmal</Text>
              </View>
                  <Text style={styles.clubIntroText}>hoijhnicwmhriurhcwunoig</Text>
                </View>          
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
      backgroundColor: '#ece289',
      borderColor:'#ece289',
      color:'#ece289',
      borderRadius:10,
  },
  searchInput:{
    backgroundColor: '#f3e1ce',
  },
  searchView:{
    flex:15,
  },
  searchConL:{
    height:140,
    width:350,
    backgroundColor:'#ffaf60',
    flexDirection:'row',
    borderTopRightRadius:40,
    borderBottomRightRadius:40,
    justifyContent:'center',
    alignItems: 'center',
    shadowOffset:{ width: 5, height: 5, },
    shadowColor:'#000000',
    shadowRadius: 10,
    shadowOpacity: 0.5,
    marginBottom:20
  },
  searchConR:{
    height:140,
    width:350,
    backgroundColor:'#82d900',
    flexDirection:'row',
    borderTopLeftRadius:40,
    borderBottomLeftRadius:40,
    justifyContent:'center',
    alignItems: 'center',
    shadowOffset:{ width: 5, height: 5, },
    shadowColor:'#000000',
    shadowRadius: 10,
    shadowOpacity: 0.5,
    marginBottom:20
  },
  beFlexEnd:{
    flexDirection:'row',
    justifyContent:'flex-end'},
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
  clubTopText:{
    flexDirection:'row',
  },
clubNameText:{
    fontSize:20,
},
clubLeaderText:{
  fontSize:10,
  padding:2,
},
clubIntroText:{
    padding:8
},
  tabBar:{
    height:50,
    backgroundColor:'#ece289',
   
    
  },

 

});
