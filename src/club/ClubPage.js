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
      
        <ScrollView>
          <ImageBackground source={require('../../img/clubBack.jpg')}
          style={styles.clubBackground}>
          
            
            <View style={styles.clubInfoView}>
              <View style={styles.clubTextView}>
              <View style={styles.clubLeftTextView}>
                <Text style={styles.schoolText}>長庚大學</Text>
                <Text style={styles.clubTopNameText}>紫藤花親善社</Text>
              </View>
                
                <View style={styles.clubRightTextView}>
                  <Text style={styles.numberext}>公開</Text>
                  <Text style={styles.numberext}>56位社員,社長</Text>
                </View>
              </View>
              <TouchableOpacity>
              <View style={styles.calanderButton}>
              <Image source={require('../../img/calendar.png')}
              style={styles.iconCalendar}/>
              </View>
              </TouchableOpacity>
            </View>
          </ImageBackground>

          <View style={styles.adminButtonView}>
            <TouchableOpacity>
              <View style={styles.adminButton}>
                <Image source={require('../../img/contract.png')}
                style={styles.adminIcon}/>
                
                <Text style={styles.adminText}>發布文章</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.adminButton}>
              <Image source={require('../../img/idea.png')}
              style={styles.adminIcon}/>
                <Text style={styles.adminText}>舉辦活動</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.adminButton}>
              <Image source={require('../../img/manager.png')}
              style={styles.adminIcon}/>
                <Text style={styles.adminText}>切換管理者</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.adminButton}>
                <View style={styles.adminIcon} />//插入圖示
                <Text style={styles.adminText}>編輯成員</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.clubSummaryView}>
            <Text style={styles.clubSummaryText}>
              qqqjqqqqqqwrtyuiokjhgfddrtyuiolpkjhgfdtyujbvcfdtryuhgfzcxvbncvbnxcvbnxcvbnzxcvbnmxcvbnmxcvbnmaswdefrgthyjuk
            </Text>
          </View>

          <View style={styles.titleTextView}>
            <Text style={styles.titleText}>最新活動</Text>
          </View>
          <ScrollView horizontal={true}>
          
          <TouchableOpacity>
          <ImageBackground source={require('../../img/poster1.jpg')}
          style={styles.clubActivity}
          imageStyle={styles.borderRadius30}>
              <View style={styles.heartView}>
                <Text style={styles.heartText}>220</Text>
                <Image source={require('../../img/like.png')}
              style={styles.likeIcon}/>
              </View>
            </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
            <ImageBackground source={require('../../img/poster3.jpg')}
            style={styles.clubActivity}
            imageStyle={styles.borderRadius30}>
                <View style={styles.heartView}>
                  <Text style={styles.heartText}>220</Text>
                  <Image source={require('../../img/like.png')}
                style={styles.likeIcon}/>
                </View>
              </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity>
              <ImageBackground source={require('../../img/poster2.jpg')}
              style={styles.clubActivity}
              imageStyle={styles.borderRadius30}>
                  <View style={styles.heartView}>
                    <Text style={styles.heartText}>220</Text>
                    <Image source={require('../../img/like.png')}
                  style={styles.likeIcon}/>
                  </View>
                </ImageBackground>
                </TouchableOpacity>
            
            
            <View style={styles.moreView}>
            <TouchableOpacity>
              <Text style={styles.moreText}>更多</Text>
            </TouchableOpacity>
            </View>
            
          </ScrollView>

          <View style={styles.titleTextView}>
            <Text style={styles.titleText}>最新文章</Text>
          </View>
          <View style={styles.newsView}>
          <View style={styles.shadow}>
            <Image source={require('../../img/dogMan.jpg')}
              style={styles.managerImageView}
              imageStyle={styles.managerImageView}/>
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
              <Text style={styles.newsContentText}>dfghjkldfghjkzxcvbnmxcvbnmfgtyh</Text>
              <TouchableOpacity><Text style={styles.newsContentText}>...more</Text></TouchableOpacity>
            </View>
            <View style={styles.iconView}>
              <View style={styles.aIcon}>
              <Image source={require('../../img/message.png')}
              style={styles.icon}/>
                <Text style={styles.iconNumber}>98</Text> 
              </View>
              <View style={styles.aIcon}>
              <Image source={require('../../img/like-gray.png')}
              style={styles.icon}/>
                <Text style={styles.iconNumber}>98</Text> 
              </View>
              <View style={styles.aIcon}>
              <Image source={require('../../img/eyes.png')}
              style={styles.icon}/>
                <Text style={styles.iconNumber}>98</Text> 
              </View>
            </View>
              
            </View>
          </View>

          <View style={styles.newsView}>
            <Image source={require('../../img/flowerMan.jpg')}
            style={styles.managerImageView}
            imageStyle={styles.managerImageView}/>
            <View style={styles.newsTextView}>
            <View style={styles.clubAndManagerNameView}>
              <Text style={styles.newsClubText}>紫藤花親善社</Text>
              <Text style={styles.newsManagerText}>副社長</Text>
              <Text style={styles.newsManagerText}>Bnn</Text>
            </View>
            <View style={styles.actNameAndDateView}>
              <Text style={styles.newsNameText}>社遊</Text>
              <Text style={styles.newsDateText}>2018/09/29</Text>
            </View>
            <View style={styles.newsContentView}>
              <Text style={styles.newsContentText}>dfghjkldfghjkzxcvbnmxcvbnmfgtyh</Text>
              <TouchableOpacity><Text style={styles.newsContentText}>...more</Text></TouchableOpacity>
            </View>
            <View style={styles.iconView}>
            <View style={styles.aIcon}>
            <Image source={require('../../img/message.png')}
            style={styles.icon}/>
              <Text style={styles.iconNumber}>98</Text> 
            </View>
            <View style={styles.aIcon}>
            <Image source={require('../../img/like-gray.png')}
            style={styles.icon}/>
              <Text style={styles.iconNumber}>98</Text> 
            </View>
            <View style={styles.aIcon}>
            <Image source={require('../../img/eyes.png')}
            style={styles.icon}/>
              <Text style={styles.iconNumber}>98</Text> 
            </View>
          </View>
              
            </View>
          </View>
          

        <View style={styles.moreView}>
            <TouchableOpacity>
              <Text style={styles.moreText}>查看更多</Text>
            </TouchableOpacity>
            </View>

        </ScrollView>
        <View style={styles.tabBar} />
        
          
          <TouchableOpacity style={styles.selectClub}>
            <Text style={styles.selectClubText}>長庚大學 紫藤花親善社</Text>
              <Image source={require('../../img/arrowDown.png')}
                style={styles.icon}/>
                </TouchableOpacity>
            
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  selectClub: {
    position: 'absolute',
    top: 50, //與最上端的距離
    right: 150, //與右邊的距離
    width: 200,
    height: 20,
    backgroundColor: 'rgba(255, 157, 0, 0.5)',
    borderRadius: 40,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
  },
  selectClubText:{
    color:'rgba(0,0,0,0.8)'
  },
  clubBackground: {
    height: 380,

    //backgroundColor: '#b15bff',
    justifyContent: 'flex-end',
  },
  clubInfoView: {
    paddingTop: 10,
    paddingBottom:5,
    paddingLeft:30,
    paddingRight:20, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'rgba(0,0,0,0.3)'
  },
  clubTextView:{
    flexDirection:'row'
  },
  schoolText: {
    fontSize: 22,
    color: '#ffffff',
    fontWeight: 'bold',
    //paddingBottom: 10,
  },
  clubTopNameText: {
    fontSize: 22,
    color: '#ffffff',
    fontWeight: 'bold',
    paddingTop: 8,
  },
  numberext: {
    fontSize: 14,
    color: '#ffffff',
    paddingTop: 10,
    paddingLeft: 15,
  },
  clubLeftTextView: {
    flexDirection: 'column',
    
  },
  clubRightTextView: {
    flexDirection: 'column',
    
    alignItems:'flex-end',
    paddingLeft:20,
    paddingRight:5,
  },
  calanderButton: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: 'rgb(255, 157, 0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCalendar:{
    height:35,
    width:35,
  },
  adminButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:5,
  },
  adminButton: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  adminText: {
    fontSize: 12,
    padding: 5,
    color:'#666666'
  },
  adminIcon: {
    width: 35,
    height: 35,
    //backgroundColor: '#d0d0d0',
    //borderRadius: 100,
  },
  clubSummaryView: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  clubSummaryText: {
    fontSize: 18,
    color:'#666666'
  },
  clubActivity: {
    width: 150,
    height: 100,
    borderRadius: 30,
    margin: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  borderRadius30:{
    borderRadius:30,
  },
  titleTextView: {
    paddingLeft: 20,
    paddingTop:20,
    paddingBottom:10
  },
  titleText: {
    fontSize: 20,
    color: '#666666',
  },
  heartView: {
    padding: 15,
    flexDirection:'row'
  },
  heartText: {
    fontSize: 20,
    color: '#ffffff',
  },
  likeIcon:{
    height:25,
    width:25,
  },
  moreView:{
    justifyContent:'center',
    alignItems:'center',
    padding:20
  },
  moreText:{
    fontSize:15,
    color:'#666666'
  },
  newsView: {
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
    height: 115,
    flexDirection: 'row',
    padding: 20,
  },
shadow:{
  shadowOffset:{ width: 1, height: 1 },
    shadowColor:'rgba(102,102,102,1)',
    shadowRadius: 10,
    height:50,
    width:50,
    borderRadius:30,
},
  
  managerImageView: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  
  newsTextView: {
    paddingLeft:8,
    flexDirection:'column'
  },
  clubAndManagerNameView:{
    flexDirection:'row',
    alignItems:'flex-end',
    paddingBottom:5,
  },
  newsClubText:{
    color:'#666666',
    paddingRight:5,
    fontSize:15,
  },
  newsManagerText:{
    color:'#666666',
    paddingRight:5,
    fontSize:10,
  },
  actNameAndDateView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-end',
    paddingTop:5,
    paddingBottom:5,
  },
  newsNameText:{
    color:'#666666',
    paddingRight:5,
    fontSize:23,
    
  },
  newsDateText:{
    color:'#666666',
    paddingRight:5,
    fontSize:10,
  },
  
  newsContentView:{
    flexDirection:'row',
  },
  newsContentText:{
    color:'#666666',
    fontSize:15,
  },
  iconView:{
    flexDirection:'row',
    
    justifyContent:'flex-end',
    paddingTop:5,
  },
  aIcon:{
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'center',
    paddingRight:10
  },
  icon:{
    
    height:15,
    width:15,
    
  },
  iconNumber:{
    color:'#666666',
    fontSize:10,
    paddingLeft:2
  },
 

  tabBar: {
    height: 50,
    backgroundColor: '#f6b456',
  },
});
