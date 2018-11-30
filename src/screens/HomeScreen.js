import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import FlipCard from '../components/FlipCard';
import { SearchBar, Card, ListItem, Button, Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'; // New code
import Stores from '../assets/storenames';
import Products from '../assets/productnames';
import NumericInput from 'react-native-numeric-input'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SearchBar
        lightTheme
        // onChangeText={someMethod}
        // onClearText={someMethod}
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
            Products.dairy.map((u, i) => {
              return (
                <FlipCard key={i} flipStyle={styles.listCard}>
                  {/* Face Side */}
                  <View>
                    <Image
                      style={{ width: 180, height: 120 }}
                      resizeMode="contain"
                      source={u.avatar}
                    />
                  </View>
                  {/* Back Side */}
                  <View>
                    <View style={styles.listCardBack}>
                      <NumericInput onChange={value => 1} minValue={0} />
                      <Button
                        title="More Options"
                        backgroundColor="#2962FF"
                        onPress={() => Actions.productScreen({ title: u.name.toUpperCase(), data: u })}></Button>
                    </View>
                  </View>
                  <View style={{ textAlign: 'left' }}>
                    <Text style={{ fontSize: 18 }}>{u.name}</Text>
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

export default HomeScreen;