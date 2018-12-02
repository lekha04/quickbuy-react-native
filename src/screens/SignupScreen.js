/**
* This is the Signup Page
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { ScrollView, AsyncStorage } from 'react-native';
import { Text, Container, View, Left, Right, Button, Icon, Item, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'l@g.co',
      name: 'balaji',
      username: 'balaji',
      password: 'balaji',
      rePassword: 'balaji',
      address: 'balaji',
      hasError: false,
      errorText: ''
    };
  }


  render() {
    return (
      <Container style={{ backgroundColor: '#fdfdfd' }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 50, paddingRight: 50 }}>
            <View style={{ marginBottom: 35, width: '100%' }}>
              <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'left', width: '100%', color: Colors.navbarBackgroundColor }}>Create your account, </Text>
              <Text style={{ fontSize: 18, textAlign: 'left', width: '100%', color: '#687373' }}>Signup to continue </Text>
            </View>
            <Item>
              <Icon active name='ios-mail' style={{ color: '#687373' }} />
              <Input placeholder='Email' value={this.state.email} onChangeText={(text) => this.setState({ email: text })} keyboardType="email-address" placeholderTextColor="#687373" />
            </Item>
            <Item>
              <Icon active name='ios-man' style={{ color: '#687373' }} />
              <Input placeholder='Name' value={this.state.name} onChangeText={(text) => this.setState({ name: text })} placeholderTextColor="#687373" />
            </Item>
            <Item>
              <Icon active name='ios-person' style={{ color: '#687373' }} />
              <Input placeholder='Username' value={this.state.username} onChangeText={(text) => this.setState({ username: text })} placeholderTextColor="#687373" />
            </Item>
            <Item>
              <Icon active name='ios-lock' style={{ color: '#687373' }} />
              <Input placeholder='Password' value={this.state.password} onChangeText={(text) => this.setState({ password: text })} secureTextEntry={true} placeholderTextColor="#687373" />
            </Item>
            <Item>
              <Icon active name='ios-lock' style={{ color: '#687373' }} />
              <Input placeholder='Repeat your password' value={this.state.rePassword} onChangeText={(text) => this.setState({ rePassword: text })} secureTextEntry={true} placeholderTextColor="#687373" />
            </Item>
            <Item>
              <Icon active name='ios-mail' style={{ color: '#687373' }} />
              <Input placeholder='Address' value={this.state.address} onChangeText={(text) => this.setState({ address: text })} placeholderTextColor="#687373" />
            </Item>
            {this.state.hasError ? <Text style={{ color: "#c0392b", textAlign: 'center', marginTop: 10 }}>{this.state.errorText}</Text> : null}
            <View style={{ alignItems: 'center' }}>
              <Button onPress={() => this.signup()} style={{ backgroundColor: Colors.navbarBackgroundColor, marginTop: 20 }}>
                <Text style={{ color: '#fdfdfd' }}>Signup</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }

  signup() {
    if (this.state.email === "" || this.state.name === "" || this.state.username === "" || this.state.password === "" || this.state.rePassword === "") {
      this.setState({ hasError: true, errorText: 'Please fill all fields !' });
      return;
    }
    if (!this.verifyEmail(this.state.email)) {
      this.setState({ hasError: true, errorText: 'Please enter a valid email address !' });
      return;
    }
    if (this.state.username.length < 3) {
      this.setState({ hasError: true, errorText: 'Username must contains at least 3 characters !' });
      return;
    }
    if (this.state.password.length < 6) {
      this.setState({ hasError: true, errorText: 'Passwords must contains at least 6 characters !' });
      return;
    }
    if (this.state.password !== this.state.rePassword) {
      this.setState({ hasError: true, errorText: 'Passwords does not match !' });
      return;
    }
    if (this.state.address.length < 5) {
      this.setState({ hasError: true, errorText: 'Invalid address' });
      return;
    }
    this.setState({ hasError: false });
    AsyncStorage.setItem('user/' + this.state.username, JSON.stringify({
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      address: this.state.address,
      name: this.state.name,
    })).then(err => {
      if (err) {
        console.log('error storing user '  + err)
      } else {
        alert('Welcome to QuickBuy!')
        Actions.homeTab({type:'replace'});
      }
    })
    
  }

  verifyEmail(email) {
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
  }


}

const Colors = {
  navbarBackgroundColor: '#2c3e50',
  statusBarColor: '#233240'
};