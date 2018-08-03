import React, { Component } from 'react';
import {  Text, 
          View, 
          StyleSheet,
          KeyboardAvoidingView,
          TextInput,
          TouchableOpacity,
          ImageBackground
        } from 'react-native';
import { CheckBox } from 'react-native-elements';
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
          <View style={styles.logo}></View>
          <TextInput
            placeholder='   abc123@iclub.com'
            placeholderTextColor='rgba(255,255,255,0.8)'
            style={styles.textInput}
            underlineColorAndroid={'transparent'}/>
          <TextInput
            placeholder='   password'
            placeholderTextColor='rgba(255,255,255,0.8)'
            secureTextEntry={true}
            style={styles.textInput}
            underlineColorAndroid={'transparent'}/>
          <CheckBox
            center
            title='記住'
            iconType='material'
            checkedIcon='clear'
            uncheckedIcon='add'
            checkedColor='white'
          />
          <TouchableOpacity style={styles.gobotton}>
            <Text style={styles.gotext}>登入</Text>
          </TouchableOpacity>
          <Text style={styles.or}>_______________  or  _______________</Text>
          <Text style={styles.signinwith}>使用其他方式登入</Text>
          <View style={styles.row}>
            <TouchableOpacity style={styles.fbBotton}>
              <Text style={styles.fbText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gmailBotton}>
              <Text style={styles.gmailText}>Gmail</Text>
            </TouchableOpacity>
          </View>
            <TouchableOpacity>
              <Text style={styles.forgot}>忘記密碼?</Text>
            </TouchableOpacity>
        </View>
            <View style={styles.signupBottom}>
              <Text style={styles.noAccount}>還沒有帳號嗎?</Text>
                <TouchableOpacity>
                  <Text style={styles.signup}>註冊</Text>
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
    flex: 25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    backgroundColor:'rgba(0,0,0,0.5)'
  },
  logo:{
    margin:25,
    width:80,
    height:80,
    color:'white',
    backgroundColor:'rgba(255,255,255,0.4)',
    borderRadius: 100
  },
  textInput:{
    marginBottom:25,
    width:230,
    height:35,
    color:'white',
    backgroundColor:'rgba(255,255,255,0.4)',
    borderRadius: 50,
    color:'white'
  },
  gobotton:{
    backgroundColor:'rgba(255,255,255,0)',
    margin:10,
    borderWidth:1,
    borderColor:'white',
    width:230,
    height:35,
    borderRadius: 50
  },
  gotext:{
    color:'white',
    fontSize:15,
    alignSelf: 'center',
    paddingTop:5
  },
  or:{
    color:'white',
    fontSize:13,
    margin:20
  },
  signinwith:{
    color:'white',
    fontSize:15,
    margin:8
  },
  row:{
    flexDirection:'row'
  },
  fbBotton:{
    backgroundColor:'rgba(255,255,255,0.4)',
    margin:15,
    width:100,
    height:35,
    borderRadius: 50
  },
  fbText:{
    color:'white',
    fontSize:15,
    alignSelf: 'center',
    paddingTop:5
  },
  gmailBotton:{
    backgroundColor:'rgba(255,255,255,0.4)',
    margin:15,
    width:100,
    height:35,
    borderRadius: 50
  },
  gmailText:{
    color:'white',
    fontSize:15,
    alignSelf: 'center',
    paddingTop:5
  },
  forgot:{
    color:'white',
    fontSize:15,
    margin:10
  },
  signupBottom:{
    flex:1,
    alignSelf:'stretch',
    alignItems:'center',
    justifyContent: 'center',
    flexDirection:'row',
    backgroundColor:'rgba(153,153,153,0.4)'
  },
  noAccount:{
    color:'white',
    fontSize:15
  },
  signup:{
    color:'white',
    fontSize:15
  }
})