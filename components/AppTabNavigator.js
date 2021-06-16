import React , {Component} from 'react';
import{Image} from 'react-native';
import{createBottomTabNavigator} from 'react-navigation-tabs';
import ItemDonateScreen from '../screens/ItemDonateScreen';
import ItemRequestScreen from '../screens/ItemRequestScreen';

export const AppTabNavigator=createBottomTabNavigator({
    DonateBooks:{
        screen:ItemDonateScreen,
        navigationOptions:{
            
            tabBarLabel:"Donate Items",
        }
    },

    BookRequest:{
        screen:ItemRequestScreen,
        navigationOptions:{
            
            tabBarLabel:"Item Request",
        }
    }
})
 