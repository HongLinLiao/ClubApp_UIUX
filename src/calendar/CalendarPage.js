import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
import { Icon, SearchBar } from 'react-native-elements'
import { Constants } from 'expo';

import StatusBarPaddingIOS from 'react-native-ios-status-bar-padding';



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBarPaddingIOS style={{ backgroundColor: '#f6b456' }} />
        <StatusBar backgroundColor='#f6b456' />

        <View style={styles.selectMonth}>
         
            <TouchableOpacity>
              <Image source={require('../../img/arrowLeftBlue.png')}
                style={styles.arrow} />
            </TouchableOpacity>
         
          <View style={styles.allMonthText}>
            <Text style={styles.monthText}>August</Text>
            <Text style={styles.yearText}>2018</Text>
          </View>
         
            <TouchableOpacity>
              <Image source={require('../../img/arrowRightBlue.png')}
                style={styles.arrow} />
            </TouchableOpacity>
         
        </View>

        <View style={styles.calendar}>
          <View style={styles.dayView}>
            <Text style={styles.dayText}>SUN</Text>
            <Text style={styles.dayText}>MON</Text>
            <Text style={styles.dayText}>TUE</Text>
            <Text style={styles.dayText}>WED</Text>
            <Text style={styles.dayText}>THU</Text>
            <Text style={styles.dayText}>FRI</Text>
            <Text style={styles.dayText}>SAT</Text>
          </View>
          <View style={styles.dateView}>
            <View style={styles.weekView}>
              <View style={styles.oneDateView}><Text style={styles.dateText}></Text></View>
              <View style={styles.oneDateView}><Text style={styles.dateText}></Text></View>
              <View style={styles.oneDateView}><Text style={styles.dateText}></Text></View>
              <View style={styles.oneDateView}><Text style={styles.dateText}>1</Text></View>
              <View style={styles.oneDateView}><Text style={styles.dateText}>2</Text></View>
              <View style={styles.oneDateView}><Text style={styles.dateText}>3</Text></View>
              <View style={styles.oneDateView}><Text style={styles.dateText}>4</Text></View>
            </View>

            <View style={styles.weekView}>
              <View style={styles.oneDateView}><Text style={styles.dateText}>5</Text></View>
              <View style={styles.oneDateView}><Text style={styles.dateText}>6</Text></View>
              <View style={styles.oneDateView}><Text style={styles.dateText}>7</Text></View>
              <TouchableOpacity style={styles.eventDateView}><Text style={styles.dateText}>8</Text></TouchableOpacity>
              <View style={styles.todayDateView}><Text style={styles.dateText}>9</Text></View>
              <View style={styles.oneDateView}><Text style={styles.dateText}>10</Text></View>
              <View style={styles.oneDateView}><Text style={styles.dateText}>11</Text></View>
            </View>

            <View style={styles.weekView}>
              <View style={styles.oneDateView}><Text style={styles.dateText}>12</Text></View>
              <View style={styles.oneDateView}><Text style={styles.dateText}>13</Text></View>
              <View style={styles.oneDateView}><Text style={styles.dateText}>14</Text></View>
              <View style={styles.oneDateView}><Text style={styles.dateText}>15</Text></View>
              <View style={styles.oneDateView}><Text style={styles.dateText}>16</Text></View>
              <View style={styles.oneDateView}><Text style={styles.dateText}>17</Text></View>
              <View style={styles.oneDateView}><Text style={styles.dateText}>18</Text></View>
            </View>

            <View style={styles.weekView}>

              <View style={styles.oneDateView}><Text style={styles.dateText}>19</Text></View>
              <View style={styles.oneDateView}><Text style={styles.dateText}>20</Text></View>
              <View style={styles.oneDateView}><Text style={styles.dateText}>21</Text></View>

              <View style={styles.oneDateView}><Text style={styles.dateText}>22</Text></View>
              <View style={styles.touchDateView}><Text style={styles.dateText}>23</Text></View>
              <View style={styles.oneDateView}><Text style={styles.dateText}>24</Text></View>
              <View style={styles.oneDateView}><Text style={styles.dateText}>25</Text></View>
            </View>

            <View style={styles.weekView}>
              <View style={styles.oneDateView}><Text style={styles.dateText}>26</Text></View>
              <View style={styles.oneDateView}><Text style={styles.dateText}>27</Text></View>
              <View style={styles.oneDateView}><Text style={styles.dateText}>28</Text></View>
              <View style={styles.oneDateView}><Text style={styles.dateText}>29</Text></View>
              <View style={styles.oneDateView}><Text style={styles.dateText}>30</Text></View>
              <View style={styles.oneDateView}><Text style={styles.dateText}>31</Text></View>
              <View style={styles.oneDateView}><Text style={styles.dateText}></Text></View>
            </View>




          </View>
        </View>

        <ScrollView horizontal={true}>
          <View style={styles.activityPoster}>
            <TouchableOpacity style={styles.posters}>
              <Image source={require('../../img/poster1.jpg')} style={styles.posters}>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.posters}>
              <Image source={require('../../img/poster2.jpg')} style={styles.posters}>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.posters}>
              <Image source={require('../../img/poster3.jpg')} style={styles.posters}>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.posters}>
              <Image source={require('../../img/poster4.jpg')} style={styles.posters}>
              </Image>
            </TouchableOpacity>
          </View>
        </ScrollView>




        <View style={styles.tabBar}></View>


        <TouchableOpacity style={styles.selecting}>
          <View style={styles.selectingButtonView}>
            <Image source={require('../../img/checked.png')}
              style={styles.selectingImage} />
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calendar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(102,102,102,0.3)',
    paddingBottom: 15,
    marginHorizontal: 22
  },


  selectMonth: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  allMonthText: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
  monthText: {
    fontSize: 40,
    //fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#1b3d5f'
  },
  yearText: {
    color: '#1b3d5f'
  },
  arrow: {
    width: 40,
    height: 40,
    marginHorizontal: 10

  },
  dayView: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 45,
    width: 350,
    flexDirection: 'row',
    padding: 1,

  },
  dayText: {
    fontSize: 14,
    color: '#1b3d5f',
    fontWeight: 'bold',
  },
  dateView: {
    flexDirection: 'column',
    width: 350,
  },
  weekView: {
    flexDirection: 'row',
  },
  oneDateView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 38,
    margin: 5,


  },
  eventDateView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6b456',
    borderRadius: 25,
    width: 40,
    height: 38,
    margin: 5,
  },
  eventContinueView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6b456',
    borderRadius: 25,
    flexDirection: 'row',
    width: 40,
    height: 38,
    margin: 5,
  },
  todayDateView: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ff0000',
    borderRadius: 25,
    width: 40,
    height: 38,
    margin: 5,
  },
  touchDateView: {
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#7b7b7b',
    borderRadius: 25,
    width: 40,
    height: 38,
    margin: 5,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1b3d5f'
  },
  activityPoster: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  posters: {
    height: 175,
    width: 100,
    shadowOffset: { width: 2, height: 2, },
    shadowColor: '#000000',
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 10,
    marginRight: 10,
  },

  tabBar: {
    height: 50,
    backgroundColor: '#f6b456'
  },
  selecting: {
    position: 'absolute',
    top: 500, //與最上端的距離
    right: 30, //與右邊的距離

  },
  selectingButtonView: {
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

  selectingImage: {
    width: 35,
    height: 35,
  },
});
