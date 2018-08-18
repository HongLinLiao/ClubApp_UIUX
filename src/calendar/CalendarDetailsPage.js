import React, { Component } from 'react';
import { Text, View, StyleSheet ,ScrollView, 
  onPressLearnMore, TouchableOpacity, Image,ImageBackground,StatusBar} from 'react-native';

import { Constants } from 'expo';
import { Button ,SearchBar,Icon,CheckBox} from 'react-native-elements';

import StatusBarPaddingIOS from 'react-native-ios-status-bar-padding';

//其實這一頁是行事曆的篩選

export default class App extends Component {
    render() {
      return (
        <View style={styles.container}>
        <StatusBarPaddingIOS style={{backgroundColor: '#f6b456'}}/>
        <StatusBar
     backgroundColor="blue"
     barStyle="light-content"
   />
        <View style={styles.topView}><Text style={styles.topText}>社團篩選</Text></View>
        <ScrollView style={styles.checkView}>
        <CheckBox
        center
        iconRight
        title='熱舞社'
        size={20}
        uncheckedColor='#1b3d5f'
        checkedColor='#1b3d5f'
        containerStyle={styles.checkBoxContainer}
        textStyle={styles.checkBoxText}
        checked={true}/>

        <CheckBox
        center
        iconRight
        title='吉他社'
        size={20}
        uncheckedColor='#1b3d5f'
        checkedColor='#1b3d5f'
        containerStyle={styles.checkBoxContainer}
        textStyle={styles.checkBoxText}/>

        <CheckBox
        center
        iconRight
        title='管樂社'
        size={20}
        uncheckedColor='#1b3d5f'
        checkedColor='#1b3d5f'
        containerStyle={styles.checkBoxContainer}
        textStyle={styles.checkBoxText}/>

        <CheckBox
        center
        iconRight
        title='雄屏會'
        size={20}
        uncheckedColor='#1b3d5f'
        checkedColor='#1b3d5f'
        containerStyle={styles.checkBoxContainer}
        textStyle={styles.checkBoxText}/>

        </ScrollView>
        <View style={styles.yesButtonView}>
        <Button
        title='確認'
        color='#1b3d5f'
        large
        rightIcon={{name: 'arrow-back', color:'#1b3d5f'}}
        backgroundColor='#f6b456'
        width={100}
        borderRadius={50}
        containerViewStyle={styles.yesButton}/>
        </View>

        <View style={styles.tabBar}>
        
        </View>

        </View>


      );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    topView:{
        height:50,
        
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#f6b456',
    },
    topText:{
        fontSize:20,
        color:'#1b3d5f',
        backgroundColor:'#f6b456',
        textAlign:'center',
    },
    checkView:{
      
    },
    checkBoxText:{
        fontSize:18,
        color:'#1b3d5f',
        fontWeight:'normal'
    },
    checkBoxContainer:{
        backgroundColor:'#ffffff',
        borderTopColor:'#ffffff',
        borderLeftColor:'#ffffff',
        borderRightColor:'#ffffff',
        
        
    },
    yesButtonView:{
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    yesButton:{
        shadowOffset:{ width: 2, height: 2, },
        shadowColor:'#000000',
        shadowRadius: 10,
        shadowOpacity: 0.5,
        elevation: 10,
        width:100,
    },
    tabBar:{
        height:50,
        backgroundColor:'#f6b456'
    },
})