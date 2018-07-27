import React, { Component } from 'react';
import { Text, 
         View, 
         StyleSheet,
         KeyboardAvoidingView,
         TextInput,
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
          <Text style={styles.title}>請輸入暱稱</Text>
          <Text style={styles.enter}>想要別人如何稱呼你/妳?</Text>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid={'transparent'}/>
          <TouchableOpacity style={styles.nextbotton}>
            <Text style={styles.nexttext}>確認</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.nexttext}>返回</Text>
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
    fontSize:30,
    alignSelf: 'center',
    padding:40
  },
  enter:{
    color:'white',
    fontSize:15,
    alignSelf: 'center',
    padding:5
  },
  textInput:{
    marginBottom:15,
    width:230,
    height:35,
    backgroundColor:'rgba(255,255,255,0.2)',
    borderRadius:5
  },
  nextbotton:{
    backgroundColor:'rgba(255,255,255,0)',
    margin:30,
    borderWidth:1,
    borderColor:'white',
    width:150,
    height:35,
    borderRadius: 50
  },
  nexttext:{
    color:'white',
    fontSize:15,
    alignSelf: 'center',
    paddingTop:5
  }
})