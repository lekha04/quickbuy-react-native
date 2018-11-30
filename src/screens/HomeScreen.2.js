const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
]

import React, { Component } from 'react';
import {
  StyleSheet,
  Image
} from 'react-native';
import { List, ListItem, Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import { Actions } from 'react-native-router-flux'; // New code

const HomeScreen = () => {
  return (
    <Container>
      <Content>
        <Card>
          <CardItem header style={{padding:0, margin:0}}>
              <Text>Stores around you</Text>
          </CardItem>
          <CardItem>
            <List dataArray={users}
              horizontal={true}
              renderRow={(u) =>
                <ListItem>
                  <Image
                    style={{ width: 120, height: 180 }}
                    resizeMode="cover"
                    source={{ uri: u.avatar }}
                  />
                  <Text style={styles.name}>{u.name}</Text>
                </ListItem>
              }>
            </List>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 16,
    textAlign: 'left',
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