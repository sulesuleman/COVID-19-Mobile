import React, {Component} from 'react';
import {Text,View,StyleSheet,Image, Dimensions, ScrollView } from 'react-native';
import Reward from '../components/reward';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Sneeze extends Component{
    static navigationOptions =
    {
          title: 'Cough',
            headerShown:false
      
    };
    
    
    render(){
      const  handlechange = () => {
            this.props.navigation.navigate('Hydra')
        }
        
         const toResult=()=>{
             this.props.navigation.navigate('Ranks')
         }
return(
    <ScrollView >
        <View >
            <Reward/>
        </View>

        <View >
        <Image source={require('../images/Sneeze.png')} style={styles.head}/> 
        </View>

        <View>
            <Image source={require('../images/cough.png')} style={styles.person}/>
        </View>

        <View >
                <Text style={styles.title}>The best way to protect others is to know how to sneeze or cough during the pandemic.</Text>
        </View>
        <View >
            <Text style={styles.q1}> 
            1. The one thing you must always avoid while sneezing or coughing is to cover your mouth and nose with your ______.
             </Text> 
        </View>
    
        <View style={{marginTop:-20}}>
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
            a. Shirt
            </Text>
            </View >
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
                <Text style={{width: 235,height: 25,alignSelf:"center"}}>
                b. Hands
                </Text>
            </View>
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
            c. Elbow
            </Text>
            </View >
            <View style={{width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
            d. Tissues
            </Text>
            </View>
        </View>
        <View style={styles.btnRec}>
            <TouchableOpacity activeOpacity={0.5} onPress={toResult}>
                <Text style={styles.btntext}> Submit</Text>  
            </TouchableOpacity>
            </View>
    
        <View style={styles.backcontain}>
        <TouchableOpacity activeOpacity = { 1 } onPress={handlechange}>
            <Image source={require('../images/Backarrow.png')} style={styles.back}/>
        </TouchableOpacity>
       </View>                 
        
        </ScrollView>
   
)
}
}
const styles=StyleSheet.create({
    head:{
        width: Dimensions.get('window').width,
        height: 141.15,
        alignSelf:"center",
        marginLeft: 0,
        marginTop: 47,
    },
    person:{
        
        // marginLeft: '34.89%',
        // marginRight: "34.18%",
        marginTop: 0,
        alignSelf:"center"
        
        
    },
    title:{
        width: 282,
        height: 125,
        // marginLeft: 47,
        marginTop: 20,
        alignSelf:"center",
        fontFamily: "sans-serif-medium",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 19.3162,
        lineHeight: 26,
        textAlign: "center",

        /* #2D9CDB */

        color: "#2D9CDB"
    },

    container:{
       flex:1,
       width : Dimensions.get('window').width,
       height: Dimensions.get('window').height
    },
    q1contain:{
        // position: "absolute",
        width: 282,
        height: 210,
        marginTop: 40,

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
    text:{
    
        width: 258,
        height: 125,
        // marginLeft: 65,
        // marginTop: 582,
        alignSelf:"center",
        fontFamily: "sans-serif-light",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 12,
        lineHeight: 16,

        /* Strong red */

        color: "#F4364F"
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
export default Sneeze;