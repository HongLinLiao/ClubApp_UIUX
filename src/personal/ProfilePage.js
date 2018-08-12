//借放 驗證成功葉面

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
            <Image source={require('../../img/arrowLeft.png')}
            style={styles.arrow}/>
         </TouchableOpacity>
            </View>
            <Text style={styles.headText}>驗證確認</Text>
            <View style={styles.fake}></View>
        </View>
        <View style={styles.containView}>
       
        <Image source={require('../../img/complete.jpg')}
        style={styles.completeImage}
        ></Image>

        <View style={styles.mailView}>
            <Text style={styles.mailText}>信件已寄送至</Text>
            <View style={styles.userMail}>
            <Text style={styles.userMailText}>abc123@gmail.com</Text>
            </View>
                <View style={styles.buttonView}>
                <Button 
                title='確認'
                color='#666666'
                backgroundColor='#fbdaa7'
                borderRadius={10}
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
    arrow:{
        height:30,
        width:30,
    },
    headText:{
        color:'#666666',
        fontSize:20,
    },
    fake:{
        width:30,
    },
    containView:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    completeImage:{
        height:130,
        width:130,
        //paddingLeft:100,
    },
    
    mailView:{
        justifyContent: 'center',
        alignItems: 'center',
        padding:40,
    },
    userMail:{
        width:200,
        alignItems: 'center',
        borderBottomWidth:1,
        borderBottomColor:'#666666',
        padding:10,
    },
    mailText:{
        fontSize:18,
        
        color:'#666666'
    },
    userMailText:{
        
        color:'#666666'
    },
    buttonView:{
        padding:20,
    },
    button:{
        width:150,
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