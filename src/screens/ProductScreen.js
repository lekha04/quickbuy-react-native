import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  View,
  AsyncStorage
} from 'react-native';
import { Text, Card, List, ListItem, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux'; // New code
import products from '../assets/productnames';
import { Col, Grid } from 'native-base';
import NumericInput from 'react-native-numeric-input';
import update from 'immutability-helper';

function getIcon(store) {
  switch (store) {
    case 'giant':
      return require('../assets/stores/logo_giant.png');
    case 'harris_teeter':
      return require('../assets/stores/logo_harristeeter.jpg');
    case 'wegmans':
      return require('../assets/stores/logo_wegmans.jpg');
    case 'whole_foods_market':
      return require('../assets/stores/logo_wholefoods.jpg');
    case 'safeway':
      return require('../assets/stores/logo_safeway.jpg');
    default:
      return '';
  }
}

class ProductScreen extends Component {
  constructor(props) {
    super(props);
    let mainPrice;
    if (this.props.storeName) {
      mainPrice = this.props.data.price.find((item) => item.store == this.props.storeName.toLowerCase().replace(' ', '_'))
      if (mainPrice == undefined) {
        mainPrice = this.props.data.price[0]
      }
      mainStore = this.props.storeName
    } else {
      let minPrice = this.props.data.price[0];
      for (let i = 1; i < this.props.data.price.length; i++) {
        if (minPrice.unitPrice > this.props.data.price[i].unitPrice) {
          minPrice = this.props.data.price[i]
        }
      }
      mainPrice = minPrice
      mainStore = mainPrice.store.replace('_', ' ')
    }
    this.state = {
      mainPrice: mainPrice,
      otherStores: this.props.data.price.filter((item) => item.store != mainStore.toLowerCase().replace(' ', '_')),
      counts: {}
    };
  }

  componentWillMount() {
    let counts = {};
    for (const price of this.props.data.price) {
      counts[price.store] = 10
    }
  }

  render() {
    return (
      <ScrollView>
        <Card containerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={this.props.data.avatar}
              style={{ width: 200, height: 200 }}
              resizeMode='contain'>
            </Image>
          </View>
          <Text h4>{this.props.title}</Text>
        </Card>
        <Card>
          <Grid>
            <Col>
              <Image
                source={getIcon(this.state.mainPrice.store)}
                style={{ width: 130, height: 50 }}
                resizeMode="contain"
              />
            </Col>
            <Col style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>${this.state.mainPrice.unitPrice}/{this.state.mainPrice.unitType}</Text>
            </Col>
            <Col>
              <NumericInput
                initValue={this.state.counts[this.state.mainPrice.store]}
                value={this.state.counts[this.state.mainPrice.store]}
                onChange={value => this.updateCounts(this.state.mainPrice, value)}
                minValue={0}></NumericInput>
            </Col>
          </Grid>
        </Card>
        <Card containerStyle={{ padding: 0 }}>
          <List>
            {
              this.state.otherStores.map((item) => (
                <ListItem
                  key={item.store}
                  title={
                    <Grid>
                      <Col>
                        <Image
                          source={getIcon(item.store)}
                          style={{ width: 100, height: 50 }}
                          resizeMode="contain"
                        />
                      </Col>
                      <Col style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>${item.unitPrice}/{item.unitType}</Text>
                      </Col>
                    </Grid>
                  }
                  titleStyle={{ textTransform: 'capitalize' }}
                  rightIcon={
                    <View>
                      <NumericInput
                        initValue={this.state.counts[item.store]}
                        value={this.state.counts[item.store]}
                        onChange={value => this.updateCounts(item, value)}
                        minValue={0}></NumericInput>
                    </View>
                  }
                />
              ))
            }
          </List>
        </Card>
        <Card>
          <Button
            large
            backgroundColor='green'
            icon={{ name: 'add' }}
            title='Add to Cart'
            onPress={() => this.addToCart()} />
        </Card>
      </ScrollView>
    )
  }

  updateCounts(item, value) {
    this.setState({
      counts: update(this.state.counts, { [item.store]: { $set: value } })
    })
    return true;
  }

  async addToCart() {
    const counts = this.state.counts;
    const item = this.props.title;
    let cart = await AsyncStorage.getItem('cart')
    if (cart != null) {
      cart = JSON.parse(cart);
    } else {
      cart = {}
    }
    for (const [store, value] of counts) {
      if (!cart[store]) {
        cart[store] = {}
      }
      if (!cart[store][item]) {
        cart[store][item] = value;
      } else {
        cart[store][item] += value;
      }
    }
    await AsyncStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
  }

}

const styles = StyleSheet.create({
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
    backgroundColor: 'white'
  },
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
    borderWidth: 0.2,
    minHeight: 120,
    minWidth: 100,
    // height: 120,
    // width: 150,
    borderColor: '#d6d7da',
    backgroundColor: 'white'
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

export default ProductScreen;