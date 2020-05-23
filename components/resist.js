import React, { Component} from 'react';
import {Dimensions,Text,Image,ImageBackground, StyleSheet, View } from 'react-native';

class Resist extends Component{
render(){
return(
    <View style={styles.rectangle}>
        <Text style={styles.resist}>Resist</Text>
    </View>
)
}
}
const styles=StyleSheet.create({
resist:{
    position: "absolute",
    width: 136.69,
    height: 51.48,
    alignSelf:"center",
    // marginLeft: 47,
     marginTop: 20,

    fontFamily: "sans-serif-medium",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 34.7509,
    lineHeight: 46,
    display: "flex",
    alignItems: "center",
    textAlign: "center",

    /* #FFFFFF */

    color: '#FFFFFF',
},
rectangle:{
    position: 'absolute',
    width: 282,
    height: 93.94,
    marginLeft: 47,
    marginTop: 288,

/* #6FCF97 */
shadowColor:"black",
backgroundColor: '#6FCF97',
borderRadius: 19.9059,

}

})
export default Resist;