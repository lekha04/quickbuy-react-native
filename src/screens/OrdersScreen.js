/**
* This is the Checkout Page
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { TouchableHighlight, AsyncStorage } from 'react-native';
import { Text, Container, Content, View, Grid, Col, Left, Right, Button, Icon, List, ListItem, Body, Radio, Input, Item } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';


export default class OrdersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      orders: nextProps.orders || [],
    };
  }

  static onEnter(props) {
    AsyncStorage.getItem('orders', (err, res) => {
      if (res) {
        Actions.refresh({ orders: JSON.parse(res) });
      }
    })
  }

  // componentWillMount() {
  //   AsyncStorage.getItem('orders', (err, res) => {
  //     if (res) {
  //       this.setState({ orders: JSON.parse(res) });
  //     }
  //   })
  // }

  render() {
    return (
      <Container style={{ backgroundColor: '#fdfdfd' }}>
        {this.state.orders.length > 0 ?
          <Content padder>
            <Text style={{ paddingLeft: 10, marginTop: 15, fontSize: 18 }}>Your orders</Text>
            <View style={styles.invoice}>
              <List>
                {this.renderItems()}
              </List>
              <View style={styles.line} />
            </View>
          </Content>
          :
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="ios-cart" size={38} style={{ fontSize: 38, color: '#95a5a6', marginBottom: 7 }} />
            <Text style={{ color: '#95a5a6' }}>No recent orders to show.</Text>
          </View>
        }
      </Container>
    );
  }

  renderItems() {
    let items = [];
    let i = 0
    for (let order of this.state.orders) {
      i++;
      items.push(
        <ListItem header key={'order-' + i} style={{ marginLeft: 0 }}>
          <Body style={{ paddingLeft: 10 }}>
            <Text>Order {order.items ? 'from ' + Object.keys(order.items).map((value) => value.replace(new RegExp('_', 'g'), ' ')).join(', ') : ''}</Text>
          </Body>
          <Right>
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>${order.total}</Text>
          </Right>
        </ListItem>
      )
    }
    return items;
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