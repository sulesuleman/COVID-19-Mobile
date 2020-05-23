import React,{Component} from 'react';
import {View,Text} from 'react-native';
export default class SocialMedia extends Component{
    
    static navigationOptions =
    {
          title: 'Inspire',
            headerShown:false
      
    };  
      render(){
        return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontWeight:"bold"}}>
                    Welcome to Inspire Screen
                </Text>
            </View>
        )
    }
}