import React, { Component } from 'react';
import { Text, 
         View, 
         StyleSheet,
         KeyboardAvoidingView,
         TextInput,
         TouchableOpacity,
         CheckBox,
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
    <View style={{flex:1}}>
    <View style={styles.container}>
       
          <TextInput
            placeholder='   abc123@iclub.com'
            placeholderTextColor='rgba(255,255,255,0.5)'
            style={styles.textInput}
            underlineColorAndroid={'transparent'}/>
          <TextInput
            placeholder='   password'
            placeholderTextColor='rgba(255,255,255,0.5)'
            secureTextEntry={true}
            style={styles.textInput}
            underlineColorAndroid={'transparent'}/>
       <View style={styles.checkboxtext}>
          <CheckBox style={styles.check}/>
          <Text style={styles.rememberme}>記住我</Text>
       </View>
          <TouchableOpacity style={styles.gobotton}>
            <Text style={styles.gotext}>登入</Text>
          </TouchableOpacity>
       
       <Text style={styles.or}>____________  or  ____________</Text>
       <Text style={styles.signinwith}>使用其他方式登入</Text>
       <View style={styles.checkboxtext}>
        <TouchableOpacity style={styles.signinbotton}>
          <Text style={styles.signintext}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signinbotton}>
          <Text style={styles.signintext}>Gmail</Text>
        </TouchableOpacity>
       </View>
       <TouchableOpacity>
       <Text style={styles.forgot}>忘記密碼?</Text>
       </TouchableOpacity>
       </View>
       <View style={styles.signup}>
         <Text style={styles.signupwith}>還沒有帳號嗎?</Text>
        <TouchableOpacity>
          <Text style={styles.signupwith}>註冊</Text>
        </TouchableOpacity>
        <KeyboardAvoidingView behavior='padding'>
      </KeyboardAvoidingView>
       </View>      
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
          flex: 20,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection:'column'
        },
  textInput:{
    margin:20,
    width:200,
    height:35,
    backgroundColor:'rgba(255,255,255,0.5)',
    borderRadius: 50
  },
  gobotton:{
    backgroundColor:'rgba(255,255,255,0)',
    margin:15,
    borderWidth:1,
    borderColor:'white',
    width:200,
    height:35,
    borderRadius: 50
  },
  gotext:{
    color:'white',
    fontSize:15,
    alignSelf: 'center',
    paddingTop:5
  },
  checkboxtext:{
    flexDirection:'row'
  },
  rememberme:{
    color:'white',
    fontSize:12,
    margin:15
  },
  check:{
    backgroundColor:'white'
  },
  or:{
    color:'white',
    fontSize:13,
    margin:20
  },
  signinwith:{
    color:'white',
    fontSize:12,
    marginTop:15
  },
  signupwith:{
    color:'white',
    fontSize:12
  },
  signinbotton:{
    backgroundColor:'rgba(255,255,255,0.5)',
    margin:15,
    marginTop:20,
    width:90,
    height:35,
    borderRadius: 50
  },
  signintext:{
    color:'white',
    fontSize:15,
    alignSelf: 'center',
    paddingTop:5
  },
  forgot:{
    color:'white',
    fontSize:12,
    marginTop:40
  },
  signup:{
    flex:1,
    alignSelf:'stretch',
    alignItems:'center',
    justifyContent: 'center',
    flexDirection:'row',
    backgroundColor:'rgba(153,153,153,0.5)'
  }
  
})