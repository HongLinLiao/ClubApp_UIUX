import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    StatusBar,
    Image
} from 'react-native';
import { Constants } from 'expo';
import StatusBarPaddingIOS from 'react-native-ios-status-bar-padding';

export default class Form extends Component {
    render() {
        return (
            <ImageBackground
                style={styles.bf}
                source={require('../../img/myboyfriend.jpg')}
                imageStyle={{ resizeMode: 'cover' }}>
                <StatusBarPaddingIOS style={{ backgroundColor: '#f6b456' }} />
                <StatusBar hidden={false} height={50}
                    backgroundColor={'#f6b456'} />
                <View style={styles.container}>
                    <Text style={styles.title}>為你自己拍張照</Text>
                    <Image source={require('../../img/user.png')}
                        style={styles.userIcon} />
                    <TouchableOpacity>
                        <Image source={require('../../img/camera.png')}
                            style={styles.cameraIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botton}>
                        <Text style={styles.bottonText}>從相簿選取</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botton}>
                        <Text style={styles.bottonText}>稍後設定</Text>
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
        fontSize: 30,
        alignSelf: 'center',
        paddingBottom: 70
    },
    userIcon: {
        height: 110,
        width: 110,
        margin: 15
    },
    cameraIcon: {
        height: 35,
        width: 35,
        marginBottom: 65
    },
    botton: {
        backgroundColor: 'rgba(255,255,255,0)',
        margin: 10,
        borderWidth: 1,
        borderColor: 'white',
        width: 150,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center'
    },
    bottonText: {
        color: 'white',
        fontSize: 17,
        alignSelf: 'center'
    }
})