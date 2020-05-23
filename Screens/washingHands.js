import React, {Component} from 'react';
import axios from 'axios';
import {Text,View,StyleSheet,Image, Dimensions, ScrollView } from 'react-native';
import Reward from '../components/reward';
import { TouchableOpacity } from 'react-native-gesture-handler';

class WashingHands extends Component{
    static navigationOptions =
    {
          title: 'WashHand',
            headerShown:false
      
    };
    
    
    render(){
      const  handlechange = () => {
            this.props.navigation.navigate('Resist')
        }
    const onTissueScreen=()=>{
        this.props.navigation.navigate('Tissue')
    }
        
return(
    <ScrollView >
        <View >
            <Reward/>
        </View>

        <View >
        <Image source={require('../images/Wash.png')} style={styles.head}/> 
        </View>

        <View>
            <Image source={require('../images/handPic.png')} style={styles.person}/>
        </View>

        <View >
                <Text style={styles.title}>Can you guess the 5-step process for the COVID-destroyer hand wash?</Text>
        </View>
        <View >
            <Text style={styles.q1}> 
            1. ______ your hands with clean, running water (warm or cold), turn off the tap, and apply soap.
             </Text>
             <View style={{marginTop:-20}}>
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
            a. Rinse 
            </Text>
            </View >
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
                <Text style={{width: 235,height: 25,alignSelf:"center"}}>
                b. Wet
                </Text>
            </View>
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
            c. Dry 
            </Text>
            </View >
            
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
            d. Scrub
            </Text>
            </View >
            <View style={{width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
            e. Lather
            </Text>
            </View>
        </View> 
        </View>
        
        <View style={styles.backcontain}>
        <TouchableOpacity activeOpacity = { 1 } onPress={ handlechange}>
            <Image source={require('../images/Backarrow.png')} style={styles.back}/>
        </TouchableOpacity>
        </View>
    
            <View style={styles.btnRec}>
                <Text style={styles.btntext}> Submit</Text>  
            </View>
            <View>
            <Text style={styles.q1}> 2. ______ your hands by rubbing them together with the soap. Lather the backs of your hands, between your fingers, and under your nails.</Text>
        </View>
        <View>
        <View style={{marginTop:-20}}>
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
            a. Rinse 
            </Text>
            </View >
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
                <Text style={{width: 235,height: 25,alignSelf:"center"}}>
                b. Wet
                </Text>
            </View>
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
            c. Dry 
            </Text>
            </View >
        
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
            d. Scrub
            </Text>
            </View >
            <View style={{width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
            e. Lather
            </Text>
            </View>
        </View>  
        </View>
        <View style={styles.disablebtn}>    
            <Text style={styles.disabletxt}>
                Submit
            </Text>
        </View>
        <View>
            <Text style={styles.q1}>3. ______ every finger and under each nail individually until seeing lather on all of them.</Text>
        </View>
        <View>
        <View style={{marginTop:-20}}>
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
            a. Rinse 
            </Text>
            </View >
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
                <Text style={{width: 235,height: 25,alignSelf:"center"}}>
                b. Wet
                </Text>
            </View>
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
            c. Dry 
            </Text>
            </View >
            
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
            d. Scrub
            </Text>
            </View >
            <View style={{width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
            e. Lather
            </Text>
            </View>
        </View>  
        </View>
        <View style={styles.disablebtn}>    
            <Text style={styles.disabletxt}>
                Submit
            </Text>
        </View> 
        <View>
            <Text style={styles.q1}>4. ______ your hands well under clean, running water.</Text>
        </View>
        <View>
        <View style={{marginTop:-20}}>
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
            a. Rinse 
            </Text>
            </View >
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
                <Text style={{width: 235,height: 25,alignSelf:"center"}}>
                b. Wet
                </Text>
            </View>
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
            c. Dry 
            </Text>
            </View >
            
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
            d. Scrub
            </Text>
            </View >
            <View style={{width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
            e. Lather
            </Text>
            </View>
        </View>  
        </View>
        <View style={styles.disablebtn}>    
            <Text style={styles.disabletxt}>
                Submit
            </Text>
        </View> 
        <View>
            <Text style={styles.q1}>5. ______ your hands using a clean towel or air dry them.</Text>
        </View>
        <View>
        <View style={{marginTop:-20}}>
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
            a. Rinse 
            </Text>
            </View >
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
                <Text style={{width: 235,height: 25,alignSelf:"center"}}>
                b. Wet
                </Text>
            </View>
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
            c. Dry 
            </Text>
            </View >
            
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
            d. Scrub
            </Text>
            </View >
            <View style={{width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
            e. Lather
            </Text>
            </View>
        </View>  
        </View>
        <View style={styles.disablebtn}>    
            <TouchableOpacity activeOpacity={0.5} onPress={onTissueScreen}><Text style={styles.disabletxt}>
                Submit
            </Text>
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

    width: 85.86,
    height: 94,
    alignSelf:"center",
      
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
        marginTop: 50,
        alignSelf:"center",
        /* #56CCF2 */

        backgroundColor: "#56CCF2",
        borderRadius: 13.2706,
    },
    btntext:{
        // position: "absolute",
        width: 91.12,
        height: 47,
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
export default WashingHands;