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
                    <Icon name='keyboard-arrow-left'  color='#1b3d5f'
                        size={50}></Icon>
                </TouchableOpacity>
            </View>
            <Text style={styles.headText}>變更密碼</Text>
            <View style={styles.fake}></View>
        </View>
        <View style={styles.containView}>
       
        <View style={styles.passwordView}>
            <Text style={styles.passwordText}>輸入原密碼</Text>
            <TextInput style={styles.passwordInput}></TextInput>
        </View>

        <View style={styles.mailView}>
            <Text style={styles.mailText}>重設郵件將寄送至</Text>
            <View style={styles.userMail}>
            <Text style={styles.userMailText}>abc123@gmail.com</Text>
            </View>
                <View style={styles.buttonView}>
                <Button 
                title='確認'
                color='#ba935a'
                backgroundColor='#fbdaa7'
                borderRadius={30}
                buttonStyle={styles.button} />
                </View>
        </View>

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
        color:'#ba935a',
        fontSize:30,
    },
    fake:{
        width:50,
    },
    containView:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    passwordView:{
        justifyContent: 'center',
        alignItems: 'center',
        padding:40,
    },
    passwordText:{
        fontSize:20,
        padding:10,
        color:'#ba935a'
    },
    passwordInput:{
        backgroundColor:'#fff0dd',
        width:250,
        height:38,
        borderRadius:30,
        
    },
    mailView:{
        justifyContent: 'center',
        alignItems: 'center',
        padding:40,
    },
    userMail:{
        borderBottomWidth:1,
        borderBottomColor:'#f6b456',
        
    },
    mailText:{
        fontSize:15,
        
        color:'#ba935a'
    },
    userMailText:{
        
        color:'#ba935a'
    },
    buttonView:{
        padding:20,
    },
    button:{
        width:140,
        height:45,
        shadowOffset:{ width: 0.5, height: 0.5, },
        shadowColor:'#000000',
        shadowRadius: 10,
        shadowOpacity: 0.3,
        elevation: 10,
        
    },
    tabBar:{
        height:50,
        backgroundColor:'#f6b456'
      },
})