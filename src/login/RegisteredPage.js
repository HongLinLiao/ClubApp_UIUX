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
      
          <Text style={styles.title}>註 冊</Text>
          <Text style={styles.Q}>暱稱</Text>
          <TextInput
            placeholder='想要別人如何稱呼你/妳?'
            placeholderTextColor='rgba(255,255,255,0.5)' 
            style={styles.textInput}
            underlineColorAndroid={'transparent'}/>
            <Text style={styles.Q}>信箱</Text>
            <TextInput
            placeholder='abc123@iclub.com'
            placeholderTextColor='rgba(255,255,255,0.7)'
            style={styles.textInput}
            underlineColorAndroid={'transparent'}/>
            <Text style={styles.Q}>密碼</Text>
            <TextInput
            //placeholder='  密碼 (6~12字元)'
            //placeholderTextColor='white'
            secureTextEntry={true}
            style={styles.textInput}
            underlineColorAndroid={'transparent'}/>
          <TouchableOpacity style={styles.okBotton}>
            <Text style={styles.okText}>確認</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.backText}>回到登入頁面</Text>
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
    flexDirection:'column',
    backgroundColor:'rgba(0,0,0,0.5)'
        },
  title:{
    color:'white',
    fontSize:35,
    alignSelf: 'center',
    paddingBottom:50
  },
  Q:{
    color:'white',
    fontSize:15,
    alignSelf: 'center',
    margin:6
  },
  textInput:{
    marginBottom:17,
    width:230,
    height:37,
    color:'white',
    backgroundColor:'rgba(255,255,255,0.4)',
    borderRadius:7,
    textAlign:'center'    
  },
  okBotton:{
    backgroundColor:'rgba(255,255,255,0)',
    margin:38,
    borderWidth:1,
    borderColor:'white',
    width:140,
    height:35,
    borderRadius: 50,
    justifyContent:'center'
  },
  okText:{
    color:'white',
    fontSize:15,
    alignSelf: 'center'
  },
  backText:{
    color:'white',
    fontSize:15,
    alignSelf: 'center',
    paddingTop:10
  }
})
