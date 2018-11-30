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
import GridView from 'react-native-super-grid';

class CategoryScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GridView
        items={this.props.data}
        itemDimension={100}
        style={styles.gridView}
        renderItem={item => (
          <TouchableHighlight
            underlayColor='#FAFAFA'
            onPress={() => Actions.productScreen({data: item})}
          >
            <View style={styles.itemContainer}>
              <Image
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
                source={item.avatar}
              />
              <Text numberOfLines={2} lineHeight={2}>{item.name}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    )
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

export default CategoryScreen;