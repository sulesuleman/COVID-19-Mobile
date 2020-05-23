import React, {Component} from 'react';
import axios from 'axios';
import {List} from 'antd'
import {Text,View,StyleSheet,Image, Dimensions, ScrollView } from 'react-native';
import Reward from '../components/reward';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';

class SocialDistance extends Component{
    constructor(){
        this.state = { 
    
            title: "",
    
        
            question:"",
          
          option1:"",
          
          option2:"",
          
          option3:"",
          
          option4:"",
          
          correct:"",
          cate:"Social Distance",
          textDisplay: false,
    items:[],
    items1:[]
      }
    
      


    }
    componentDidMount(){
        const itemsRef = firebase.database().ref(`/Title/${this.state.title}/${this.state.cate}`);
  itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      console.log(items)
      let newState = [];
      for (let item in items) {
        newState.push({
          id:item,
          question: items[item].question,
          option1: items[item].option1,
          option2: items[item].option2,
          option3: items[item].option3,
          option4: items[item].option4,
         

        });
      }
      this.setState({
        items: newState
      });
    });
  
    }
    static navigationOptions =
    {
          title: 'Resist',
            headerShown:false
      
    };
    
    
    render(){
      const  handlechange = () => {
            this.props.navigation.navigate('Home')
        }
        
        const toWashScreen=()=>{
            this.props.navigation.navigate('WashHand')
        }
return(
    <ScrollView >
        <View >
            <Reward/>
        </View>

        <View >
        <Image source={require('../images/207.png')} style={styles.head}/> 
        </View>

        <View>
            <Image source={require('../images/person.png')} style={styles.person}/>
        </View>

        <View >
                <Text style={styles.title}>Social Distancing is the best way to STOP the disease.</Text>
        </View>
        {/* <View >
            <Text style={styles.q1}> 
                1. COVID-19 can spread by tiny droplets from the infected person travelling up to 2-3 meters.{'\n'}Keep a distance of at least ____ 
                meters when you meet someone.
             </Text> 
        </View>
        
        <View style={styles.backcontain}>
        <TouchableOpacity activeOpacity = { 1 } onPress={ handlechange}>
            <Image source={require('../images/Backarrow.png')} style={styles.back}/>
        </TouchableOpacity>
                        
        
        </View> */}
        <View>
            <Image source={require('../images/145.png')} style={styles.slide}/>
        </View>
        <View style={styles.slide1}>
            <Image source={require('../images/asd.png')} />
        </View>
            <View style={styles.btnRec}>
                <Text style={styles.btntext}> Submit</Text>  
            </View>
            
            <List

    dataSource={this.state.items}
     
    renderItem={item => (
      
      <List.Item>   
          <View>
            <Text style={styles.q1}> 2. {item.question}</Text>
        </View> 
        <View style={{marginTop:-20}}>
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
                a. {item.option1}
            </Text>
            </View >
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
                <Text style={{width: 235,height: 25,alignSelf:"center"}}>
                b. {item.option2}}
                </Text>
            </View>
            <View style={{marginBottom:'1%',width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
                c. {item.option3}
            </Text>
            </View >
            <View style={{width: 235,height: 25,alignSelf:"center",backgroundColor: "#E3E6EC",borderRadius: 3.33038}}>
            <Text style={{width: 235,height: 25,alignSelf:"center"}}>
                d. {item.option4}
            </Text>
            </View>
        </View>
        <View style={styles.disablebtn}>    
            <TouchableOpacity onPress={toWashScreen}><Text style={styles.disabletxt}>
                Submit
            </Text></TouchableOpacity>
        </View>
      </List.Item>
    )}
  />  
            
         
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
        
        marginLeft: '34.89%',
        marginRight: "34.18%",
        marginTop: 0,
        
        
    },
    title:{
        width: 282,
        height: 58,
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
    slide:{
        // position: "absolute",
        width: 253,
        height: 127,
        marginLeft: 47,
        // marginTop: 625,
        
    },
    slide1:{
        position: "absolute",
        width: 52,
        height: 171,
        marginLeft: 90,
        marginTop: 616,

    },
    btnRec:{
        //  position: "absolute",
        width: 188,
        height: 47,
        // marginLeft: 94,
        marginTop: 83,
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
export default SocialDistance;