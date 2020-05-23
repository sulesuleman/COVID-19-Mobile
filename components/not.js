import React, { Component} from 'react';
import {Dimensions,Text,Image,ImageBackground, StyleSheet, View } from 'react-native';

class Not extends Component{
render(){
return(
    <View > 
        <Image source={require('../images/242.png')} style={styles.not}/>
      </View>
)
}
}
const styles=StyleSheet.create({
not:{
    position: 'absolute',
    width: 46.53,
    height: 46,
    marginLeft: 164.74,
    marginTop: 42
},
container:{
    position: 'absolute',
    marginLeft: "43.93%",
    marginRight: "43.66%",
    marginTop: "5.17%",
    marginBottom: "89.16%",
    opacity: 0.8
}



})
export default Not;