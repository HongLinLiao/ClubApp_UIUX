import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    Image,
    TextInput,
    KeyboardAvoidingView
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
                    <Text style={styles.headText}>創立新社團</Text>
                    <View style={styles.empty}></View>
                </View>
                <Text style={styles.title}>請輸入您的社團名稱</Text>
                <Text style={styles.Q}>學校</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='長庚大學'
                    placeholderTextColor='rgba(102,102,102,0.5)'
                    underlineColorAndroid={'transparent'} />
                <Text style={styles.Q}>社團名稱</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='長庚歷史研究社'
                    placeholderTextColor='rgba(102,102,102,0.5)'
                    underlineColorAndroid={'transparent'} />
                <TouchableOpacity>
                    <Text style={styles.nextText}>下一步</Text>
                </TouchableOpacity>
                <KeyboardAvoidingView behavior='padding'>
                </KeyboardAvoidingView>
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
        flexDirection: 'row'
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
        marginTop: 110,
        marginBottom: 50
    },
    Q: {
        color: 'rgba(102,102,102,1)',
        fontSize: 25,
        alignSelf: 'center'
    },
    textInput: {
        marginBottom: 30,
        width: 220,
        height: 45,
        color: 'rgba(102,102,102,1)',
        backgroundColor: 'rgba(246,180,86,0.4)',
        borderRadius: 10,
        textAlign: 'center'
    },
    nextText: {
        color: 'rgba(102,102,102,0.5)',
        fontSize: 18,
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 120
    },
    tabBar: {
        height: 50,
        backgroundColor: 'rgba(246,180,86,1)',
        alignSelf: 'stretch'
    }
})