import React, { Component } from 'react';
import {
    Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, StatusBar, TextInput,
    ImageBackground
} from 'react-native';
import { Icon, SearchBar, Button } from 'react-native-elements'
import { Constants } from 'expo';

import StatusBarPaddingIOS from 'react-native-ios-status-bar-padding';



export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <StatusBar
                        hidden={true} />

                    <View style={styles.aRowView}>
                        <TouchableOpacity style={styles.posterView}>
                            <ImageBackground source={require('../../img/poster5.jpg')}
                                style={styles.poster}>
                                <View style={styles.black}>
                                    <View style={styles.actTextView}>
                                        <Text style={styles.actText}>期初社大</Text>
                                    </View>
                                    <View style={styles.clubTextView}>
                                        <Text style={styles.clubText}>紫藤花親善社</Text>
                                    </View>

                                    <Image source={require('../../img/flowerMan.jpg')}
                                        style={styles.clubImage}
                                        imageStyle={styles.clubImage}
                                    />
                                    <View style={styles.heartView}>
                                        <Text style={styles.heartText}>220</Text>
                                        <Image source={require('../../img/like.png')}
                                            style={styles.likeIcon} />
                                    </View>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.posterView}>
                            <ImageBackground source={require('../../img/poster6.jpg')}
                                style={styles.poster}>
                                <View style={styles.black}>
                                    <View style={styles.actTextView}>
                                        <Text style={styles.actText}>期初社大</Text>
                                    </View>
                                    <View style={styles.clubTextView}>
                                        <Text style={styles.clubText}>紫藤花親善社</Text>
                                    </View>

                                    <Image source={require('../../img/danceMan.jpg')}
                                        style={styles.clubImage}
                                        imageStyle={styles.clubImage}
                                    />
                                    <View style={styles.heartView}>
                                        <Text style={styles.heartText}>220</Text>
                                        <Image source={require('../../img/like.png')}
                                            style={styles.likeIcon} />
                                    </View>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.posterView}>
                            <ImageBackground source={require('../../img/poster7.jpg')}
                                style={styles.poster}>
                                <View style={styles.black}>
                                    <View style={styles.actTextView}>
                                        <Text style={styles.actText}>期初社大</Text>
                                    </View>
                                    <View style={styles.clubTextView}>
                                        <Text style={styles.clubText}>紫藤花親善社</Text>
                                    </View>

                                    <Image source={require('../../img/dogMan.jpg')}
                                        style={styles.clubImage}
                                        imageStyle={styles.clubImage}
                                    />
                                    <View style={styles.heartView}>
                                        <Text style={styles.heartText}>220</Text>
                                        <Image source={require('../../img/like.png')}
                                            style={styles.likeIcon} />
                                    </View>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.aRowView}>
                    <TouchableOpacity style={styles.posterView}>
                        <ImageBackground source={require('../../img/poster3.jpg')}
                            style={styles.poster}>
                            <View style={styles.black}>
                                <View style={styles.actTextView}>
                                    <Text style={styles.actText}>期初社大</Text>
                                </View>
                                <View style={styles.clubTextView}>
                                    <Text style={styles.clubText}>紫藤花親善社</Text>
                                </View>

                                <Image source={require('../../img/flowerMan.jpg')}
                                    style={styles.clubImage}
                                    imageStyle={styles.clubImage}
                                />
                                <View style={styles.heartView}>
                                    <Text style={styles.heartText}>220</Text>
                                    <Image source={require('../../img/like.png')}
                                        style={styles.likeIcon} />
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.posterView}>
                        <ImageBackground source={require('../../img/poster1.jpg')}
                            style={styles.poster}>
                            <View style={styles.black}>
                                <View style={styles.actTextView}>
                                    <Text style={styles.actText}>期初社大</Text>
                                </View>
                                <View style={styles.clubTextView}>
                                    <Text style={styles.clubText}>紫藤花親善社</Text>
                                </View>

                                <Image source={require('../../img/danceMan.jpg')}
                                    style={styles.clubImage}
                                    imageStyle={styles.clubImage}
                                />
                                <View style={styles.heartView}>
                                    <Text style={styles.heartText}>220</Text>
                                    <Image source={require('../../img/like.png')}
                                        style={styles.likeIcon} />
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.posterView}>
                        <ImageBackground source={require('../../img/poster2.jpg')}
                            style={styles.poster}>
                            <View style={styles.black}>
                                <View style={styles.actTextView}>
                                    <Text style={styles.actText}>期初社大</Text>
                                </View>
                                <View style={styles.clubTextView}>
                                    <Text style={styles.clubText}>紫藤花親善社</Text>
                                </View>

                                <Image source={require('../../img/dogMan.jpg')}
                                    style={styles.clubImage}
                                    imageStyle={styles.clubImage}
                                />
                                <View style={styles.heartView}>
                                    <Text style={styles.heartText}>220</Text>
                                    <Image source={require('../../img/like.png')}
                                        style={styles.likeIcon} />
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                </View>

                <View style={styles.aRowView}>
                    <TouchableOpacity style={styles.posterView}>
                        <ImageBackground source={require('../../img/poster3.jpg')}
                            style={styles.poster}>
                            <View style={styles.black}>
                                <View style={styles.actTextView}>
                                    <Text style={styles.actText}>期初社大</Text>
                                </View>
                                <View style={styles.clubTextView}>
                                    <Text style={styles.clubText}>紫藤花親善社</Text>
                                </View>

                                <Image source={require('../../img/flowerMan.jpg')}
                                    style={styles.clubImage}
                                    imageStyle={styles.clubImage}
                                />
                                <View style={styles.heartView}>
                                    <Text style={styles.heartText}>220</Text>
                                    <Image source={require('../../img/like.png')}
                                        style={styles.likeIcon} />
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.posterView}>
                        <ImageBackground source={require('../../img/poster1.jpg')}
                            style={styles.poster}>
                            <View style={styles.black}>
                                <View style={styles.actTextView}>
                                    <Text style={styles.actText}>期初社大</Text>
                                </View>
                                <View style={styles.clubTextView}>
                                    <Text style={styles.clubText}>紫藤花親善社</Text>
                                </View>

                                <Image source={require('../../img/danceMan.jpg')}
                                    style={styles.clubImage}
                                    imageStyle={styles.clubImage}
                                />
                                <View style={styles.heartView}>
                                    <Text style={styles.heartText}>220</Text>
                                    <Image source={require('../../img/like.png')}
                                        style={styles.likeIcon} />
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.posterView}>
                        <ImageBackground source={require('../../img/poster2.jpg')}
                            style={styles.poster}>
                            <View style={styles.black}>
                                <View style={styles.actTextView}>
                                    <Text style={styles.actText}>期初社大</Text>
                                </View>
                                <View style={styles.clubTextView}>
                                    <Text style={styles.clubText}>紫藤花親善社</Text>
                                </View>

                                <Image source={require('../../img/dogMan.jpg')}
                                    style={styles.clubImage}
                                    imageStyle={styles.clubImage}
                                />
                                <View style={styles.heartView}>
                                    <Text style={styles.heartText}>220</Text>
                                    <Image source={require('../../img/like.png')}
                                        style={styles.likeIcon} />
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                </View>



                </ScrollView>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    aRowView: {
        //height: 250,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        
    },
    posterView: {

        flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        height: 280,
        width: 100

    },
    poster: {
        flex: 1,

        opacity: 0.8,


    },
    black: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //height: 246,
        //width: 120,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    actTextView: {

        marginTop: 65,
    },
    actText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    clubTextView: {
        marginTop: 40,
        marginBottom: 10,
    },
    clubText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    clubImageView: {
        marginTop: 10,

        height: 60,
        width: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',

    },
    clubImage: {
        height: 55,
        width: 55,
        borderRadius: 28,
        borderWidth: 3,
        borderColor: '#ffffff'
    },
    heartView: {
        marginLeft: 60,
        marginTop: 30,
        marginRight: 10,
        flexDirection: 'row'
    },
    heartText: {
        fontSize: 17,
        color: '#ffffff',
    },
    likeIcon: {
        height: 20,
        width: 20,
        marginLeft:2,
    },
}
)