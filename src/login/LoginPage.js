import React, { Component } from 'react';
import {  Text, 
          View, 
          StyleSheet,
          KeyboardAvoidingView,
          TextInput,
          TouchableOpacity,
          ImageBackground,
          Image
        } from 'react-native';
import { CheckBox }  from 'react-native-elements';
import { Constants } from 'expo';

export default class Form extends Component{
  state = {
    checked: false
  }
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
            
            <View style={styles.mail}>
              <Image style={styles.mailIcon}
                source={require('../../img/envelope.png')}/>
              <TextInput
                placeholder='abc123@iclub.com'
                placeholderTextColor='rgba(255,255,255,0.8)'
                style={styles.textInput}
                underlineColorAndroid={'transparent'}/>
            </View>

            <View style={styles.psw}>
              <Image style={styles.pswIcon}
                source={require('../../img/padlock.png')}/> 
              <TextInput
                placeholder='password'
                placeholderTextColor='rgba(255,255,255,0.8)'
                secureTextEntry={true}
                style={styles.textInput}
                underlineColorAndroid={'transparent'}/>
            </View>

            <CheckBox
              center
              title='記住我'
              containerStyle={styles.checkContainer}
              textStyle={styles.checkText}
              checkedIcon={<Image style={styles.checkIcon}
                            source={require('../../img/check.png')}
                          />}
              uncheckedIcon={<Image style={styles.boxIcon}
                            source={require('../../img/box.png')}
                            />}
              checked={this.state.checked}
              onPress={() => this.setState({checked: !this.state.checked})}/>
            <TouchableOpacity style={styles.gobotton}>
              <Text style={styles.gotext}>登入</Text>
            </TouchableOpacity>
            <Text style={styles.or}>_______________  or  _______________</Text>
            <Text style={styles.signinwith}>使用其他方式登入</Text>

            <View style={styles.row}>
              <TouchableOpacity style={styles.fbBotton}>
                <Image style={styles.fbIcon}
                  source={require('../../img/facebook.png')}/>
                <Text style={styles.fbText}>Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gmailBotton}>
                <Image style={styles.gmailIcon}
                  source={require('../../img/search.png')}/>
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
    margin:15,
    width:80,
    height:80,
    backgroundColor:'rgba(255,255,255,0.4)',
    borderRadius: 100
  },
  mail:{
    flexDirection:'row',
    marginTop:25,
    width:230,
    height:35,
    backgroundColor:'rgba(255,255,255,0.4)',
    borderRadius: 50,
    alignItems:'center',
    justifyContent:'center'
  },
  mailIcon:{
    height:25,
    width:25,
    marginRight:10
  },
  psw:{
    flexDirection:'row',
    marginTop:25,
    width:230,
    height:35,
    backgroundColor:'rgba(255,255,255,0.4)',
    borderRadius: 50,
    alignItems:'center',
    justifyContent:'center'
  },
  pswIcon:{
    height:25,
    width:25,
    marginRight:10
  },
  textInput:{
    width:160,
    height:35,
    color:'white',
    backgroundColor:'rgba(255,255,255,0)'
  },
  checkContainer:{
    backgroundColor:'rgba(255,255,255,0)',
    borderColor:'rgba(255,255,255,0)',
    margin:15
  },
  checkText:{
    color:'white'
  },
  checkIcon:{
    height:14,
    width:14
  },
  boxIcon:{
    height:14,
    width:14
  },
  row:{
    flexDirection:'row',
    justifyContent:'center',
    alignSelf: 'center'
  },
  gobotton:{
    backgroundColor:'rgba(255,255,255,0)',
    marginBottom:10,
    borderWidth:0.5,
    borderColor:'white',
    width:230,
    height:35,
    borderRadius: 50,
    justifyContent:'center'
  },
  gotext:{
    color:'white',
    fontSize:15,
    alignSelf: 'center'
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
  fbBotton:{
    backgroundColor:'rgba(255,255,255,0.4)',
    margin:15,
    width:100,
    height:35,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems:'center',
    flexDirection:'row'
  },
  fbIcon:{
    height:17,
    width:17
  },
  fbText:{
    color:'white',
    fontSize:15
  },
  gmailBotton:{
    backgroundColor:'rgba(255,255,255,0.4)',
    margin:15,
    width:100,
    height:35,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems:'center',
    flexDirection:'row'
  },
  gmailIcon:{
    height:17,
    width:17,
    marginRight:5
  },
  gmailText:{
    color:'white',
    fontSize:16
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