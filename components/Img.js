import React, { Component} from 'react';
import {Dimensions,Text,Image,ImageBackground, StyleSheet, View } from 'react-native';

class Img extends Component{
render(){
return(
    <View style={styles.flag}> 
        <Image source={require('../images/flag2.png')} style={styles.flag2}/>
      </View>

)
}
}
const styles=StyleSheet.create({
flag:{
        position: 'absolute',
        width: '100%',
        marginLeft: 0,
        marginTop: 0,
        
  
},
flag2:{
  // position: "absolute",
  width: '100%',
  marginLeft: 7,
  marginTop: 83.99,

}


})
export default Img;