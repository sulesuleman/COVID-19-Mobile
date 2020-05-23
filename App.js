import React, {Component} from 'react';
import {ScrollView, StyleSheet,Text,Dimensions,ImageBackground, View } from 'react-native';
import SocialDistance from './Screens/socialDistance';
import { createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Img from './components/Img';
import Translate from './components/translate';
import Not from './components/not';
import Data from './components/data';
import WashingHands from './Screens/washingHands';
import SocialMedia from './Screens/socialmedia'; 
import TissueHandle from './Screens/tissuehandle';
import Hyderated from './Screens/hyderated';
import Sneeze from './Screens/sneeze';
import Result from './Screens/result';
import LoginForm from './login'
import firebase from 'firebase';


class App extends Component {
  state = 
  { loggedIn: false

  }

static navigationOptions =
  {
        title: 'Home',
          headerShown:false
    
  };

 componentDidMount() {
   let config = {
     apiKey: "AIzaSyDXkUJyYl90_gv2WLZKemcjwv2eEHSkxcI",
 authDomain: "corvid19-9c21b.firebaseapp.com",
 databaseURL: "https://corvid19-9c21b.firebaseio.com",
 projectId: "corvid19-9c21b",
 storageBucket: "corvid19-9c21b.appspot.com",
 messagingSenderId: "900272373112",
 appId: "1:900272373112:web:510c0c5f5d7693df111c8d",
 measurementId: "G-J6Q10YYJ3P"
   };

   firebase.initializeApp(config);
   firebase.auth().onAuthStateChanged((user) => {
     if (user) {
       this.setState({ loggedIn: true })
     } else {
       this.setState({ loggedIn: false })
     }
   })
 }


  

render() {  
    

  const onResist=()=>{
        this.props.navigation.navigate('Resist')
  }
  const  onInspire=()=>{
        this.props.navigation.navigate('Inspire')
  }     
    if (this.state.loggedIn) {  
      return (
        <ImageBackground  source={require('./images/1044.png')} resizeMode="cover" style={styles.containter}>
        <ScrollView>
       
    
    <View>
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

    <View style={styles.rectangle}>
        <Text style={styles.resist} onPress={onResist}>Resist</Text>
    </View>

    <View style={styles.rectangle1}> 
           <Text style={styles.inspire} onPress={onInspire}>Inspire</Text>
    </View>

    <View >
        <Text style={styles.logoutbox} onPress={() => firebase.auth().signOut()}>SIGN OUT</Text>
    </View>
      
    <View>
         <Data />
    </View>
 
     </ScrollView>
     </ImageBackground> 
      )
}
else{
    return (
      <LoginForm />
    )
  }
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
      // position: 'absolute',
      width: 282,
      height: 93.94,
      marginLeft: 47,
      marginTop: 288,
  
  /* #6FCF97 */
  shadowColor:"black",
  backgroundColor: '#6FCF97',
  borderRadius: 19.9059,
  
  },
  inspire:{
    position: 'absolute',
    width: 136.69,
    height: 51.51,
    alignSelf:"center",
    // marginLeft: 119.66,
    marginTop: 20,
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
rectangle1:{
    // position: 'absolute',
    width: 282,
    height: 94,
    marginLeft: 47,
    marginTop: 50,
    /* #FFFFFF */

    backgroundColor: '#FFFFFF',
    // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 19.9059,
},
logoutbox:{
    // position: 'absolute',
    width: 180,
    height: 50,
    justifyContent:"center",
    marginTop: 30,
    marginLeft:95,
    // alignSelf:"center", 
    fontFamily: 'sans-serif-medium',
    fontStyle: 'normal',
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 46,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color:"white",
  /* #FFFFFF */

  backgroundColor:'red',
  // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: 19.9059,
}

})
const AppStack = createStackNavigator({
  Home:{
    screen:App,
  },
  Resist:{
    screen:SocialDistance,
  },
  Inspire:{
    screen:SocialMedia,
  },
  WashHand:{
    screen:WashingHands
  },
  Tissue:{
    screen:TissueHandle,
  },
  Hydra:{
    screen:Hyderated,
  },
  Cough:{
    screen:Sneeze,
  },
  Ranks:{
    screen:Result,
  }
  });
  export default createAppContainer(AppStack);
