import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    Image,
    FlatList,
    Switch
} from 'react-native';
import { Constants } from 'expo';
import { CheckBox } from 'react-native-elements';
import StatusBarPaddingIOS from 'react-native-ios-status-bar-padding';

export default class App extends Component {
    state = { //預設state值(第一次)
        list: [
            { name: '熱舞社' },
            { name: '跆拳道社' },
            { name: '吉他社' },
            { name: '紫藤花親善社' },
            { name: '國樂社' },
            { name: '熱舞社' },
            { name: '跆拳道社' },
            { name: '吉他社' },
            { name: '紫藤花親善社' },
            { name: '國樂社' },
            { name: '熱舞社' },
            { name: '跆拳道社' },
            { name: '吉他社' },
            { name: '紫藤花親善社' },
            { name: '國樂社' },
            { name: '熱舞社' },
            { name: '跆拳道社' },
            { name: '吉他社' },
            { name: '紫藤花親善社' },
            { name: '國樂社' }]
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBarPaddingIOS style={{ backgroundColor: '#f6b456' }} />
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <View style={styles.headView}>
                    <TouchableOpacity>
                        <Image source={require('../../img/left.png')}
                            style={styles.leftIcon} />
                    </TouchableOpacity>
                    <Text style={styles.headText}>通知設定</Text>
                    <View style={styles.empty}></View>
                </View>
                <ScrollView>
                    <View style={styles.listView}>
                        <View style={styles.textArea}>
                            <Image style={styles.alarm}
                                source={require('../../img/alarm.png')} />
                            <Text style={styles.alarmText}>提醒</Text>
                        </View>
                        <View>
                            <Switch
                                style={[styles.switchSize,{transform: [{ scaleX: 1.3 }, { scaleY: 1.3}]}]}
                                value={true}
                                onTintColor='rgba(246,180,86,1)'
                                tintColor='rgba(246,180,86,0.1)'
                                thumbTintColor='white'
                            />
                        </View>
                    </View>
                    <View style={styles.moonView}>
                        <View style={styles.textArea}>
                            <Image style={styles.alarm}
                                source={require('../../img/moon.png')} />
                            <Text style={styles.moonText} >夜間模式</Text>
                        </View>
                        <View>
                            <Switch
                                style={[styles.switchSize,{transform: [{ scaleX: 1.3 }, { scaleY: 1.3}]}]}
                                value={false}
                                onTintColor='rgba(246,180,86,1)'
                                tintColor='rgba(246,180,86,0.1)'
                                thumbTintColor='white'
                            />
                        </View>
                    </View>

                    <FlatList
                        data={this.state.list}
                        renderItem={({ item, index }) => (
                            <View style={styles.listView}>
                                <View style={styles.textArea}>
                                    <Text style={styles.school}>長庚大學</Text>
                                    <Text style={styles.club}>{item.name}</Text>
                                </View>
                                <View>
                                    <Switch
                                    style={[styles.switchSize,{transform: [{ scaleX: 1.3 }, { scaleY: 1.3}]}]}
                                    value={false}
                                    onTintColor='rgba(246,180,86,1)'
                                    tintColor='rgba(246,180,86,0.1)'
                                    thumbTintColor='white'
                                    />
                                </View>
                            </View>
                        )}
                        keyExtractor={(item, index) => item.name}
                    />
                </ScrollView>
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
    listView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderColor: 'rgba(102,102,102,0.1)',
        backgroundColor: 'rgba(246,180,86,0)',
        width: 370,
        height: 60
    },
    textArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    alarm: {
        width: 25,
        height: 25,
        marginRight:15,
        marginLeft:15
    },
    alarmText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'rgba(102,102,102,1)'
    },
    moonView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderColor: 'rgba(102,102,102,0.5)',
        backgroundColor: 'rgba(246,180,86,0)',
        width: 370,
        height: 60
    },
    moonText: {
        fontSize: 22,
        color: 'rgba(102,102,102,1)'
    },
    switchSize:{
        marginRight:15
    },
    school: {
        fontSize: 18,
        marginLeft: 10,
        marginRight: 20,
        color: 'rgba(102,102,102,1)'
    },
    club: {
        fontSize: 22,
        color: 'rgba(102,102,102,1)'
    },
    tabBar: {
        height: 50,
        backgroundColor: 'rgba(246,180,86,1)',
        alignSelf: 'stretch'
    }
})