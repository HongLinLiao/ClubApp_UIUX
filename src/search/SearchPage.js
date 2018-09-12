import React, { Component } from 'react';
import {
  Text, View, StyleSheet, ScrollView,
  onPressLearnMore, TouchableOpacity, Image, ImageBackground
} from 'react-native';

import { Constants } from 'expo';
import { Button, SearchBar, Icon } from 'react-native-elements';
import StatusBarPaddingIOS from 'react-native-ios-status-bar-padding';




export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBarPaddingIOS style={{ backgroundColor: '#f6b456' }} />
        <ScrollView>










        </ScrollView>


        <View style={styles.tabBar}>

        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
  },




  tabBar: {
    height: 50,
    backgroundColor: '#f6b456',
  },



});
