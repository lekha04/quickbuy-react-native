import React, {Component} from 'react';
import {Alert, AsyncStorage, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

class Authentication extends Component {

  constructor() {
    super();
    this.state = { username: null, password: null };
  }

  async userSignup() {
    if (!this.state.username || !this.state.password) return;

    const value = await this.getItem('user/' + this.state.username)
    if (value == null) {
      await this.saveItem('user/' + this.state.username, JSON.stringify({
        username: this.state.username,
        password: this.state.password
      }))
      Alert.alert( 'Signup Success!', 'Click to continue!');
      Actions.jump('homeTab');
    } else {
      Alert.alert('Username already exists. Try again')
    }
  }

  async userLogin() {
    if (!this.state.username || !this.state.password) return;

    const value = await this.getItem('user/' + this.state.username)
    console.log(value)
    if (value != null && JSON.parse(value).password == this.state.password) {
      Actions.jump('homeTab');
    } else {
      Alert.alert('Invalid credentials. Try again or Sign Up.')
    } 
  }

  async saveItem(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  }

  async getItem(key) {
    try {
      return await AsyncStorage.getItem(key);
     } catch (error) {
       console.error("AsyncStorage error: " + error.message);
     }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Welcome </Text>

        <View style={styles.form}>
          <TextInput
            editable={true}
            onChangeText={(username) => this.setState({username})}
            placeholder='Username'
            ref='username'
            returnKeyType='next'
            style={styles.inputText}
            value={this.state.username}
          />

          <TextInput
            editable={true}
            onChangeText={(password) => this.setState({password})}
            placeholder='Password'
            ref='password'
            returnKeyType='next'
            secureTextEntry={true}
            style={styles.inputText}
            value={this.state.password}
          />

          <TouchableOpacity style={styles.buttonWrapper} onPress={this.userLogin.bind(this)}>
            <Text style={styles.buttonText}> Log In </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonWrapper} onPress={this.userSignup.bind(this)}>
            <Text style={styles.buttonText}> Sign Up </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    marginLeft: 0,
    marginRight: 0,
  },
  cardTitle: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 2,
  },
  listCard: {
    marginRight: 5,
    borderWidth: 0.5,
    height: 120,
    width: 180,
    borderColor: '#d6d7da',
  },
  listCardBack: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
      // flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      // backgroundColor: '#EDE7F6',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#2962FF',
  },
});


export default Authentication;