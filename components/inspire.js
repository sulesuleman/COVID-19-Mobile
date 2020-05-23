import React, { Component} from 'react';
import {Dimensions,Text,Image,ImageBackground, StyleSheet, View, TouchableOpacity } from 'react-native';

class Inspire extends Component{

    render(){
   const handlePress=()=>{
        alert("Hello");
    }
return(

        <View style={styles.rectangle}>
        <Text style={styles.inspire}  >Inspire</Text>
        </View>
            
)
}
}
const styles=StyleSheet.create({
inspire:{
    position: 'absolute',
    width: 136.69,
    height: 51.51,
    marginLeft: 119.66,
    marginTop: 450.06,
    fontFamily: 'sans-serif-medium',
    fontStyle: 'normal',
    fontWeight: "600",
    fontSize: 34.7509,
    lineHeight: 46,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',

    /* #6FCF97 */

    color: '#6FCF97'
},
rectangle:{
    position: 'absolute',
    width: 282,
    height: 94,
    marginLeft: 47,
    marginTop: 429,
    /* #FFFFFF */

    backgroundColor: '#FFFFFF',
    // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 19.9059,
}

})
export default Inspire;