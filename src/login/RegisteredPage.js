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
      
          <Text style={styles.signup}>註 冊</Text>
          <Text style={styles.font}>暱稱</Text>
          <TextInput
            placeholder='想要朋友如何稱呼你/妳?'
            placeholderTextColor='rgba(255,255,255,0.5)'        
            style={styles.textInput}
            underlineColorAndroid={'transparent'}/>
            <Text style={styles.font}>信箱</Text>
            <TextInput
            placeholder='abc123@iclub.com'
            placeholderTextColor='rgba(255,255,255,0.5)'
            style={styles.textInput}
            underlineColorAndroid={'transparent'}/>
            <Text style={styles.font}>密碼</Text>
            <TextInput
            //placeholder='  密碼 (6~12字元)'
            //placeholderTextColor='white'
            secureTextEntry={true}
            style={styles.textInput}
            underlineColorAndroid={'transparent'}/>
          <TouchableOpacity style={styles.okbotton}>
            <Text style={styles.oktext}>確認</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.backtext}>回到登入頁面</Text>
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
  signup:{
    color:'white',
    fontSize:30,
    alignSelf: 'center',
    paddingBottom:35
  },
  font:{
    color:'white',
    fontSize:15,
    alignSelf: 'center',
    margin:5
  },
  textInput:{
    marginBottom:15,
    width:230,
    height:35,
    backgroundColor:'rgba(255,255,255,0.2)',
    borderRadius:5,
    textAlign:'center'    
  },
  okbotton:{
    backgroundColor:'rgba(255,255,255,0)',
    margin:15,
    borderWidth:1,
    borderColor:'white',
    width:150,
    height:35,
    borderRadius: 50
  },
  oktext:{
    color:'white',
    fontSize:15,
    alignSelf: 'center',
    paddingTop:5
  },
  backtext:{
    color:'white',
    fontSize:15,
    alignSelf: 'center',
    paddingTop:20
  }
})