import React, { Component} from 'react';
import {Dimensions,Text,Image,ImageBackground, StyleSheet, View } from 'react-native';

class Translate extends Component{
render(){
return(
    <View > 
        <Image source={require('../images/69.png')} style={styles.not}/>
      </View>
)
}
}
const styles=StyleSheet.create({
not:{
    position: 'absolute',
    width: 49.99,
    height: 39.83,
    marginLeft: 307,
    marginTop: 18,

    
        
  
}



})
export default Translate;