/**
* This is the Login Page
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Text, Container, View, Left, Right, Button, Icon, Item, Input, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      hasError: false,
      errorText: '',
      loading: true,
    };
  }

  async componentWillMount() {
    let session = await AsyncStorage.getItem('session');
    if (session != null) {
      session = JSON.parse(session);
      if (session.hasOwnProperty('username')) {
        Actions.jump('homeScreen');
      }
    }
    this.setState({ loading: false });
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#fdfdfd' }}>
        {this.state.loading ?
          <Spinner color='blue' />
          :
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 50, paddingRight: 50 }}>
            <View style={{ marginBottom: 35, width: '100%' }}>
              <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'left', width: '100%', color: Colors.navbarBackgroundColor }}>QuickBuy</Text>
              <Text style={{ fontSize: 18, textAlign: 'left', width: '100%', color: '#687373' }}>Login to continue </Text>
            </View>
            <Item>
              <Icon active name='ios-person' style={{ color: "#687373" }} />
              <Input placeholder='Username' onChangeText={(text) => this.setState({ username: text })} placeholderTextColor="#687373" />
            </Item>
            <Item>
              <Icon active name='ios-lock' style={{ color: "#687373" }} />
              <Input placeholder='Password' value={this.state.password} onChangeText={(text) => this.setState({ password: text })} secureTextEntry={true} placeholderTextColor="#687373" />
            </Item>
            {this.state.hasError ? <Text style={{ color: "#c0392b", textAlign: 'center', marginTop: 10 }}>{this.state.errorText}</Text> : null}
            <View style={{ alignItems: 'center' }}>
              <Button onPress={() => this.login()} style={{ backgroundColor: Colors.navbarBackgroundColor, marginTop: 20 }}>
                <Text style={{ color: '#fdfdfd' }}>Login</Text>
              </Button>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Button onPress={() => Actions.signupScreen()} style={{ backgroundColor: '#687373', marginTop: 20 }}>
                <Text style={{ color: '#fdfdfd' }}>Signup</Text>
              </Button>
            </View>
          </View>
        }
      </Container>
    );
  }

  login() {
    if (!this.state.username || !this.state.password) return;

    const value = AsyncStorage.getItem('user/' + this.state.username, (err, res) => {
      if (res != null && JSON.parse(res).password == this.state.password) {
        AsyncStorage.setItem('session', res)
        this.setState({ hasError: false, password: ''});
        Actions.jump('homeTab');
      } else {
        this.setState({ hasError: true, errorText: 'Invalid username or password !' });
      }
    })
  }
}

const Colors = {
  navbarBackgroundColor: '#2c3e50',
  statusBarColor: '#233240'
};