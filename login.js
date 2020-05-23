import React, { Component } from 'react';
import { View, Button, Text, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
import Input from './input';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '' ,name:''};
  }

  onButtonPress() {
    this.setState({ error: '', loading: true })
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch((error) => {
            let errorCode = error.code
            let errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
              this.onLoginFailure.bind(this)('Weak password!')
            } else {
              this.onLoginFailure.bind(this)(errorMessage)
            }
          });
      });
      const itemsRef = firebase.database().ref(`/User`);
      const item = {
        name:this.state.name,
        user: this.state.email,
        pass: this.state.password,
       
       // title:this.state.title
      }
     
      itemsRef.push(item);
      alert("inserted")
    
  }

  onLoginSuccess() {
    this.setState({
      email: '', password: '', error: '', loading: false
    })
  }

  onLoginFailure(errorMessage) {
    this.setState({ error: errorMessage, loading: false })
  }

  renderButton() {
    if (this.state.loading) {
      return (
        <View style={styles.spinnerStyle}>
          <ActivityIndicator size={"small"} />
        </View>
      )
    } else {
      return (
        <View style={styles.button}>
                <Text
                  style={{
                    letterSpacing: 0.5,
                    fontSize: 16,
                    color: "#FFFFFF"
                  }}
                  onPress={this.onButtonPress.bind(this)}>
                 Sign In
                </Text>
              </View>
        // <Button
        //   title="Sign in"
         
        // />
      )
    }
  }

  render() {
    return (
      <View style={{flex:0,justifyContent:'center',marginTop:200}}>
        <Text> Name</Text>
        <Input 
          placeholder="Name"
          value={this.state.name}
          secureTextEntry={false}
          onChangeText={name => this.setState({ name })} />
      <Text> Email</Text>
        <Input 
          placeholder="user@mail.com"
          value={this.state.email}
          secureTextEntry={false}
          onChangeText={email => this.setState({ email })} />
 <Text> Password</Text>
        <Input 
          placeholder="password"
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })} />

        {this.renderButton()}
        
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
      </View>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'red'
  },
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: "#3A559F",
    height: 44,
    width:200,
    alignSelf:'center',
    marginTop:20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22,
    marginLeft:5
  },
}