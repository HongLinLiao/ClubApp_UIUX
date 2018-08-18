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
            <View style={styles.fake}></View>
            <Text style={styles.headText}>iclubs</Text>
            <View >
                <TouchableOpacity>
                <Image source={require('../../img/star.png')}
                style={styles.starImage}/>
                </TouchableOpacity>
            </View>
        </View>

        <ScrollView>
        <View style={styles.containView}>
            <View style={styles.box}>
                <View style={styles.clubImageView}>
                    <Image source={require('../../img/dogMan.jpg')}
                        style={styles.clubImage}
                        imageStyle={styles.clubImage}
                    />
                </View>
                <View style={styles.clubTextView}>
                    <View style={styles.topTextView}>
                        <View style={styles.clubNameView}>
                        <Text style={styles.clubNameText}>狗醫師社 </Text>
                        </View>
                        <View style={styles.clubManagerView}>
                        <Text style={styles.clubManagerText}>社長 Lucky</Text>
                        </View>
                    </View>
                    <View style={styles.midTextView}>
                        <View style={styles.clubActView}>
                        <Text style={styles.clubActText}>期初社大</Text>
                        </View>
                        <View style={styles.clubActInfoView}>
                        <Text style={styles.clubActInfoText}>大家快點來參加期初社大吃PIZZA</Text>
                        </View>
                    </View>
                    <View style={styles.bottomTextView}>
                        <Text style={styles.dateText}>2018/07/29</Text>
                        <View style={styles.sawView}>
                            <Image source={require('../../img/eye.jpg')}
                            style={styles.eyeImage}/>
                            <View style={styles.sawTimesView}>
                                <Text style={styles.sawTimesText}>1234</Text>
                            </View>
                        </View>
                </View>
                </View>
                
                
            </View>
        </View>
        </ScrollView>
        <TouchableOpacity style={styles.star}>
            <View style={styles.starButtonView}>
                <Image source={require('../../img/star.png')}
                style={styles.starImage}/> 
            </View>
        </TouchableOpacity>

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
    box:{
        alignItems: 'flex-start',
        borderBottomWidth:1,
        borderBottomColor:'#EDEDED',
        height:120,
        flexDirection:'row'
    },
    
    topTextView:{
        flexDirection:'row',
        alignItems:'flex-end',
        padding:5,
    },
    clubImageView:{
        backgroundColor:'#f6b456',
        height:60,
        width:60,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',

    },
    clubImage:{
        height:55,
        width:55,
        borderRadius:30,
        borderWidth:3,
        borderColor:'#ffffff' 
    },
    clubTextView:{
       // margin:1
    },
    clubNameView:{
        margin:1,
    },
    clubNameText:{
        fontSize:15
    },
    clubManagerView:{
        margin:1,
    },
    clubManagerText:{
        fontSize:10

    },
    midTextView:{
        margin:1
    },
    clubActView:{
        margin:1
    },
    clubActText:{
        fontSize:25,
        fontWeight:'bold'
    },
    clubActInfoView:{
        margin:1,
    },
    clubActInfoText:{
        fontSize:12,
        
    },
    dateText:{
        fontSize:10,
    },
    bottomTextView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        width:280,
        padding:5,
    },
    eyeImage:{
        height:12,
        width:20,
    },
    sawView:{
        flexDirection:'row',
        
        alignItems:'center',
        //justifyContent: 'space-between',
    },
    sawTimesView:{
        margin:5,
        alignItems:'center',
        backgroundColor:'#f6b456',
        borderRadius:30,
        height:15,
        width:40,
        
    },
    sawTimesText:{
        fontSize:10,
    },
    star:{
        justifyContent:'flex-end',
        alignItems:'flex-end',
        margin:20,
    },
    starButtonView:{
        width:60,
        height:60,
        justifyContent:'center',
        alignItems:'center',
        margin:10,
        borderRadius:100,
        backgroundColor:'#f6b456',
        shadowOffset:{ width: 1, height: 1, },
        shadowColor:'#000000',
        shadowRadius: 10,
        shadowOpacity: 0.5,
        elevation: 10,
    },

    starImage:{
        width:40,
        height:40,
    },
    tabBar:{
        height:50,
        backgroundColor:'#f6b456'
    },
})