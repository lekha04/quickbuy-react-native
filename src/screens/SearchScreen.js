import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  AsyncStorage,
  ToastAndroid,
  TouchableHighlight
} from 'react-native';
import FlipCard from '../components/FlipCard';
import { SearchBar, Card, ListItem, Button, Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'; // New code
import Stores from '../assets/storenames';
import Products from '../assets/productnames';
import NumericInput from 'react-native-numeric-input'
import update from 'immutability-helper';
import _ from 'lodash';

function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          lightTheme
          placeholder='Type Here...' />
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
  listCardSmall: {
    marginRight: 5,
    borderWidth: 0.5,
    height: 120,
    width: 160,
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

export default HomeScreen;