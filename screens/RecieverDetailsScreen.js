import React,{Component} from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Alert} from 'react-native'
import { Card,Header,Icon } from 'react-native-elements'
import db from '../config';
import firebase from 'firebase';

export default class RecieverDetailsScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            userId:firebase.auth().currentUser.email,
            recieverId:this.props.navigation.getParam('details')["user_id"],
            requestId:this.props.navigation.getParam('details')["request_id"],
            itemName:this.props.navigation.getParam('details')["item_name"],
            reason_for_requesting:this.props.navigation.getParam('details')["reason_to_request"],
            recieverName:"",
            recieverContact:"",
            recieverAddress:"",
            recieverRequestDocId:"",
        }
    }
    render(){
        return(
            <View>

            </View>
        )
    }
}