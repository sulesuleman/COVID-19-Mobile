import React, {Component} from 'react';
import axios from 'axios';
import {Text,View,StyleSheet,Image, Dimensions, ScrollView } from 'react-native';
import Reward from '../components/reward';
import { TouchableOpacity } from 'react-native-gesture-handler';

class TissueHandle extends Component{
    static navigationOptions =
    {
          title: 'Tissue',
            headerShown:false
      
    };
    
    
    render(){
      const  handlechange = () => {
            this.props.navigation.navigate('WashHand')
        }
        
        const toHydrate=()=>{
            this.props.navigation.navigate('Hydra')
        }
return(
    <ScrollView >
        <View >
            <Reward/>
        </View>

        <View >
        <Image source={require('../images/tissuehead.png')} style={styles.head}/> 
        </View>

        <View>
            <Image source={require('../images/93.png')} style={styles.person}/>
        </View>

        <View >
                <Text style={styles.title}>Used tissues are one of the most dangerous sources of COVID-19</Text>
        </View>
        <View >
            <Text style={styles.q1}> 
            1. Every time you use and dispose of a tissue. Make sure you immediately ______.
             </Text> 
        </View>
        <View style={{marginTop:-20}}>
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
                a. Not shake hands or hug each 
            </Text>
            </View >
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
                <Text style={{width: 235,height: 25,alignSelf:"center"}}>
                b. Not shake hands or hug each 
                </Text>
            </View>
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
                c. Not shake hands or hug each 
            </Text>
            </View >
            <View style={{width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
                c. Not shake hands or hug each 
            </Text>
            </View>
        </View>
        <View style={styles.btnRec}>
                <TouchableOpacity activeOpacity={0.5} onPress={toHydrate}>
                    <Text style={styles.btntext}> Submit</Text>
                </TouchableOpacity>  
            </View>
    
        <View style={styles.backcontain}>
        <TouchableOpacity activeOpacity = { 1 } onPress={ handlechange}>
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
        height: 90,
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

})
export default TissueHandle;