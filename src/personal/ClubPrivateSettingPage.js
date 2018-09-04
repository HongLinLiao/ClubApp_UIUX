import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    Image
} from 'react-native';
import { Constants } from 'expo';
import StatusBarPaddingIOS from 'react-native-ios-status-bar-padding';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='#f6b456'
                    barStyle="light-content"
                />
                <StatusBarPaddingIOS style={{ backgroundColor: '#f6b456' }} />
                <View style={styles.headView}>
                    <TouchableOpacity>
                        <Image source={require('../../img/left.png')}
                            style={styles.leftIcon} />
                    </TouchableOpacity>
                    <Text style={styles.headText}>隱私權設定</Text>
                    <View style={styles.empty}></View>
                </View>
                <Text style={styles.title}>將您的社團設為</Text>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.botton}>
                        <Text style={styles.bottonText}>非公開</Text>
                        <Image source={require('../../img/graylocked.png')}
                            style={styles.lockIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botton}>
                        <Text style={styles.bottonText}>公開</Text>
                        <Image source={require('../../img/grayunlocked.png')}
                            style={styles.unlockIcon} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.okBotton}>
                    <Text style={styles.okText}>建立</Text>
                </TouchableOpacity>
                <View style={styles.tabBar}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    headView: {
        alignSelf: 'stretch',
        height: 45,
        backgroundColor: '#f6b456',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 100
    },
    leftIcon: {
        height: 30,
        width: 30,
        marginLeft: 10
    },
    headText: {
        color: '#666666',
        fontSize: 20,
        alignSelf: 'center'
    },
    empty: {
        width: 40
    },
    title: {
        color: 'rgba(102,102,102,1)',
        fontSize: 25,
        alignSelf: 'center',
        marginBottom: 60,
        marginTop: 30
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    botton: {
        height: 100,
        width: 140,
        backgroundColor: 'rgba(246,180,86,0.2)',
        borderRadius: 15,
        margin: 13,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: 110
    },
    bottonText: {
        color: 'rgba(102,102,102,1)',
        fontSize: 20,
        paddingTop: 6
    },
    lockIcon: {
        height: 25,
        width: 25,
        margin: 6
    },
    unlockIcon: {
        height: 25,
        width: 25,
        margin: 6
    },
    okBotton: {
        height: 40,
        width: 110,
        backgroundColor: 'rgba(0,205,205,1)',
        borderRadius: 20,
        justifyContent: 'center',
        marginBottom: 110
    },
    okText: {
        color: 'rgba(255,255,255,1)',
        fontSize: 20,
        alignSelf: 'center'
    },
    tabBar: {
        height: 50,
        backgroundColor: 'rgba(246,180,86,1)',
        alignSelf: 'stretch'
    }
})
