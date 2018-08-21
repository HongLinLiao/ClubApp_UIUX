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
    ImageBackground
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
                    <Text style={styles.headText}>編輯個人頁面</Text>
                    <View style={styles.empty}></View>
                </View>

                    <ImageBackground 
                        style={styles.person}
                        imageStyle={styles.personImage}
                        source={require('../../img/shownu.jpg')} >
                    <TouchableOpacity>
                        <Image source={require('../../img/camera.png')}
                            style={styles.cameraIcon} />
                    </TouchableOpacity>
                    </ImageBackground>

                <View style={styles.nameView}>
                    <View style={styles.empty}></View>
                    <TextInput style={styles.nameInput}
                        placeholder='EJ boyfriend'
                        placeholderTextColor='#666666'
                        underlineColorAndroid={'rgba(246,180,86,0)'} />
                    <Image style={styles.hotPoint}
                        source={require('../../img/pencil.png')} />
                </View>

                <View style={styles.row}>
                    <Image style={styles.hotPoint}
                        source={require('../../img/star.png')} />
                    <Text style={styles.number}>520</Text>
                </View>

                <View style={styles.aboutMeView}>
                    <View style={styles.empty}></View>
                    <TextInput style={styles.aboutMeInput}
                        placeholder='EJ boyfriend'
                        placeholderTextColor='#666666'
                        underlineColorAndroid={'rgba(246,180,86,0)'} />
                    <Image style={styles.hotPoint}
                        source={require('../../img/pencil.png')} />
                </View>

                <TouchableOpacity style={styles.save}>
                    <Text style={styles.saveText}>儲存</Text>
                </TouchableOpacity>

                <View style={styles.tabBar}></View>
                
                <KeyboardAvoidingView behavior='padding'>
                </KeyboardAvoidingView>
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
        width: 30
    },
    headText: {
        color: '#666666',
        fontSize: 20,
        alignSelf: 'center'
    },
    empty: {
        width: 30
    },
    person: {
        marginTop: 50,
        width: 130,
        height: 130,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    personImage:{
        borderRadius: 65
    },
    cameraIcon: {
        height: 30,
        width: 30,
        margin:5
    },
    nameView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(246,180,86,0)',
        width: 295,
        height: 50,
        borderBottomWidth: 2,
        borderWidth: 0,
        borderColor: 'rgba(246,180,86,0.2)',
        marginBottom:10
    },
    nameInput: {
        width: 225,
        height: 50,
        color: '#666666',
        backgroundColor: 'rgba(246,180,86,0)',
        textAlign: 'center',
        fontSize: 30
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    hotPoint: {
        height: 28,
        width: 28,
        marginRight: 5
    },
    number: {
        color: '#666666',
        fontSize: 25
    },
    aboutMeView: {
        flexDirection: 'row',
        marginBottom: 20,
        padding: 10,
        width: 295,
        justifyContent: 'center',
        height: 170,
        backgroundColor: 'rgba(246,180,86,0)',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: 'rgba(246,180,86,0.2)',
        marginTop:10
    },
    aboutMeInput: {
        width: 225,
        height: 150,
        color: '#666666',
        backgroundColor: 'rgba(246,180,86,0)',
        textAlign: 'center'
    },
    save: {
        marginBottom: 30,
        width: 80,
        height: 30,
        borderRadius: 12,
        backgroundColor: 'rgba(246,180,86,0)',
        borderWidth: 2,
        borderColor: 'rgba(246,180,86,0.4)',
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