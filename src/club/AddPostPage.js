import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    Image,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    FlatList,
    Keyboard
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
                        <Image source={require('../../img/close.png')}
                            style={styles.leftIcon} />
                    </TouchableOpacity>
                    <Text style={styles.headText}>發文</Text>
                    <TouchableOpacity>
                        <Image source={require('../../img/send.png')}
                            style={styles.rightIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.rowLeft}>
                    <Image style={styles.bigHead}
                        source={require('../../img/shownu.jpg')} />
                        <View style={styles.column}>
                            <View style={styles.row}>
                                <Text style={styles.school}>長庚大學</Text>
                                <Text style={styles.club}>Monbebe社</Text>
                            </View>
                                <View style={styles.row}>
                                    <Text style={styles.name}>shownu女友</Text>
                                    <Text style={styles.job}>社員</Text>
                                </View>
                        </View>
                </View>
                <ScrollView style={{ width: '100%' }}>
                    <TextInput
                        style={styles.bigTextInput}
                        placeholder='標題'
                        placeholderTextColor='rgba(102,102,102,1)'
                        underlineColorAndroid={'transparent'}
                        multiline={true}
                    />
                    <Text style={styles.date}>2018年09月01日</Text>
                    <TextInput
                        style={styles.littleTextInput}
                        placeholder='內容......'
                        placeholderTextColor='rgba(102,102,102,0.7)'
                        underlineColorAndroid={'transparent'}
                        multiline={true}
                    />
                </ScrollView>
                <View style={styles.tabBar}>
                    <TouchableOpacity>
                        <Image style={styles.barIcon}
                            source={require('../../img/graycamera.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.barIcon}
                            source={require('../../img/grayphoto.png')} />
                    </TouchableOpacity>
                </View>
                <KeyboardAvoidingView behavior='padding'></KeyboardAvoidingView>
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
        height: 22,
        width: 22,
        marginLeft: 15,
    },
    rightIcon: {
        height: 25,
        width: 25,
        marginLeft: 10,
        marginRight: 10
    },
    headText: {
        color: '#666666',
        fontSize: 20,
        alignSelf: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowLeft: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        height: 80,
        margin: 10,
        alignItems:'center'
    },
    bigHead: {
        height: 60,
        width: 60,
        borderRadius: 50,
        margin: 15
    },
    rowsb: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    school: {
        color: '#666666',
        fontSize: 15,
        marginRight: 5
    },
    club: {
        color: '#666666',
        fontSize: 20,
        margin: 5
    },
    name: {
        color: '#666666',
        fontSize: 15,
        marginRight: 5
    },
    job: {
        color: '#666666',
        fontSize: 15,
        margin: 5
    },
    date: {
        color: '#666666',
        fontSize: 13,
        marginLeft: 20
    },
    bigTextInput: {
        fontSize: 28,
        alignSelf: 'stretch',
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 5,
        color: 'rgba(102,102,102,1)'
    },
    littleTextInput: {
        fontSize: 15,
        alignSelf: 'stretch',
        marginLeft:20,
        marginTop:10,
        color: 'rgba(102,102,102,0.7)'
    },
    tabBar: {
        height: 50,
        backgroundColor: 'rgba(246,180,86,1)',
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    barIcon: {
        height: 27,
        width: 27,
        marginRight: 15,
        marginLeft: 15
    },

})