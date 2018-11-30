import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import products from '../assets/productnames';
import { Card, Icon } from 'react-native-elements';

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

class StoreScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderTitle()}
        {this.renderProducts()}
      </ScrollView>
    );
  }

  renderTitle() {
    return (
      <Card containerStyle={[styles.card, { flex: 1, marginTop: 0 }]}>
        <Image
          source={this.props.data.avatar}
          resizeMode="contain"
          style={{ flex: 1, width: null, height: 150 }}>
        </Image>
      </Card>
    )
  }

  renderProducts() {
    let categories = []
    for (const [key, category] of Object.entries(products)) {
      categories.push(
        <Card key={key}
          title={key.toUpperCase()}
          containerStyle={styles.card}
          titleStyle={styles.cardTitle}
          dividerStyle={{ display: 'none', margin: 0, padding: 0 }}
        >
          {this.renderCategory(key, category)}
        </Card>
      )
    }
    return categories;
  }

  renderCategory(key, category) {
    items = getRandom(category, 5)
      .map((item, i) => {
        return (
          <TouchableHighlight key={i}
            underlayColor='#FAFAFA'
            onPress={() => Actions.productScreen({ title: item.name, data: item })}
          >
            <View style={styles.listCard}>
              <Image
                style={{ width: 150, height: 100 }}
                resizeMode="contain"
                source={item.avatar}
              />
              <Text>{item.name}</Text>
            </View>
          </TouchableHighlight>
        )
      })
    items.push(
      <TouchableHighlight key={key + "-more"}
        underlayColor='#FAFAFA'
        onPress={() => Actions.categoryScreen({ title: key.toUpperCase(), data: category })}
      >
        <View style={[styles.listCard, { width: 75, textAlign: 'center' }]}>
          <Icon containerStyle={{ width: 75, height: 120 }}
            name='arrow-forward' size={52} />
        </View>
      </TouchableHighlight>
    )
    return (
      <ScrollView horizontal>
        {items}
      </ScrollView>
    )
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
    borderWidth: 0.2,
    height: 120,
    width: 150,
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

export default StoreScreen;