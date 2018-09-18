import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


//登入頁
import EmailVerifyPage from './src/login/EmailVerifyPage'
import ForgotPasswordPage from './src/login/ForgotPasswordPage'
import LoginPage from './src/login/LoginPage'
import NickNamePage from './src/login/NickNamePage'
import RegisteredPage from './src/login/RegisteredPage'
import PhotoPage from './src/login/PhotoPage'
import SendEamilResultPage from './src/login/SendEamilResultPage'

//首頁
import HomePage from './src/home/HomePage.js'
import HomeActivtiesPage from './src/home/HomeActivtiesPage'
import SelectTypePage from './src/home/SelectingPage'

//搜尋頁
import SearchPage from './src/search/SearchPage'
import CalendarDetailsPage from './src/calendar/CalendarDetailsPage'

//社團頁
import ClubPage from './src/club/ClubPage.js'
import ClubCalendarPage from './src/club/ClubCalendarPage.js'
import PostsPage from './src/club/PostsPage.js'
import ActivitiesPage from './src/club/ActivitiesPage'
import AddPostPage from './src/club/AddPostPage'
import AddActivityPage from './src/club/AddActivityPage'
import ClubAdminPage from './src/club/ClubAdminPage'

//行事曆頁
import CalendarPage from './src/calendar/CalendarPage.js'

//個人頁面
import AdvancedSettingPage from './src/personal/AdvancedSettingPage'
import ChangeEamilPage from './src/personal/ChangeEamilPage'
import ChangePasswordPage from './src/personal/ChangePasswordPage'
import EmailReVerifiedPage from './src/personal/EmailReVerifiedPage'
import FavoriteClubPage from './src/personal/FavoriteClubPage'
import JoinedClubPage from './src/personal/JoinedClubPage'
import NotificationPage from './src/personal/NotificationPage'
import ProfilePage from './src/personal/ProfilePage'
import ProfileSettingPage from './src/personal/ProfileSettingPage'
import SendEmailSuccessfulPage from './src/personal/SendEmailSuccessfulPage'
import CreateClubPage from './src/personal/CreateClubPage'
import ClubPrivateSettingPage from './src/personal/ClubPrivateSettingPage'





export default class App extends React.Component {
      render() {
            return (
                  //登入頁
                  //<EmailVerifyPage />
                  //<ForgotPasswordPage />
                  //<LoginPage />
                  //<NickNamePage />
                  //<RegisteredPage />
                  //<PhotoPage />
                  //<SendEamilResultPage />

                  //首頁
                  //<HomePage />
                  //<HomeActivtiesPage />
                  //<SelectTypePage />

                  //搜尋頁
                  //<SearchPage />

                  //社團頁
                  //<ClubPage />
                  //<ClubCalendarPage />
                  <PostsPage />
                  //<ActivitiesPage />
                  //<AddPostPage />
                  //<AddActivityPage />
                  //<ClubAdminPage />

                  //行事曆頁
                  //<CalendarPage />
                  //<CalendarDetailsPage />

                  //個人設定頁
                  //<AdvancedSettingPage />
                  //<ChangeEamilPage />
                  //<ChangePasswordPage />
                  //<EmailReVerifiedPage />
                  //<FavoriteClubPage />
                  //<JoinedClubPage />
                  //<NotificationPage />
                  //<ProfilePage />
                  //<ProfileSettingPage />
                  //<SendEmailSuccessfulPage />
                  //<ClubPrivateSettingPage />
    );
      }
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
      },
});