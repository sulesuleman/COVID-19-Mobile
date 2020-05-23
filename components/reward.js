import React, {Component} from 'react';
import axios from 'axios';
import {StyleSheet, View, Image} from 'react-native';
class Reward extends Component{
render(){
return(
    <View >
    <Image source={require('../images/reward.png')} style={styles.reward}/>    
    </View>
)
}
}
const styles=StyleSheet.create({
reward:{
    position: "absolute",
    width: 50,
    height: 50,
    marginLeft: 303,
    marginTop: 30,

}


})
export default Reward;