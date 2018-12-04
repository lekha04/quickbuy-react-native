/**
* This is the Main file
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Alert, AsyncStorage } from 'react-native';
import { Card } from 'react-native-elements';
import { Text, Container, Content, View, Header, Icon, Button, Left, Right, Body, Title, List, ListItem, Thumbnail, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';

export default class CartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: undefined,
      total: undefined,
    };
  }

  static getDerivedStateFromProps(nextProps, state) {
    return {
      cartItems: state.cartItems || nextProps.cartItems || {},
      total: state.total || nextProps.total || 0,
    };
  }

  static onEnter(props) {
    AsyncStorage.getItem("cart", (err, res) => {
      if (!res) {
        Actions.refresh({ cartItems: {}, total: 0, date: new Date() });
        return
      }
      let total = 0;
      let items = JSON.parse(res);
      for (const [store, products] of Object.entries(items)) {
        for (const [item, itemdetail] of Object.entries(products)) {
          total += (itemdetail.quantity * itemdetail.price.unitPrice);
        }
      }
      Actions.refresh({ cartItems: items, total: total.toFixed(2), date: new Date() });
    });
  }

  componentDidMount() {
    AsyncStorage.getItem("cart", (err, res) => {
      if (!res) {
        this.setState({ cartItems: {}, total: 0 });
        return
      }
      let total = 0;
      let items = JSON.parse(res);
      for (const [store, products] of Object.entries(items)) {
        for (const [item, itemdetail] of Object.entries(products)) {
          total += (itemdetail.quantity * itemdetail.price.unitPrice);
        }
      }
      this.setState({ cartItems: items, total: total.toFixed(2) });
    });
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#fdfdfd' }}>
        {Object.keys(this.state.cartItems).length <= 0 ?
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="ios-cart" size={38} style={{ fontSize: 38, color: '#95a5a6', marginBottom: 7 }} />
            <Text style={{ color: '#95a5a6' }}>Your cart is empty</Text>
          </View>
          :
          <Content style={{ paddingRight: 10 }}>
            <List>
              {this.renderStores()}
            </List>
            <Grid style={{ marginTop: 20, marginBottom: 10 }}>
              <Col style={{ paddingLeft: 10 }} size={3}>
                <Text style={{ fontSize: 18, textAlign: 'right', paddingRight: 20 }}>Total:</Text>
              </Col>
              <Col style={{ paddingLeft: 5, paddingRight: 10 }}>
                <Text style={{ fontSize: 18, textAlign: 'right', paddingRight: 20 }}>${this.state.total}</Text>
              </Col>
            </Grid>
            <Grid style={{ marginTop: 20, marginBottom: 10 }}>
              <Col style={{ paddingLeft: 10, paddingRight: 5 }}>
                <Button onPress={() => this.checkout()} style={{ backgroundColor: Colors.navbarBackgroundColor }} block iconLeft>
                  <Icon name='ios-card' />
                  <Text style={{ color: '#fdfdfd' }}>Checkout</Text>
                </Button>
              </Col>
              <Col style={{ paddingLeft: 5, paddingRight: 10 }}>
                <Button onPress={() => this.removeAllPressed()} style={{ borderWidth: 1, borderColor: Colors.navbarBackgroundColor }} block iconRight transparent>
                  <Text style={{ color: Colors.navbarBackgroundColor }}>Emtpy Cart</Text>
                  <Icon style={{ color: Colors.navbarBackgroundColor }} name='ios-trash-outline' />
                </Button>
              </Col>
            </Grid>
          </Content>
        }
      </Container>
    );
  }

  renderStores() {
    let items = [];
    for (const [store, products] of Object.entries(this.state.cartItems)) {
      items.push(
        <ListItem header first key={store}>
          <Text>{store.replace('_', ' ').toUpperCase()}</Text>
        </ListItem>
      )
      const length = Object.keys(products).length;
      let i = 0;
      for (const [item, itemdetail] of Object.entries(products)) {
        i++;
        items.push(
          <ListItem
            key={store + '-' + item}
            last={length === i + 1}
          >
            {/* <Thumbnail square style={{ width: 110, height: 90 }} source={{ uri: item.image }} /> */}
            <Body style={{ paddingLeft: 10 }}>
              <Text style={{ fontSize: 18 }}>
                {itemdetail.price.unitType === 'lb' ? itemdetail.quantity + "lb "
                  : itemdetail.quantity > 0 ? itemdetail.quantity + "x " : null}
                {item}
              </Text>
              <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>${itemdetail.price.unitPrice}/{itemdetail.price.unitType}</Text>
            </Body>
            <Right>
              <Text>${itemdetail.quantity * itemdetail.price.unitPrice}</Text>
              <Button style={{ marginLeft: -25 }} transparent onPress={() => this.removeItemPressed(store, item)}>
                <Icon size={30} style={{ fontSize: 30, color: 'red' }} name='ios-remove-circle-outline' />
              </Button>
            </Right>
          </ListItem>
        );
      }
    }
    return items;
  }

  removeItemPressed(store, item) {
    Alert.alert(
      'Remove ' + item,
      'Are you sure you want to remove this item from your cart ?',
      [
        { text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel' },
        { text: 'Yes', onPress: () => this.removeItem(store, item) },
      ]
    )
  }

  removeItem(store, itemToRemove) {
    let copy = _.cloneDeep(this.state.cartItems);
    const removedItem = copy[store][itemToRemove];
    if (Object.keys(copy[store]).length <= 1) {
      delete copy[store]
    } else {
      delete copy[store][itemToRemove]
    }
    let total = this.state.total - (removedItem.price.unitPrice * removedItem.quantity);
    AsyncStorage.setItem("cart", JSON.stringify(copy));
    this.setState({ cartItems: copy, total: total.toFixed(2), refreshed: true });
    this.forceUpdate();
  }

  removeAllPressed() {
    Alert.alert(
      'Empty cart',
      'Are you sure you want to empty your cart ?',
      [
        { text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel' },
        { text: 'Yes', onPress: () => this.removeAll() }
      ]
    )
  }

  removeAll() {
    this.setState({ cartItems: {}, total: 0, refreshed: true })
    AsyncStorage.setItem("cart", JSON.stringify({}));
  }

  checkout() {
    Actions.checkoutScreen({ cartItems: this.state.cartItems, total: this.state.total });
  }

}

const styles = {
  title: {
    fontFamily: 'Roboto',
    fontWeight: '100'
  }
};

const Colors = {
  navbarBackgroundColor: '#2c3e50',
  statusBarColor: '#233240'
};