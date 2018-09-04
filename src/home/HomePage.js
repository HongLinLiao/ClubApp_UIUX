import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, StatusBar, TextInput } from 'react-native';
import { Icon, SearchBar, Button } from 'react-native-elements'
import { Constants } from 'expo';

import StatusBarPaddingIOS from 'react-native-ios-status-bar-padding';



export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBarPaddingIOS style={{ backgroundColor: '#f6b456' }} />
                <View style={styles.headView}>
                    <View style={styles.fake}></View>
                    <Text style={styles.headText}>iclubs</Text>
                    <View >
                        <TouchableOpacity>
                            <Image source={require('../../img/control.png')}
                                style={styles.controlImage} />
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView>
                    <View style={styles.containView}>
                        <View style={styles.newsView}>
                            <View style={styles.shadow}>
                                <Image source={require('../../img/dogMan.jpg')}
                                    style={styles.managerImageView}
                                    imageStyle={styles.managerImageView} />
                            </View>
                            <View style={styles.newsTextView}>
                                <View style={styles.clubAndManagerNameView}>
                                    <Text style={styles.newsClubText}>紫藤花親善社</Text>
                                    <Text style={styles.newsManagerText}>社長</Text>
                                    <Text style={styles.newsManagerText}>Ann</Text>
                                </View>
                                <View style={styles.actNameAndDateView}>
                                    <Text style={styles.newsNameText}>期初社大</Text>
                                    <Text style={styles.newsDateText}>2018/09/29</Text>
                                </View>
                                <View style={styles.newsContentView}>
                                    <Text numberOfLines={3} ellipsizeMode='tail' style={styles.newsContentText}>dfghjkldfghjkzxcvbnmxcvdfghdfghjkldfghjkzxcvbnmadfsggdfghdghxcvdfghksndksndsnkdnkjsndk
                                    <Text style={styles.moreText}>...more</Text>
                                    </Text>
                                    
                                </View>
                                <View style={styles.iconView}>
                                    <View style={styles.aIcon}>
                                        <Image source={require('../../img/message.png')}
                                            style={styles.icon} />
                                        <Text style={styles.iconNumber}>98</Text>
                                    </View>
                                    <View style={styles.aIcon}>
                                        <Image source={require('../../img/like-gray.png')}
                                            style={styles.icon} />
                                        <Text style={styles.iconNumber}>98</Text>
                                    </View>
                                    <View style={styles.aIcon}>
                                        <Image source={require('../../img/eyes.png')}
                                            style={styles.icon} />
                                        <Text style={styles.iconNumber}>98</Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity style={styles.star}>
                    <View style={styles.starButtonView}>
                        <Image source={require('../../img/star.png')}
                            style={styles.starImage} />
                    </View>
                </TouchableOpacity>

                <View style={styles.tabBar}></View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headView: {
        height: 45,
        backgroundColor: '#f6b456',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    headText: {
        color: '#666666',
        fontSize: 25,
    },
    fake: {
        width: 50,
    },
    controlImage: {
        height: 30,
        width: 30,
        marginRight: 10,
    },
    containView: {
        flex: 1,
        padding: 15
    },
    newsView: {
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(102,102,102,0.25)',
        height: 160,
        flexDirection: 'row',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        
    },
    shadow: {
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'rgba(102,102,102,1)',
        shadowRadius: 10,
        height: 50,
        width: 50,
        borderRadius: 30,
    },

    managerImageView: {
        height: 50,
        width: 50,
        borderRadius: 25,
        flex:1,
        
    },
    
    newsTextView: {
        marginLeft: 8,
        marginRight:8,
        flexDirection: 'column',
       
        flex:8,
    },
    clubAndManagerNameView: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 5,
    },
    newsClubText: {
        color: '#666666',
        paddingRight: 5,
        fontSize: 15,
    },
    newsManagerText: {
        color: '#666666',
        fontSize: 10,
    },
    actNameAndDateView: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
       
    },
    newsNameText: {
        color: '#666666',
        fontSize: 23,

    },
    newsDateText: {
        color: '#666666',
        fontSize: 10,
    },

    newsContentView: {
        flex:3,
       
    },
    newsContentText: {
        color: '#666666',
        fontSize: 15,
        height: '100%',
        lineHeight:25,
    },
    moreText:{
        fontSize: 15,
        color:'#123456',
    },
    iconView: {
        flex:1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'flex-end',
       
    },
    aIcon: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginLeft:10,
    },
    icon: {
        height: 15,
        width: 15,
        marginRight:3
    },
    iconNumber: {
        color: '#666666',
        fontSize: 11,
    },
    star: {
        position: 'absolute',
        top: 500, //與最上端的距離
        right: 30, //與右邊的距離

    },
    starButtonView: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 100,
        backgroundColor: '#f6b456',
        shadowOffset: { width: 1, height: 1, },
        shadowColor: '#000000',
        shadowRadius: 10,
        shadowOpacity: 0.7,
        elevation: 10,
    },

    starImage: {
        width: 40,
        height: 40,
    },
    tabBar: {
        height: 50,
        backgroundColor: '#f6b456'
    },
})