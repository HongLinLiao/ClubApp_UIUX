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
            <Text style={styles.headText}>進階管理</Text>
            <View style={styles.fake}></View>
        </View>
        <View style={styles.containView}>
            <View style={styles.boxView}>
                <Text style={styles.boxFirstText}>驗證</Text> 
                <Text style={styles.redText}>(已驗證)</Text> 
                <View style={styles.fake}></View>
                <View style={styles.fake}></View>
                <Text style={styles.mailText}>qwertas@gmail.com</Text>
                <View>
                    <TouchableOpacity>
                    <Image source={require('../../img/arrowRight.png')}
                    style={styles.arrowRight}/>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.boxView}>
                <Text style={styles.boxText}>電子信箱</Text>  
                <View>
                    <TouchableOpacity>
                    <Image source={require('../../img/arrowRight.png')}
                    style={styles.arrowRight}/> 
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.boxBottomBorderView}>
                <Text style={styles.boxText}>密碼</Text>  
                <View>
                    <TouchableOpacity>
                    <Image source={require('../../img/arrowRight.png')}
                    style={styles.arrowRight}/>
                    </TouchableOpacity>
                </View>
            </View>

            

            <View style={styles.boxView}>
                <Text style={styles.boxText}>關於我們</Text>  
                
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
    arrow:{
        height:30,
        width:30,
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
        fontSize:20,
    },
    fake:{
        width:50,
    },
    containView:{
        flex:1,
        padding:15
    },
    boxView:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        //padding:10,
        borderBottomWidth:1,
        borderBottomColor:'rgba(102,102,102,0.15)',
        height:40
    },
    boxBottomBorderView:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'rgba(102,102,102,0.5)',
        height:40
    },
    boxText:{
        fontSize:18,
        color:'#666666',
        padding:10,
    },
    boxFirstText:{
        fontSize:18,
        color:'#666666',
        fontWeight:'bold',
        padding:10,
    },
    arrowRight:{
        height:20,
        width:20,
        paddingRight: 20,
    },
    redText:{
        fontSize:10,
        color:'#ff0000'
    },
    mailText:{
        fontSize:12,
        color:'rgba(102,102,102,0.25)',
    },
   
    tabBar:{
        height:50,
        backgroundColor:'#f6b456'
      },
})