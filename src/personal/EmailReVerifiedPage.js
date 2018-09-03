import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, StatusBar, TextInput } from 'react-native';
import { Icon, SearchBar, Button } from 'react-native-elements'
import { Constants } from 'expo';

import StatusBarPaddingIOS from 'react-native-ios-status-bar-padding';



export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBarPaddingIOS style={{ backgroundColor: '#f6b456' }} />
                <View style={styles.headView}>
                    <View >
                        <TouchableOpacity>
                            <Image source={require('../../img/arrowLeft.png')}
                                style={styles.arrow} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.headText}>驗證電子信箱</Text>
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



                    <TouchableOpacity style={styles.buttonView}>
                        <Image source={require('../../img/send.png')}
                            style={styles.send} />
                        <Text style={styles.buttonText}>發送驗證碼</Text>
                    </TouchableOpacity>

                    <TouchableOpacity><Text style={styles.redText}>重新發送驗證碼</Text></TouchableOpacity>

                </View>

                <View style={styles.tabBar}></View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headView: {
        height: 45,
        backgroundColor: '#f6b456',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    arrow: {
        height: 30,
        width: 30,
    },
    headText: {
        color: '#666666',
        fontSize: 20,
    },
    fake: {
        width: 30,
    },
    containView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },


    mailView: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        // borderWidth:1,
    },
    userMail: {
        padding: 10,
    },
    mailText: {
        fontSize: 18,

        color: '#666666'
    },
    userMailText: {

        color: '#666666'
    },
    passwordView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 80,
        //borderWidth:1,
    },
    passwordText: {
        fontSize: 20,
        padding: 10,
        color: '#666666'
    },
    passwordInput: {
        backgroundColor: 'rgba(102, 102, 102, 0.2)',
        width: 200,
        height: 40,
        borderRadius: 10,

    },
    send: {
        height: 20,
        width: 20,
        padding: 3,
    },
    buttonView: {

        margin: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 170,
        height: 45,
        borderRadius: 20,
        backgroundColor: '#fbdaa7',
        shadowOffset: { width: 0.5, height: 0.5, },
        shadowColor: '#000000',
        shadowRadius: 10,
        shadowOpacity: 0.1,
        elevation: 10,
    },
    buttonText: {
        fontSize: 18,
        color: '#666666'


    },
    redText: {
        fontSize: 13,
        color: '#f30a0a'
    },
    tabBar: {
        height: 50,
        backgroundColor: '#f6b456'
    },
})