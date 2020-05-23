import React, { Component} from 'react';
import {Dimensions,Text,Image,ImageBackground, StyleSheet, View } from 'react-native';
import axios from 'axios';
class Data extends Component{
   state={
       stats:[]
   }
   
    componentDidMount(){
        axios.get('https://api.apify.com/v2/key-value-stores/QhfG8Kj6tVYMgud6R/records/LATEST?disableRedirect=true')
        .then(res => {
            this.setState({
                stats:res.data
            });
            console.log(res.data);
        })
        
    }

    render(){
return(
    <View style={styles.rectangle}> 
        <View>
            <Image source={require('../images/FullVector.png')} style={styles.secondsecInner}/>
        </View>
        <Text style={styles.Text1}> Active: <Text style={{color:'orange'}}>{this.state.stats.recovered}</Text></Text>
            <Text style={styles.Text}> Deaths: <Text style={{color:'red'}}>{this.state.stats.deceased}</Text></Text>
            <Text style={styles.Text2}> Recoveries: <Text style={{color:'lightgreen'}}>{this.state.stats.infected}</Text></Text>
        </View>
)
}
}
const styles=StyleSheet.create({
not:{
    position: "absolute",
    width: 36.08,
    height: 62.32,
    marginLeft: 284.95,
    marginTop: 678.02,
    backgroundColor: "#C4C4C4"
},
container:{
    position: "absolute",
    width: 282,
    height: 138,
    marginLeft: 47,
    marginTop: 649,

},
section:{
    position: "absolute",
    width: 68.98,
    height: 62.35,
    marginLeft: 252.15,
    marginTop: 678,
},
innerSec:{
    position: "absolute",
    width: 36.08,
    height: 62.32,
    marginLeft: 284.95,
    marginTop: 678.02

},
Vector:{
position: "absolute",
width: 68.98,
height: 62.35,
marginLeft: 252.15,
marginTop: 678,

/* #27AE60 */

// backgroundColor: "#27AE60",
opacity: 0.5,
},
secondsec:{
    position: "absolute",
    marginLeft: "67.24%",
    marginRight: "14.37%",
    marginTop: "83.5%",
    marginBottom: "8.82%",
}, 
secondsecInner:{
    position: "absolute",
    width: 68.98,
    height: 62.35,
    marginLeft: 190,
    marginTop: 30,

/* #6FCF97 */
// backgroundColor: "#6FCF97"
},
group18:{
    position: "absolute",
    width: 282,
    height: 138,
    marginLeft: 47,
    marginTop: 649,
    
},
group17:{
    position: "absolute",
    width: 208.47,
    height: 38.67,
    marginLeft: 65,
    marginTop: 698.5,
},
Text:{
    // position: "absolute",
width: 208.47,
height: 38.67,
marginLeft: 10,
marginTop: 6,

fontFamily: 'sans-serif-medium',
fontStyle: "normal",
fontWeight: "600",
fontSize: 19,
lineHeight: 27,
display: "flex",
alignItems: "center",

/* #333333 */

color: "#333333",
},

rectangle:{
    // position: "absolute",
    width: 282,
    height: 138,
    marginLeft: 47,
    marginTop: 40,
    marginBottom:'2%',

    /* #FFFFFF */

    backgroundColor: "#FFFFFF",
    borderRadius: 19.9059,
},
Text1:{
    // position: "absolute",
    width: 208.47,
    height: 38.67,
    marginLeft: 10,
    marginTop: 10,

    fontFamily: "sans-serif-medium",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 19,
    lineHeight: 27,
    display: "flex",
    alignItems: "center",

    /* #333333 */

    color: "#333333",

},
Text2:{
    // position: "absolute",
    width: 208.47,
    height: 38.67,
    marginLeft: 10,
    marginTop: 7,
    fontFamily:"sans-serif-medium" ,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 19,
    lineHeight: 27,
    display: "flex",
    alignItems: "center",
    
    /* #333333 */
    
    color: "#333333",
}

})
export default Data;