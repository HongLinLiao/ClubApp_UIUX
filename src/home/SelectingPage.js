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
            {name: '熱舞社', checked: false, checkTextColor: 'rgba(102,102,102,1)'},
            {name: '跆拳道社', checked: false, checkTextColor: 'rgba(102,102,102,1)'},
            {name: '吉他社', checked: false, checkTextColor: 'rgba(102,102,102,1)'},
            {name: '紫藤花親善社', checked: false, checkTextColor: 'rgba(102,102,102,1)'},
            {name: '國樂社', checked: false, checkTextColor: 'rgba(102,102,102,1)'},
            {name: '熱舞社', checked: false, checkTextColor: 'rgba(102,102,102,1)'},
            {name: '跆拳道社', checked: false, checkTextColor: 'rgba(102,102,102,1)'},
            {name: '吉他社', checked: false, checkTextColor: 'rgba(102,102,102,1)'},
            {name: '紫藤花親善社', checked: false, checkTextColor: 'rgba(102,102,102,1)'},
            {name: '國樂社', checked: false, checkTextColor: 'rgba(102,102,102,1)'},
            {name: '熱舞社', checked: false, checkTextColor: 'rgba(102,102,102,1)'},
            {name: '跆拳道社', checked: false, checkTextColor: 'rgba(102,102,102,1)'},
            {name: '吉他社', checked: false, checkTextColor: 'rgba(102,102,102,1)'},
            {name: '紫藤花親善社', checked: false, checkTextColor: 'rgba(102,102,102,1)'},
            {name: '國樂社', checked: false, checkTextColor: 'rgba(102,102,102,1)'},
        ],
    }
    changeCheck = (index) => {
        let newList = [...this.state.list]
        newList[index].checked = !newList[index].checked
        newList[index].checkTextColor = !newList[index].checked ? 'rgba(102,102,102,1)' : 'rgba(246,180,86,1)'
        console.log(newList)
        this.setState({
            list: newList
        })
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
                    <Text style={styles.headText}>社團篩選</Text>
                    <View style={styles.empty}></View>
                </View>
                <ScrollView>
                    <FlatList
                        data={this.state.list}
                        renderItem={({item, index}) => (
                            <View style={styles.listView}>
                                <View style={styles.textArea}>
                                    <Text style={[styles.school, { color: item.checkTextColor }]}>長庚大學</Text>
                                    <Text style={[styles.club, { color: item.checkTextColor }]}>{item.name}</Text>
                                </View>
                                <View>
                                    <CheckBox
                                        right
                                        containerStyle={styles.checkContainer}
                                        checkedIcon={<Image style={styles.checkIcon}
                                            source={require('../../img/orangecheck.png')} />}
                                        uncheckedIcon={<Image style={styles.boxIcon}
                                            source={require('../../img/666666box.png')} />}
                                        checked={item.checked}
                                        onPress={() => { this.changeCheck(index) }} />
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
        borderBottomWidth: 1,
        borderColor: 'rgba(102,102,102,0.1)',
        backgroundColor: 'rgba(246,180,86,0)',
        width: 370,
        height:50
    },
    textArea:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    school: {
        fontSize: 15,
        marginLeft: 10,
        marginRight: 15,
        color: 'rgba(102,102,102,1)'
    },
    club: {
        fontSize: 20,
        color: 'rgba(102,102,102,1)'
    },
    checkContainer: {
        backgroundColor: 'rgba(255,255,255,0)',
        borderColor: 'rgba(255,255,255,0)',
        justifyContent: 'flex-end'
    },
    checkIcon: {
        height: 20,
        width: 20
    },
    boxIcon: {
        height: 20,
        width: 20
    },
    tabBar: {
        height: 50,
        backgroundColor:'rgba(246,180,86,1)',
        alignSelf: 'stretch'
    }
})
