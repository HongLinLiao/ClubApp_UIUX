import React, { Component } from 'react';
import { Text, 
         View, 
         StyleSheet,
         KeyboardAvoidingView,
         TouchableOpacity,
         ImageBackground
         } from 'react-native';
import { Constants } from 'expo';

export default class Form extends Component{
render(){
  return(
    <ImageBackground
    style={styles.bf}
    source={require('../../img/myboyfriend.jpg')}
    imageStyle={{ resizeMode: 'cover' }}
  >
    <View style={styles.container}> 
          <Text style={styles.title}>忘記密碼</Text>
          <Text style={styles.send}>已寄信至</Text>
          <Text style={styles.mail}>abc123@iclub.com</Text>
          <TouchableOpacity style={styles.againBotton}>
            <Text style={styles.againText}>再次發送信件</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBotton}>
            <Text style={styles.loginText}>登入</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.backText}>返回</Text>
          </TouchableOpacity>
          <KeyboardAvoidingView behavior='padding'>
          </KeyboardAvoidingView> 
    </View>
    </ImageBackground>
  );
}
}

const styles = StyleSheet.create({
  bf:{
        flex:1,
        height:null,
        width:null
  },
  container:{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection:'column'
  },
  title:{
    color:'white',
    fontSize:40,
    alignSelf: 'center',
    padding:55
  },
  send:{
    color:'white',
    fontSize:20,
    alignSelf: 'center',
    padding:5
  },
  mail:{
    color:'white',
    fontSize:25,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding:5
  },
  againBotton:{
    backgroundColor:'rgba(255,255,255,0.2)',
    margin:35,
    borderWidth:1,
    borderColor:'white',
    width:230,
    height:40,
    borderRadius:5,
    justifyContent:'center'
  },
  againText:{
    color:'white',
    fontSize:20,
    alignSelf: 'center'
  },
  loginBotton:{
    backgroundColor:'rgba(255,255,255,0)',
    margin:30,
    borderWidth:1,
    borderColor:'white',
    width:150,
    height:40,
    borderRadius: 50,
    justifyContent:'center'
  },
  loginText:{
    color:'white',
    fontSize:20,
    alignSelf: 'center'
  },
  backText:{
    color:'white',
    fontSize:20,
    alignSelf: 'center',
    paddingTop:20
  }
 
})