import React, { Component} from 'react';
import {Dimensions,Text,Image,ImageBackground, StyleSheet, View } from 'react-native';
import Img from '../components/Img';
import Translate from '../components/translate';
import Not from '../components/not';
import Inspire from '../components/inspire';
import Resist from '../components/resist';
import Data from '../components/data';
import { TouchableOpacity } from 'react-native-gesture-handler';
class Homepage extends Component{
render(){
return(
         <ImageBackground  source={require('../images/1044.png')} resizeMode="cover" style={styles.containter}> 
            <View >
                <Img  />  
            </View>
            <View>
                <Translate  />
            </View>
            <View>
                <Not  />
            </View>
            <View>
                <Text style={styles.purify}>Purify{'\n'}our Mother Land{'\n'}from COVID-19 </Text>
            </View>
            <View>
                <Inspire  />
            </View>
            <TouchableOpacity onPress={props.naviagation.navigate('Resist')}>
            <View style={styles.rectangle}>
                <Text style={styles.resist}>Resist</Text>
            </View>
            </TouchableOpacity>
            <View>
                 <Data />
            </View>
         </ImageBackground> 
         
//     <View style={{flex:1}}>
// <ImageBackground source={require('../images/1044.png')} style={styles.image}>
//     <Image
//         source={require('../images/Group 246.png')} style={styles.flag}
//       />
// </ImageBackground>
// </View>
)
}
}
const styles= StyleSheet.create({
    containter: {
        flex: 1, 
        resizeMode:"cover",
        backgroundColor: "white",
        width: Dimensions.get("window").width, //for full screen
        height: Dimensions.get("window").height //for full screen
      },
      purify:{
        position: 'absolute',
        width: 282,
        height: 94,
        marginLeft: 47,
        marginTop: 94,
        fontFamily: 'sans-serif-medium',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 33,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        
        /* #4F4F4F */
        
        color:'#4F4F4F'
      },
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
export default Homepage;