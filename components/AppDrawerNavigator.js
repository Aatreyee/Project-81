import React , {Component} from 'react';
import{createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSidebarMenu';
import SettingScreen from '../screens/SettingScreen'; 

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
    Setting:{
        screen:SettingScreen
    },
},
  {
     contentComponent:CustomSideBarMenu
  },
  {
      initialRouteName:'Home'
})

