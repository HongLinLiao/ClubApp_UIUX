import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { Constants } from 'expo';
import StatusBarPaddingIOS from 'react-native-ios-status-bar-padding';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBarPaddingIOS style={{ backgroundColor: '#f6b456' }} />
        <View style={styles.headView}>
          <View style={styles.arrowView}>
            <TouchableOpacity>
              <Image source={require('../../img/arrowLeft.png')}
                style={styles.arrow} />
            </TouchableOpacity>
          </View>
          <Text style={styles.headText}>社遊</Text>
          <View style={styles.arrow}/>


        </View>

        <ScrollView>
        <View  style={styles.clubBackground} >
          <ImageBackground source={require('../../img/clubAct.jpg')}
            style={styles.clubBackground} />
        </View>

          <View style={styles.clubTextView}>
            <Text style={styles.clubText}>長庚大學</Text>
            <Text style={styles.clubText}>紫藤花親善社</Text>
            <TouchableOpacity>

              <Image source={require('../../img/bookmark.png')}
                style={styles.collect} />
            </TouchableOpacity>
          </View>
          <Text style={styles.actText}>社遊</Text>

          <View style={styles.summaryTextView}>
            <Image source={require('../../img/calendar.png')}
              style={styles.icon} />

            <Text style={styles.summaryText}>2018/08/17</Text>
            <Text style={styles.summaryText}>AM9:00~PM5:00</Text>
          </View>
          <View style={styles.summaryTextView}>
            <Image source={require('../../img/coin.png')}
              style={styles.icon} />
            <Text style={styles.summaryText}>自行負擔</Text>
          </View>
          <View style={styles.summaryTextView}>
            <Image source={require('../../img/place.png')}
              style={styles.icon} />
            <Text style={styles.summaryText}>淡水捷運站一號出口</Text>
          </View>

          <View style={styles.mapView}>
            <ImageBackground source={require('../../img/map.png')} resizeMode='contain'
              style={styles.map} />
          </View>

          <View style={styles.divide}>
            <Text style={styles.titleText}>活動內容</Text>
            <Text numberOfLines={2} ellipsizeMode='tail' style={styles.titleContentText}>bcvnasdfghjmnbvcxzascbvcnbxvcxznbcvxcnbzxvcnxbzvcnzxbvcnzxvjhsgdajshdais
              <Text style={styles.more}>...more</Text>
            </Text>

          </View>
          <View style={styles.divide}>
            <Text style={styles.titleText}>備註</Text>
            <Text numberOfLines={2} ellipsizeMode='tail' style={styles.titleContentText}>bcvnasdfghjmnbvcxzascbvcnbxvcxznbcvxcnbzxvcnxbzvcnzxbvcnzxvjhsgdajshdais
            <Text style={styles.more}>...more</Text>
            </Text>

          </View>

          <View style={styles.divideN}>
            <Text style={styles.titleText}>你有興趣</Text>
            <View style={styles.intrestView}>
              <View style={styles.recommendView} />
              <View style={styles.recommendView} />
            </View>
            <View style={styles.intrestView}>
              <View style={styles.recommendView} />
              <View style={styles.recommendView} />
            </View>

          </View>
        </ScrollView>
        <View style={styles.tabBar} />

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
  headText:{
    fontSize:20,
    color:'#666666'
  },
  arrow: {
    height: 30,
    width: 30,
  },
  clubBackground: {
    height: 250,
   // justifyContent: 'flex-end',
  },
  clubTextView: {
    flexDirection: 'row'
  },
  collect: {
    //backgroundColor:'#666666',
    height: 18,
    width: 18,
    marginTop: 20,
    marginLeft: 150
  },
  clubText: {
    fontSize: 15,
    color: '#666666',
    marginLeft: 20,
    marginTop: 20,
  },

  actText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 7,
    marginBottom: 7,
    color: '#666666'
  },

  titleText: {
    fontSize: 18,
    color: '#666666',
    marginBottom: 6,
    marginTop: 20,
  },
  summaryTextView: {
    marginLeft: 20,
    marginBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {

    height: 18,
    width: 18,
    marginLeft: 5,
  },
  summaryText: {
    fontSize: 14,
    color: '#666666',
    margin: 7,
  },
  mapView: {
    flex: 1,
    //borderWidth:1,
    height: 200,
    marginLeft: 30,
    marginRight: 30,
  },
  map: {
    flex:1,
  },
  titleContentText: {
    fontSize: 17,
    color: 'rgb(102, 102, 102)',

    lineHeight: 25,
  },
  divide: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(102, 102, 102, 0.25)',
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 6,
  },
  divideN: {
    marginLeft: 20,
    marginRight: 20,
  },
  more: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 20,
    color: 'rgba(102, 102, 102, 0.5)',
    fontSize: 16,
    paddingTop: 5,
  },

  intrestView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recommendView: {
    height: 120,
    width: 160,
    backgroundColor: '#666666',
    borderRadius: 30,
    margin: 10,
  },
  tabBar: {
    height: 50,
    backgroundColor: '#f6b456',
  },
});