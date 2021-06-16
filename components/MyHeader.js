import React , {Component} from 'react';
import{Header,Icon} from 'react-native-elements';
import {View,Text,StyleSheet} from 'react-native';

const MyHeader=props=>{
    return(
        <Header 
        leftComponent={<Icon name="bars" type="font-awesome" color="#696969" onPress={()=>
            props.navigation.toggleDrawer()
        }/>}
            centerComponent={{text:props.title,style:{color:'red',fontSize:20,fontWeight:'bold'}}}
            backgroundColor='white'
        />
    )
}
export default MyHeader