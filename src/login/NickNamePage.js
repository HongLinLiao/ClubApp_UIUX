import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StatusBar
} from 'react-native';
import { Constants } from 'expo';
import StatusBarPaddingIOS from 'react-native-ios-status-bar-padding';

export default class Form extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.bf}
        source={require('../../img/myboyfriend.jpg')}
        imageStyle={{ resizeMode: 'cover' }}
      >
        <StatusBarPaddingIOS style={{ backgroundColor: 'transparent' }} />
        <StatusBar hidden={false} height={50}
          backgroundColor={'transparent'} />
        <View style={styles.container}>
          <Text style={styles.title}>請輸入暱稱</Text>
          <Text style={styles.enter}>想要別人如何稱呼你/妳?</Text>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid={'transparent'} />
          <TouchableOpacity style={styles.okBotton}>
            <Text style={styles.okText}>確認</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.backText}>返回</Text>
          </TouchableOpacity>
          <KeyboardAvoidingView behavior='padding'>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bf: {
    flex: 1,
    height: null,
    width: null
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  title: {
    color: 'white',
    fontSize: 35,
    alignSelf: 'center',
    paddingBottom: 75
  },
  enter: {
    color: 'white',
    fontSize: 15,
    alignSelf: 'center',
    padding: 20
  },
  textInput: {
    marginBottom: 35,
    width: 230,
    height: 37,
    color: 'white',
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: 7,
    textAlign: 'center'
  },
  okBotton: {
    backgroundColor: 'rgba(255,255,255,0)',
    margin: 38,
    borderWidth: 1,
    borderColor: 'white',
    width: 140,
    height: 35,
    borderRadius: 50,
    justifyContent: 'center'
  },
  okText: {
    color: 'white',
    fontSize: 15,
    alignSelf: 'center'
  },
  backText: {
    color: 'white',
    fontSize: 15,
    alignSelf: 'center',
    paddingTop: 10
  }
})