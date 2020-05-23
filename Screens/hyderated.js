import React, {Component} from 'react';
import {Text,View,StyleSheet,Image, Dimensions, ScrollView } from 'react-native';
import Reward from '../components/reward';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Hyderated extends Component{
    static navigationOptions =
    {
          title: 'Hydra',
            headerShown:false
      
    };
    
    
    render(){
      const  handlechange = () => {
            this.props.navigation.navigate('Tissue')
        }
        
        const toCoughScreen=()=>{
            this.props.navigation.navigate('Cough')
        }
return(
    <ScrollView >
        <View >
            <Reward/>
        </View>

        <View >
        <Image source={require('../images/hyderated.png')} style={styles.head}/> 
        </View>

        <View>
            <Image source={require('../images/bottle.png')} style={styles.person}/>
        </View>

        <View >
                <Text style={styles.title}>Keeping yourself hydrated strengthens your immune system for COVID-19</Text>
        </View>
        <View >
            <Text style={styles.q1}> 
            1. During and after the COVID-19 pandemic, make sure you drink ______ glasses of water every day.
             </Text> 
        </View>
        <View style={styles.rectangle}>
<Text style={styles.text}>Important: If you are suffering from any of the following problems, please do not drink too much water without consulting your physician:{"\n"}- Heart Disease {"\n"}- Kidney Disease {"\n"}- Liver Disease</Text>
        </View>
        <View style={{marginTop:-20}}>
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
            a. 8-10
            </Text>
            </View >
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
                <Text style={{width: 235,height: 25,alignSelf:"center"}}>
                b. 15-20
                </Text>
            </View>
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
            c. 2-4
            </Text>
            </View >
            <View style={{width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
            d. 4-6
            </Text>
            </View>
        </View>
        <View style={styles.btnRec}>
            <TouchableOpacity activeOpacity={0.5} onPress={toCoughScreen}>
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
export default Hyderated;