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

    state = { //想要預設state就可以這樣宣告一個state把你想要的值放進去
        name: '', //暱稱
        aboutMe: '', //介紹
        nameColor: 'rgba(102,102,102,0.5)', //預設姓名顏色
        aboutColor: 'rgba(102,102,102,0.5)', //預設介紹顏色
        nameEditable: false, //預設姓名更改是關閉的
        aboutEditable: false, //預設介紹更改是關閉的
    }

    changeAboutEditable = () => { 
        this.setState({ 
            aboutEditable: !this.state.aboutEditable,
            aboutColor: this.state.aboutEditable ? 'rgba(102,102,102,0.5)' : 'rgba(102,102,102,1)'
        });
    }

    changeNameEditable = () => {
        this.setState({  //this.setState( {} )
            nameEditable: !this.state.nameEditable, //編輯開關
            nameColor:  this.state.nameEditable ? 'rgba(102,102,102,0.5)' : 'rgba(102,102,102,1)'
        })
    }

    componentWillMount() {
        //就不用在元件安裝的時候設this.setState()雖然是一樣的意思xd
    }

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
                    <TextInput style={[styles.nameInput, {color: this.state.nameColor}]}  //state變數代姓名顏色
                        placeholder='EJ boyfriend'
                        placeholderTextColor='rgba(102,102,102,0.5)'
                        underlineColorAndroid={'rgba(246,180,86,0)'}
                        editable={this.state.nameEditable} 
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name}/>
                    <TouchableOpacity onPress={() => { this.changeNameEditable() }}>
                        <Image style={styles.hotPoint}
                            source={require('../../img/pencil.png')} />
                    </TouchableOpacity>

                </View>

                <View style={styles.row}>
                    <Image style={styles.hotPoint}
                        source={require('../../img/star.png')} />
                    <Text style={styles.number}>520</Text>
                </View>

                <View style={styles.aboutMeView}>
                    <View style={styles.empty}></View>
                    <TextInput style={[styles.aboutMeInput, {color: this.state.aboutColor}]}  //state變數代表自介顏色
                        placeholder='EJ boyfriend'
                        placeholderTextColor='rgba(102,102,102,0.5)'
                        underlineColorAndroid={'rgba(246,180,86,0)'}
                        editable={this.state.aboutEditable}
                        onChangeText={(aboutMe) => this.setState({aboutMe})}
                        value={this.state.aboutMe}/>
                    <TouchableOpacity onPress={() => { this.changeAboutEditable() }}>
                        <Image style={styles.hotPoint}
                            source={require('../../img/pencil.png')} />
                    </TouchableOpacity>
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
        marginLeft:10
    },
    headText: {
        color: '#666666',
        fontSize: 20,
        alignSelf: 'center'
    },
    empty: {
        width: 40
    },
    person: {
        marginTop: 50,
        marginBottom: 50,
        width: 130,
        height: 130,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    personImage: {
        borderRadius: 65
    },
    cameraIcon: {
        height: 30,
        width: 30,
        margin: 5
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
        borderColor: 'rgba(246,180,86,0.4)',
        marginBottom: 10
    },
    nameInput: {
        width: 225,
        height: 50,
        // color: '#666666',
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
        borderColor: 'rgba(246,180,86,0.4)',
        marginTop: 10
    },
    aboutMeInput: {
        width: 225,
        height: 150,
        color: '#666666',
        backgroundColor: 'rgba(246,180,86,0)',
        textAlign: 'center'
    },
    save: {
        marginBottom: 35,
        width: 80,
        height: 30,
        borderRadius: 12,
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