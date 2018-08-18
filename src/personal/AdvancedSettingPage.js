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
            <Text style={styles.headText}>進階管理</Text>
            <View style={styles.fake}></View>
        </View>
        <View style={styles.containView}>
            <View style={styles.boxView}>
                <Text style={styles.boxText}>驗證</Text>  
                <View>
                    <TouchableOpacity>
                        <Icon name='keyboard-arrow-right'  color='#666666'
                            size={40}></Icon> 
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.boxView}>
                <Text style={styles.boxText}>電子信箱</Text>  
                <View>
                    <TouchableOpacity>
                        <Icon name='keyboard-arrow-right'  color='#666666'
                            size={40}></Icon> 
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.boxView}>
                <Text style={styles.boxText}>密碼</Text>  
                <View>
                    <TouchableOpacity>
                        <Icon name='keyboard-arrow-right'  color='#666666'
                            size={40}></Icon> 
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
        padding:15
    },
    boxView:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        //padding:10,
        borderBottomWidth:1,
        borderBottomColor:'#EDEDED',
        height:40
    },
    boxText:{
        fontSize:20,
        color:'#666666',
        
    },
    
       
   
    tabBar:{
        height:50,
        backgroundColor:'#f6b456'
      },
})