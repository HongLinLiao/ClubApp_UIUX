import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    StatusBar
} from 'react-native';
import { Constants } from 'expo';
import StatusBarPaddingIOS from 'react-native-ios-status-bar-padding';

export default class Form extends Component {
    render() {
        return (
            <ImageBackground
                style={styles.bf}
                source={require('../../img/myboyfriend.jpg')}
                imageStyle={{ resizeMode: 'cover' }}
            >
                <StatusBarPaddingIOS style={{ backgroundColor: 'transparent' }} />
                <StatusBar hidden={false} height={50}
                    backgroundColor={'transparent'} />
                <View style={styles.container}>
                    <Text style={styles.title}>忘記密碼</Text>
                    <Text style={styles.send}>已寄信至</Text>
                    <Text style={styles.mail}>abc123@iclub.com</Text>
                    <TouchableOpacity style={styles.againBotton}>
                        <Text style={styles.againText}>再次發送信件</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginBotton}>
                        <Text style={styles.loginText}>登入</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.backText}>返回</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    bf: {
        flex: 1,
        height: null,
        width: null
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    title: {
        color: 'white',
        fontSize: 35,
        alignSelf: 'center',
        marginBottom: 90
    },
    send: {
        color: 'white',
        fontSize: 18,
        alignSelf: 'center',
        margin: 5
    },
    mail: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        margin: 5
    },
    againBotton: {
        backgroundColor: 'rgba(255,255,255,0.4)',
        margin: 35,
        borderWidth: 1,
        borderColor: 'white',
        width: 230,
        height: 37,
        borderRadius: 7,
        justifyContent: 'center'
    },
    againText: {
        color: 'white',
        fontSize: 15,
        alignSelf: 'center'
    },
    loginBotton: {
        backgroundColor: 'rgba(255,255,255,0)',
        margin: 43,
        borderWidth: 1,
        borderColor: 'white',
        width: 140,
        height: 35,
        borderRadius: 50,
        justifyContent: 'center'
    },
    loginText: {
        color: 'white',
        fontSize: 15,
        alignSelf: 'center'
    },
    backText: {
        color: 'white',
        fontSize: 15,
        alignSelf: 'center',
        paddingTop: 5
    }

})