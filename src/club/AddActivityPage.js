import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Image,
    ScrollView
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

                <View style={styles.headView}>
                    <TouchableOpacity>
                        <Image source={require('../../img/left.png')}
                            style={styles.leftIcon} />
                    </TouchableOpacity>
                    <Text style={styles.headText}>編輯活動</Text>
                    <View style={styles.empty}></View>
                </View>

                <ScrollView>
                    <View style={{ height: 280, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.title}>新增活動照片</Text>
                        <TouchableOpacity>
                            <Image source={require('../../img/graycamera.png')}
                                style={styles.graycamera} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.bigText}>由本機上傳</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.line}></View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 20 }}>
                        <View style={styles.nameView}>
                            <TextInput
                                style={styles.nameInput}
                                placeholder='活動名稱'
                                placeholderTextColor='rgba(102,102,102,1)'
                                underlineColorAndroid={'transparent'}
                                multiline={false}
                            />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Image source={require('../../img/calendar.png')}
                            style={styles.calendarIcon} />
                        <View style={styles.littleTextView}>
                            <TextInput
                                style={styles.littleText}
                                placeholder='2018/09/01 09:00~17:00'
                                placeholderTextColor='rgba(102,102,102,0.5)'
                                underlineColorAndroid='transparent'
                            />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Image source={require('../../img/coin.png')}
                            style={styles.calendarIcon} />
                        <View style={styles.littleTextView}>
                            <TextInput
                                style={styles.littleText}
                                placeholder='自行負擔'
                                placeholderTextColor='rgba(102,102,102,0.5)'
                                underlineColorAndroid='transparent'
                            />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Image source={require('../../img/place.png')}
                            style={styles.calendarIcon} />
                        <View style={styles.littleTextView}>
                            <TextInput
                                style={styles.littleText}
                                placeholder='淡水捷運站一號出口'
                                placeholderTextColor='rgba(102,102,102,0.5)'
                                underlineColorAndroid='transparent'
                            />
                        </View>
                    </View>
                    <View style={{ padding: 30 }}>
                        <Text style={styles.title}>活動內容</Text>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.inputText}
                                placeholder='輸入內容......'
                                placeholderTextColor='rgba(102,102,102,0.5)'
                                underlineColorAndroid='transparent'
                                multiline={true}
                            />
                        </View>
                        <Text style={styles.title}>備註</Text>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.inputText}
                                placeholder='輸入內容......'
                                placeholderTextColor='rgba(102,102,102,0.5)'
                                underlineColorAndroid='transparent'
                                multiline={true}
                            />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity style={styles.save}>
                            <Text style={styles.saveText}>確定新增</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
                <View style={styles.tabBar}></View>
                <KeyboardAvoidingView behavior='padding'></KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    scroll: {
        flex: 1
    },
    title: {
        color: '#666666',
        fontSize: 20
    },
    graycamera: {
        height: 50,
        width: 50,
        margin: 20
    },
    bigText: {
        color: '#666666',
        fontSize: 18
    },
    line: {
        alignSelf: 'stretch',
        height: 0.5,
        backgroundColor: '#666666'
    },
    nameView: {
        width: 300,
        height: 35,
        backgroundColor: 'rgba(102,102,102,0.2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    nameInput: {
        width: 270,
        height: 35,
        fontSize: 15,
        color:'rgba(102,102,102,1)'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    calendarIcon: {
        height: 25,
        width: 25,
        marginRight: 10
    },
    littleTextView: {
        borderBottomWidth: 0.5,
        borderColor: 'rgba(102,102,102,0.5)',
        padding: 2
    },
    littleText: {
        width: 250,
        fontSize: 15,
        color:'rgba(102,102,102,1)'
    },
    inputView: {
        borderColor: 'rgba(102,102,102,0.5)',
        borderWidth: 0.5,
        marginBottom: 15,
        padding: 10,
        marginTop:10,
        marginBottom:10,
    },
    inputText:{
        alignItems:'stretch',
        fontSize: 15,
        color:'rgba(102,102,102,1)'
    },
    save: {
        marginBottom:15,
        width: 90,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'rgba(246,180,86,0)',
        borderWidth: 2,
        borderColor: 'rgba(246,180,86,0.6)',
        justifyContent: 'center'
    },
    saveText: {
        color: '#666666',
        fontSize: 16,
        alignSelf: 'center'
    },
    tabBar: {
        height: 50,
        alignSelf: 'stretch',
        backgroundColor: '#f6b456',
        flexDirection: 'row'
    },
})