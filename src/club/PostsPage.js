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

    state = { //想要預設state就可以這樣宣告一個state把你想要的值放進去
        list: [
            {
                memberName: 'Shownu 女友',
                headImg: require('../../img/myboyfriend.jpg'),
                schoolName: '長庚大學',
                clubName: 'Monbebe社',
                memberJob: '社員',
                memberCommemt: '66666666666666666666666666666666666666666666666666666666666666666666666666666666666',
                likeOrNo: false,
                likeImg: require('../../img/like.png')

            },
            {
                memberName: 'Shownu 側福晉',
                headImg: require('../../img/handsomeShownu.jpeg'),
                schoolName: '長庚大學',
                clubName: 'Monbebe社',
                memberJob: '美宣',
                memberCommemt: '讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚讚',
                likeOrNo: false,
                likeImg: require('../../img/like.png')
            },
        ],
        likeOr: false,
        likeI: require('../../img/like.png'),

        //紘維新增的~
        comment: false,
    }

    changeLikeImg = (index) => {
        let newList = [...this.state.list]
        newList[index].likeOrNo = !newList[index].likeOrNo
        newList[index].likeImg = !newList[index].likeOrNo ? require('../../img/like.png') : require('../../img/graylike.png')
        console.log(newList)
        this.setState({
            list: newList
        })
    }
    changeLikeI = () => {
        this.setState({
            likeOr: !this.state.likeOr,
            likeI: this.state.likeOr ? require('../../img/like.png') : require('../../img/graylike.png')
        })
    }

    commemt = (status) => {
        this.setState({
            comment: status
        })
    }

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
                    <Text style={styles.headText}>Monbebe社的貼文</Text>
                    <TouchableOpacity>
                        <Image source={require('../../img/columndots.png')}
                            style={styles.rightIcon} />
                    </TouchableOpacity>
                </View>

                <ScrollView style={{ width: '100%' }}>
                    <View style={styles.rowLeft}>
                        <TouchableOpacity>
                            <Image style={styles.bigHead}
                                source={require('../../img/shownu.jpg')} />
                        </TouchableOpacity>
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


                    <View style={styles.postView}>
                        <Text style={styles.postTitle}>Shownu介紹</Text>
                        <Text style={styles.postDate}>2018年09月01日</Text>
                        <View style={styles.postTextView}>
                            <Text style={styles.postText}>
                                藝名：Shownu / 셔누
                                本名：孫賢祐 / 손현우 / Son Hyun Woo
                                綽號：肩膀美男
                                出生日期：1992年6月18日
                                身高：181cm
                                體重：80kg
                                血型：O型
                                星座：雙子座
                                隊內擔當：隊長、領唱、主領舞
                                出道經歷：原JYP練習生，GOT7同期、李孝利伴舞、NU BOYZ前成員

                                個性安靜、木訥，被Monsta X的其他團員推選為團體中的爸爸。
                                擁有高超的舞蹈實力，被曾屬同一公司的前輩Sistar成員寶拉稱作是隊裡的性感舞蹈擔當。
                                為全隊公認身材最好、最想交換身體的成員。
                                體育專長為游泳，雖然在水中很厲害，在陸地上卻完全不行，因此有Show龜的稱號。
                                非常不擅長撒嬌。
                            </Text>
                        </View>
                    </View>
                    <View style={styles.postPictureView}>
                        <Image
                            style={styles.postPicture}
                            source={require('../../img/handsomeShownu.jpeg')}
                            resizeMode='cover'
                        />
                    </View>



                    <View style={styles.sbRowLine}>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => { this.changeLikeI() }}>
                                <Image style={styles.icon}
                                    source={this.state.likeI} />
                            </TouchableOpacity>
                            <Text style={styles.number}>520</Text>
                        </View>
                        <View style={styles.row}>
                            <Image style={styles.icon}
                                source={require('../../img/comment.png')} />
                            <Text style={styles.number}>520</Text>
                            <Image style={styles.icon}
                                source={require('../../img/eyes.png')} />
                            <Text style={styles.number}>520</Text>
                        </View>
                    </View>


                    <FlatList
                        data={this.state.list}
                        renderItem={({ item, index }) => (
                            <View style={styles.rowPadding}>
                                <TouchableOpacity>
                                    <Image style={styles.littleHead}
                                        source={item.headImg} />
                                </TouchableOpacity>
                                <View style={styles.columnLine}>
                                    <View style={styles.sbRow}>
                                        <View style={styles.row}>
                                            <Text style={styles.littleSchool}>{item.schoolName}</Text>
                                            <Text style={styles.littleClub}>{item.clubName}</Text>
                                        </View>
                                        <View style={[styles.row]}>
                                            <TouchableOpacity onPress={() => { this.changeLikeImg(index) }}>
                                                <Image style={styles.icon}
                                                    source={item.likeImg} />
                                            </TouchableOpacity>
                                            <Text style={styles.numberLittle}>520</Text>
                                            <TouchableOpacity>
                                                <Image source={require('../../img/pencil.png')}
                                                    style={styles.icon} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.littleName}>{item.memberName}</Text>
                                        <Text style={styles.littleJob}>{item.memberJob}</Text>
                                    </View>
                                    <Text style={styles.comment}>{item.memberCommemt}</Text>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item, index) => item.memberName}
                    />

                </ScrollView>

                <View style={[styles.rowPaddingInput, {height: this.state.comment ? null : 55} ]}>
                    <TouchableOpacity>
                        <Image style={styles.littleHead}
                            source={require('../../img/myboyfriend.jpg')} />
                    </TouchableOpacity>
                    <View style={styles.columnTabBar}>
                        {this.state.comment ? (
                            <View>
                                <View style={styles.row}>
                                    <Text style={styles.littleSchool}>長庚大學</Text>
                                    <Text style={styles.littleClub}>Monbebe社</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.littleName}>Shownu女友</Text>
                                    <Text style={styles.littleJob}>社員</Text>
                                </View>
                            </View>
                        ) : null
                        }
                        <View style={[ styles.inputViewTabBar]}>
                            <TextInput
                                style={[ styles.textInputTabBar ]}
                                placeholder='新增留言...'
                                placeholderTextColor='rgba(102,102,102,0.7)'
                                underlineColorAndroid={'transparent'}
                                multiline={this.state.comment}
                                onFocus={() => this.commemt(true)}
                                onEndEditing={() => this.commemt(false)}
                            />
                        </View>
                    </View>
                    <View style={styles.sbColumn}>
                        {this.state.comment ?
                            (
                                <TouchableOpacity onPress={() => {
                                    this.setState({comment: false})
                                    Keyboard.dismiss()
                                }}>
                                    <Image style={styles.iconClose}
                                        source={require('../../img/close.png')} />
                                </TouchableOpacity>
                            ) : null             
                        }            
                        <TouchableOpacity>
                            <Image source={require('../../img/send.png')}
                                style={styles.sendIcon} />
                        </TouchableOpacity>
                    </View>
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
        height: 30,
        width: 30,
        marginLeft: 10,
    },
    rightIcon: {
        height: 20,
        width: 20,
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 20,
        paddingTop: 20
    },
    bigHead: {
        height: 60,
        width: 60,
        borderRadius: 50,
        marginRight: 15
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    school: {
        color: '#666666',
        fontSize: 15,
        marginRight: 5
    },
    club: {
        color: '#666666',
        fontSize: 20,
        margin: 5,
        fontWeight: 'bold'
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
    postView: {
        flexDirection: 'column',
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 10
    },
    postTitle: {
        color: '#666666',
        fontSize: 28,
        fontWeight: 'bold'
    },
    postDate: {
        color: '#666666',
        fontSize: 13
    },
    postTextView: {
        marginTop: 10
    },
    postText: {
        color: '#666666',
        fontSize: 15,
        lineHeight: 25
    },
    postPictureView: {
        width: '100%',
        marginTop: 10,
        marginBottom: 10
    },
    postPicture: {
        width: '100%',
        height: 250
    },
    sbRowLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: 'rgba(102,102,102,0.5)',
        paddingLeft: 10,
        paddingBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    sbRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    icon: {
        height: 20,
        width: 20
    },
    number: {
        color: '#666666',
        fontSize: 15,
        marginLeft: 10,
        marginRight: 10
    },
    rowPadding: {
        flexDirection: 'row',
        margin: 5
    },
    littleHead: {
        height: 40,
        width: 40,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 10,
        borderRadius: 50
    },
    columnLine: {
        flexDirection: 'column',
        borderBottomWidth: 0.5,
        borderColor: 'rgba(102,102,102,0.2)',
        flex: 1,
        padding: 5
    },
    littleSchool: {
        color: '#666666',
        fontSize: 14,
        marginRight: 8
    },
    littleClub: {
        color: '#666666',
        fontSize: 18
    },
    numberLittle: {
        color: '#666666',
        fontSize: 12,
        margin: 5,
        marginRight: 15
    },
    littleName: {
        color: '#666666',
        fontSize: 14,
        marginRight: 8
    },
    littleJob: {
        color: '#666666',
        fontSize: 14
    },
    comment: {
        color: '#666666',
        fontSize: 14,
        marginTop: 5,
        marginBottom: 5
    },
    tabBar: {
        height: 50,
        backgroundColor: 'rgba(246,180,86,1)',
        alignSelf: 'stretch'
    },
    tabBarView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 5,
        paddingRight: 10,
        flex: 1
    },
    inputView: {
        height: 35,
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderRadius: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:8
    },
    textInput: {
        height: 35,
        alignSelf: 'stretch'
    },
    sendIcon: {
        height: 22,
        width: 22,
        marginRight: 5,
        marginLeft:5,
        marginTop:8
    },
    rowPaddingInput: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        backgroundColor: 'rgba(246,180,86,1)',
        justifyContent: 'space-between'
    },
    columnTabBar: {
        flexDirection: 'column',
        flex: 1,
        padding: 5
    },
    inputViewTabBar: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:7,
        marginBottom:7,
        paddingLeft: 10,
        paddingRight: 10
    },
    textInputTabBar: {
        alignSelf: 'stretch',
        color:'#666666'
    },
    sbColumn: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 5,
    },
    iconClose: {
        height: 13,
        width: 13,
        marginTop:8
    }
})