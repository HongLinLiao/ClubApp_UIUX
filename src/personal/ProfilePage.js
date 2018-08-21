import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    StatusBar
} from 'react-native';
import { Constants } from 'expo';
import StatusBarPaddingIOS from 'react-native-ios-status-bar-padding';

export default class Form extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBarPaddingIOS style={{ backgroundColor: '#f6b456' }} />
                <StatusBar hidden={false} height={50}
                    backgroundColor={'#f6b456'} />
                <Image style={styles.person}
                    source={require('../../img/shownu.jpg')} />
                <Text style={styles.name}>EJ boyfriend</Text>
                <View style={styles.row}>
                    <Image style={styles.hotPoint}
                        source={require('../../img/star.png')} />
                    <Text style={styles.number}>520</Text>
                </View>
                <View style={styles.aboutMe}>
                    <Text style={styles.aboutMeText}>我很帥，我是一潔的唷</Text>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.botton}>
                        <Image style={styles.bottonIcon}
                            source={require('../../img/edit.png')} />
                        <Text style={styles.bottonText}>編輯個人</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botton}>
                        <Image style={styles.bottonIcon}
                            source={require('../../img/heart.png')} />
                        <Text style={styles.bottonText}>社團管理</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.botton}>
                        <Image style={styles.bottonIcon}
                            source={require('../../img/bell.png')} />
                        <Text style={styles.bottonText}>
                            通知設定</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botton}>
                        <Image style={styles.bottonIcon}
                            source={require('../../img/settings.png')} />
                        <Text style={styles.bottonText}>
                            進階管理</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.signOut}>
                    <Text style={styles.signOutText}>登出</Text>
                </TouchableOpacity>
                <View style={styles.tabBar}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: 'rgba(246,180,86,0.2)'
    },
    person: {
        marginTop: 45,
        margin: 15,
        width: 100,
        height: 100,
        borderRadius: 50
    },
    name: {
        color: '#666666',
        fontSize: 28,
        marginBottom: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    hotPoint: {
        height: 23,
        width: 23,
        marginRight: 5
    },
    number: {
        color: '#666666',
        fontSize: 18
    },
    aboutMe: {
        width: 290,
        height: 100,
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 25,
        justifyContent: 'center',
        marginBottom: 15
    },
    aboutMeText: {
        color: '#666666',
        fontSize: 15,
        alignSelf: 'center'
    },
    botton: {
        margin: 10,
        width: 135,
        height: 90,
        borderRadius: 25,
        backgroundColor: 'rgba(246,180,86,0)',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'rgba(246,180,86,1)',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    bottonIcon: {
        height: 30,
        width: 30
    },
    bottonText: {
        color: '#666666',
        fontSize: 13,
        marginTop: 8
    },
    signOut: {
        margin: 10,
        marginBottom: 12,
        width: 290,
        height: 35,
        borderRadius: 25,
        backgroundColor: 'rgba(246,180,86,0)',
        borderWidth: 1,
        borderColor: '#f6b456',
        justifyContent: 'center'
    },
    signOutText: {
        color: '#666666',
        fontSize: 15,
        alignSelf: 'center'
    },
    tabBar: {
        height: 50,
        alignSelf: 'stretch',
        backgroundColor: '#f6b456',
        flexDirection: 'row'
    },
})