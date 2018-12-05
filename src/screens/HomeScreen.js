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
    super(props)
    this.state = {
      counts: {},
      bestBuy: getRandom(_.flatMap(Products), 10)
    };
  }

  componentWillMount() {
    let counts = {};
    for (const item of this.state.bestBuy) {
      if (!counts[item.name]) {
        counts[item.name] = {}
      }
      const best = _.minBy(item.price, 'unitPrice');
      counts[item.name][best.store] = { price: best, quantity: 0, prev: 0 }
    }
    this.setState({ counts: counts })
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          lightTheme
          placeholder='Type Here...' />
        <Card
          title="Available Stores"
          containerStyle={styles.card}
          titleStyle={styles.cardTitle}
          dividerStyle={{ display: 'none', margin: 0, padding: 0 }}
        >
          <ScrollView horizontal>
            {
              Stores.map((u, i) => {
                return (
                  <TouchableHighlight key={i}
                    underlayColor='#FAFAFA'
                    onPress={() => Actions.storeScreen({ data: u, title: u.name })}
                  >
                    <View style={styles.listCard}>
                      <Image
                        style={{ width: 180, height: 120 }}
                        resizeMode="contain"
                        source={u.avatar}
                      />
                    </View>
                  </TouchableHighlight>
                )
              })
            }
          </ScrollView>
        </Card>
        <Card
          title="Deals just for you..."
          containerStyle={styles.card}
          titleStyle={styles.cardTitle}
          dividerStyle={{ display: 'none' }}
        >
          <ScrollView horizontal>
            {
              this.state.bestBuy.map((u, i) => {
                const best = _.minBy(u.price, 'unitPrice');
                return (
                  <FlipCard key={i} flipStyle={styles.listCardSmall}>
                    {/* Face Side */}
                    <View>
                      <Image
                        style={{ width: 150, height: 100 }}
                        resizeMode="contain"
                        source={u.avatar}
                      />
                    </View>
                    {/* Back Side */}
                    <View>
                      <View style={[styles.listCardBack]}>
                        <NumericInput
                          containerStyle={{ marginTop: 10, marginBottom: 5 }}
                          initValue={this.state.counts[u.name][best.store].quantity}
                          value={this.state.counts[u.name][best.store].quantity}
                          onChange={value => this.updateCounts(u, best, value)}
                          minValue={0} />
                        <Button
                          title="More Options"
                          backgroundColor="#2962FF"
                          onPress={() =>
                            Actions.productScreen({ title: u.name, data: u, storeName: best.store.replace('_', ' ') })}></Button>
                      </View>
                    </View>
                    <View style={{ width: 150 }}>
                      <Text style={{ fontSize: 18 }} numberOfLines={1} lineHeight={2}>{u.name}</Text>
                      <Text>${best.unitPrice}/{best.unitType}</Text>
                    </View>
                  </FlipCard>
                )
              })
            }
          </ScrollView>
        </Card>
      </View>
    );
  }

  updateCounts(item, best, value) {
    let removal = false;
    let prev = this.state.counts[item.name][best.store].quantity;
    if (value < prev) {
      removal = true;
    }
    this.setState({
      counts: update(this.state.counts,
        { [item.name]: { 
          [best.store]: { 
            quantity: { $set: value },
            prev: { $set: prev }
          } 
        } 
      })
    })
    this.addToCart(removal);
    return true;
  }

  async addToCart(removal) {
    const counts = this.state.counts;
    let cart = {};
    try {
      cart = await AsyncStorage.getItem('cart')
      if (cart !== null) {
        cart = JSON.parse(cart);
      } else {
        cart = {}
      }
    } catch (error) {
      cart = {}
    }

    for (const [item, stores] of Object.entries(counts)) {
      for (const [store, value] of Object.entries(stores)) {
        if (value.quantity <= 0) {
          if (cart[store] && cart[store][item] && Object.keys(cart[store]).length <= 1) {
            delete cart[store]
          } else if (cart[store] && cart[store][item]) {
            delete cart[store][item];
          }
          continue;
        }
        if (!cart[store]) {
          cart[store] = {}
        }
        if (!cart[store][item]) {
          cart[store][item] = value;
        } else {
          cart[store][item].quantity = cart[store][item].quantity + value.quantity - value.prev;
        }
      }
    }
    try {
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.log("Error saving data " + error)
    }
    if (removal) {
      ToastAndroid.show('The item has been updated in your cart!', 3000);
    } else {
      ToastAndroid.show('The item has been added to your cart!', 3000);
    }
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