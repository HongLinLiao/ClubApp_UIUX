import React, { Component } from 'react';
import { Text, View, StyleSheet ,ScrollView, 
  onPressLearnMore, TouchableOpacity, Image,ImageBackground} from 'react-native';

import { Constants } from 'expo';
import { Button ,SearchBar,Icon} from 'react-native-elements';



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}></View>
        <View style={styles.thescroll}>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.search} > 
              <SearchBar  
              style={{alignItems:'stretch'}}
              icon={{ type: 'font-awesome', name: 'search' }}
              placeholder='搜尋             '/>
            </View>
            
            <View style={styles.content}>
              <View style={styles.searchcontent}>
                <ImageBackground source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                style={{height:'100%',width:'100%',}} >
                <View style={{flexGrow:1,flexDirection:'row',
                alignItems:'flex-end', 
                justifyContent:'flex-end',}}>
                  <Text style={{color:'#ffffff', fontSize:20, fontWeight:'bold'}}>社團名稱</Text>
                  <Button buttonStyle={{height:40,width:40,backgroundColor:'#ded1b0',
                borderRadius:30}}
                title='GO'></Button>
                
                </View>
                </ImageBackground>

                
                
                
              </View>
              <View style={styles.searchcontent}></View>
              <View style={styles.searchcontent}></View>
              <View></View>

            </View>
          </ScrollView>
        </View>

        <View style={styles.guide}>
          <View style={styles.gu}>
          <Button buttonStyle={{height:80,width:80,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'transparent'}} icon={{name:'person'}}/>
          </View>
          <View style={styles.gu}>
          <Button buttonStyle={{height:80,width:80,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'transparent'}} icon={{name:'search'}}/>
          </View>
          <View style={styles.gu}>
          <Button buttonStyle={{height:80,width:80,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'transparent'}} icon={{name:'home'}}/>
          </View>
          <View style={styles.gu}>
          <Button buttonStyle={{height:80,width:80,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'transparent'}} icon={{name:'chat'}}/>
          </View>
          <View style={styles.gu}>
          <Button buttonStyle={{height:'100%',width:'100%',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'transparent'}} icon={{name:'people'}}/>
          </View>
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
  top:{
    flex:1,
    backgroundColor:'#c7a8ae',
  },
  thescroll:{
    flex:10
  },
  contentContainer: {
      
      flex:9
    },
 
  
  content:{
    flex:12,
    backgroundColor:'#f0f0f0',
    borderWidth:2,
    borderColor:'#ccd0c2',
    
  },
  search:{
    flex:1,
    //borderWidth:1,
    
    //backgroundColor:'#7F00DB',
    flexDirection:'row',
    //alignItems:'stretch',
    justifyContent:'center',

  },
  
  

  page:{
    flex:1,
    flexDirection:'row',
      
  },
  searchcontent:{
    flex:1,
    borderColor:'#D4D4D4',
    borderWidth:1, 
    
  },
  guide:{
    flex:1,
    backgroundColor:'#c7a8ae',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-start',
    
  },
  gu:{
    flex:1,
    borderRadius:10,
    height:55,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f2bb64',
    borderWidth:2,
    borderColor:'#80786b',
    
  },
 

});
