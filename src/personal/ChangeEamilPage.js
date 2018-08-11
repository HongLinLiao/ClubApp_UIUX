import React, { Component } from 'react';
import { Text, View, StyleSheet ,ScrollView,TouchableOpacity,Image, StatusBar,TextInput} from 'react-native';
import {Icon, SearchBar, Button} from 'react-native-elements'
import { Constants } from 'expo';

import StatusBarPaddingIOS from 'react-native-ios-status-bar-padding';



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBarPaddingIOS style={{backgroundColor: '#f6b456'}}/>
        <View style={styles.headView}>
            <View >
                <TouchableOpacity>
                    <Icon name='keyboard-arrow-left'  color='#666666'
                        size={50}></Icon>
                </TouchableOpacity>
            </View>
            <Text style={styles.headText}>電子信箱</Text>
            <View style={styles.fake}></View>
        </View>
        <View style={styles.containView}>

        <View style={styles.mailView}>
            <Text style={styles.mailText}>電子信箱</Text>
            <View style={styles.userMail}>
            <Text style={styles.userMailText}>abc123@gmail.com</Text>
            </View>               
        </View>
        <View style={styles.passwordView}>
        <Text style={styles.passwordText}>輸入登入密碼</Text>
        <TextInput style={styles.passwordInput}></TextInput>
        </View>
        
        <View style={styles.buttonView}>
        <Button 
        title='發送驗證碼'
        icon={{name: 'cached',color:'#666666'}}
        color='#666666'
        fontSize={18}
        backgroundColor='#fbdaa7'
        borderRadius={10}
        buttonStyle={styles.button} />
        </View>

        <TouchableOpacity><Text style={styles.redText}>重新發送驗證碼</Text></TouchableOpacity>

        </View>

        <View style={styles.tabBar}></View>    
    </View>
    
    );
}
}

const styles = StyleSheet.create({
    container:{
        flex:1,     
    },
    headView:{
        height:45,
        backgroundColor:'#f6b456',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection:'row'
    },
    headText:{
        color:'#666666',
        fontSize:25,
    },
    fake:{
        width:50,
    },
    containView:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    
    mailView:{
        justifyContent: 'center',
        alignItems: 'center',
        padding:10,
       // borderWidth:1,
    },
    userMail:{
        padding:15,
    },
    mailText:{
        fontSize:20,
        
        color:'#666666'
    },
    userMailText:{
        
        color:'#666666'
    },
    passwordView:{
        justifyContent: 'center',
        alignItems: 'center',
        padding:80,
        //borderWidth:1,
    },
    passwordText:{
        fontSize:20,
        padding:10,
        color:'#666666'
    },
    passwordInput:{
        backgroundColor:'#f0f0f0',
        width:200,
        height:40,
        borderRadius:10,
        
    },

    buttonView:{
        padding:10,
    },
    button:{
        width:170,
        height:45,
        //shadowOffset:{ width: 0.5, height: 0.5, },
        //shadowColor:'#000000',
        //shadowRadius: 10,
        //shadowOpacity: 0.3,
        //elevation: 10,
        
    },
    redText:{
        fontSize:15,
        color:'#ff0000'
    },
    tabBar:{
        height:50,
        backgroundColor:'#f6b456'
      },
})