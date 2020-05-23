import React, {Component} from 'react';
import {Text,View,StyleSheet,Image, Dimensions, ScrollView } from 'react-native';
import Reward from '../components/reward';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Result extends Component{
    static navigationOptions =
    {
          title: 'Ranks',
            headerShown:false
      
    };
    
    
    render(){
      const  toHome = () => {
            this.props.navigation.navigate('Home')
        }
        
return(
    <ScrollView >
           <View style={styles.head}>
               <TouchableOpacity activeOpacity={0.5} onPress={toHome}>
                   <Image source={require('../images/cross.png')} styles={styles.head}/>
            </TouchableOpacity>
            </View>

            <View >
                <Text style={styles.txt}>
                        CONGRATULATIONS! You are now a <Text style={styles.rank}>COVID-Lieutenant</Text></Text>
            </View>
            <View >
                <Text style={styles.score}>7/10</Text>
            </View> 
            <View >
                <Text style={styles.title}>Correct guesses</Text>
            </View>
            <View style={{alignSelf:"center", width:"100%"}}>
                <Text style={styles.detail}><Text style={{color:"#2D9CDB"}}>Lieutenant</Text> Your advanced knowledge allows you to protect yourself and others</Text>
                <Image source={require('../images/badge.png')} style={styles.badge}/>
            </View>
            <View style={styles.text}>
                   <Image source={require('../images/whatsapp.png')} style={{alignSelf:"center"}} />
                
            </View>
            <View style={styles.text1}>
                    <Image source={require('../images/fb.png')} style={{alignSelf:"center"}}/>
            
            </View>




        
        </ScrollView>
   
)
}
}
const styles=StyleSheet.create({
    text:{
        width:"100%",
        height: 35,
        marginTop: 43,
    },
    text1:{
        width:"100%",
        alignSelf:"center",
        height: 60,
        marginTop: 40,
    },
    iconbox:{
        position: 'absolute',
        width: 35,
        height: 35,
        marginLeft: 250,
        backgroundColor:'#339f43',
        borderRadius: 6.58018,
        
    },
    icon:{

    },
    rec:{

        width: 216,
        height: 143.42,
        marginLeft: 40,
        marginTop: 234,
        borderWidth:1
    },
    detail:{
        // position:"absolute",
        width: 130.46,
        height: 200,
        marginLeft: 40,
        marginTop: 50,

        fontFamily: "sans-serif-light",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 17.4899,
        lineHeight: 23,

        /* #333333 */

        color: "#333333",
    },
    badge:{
        position: "absolute",
        width: 94,
        height: 194,
        marginLeft: 220,
        marginTop: 50,

    },
    head:{
        position: "absolute",
        marginLeft: "83.66%",
        marginRight: "8.63%",
        marginTop: "5.4%",
        marginBottom: "90.74%"
},
        person:{
        
        // marginLeft: '34.89%',
        // marginRight: "34.18%",
        marginTop: 0,
        alignSelf:"center"
        
        
    },
    txt:{

        width: 252,
        height: 81,
        marginTop: 50,
        alignSelf:"center",
        fontFamily: "sans-serif-medium",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 24,
        display: "flex",
        alignItems: "center",
        textAlign: "center",

        /* #333333 */

        color: "#333333",
        /* #2D9CDB */

        // color: "#2D9CDB"
    },
    rank:{

        width: 252,
        height: 81,
        marginTop: 50,
        alignSelf:"center",
        fontFamily: "sans-serif-medium",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 24,
        display: "flex",
        alignItems: "center",
        textAlign: "center",

        /* #333333 */

        // color: "#333333",
        /* #2D9CDB */

        color: "#2D9CDB"
    
    },

    score:{
        
        width: 98,
        height: 60,
        // marginLeft: 96,
        marginTop: 25,
        alignSelf:"center",
        fontFamily: "sans-serif-medium",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 34.4571,
        lineHeight: 46,
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        
        /* #219653 */
        
        color: "#219653",
    },
    title:{
        // position: absolute;
        width: 153,
        height: 28,
        // marginLeft: 69,
        
alignSelf:"center",
        fontFamily: "sans-serif-medium",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 15,
        lineHeight: 20,
        display: "flex",
        alignItems: "center",
        textAlign: "center",

        /* #27AE60 */

        color: "#27AE60",

    },
    q1:{
        // position: "absolute",
        width: 282,
        height: 210,
        // marginLeft: 47,
        marginTop: 40,
        alignSelf:"center",
        textAlign:"center",        
        fontFamily: "sans-serif-light",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 27,

        /* #4F4F4F */

        color: "#4F4F4F",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    },
    backcontain:{
        position:"absolute",
        width: 50,
        height: 27,
        marginLeft: 20,
        marginTop: 20,
    },
    back:{
    // position: "absolute",
    width: 27,
    height: 22,
    marginLeft: 20,
    marginTop: 20,

    /* #828282 */

    // backgroundColor: "#828282",
    },
    
    btnRec:{
        //  position: "absolute",
        width: 188,
        height: 47,
        // marginLeft: 94,
        marginTop: 15,
        marginBottom:2,
        alignSelf:"center",
        /* #56CCF2 */

        backgroundColor: "#56CCF2",
        borderRadius: 13.2706,
    },
    btntext:{
        // position: "absolute",
        width: 91.12,
        height: 47,
        alignSelf:"center",
        fontFamily: "sans-serif-medium",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 23,
        alignSelf:"center",
        lineHeight: 31,
        display: "flex",
        alignItems: "center",
        textAlign: "center",

        /* #FFFFFF */

        color: "#FFFFFF",
    },
    disablebtn:{
        width: 188,
        height: 47,
        
        marginTop: 20,
        marginBottom:20
,       alignSelf:"center",
        /* #BDBDBD */

        backgroundColor: "#BDBDBD",
        borderRadius: 13.2706,
    },
    disabletxt:{
        // position: absolute;
        width: 91.12,
        height: 47,
        // marginLeft: 142.44,
        marginTop: 2,
        alignSelf:"center",
        alignSelf:"center",
        fontFamily: "sans-serif-medium",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 23,
        lineHeight: 31,
        display: "flex",
        alignItems: "center",
        textAlign: "center",

        /* #FFFFFF */

        color: "#FFFFFF",
    },
    
    rectangle:{
        width: 282,
        height: 125,
        // left: 47,
        marginTop:-50,
        alignItems:"center",
        marginBottom: 50,
        alignSelf:"center",
        backgroundColor: "#FAFAFA",
        // box-shadow: 5px 5px 5px #D2DAE6, -5px -5px 5px #FFFFFF;
        borderRadius: 21.36,
    }
})
export default Result;