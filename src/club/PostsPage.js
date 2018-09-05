//測試ModalDropdown 
//測試ModalDropdown 
//測試ModalDropdown 
//測試ModalDropdown 
//測試ModalDropdown 
import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, StatusBar, TextInput } from 'react-native';
import { Icon, SearchBar, Button } from 'react-native-elements'
import { Constants } from 'expo';

import StatusBarPaddingIOS from 'react-native-ios-status-bar-padding';
import ModalDropdown from 'react-native-modal-dropdown';


export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
            <View style={styles.tabBar}></View>
                <ModalDropdown 
                defaultValue='選擇其他社團'
                style={styles.modal}
                testStyle={styles.modalText}
                dropdownStyle={styles.modalDown}
                dropdownTextStyle={styles.modalDownText}
                options={['長庚大學 紫藤花親善社', '長庚大學 有氧舞蹈社', '長庚大學 熱舞社']} />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar:{
        height:100,
    },
    modal:{
    position: 'absolute',
    top: 50, //與最上端的距離
    right: 150, //與右邊的距離
    width: 200,
    height: 20,
    backgroundColor: 'rgba(255, 157, 0, 0.5)',
    borderRadius: 40,
    justifyContent:'center',
    alignItems:'center',
        
    },
    modalText:{
        //跑不出效果
    },
    modalDown:{
        width: 250,
    },
    modalDownText:{
        fontSize:20
    },
})


