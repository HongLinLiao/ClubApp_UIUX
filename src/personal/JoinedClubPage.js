import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    Image,
    FlatList
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
        ],
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
                    <Text style={styles.headText}>社團管理</Text>
                    <View style={styles.empty}></View>
                </View>
                <View style={styles.topButtonView}>
                    <View style={styles.topButton}>
                        <Text style={styles.topButtonLeftText}>已加入</Text>
                    </View>
                    <View style={styles.between}></View>
                    <TouchableOpacity style={styles.topButton}>
                        <Text style={styles.topButtonRightText}>已收藏</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <FlatList
                        data={this.state.list}
                        renderItem={({ item, index }) => (
                            <View style={styles.listView}>
                                <View style={styles.textArea}>
                                    <Text style={styles.school}>長庚大學</Text>
                                    <Text style={styles.club}>{item.name}</Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Image source={require('../../img/cancel.png')}
                                            style={styles.cancelIcon} />
                                    </TouchableOpacity>
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
    topButtonView: {
        width: 380,
        height: 40,
        backgroundColor: 'rgba(246,180,86,0.2)',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 10
    },
    topButton: {
        width: 185,
        height: 40,
        backgroundColor: 'rgba(246,180,86,0)',
        borderRadius: 12,
        justifyContent: 'center',
        margin: 2
    },
    topButtonLeftText: {
        color: 'rgba(246,180,86,1)',
        fontSize: 18,
        alignSelf: 'center'
    },
    between: {
        width: 1,
        height: 30,
        backgroundColor: 'rgba(102,102,102,0.5)'
    },
    topButtonRightText: {
        color: 'rgba(102,102,102,1)',
        fontSize: 18,
        alignSelf: 'center'
    },
    listView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'rgba(102,102,102,0.1)',
        backgroundColor: 'rgba(246,180,86,0)',
        width: 370,
        height: 50
    },
    textArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    school: {
        fontSize: 15,
        marginLeft:15,
        marginRight: 20,
        color: 'rgba(102,102,102,1)'
    },
    club: {
        fontSize: 20,
        color: 'rgba(102,102,102,1)'
    },
    cancelIcon: {
        width: 22,
        height: 22,
        marginRight: 15
    },
    tabBar: {
        height: 50,
        backgroundColor: 'rgba(246,180,86,1)',
        alignSelf: 'stretch'
    }
})
