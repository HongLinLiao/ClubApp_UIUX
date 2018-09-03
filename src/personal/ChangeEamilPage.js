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
                <StatusBar hidden={false} height={50} backgroundColor={'#f6b456'} />
                <View style={styles.headView}>
                    <View >
                        <TouchableOpacity>
                            <Image source={require('../../img/arrowLeft.png')}
                                style={styles.arrow} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.headText}>變更電子信箱</Text>
                    <View style={styles.fake}></View>
                </View>
                <View style={styles.containView}>

                    <View style={styles.passwordView}>
                        <Text style={styles.passwordText}>輸入新的電子信箱</Text>
                        <TextInput style={styles.passwordInput}></TextInput>
                    </View>

                    <View style={styles.passwordView}>
                        <Text style={styles.passwordText}>輸入登入密碼</Text>
                        <TextInput style={styles.passwordInput}></TextInput>
                    </View>

                    <View style={styles.buttonView}>
                        <Button
                            title='確認'

                            color='#666666'
                            fontSize={18}
                            backgroundColor='#fbdaa7'
                            borderRadius={10}
                            buttonStyle={styles.button} />
                    </View>

                    <Text style={styles.redText}>請至您的電子信箱確認</Text>

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
        padding: 15,
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
        padding: 20,

    },
    passwordText: {
        fontSize: 18,
        padding: 10,
        color: '#666666'
    },
    passwordInput: {
        backgroundColor: 'rgba(246, 179, 85 ,0.2)',
        width: 250,
        height: 40,
        borderRadius: 10,

    },

    buttonView: {
        padding: 10,
    },
    button: {
        width: 170,
        height: 45,
        shadowOffset: { width: 0.5, height: 0.5, },
        shadowColor: '#000000',
        shadowRadius: 10,
        shadowOpacity: 0.1,
        elevation: 10,

    },
    redText: {
        fontSize: 13,
        color: '#ff0000'
    },
    tabBar: {
        height: 50,
        backgroundColor: '#f6b456'
    },
})