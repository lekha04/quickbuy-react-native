/**
* This is the Checkout Page
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { TouchableHighlight, AsyncStorage } from 'react-native';
import { Text, Container, Content, View, Grid, Col, Left, Right, Button, Icon, List, ListItem, Body, Radio, Input, Item } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';


export default class CheckoutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: {},
      total: 0,
      card: true,
      paypal: false,
      user: {},
    };
  }

  componentWillMount() {
    this.setState({ cartItems: this.props.cartItems, total: this.props.total });
    AsyncStorage.getItem('session', (err, res) => {
      if (res) {
        this.setState({ user: JSON.parse(res) });
      }
    })
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#fdfdfd' }}>
        <Content padder>
          <View>
            <Text style={{ marginTop: 15, fontSize: 18 }}>Shipping information</Text>
            <View style={{ marginTop: 15}}>
              <Text>{this.state.user.name}</Text>
              <Text>{this.state.user.address}</Text>
              <Text>{this.state.user.email}</Text>
            </View>
          </View>
          <Text style={{ marginTop: 15, fontSize: 18 }}>Your order</Text>
          <View style={styles.invoice}>
            <List>
              {this.renderItems()}
            </List>
            <View style={styles.line} />
            <Grid style={{ paddingLeft: 10, paddingRight: 10, marginTop: 7 }}>
              <Col>
                <Text style={{ fontSize: 18, fontStyle: 'italic' }}>Total</Text>
              </Col>
              <Col>
                <Text style={{ textAlign: 'right', fontSize: 18, fontWeight: 'bold' }}>{this.state.total + "$"}</Text>
              </Col>
            </Grid>
          </View>
          <View>
            <Text style={{ marginTop: 15, marginBottom: 7, fontSize: 18 }}>Payement method</Text>
            <ListItem style={{ borderWidth: 1, borderColor: 'rgba(149, 165, 166, 0.3)', paddingLeft: 10, marginLeft: 0 }}>
              <Text>Pay with stored Visa card</Text>
              {/* <FAIcon name="cc-mastercard" size={20} color="#c0392b" style={{ marginLeft: 7 }} /> */}
              <FAIcon name="cc-visa" size={20} color="#2980b9" style={{ marginLeft: 2 }} />
              <Right>
                <Radio selected={this.state.card} onPress={() => this.setState({ card: true, paypal: false })} />
              </Right>
            </ListItem>
            <ListItem style={{ borderWidth: 1, borderColor: 'rgba(149, 165, 166, 0.3)', paddingLeft: 10, marginLeft: 0, borderTopWidth: 0 }}>
              <Text>Pay with Paypal</Text>
              <FAIcon name="cc-paypal" size={20} color="#34495e" style={{ marginLeft: 7 }} />
              <Right>
                <Radio selected={this.state.paypal} onPress={() => this.setState({ card: false, paypal: true })} />
              </Right>
            </ListItem>
          </View>
          <View style={{ marginTop: 10, marginBottom: 10, paddingBottom: 7 }}>
            <Button onPress={() => this.checkout()} style={{ backgroundColor: Colors.navbarBackgroundColor }} block iconLeft>
              <Icon name='ios-card' />
              <Text style={{ color: '#fdfdfd' }}>Place Order</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }

  renderItems() {
    let items = [];
    for (const [store, products] of Object.entries(this.state.cartItems)) {
      items.push(
        <ListItem header first key={store} style={{ marginLeft: 0 }}>
          <Text>{store.replace('_', ' ').toUpperCase()}</Text>
        </ListItem>
      )
      const length = Object.keys(products).length;
      let i = 0;
      for (const [item, itemdetail] of Object.entries(products)) {
        items.push(
          <ListItem
            key={item}
            last={length === i + 1}
            style={{ marginLeft: 0 }}
          >
            <Body style={{ paddingLeft: 10 }}>
              <Text style={{ fontSize: 18 }}>
                {itemdetail.price.unitType === 'lb' ? itemdetail.quantity + "lb "
                  : itemdetail.quantity > 0 ? itemdetail.quantity + "x " : null}
                {item}
              </Text>
              <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>${itemdetail.price.unitPrice}/{itemdetail.price.unitType}</Text>
            </Body>
            <Right>
              <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>${itemdetail.quantity * itemdetail.price.unitPrice}</Text>
            </Right>
          </ListItem>
        );
      }
    }
    return items;
  }

  async checkout() {
    let orders = await AsyncStorage.getItem('orders')
    if (orders != null) {
      orders = JSON.parse(orders);
    } else {
      orders = [];
    }
    orders.push({ items: this.state.cartItems, total: this.state.total})
    await AsyncStorage.setItem('orders', JSON.stringify(orders));
    alert('Order placed successfully')
    await AsyncStorage.removeItem('cart');
    Actions.jump('ordersScreen');
  }

}

const styles = {
  invoice: {
    paddingLeft: 20,
    paddingRight: 20
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#bdc3c7'
  }
};

const Colors = {
  navbarBackgroundColor: '#2c3e50',
  statusBarColor: '#233240'
};