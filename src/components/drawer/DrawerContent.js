import React from 'react';
import PropTypes from 'prop-types';
import { AsyncStorage, Text, ViewPropTypes } from 'react-native';
// import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import { ScrollView, LayoutAnimation, UIManager, Linking } from 'react-native';
import { View, List, ListItem, Body, Left, Right, Icon, Item, Input, Button, Grid, Col } from 'native-base';

class DrawerContent extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    sceneStyle: ViewPropTypes.style,
    title: PropTypes.string,
  };

  static contextTypes = {
    drawer: PropTypes.object,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderMenu()}
      </ScrollView>
    )
  }

  renderMenu() {
    return (
      <View>
        <View style={{ paddingRight: 15 }}>
          <List>
            {this.renderSecondaryList()}
          </List>
        </View>
        <View style={styles.line} />
        <View style={{ paddingRight: 15, paddingLeft: 15 }}>
          <Text style={{ marginBottom: 7 }}>Follow us</Text>
          <Grid>
            <Col style={{ alignItems: 'center' }}><Icon style={{ fontSize: 18 }} name='logo-facebook' onPress={() => Linking.openURL('http://www.facebook.com/').catch(err => console.error('An error occurred', err))} /></Col>
            <Col style={{ alignItems: 'center' }}><Icon style={{ fontSize: 18 }} name='logo-instagram' onPress={() => Linking.openURL('http://www.instagram.com/').catch(err => console.error('An error occurred', err))} /></Col>
            <Col style={{ alignItems: 'center' }}><Icon style={{ fontSize: 18 }} name='logo-twitter' onPress={() => Linking.openURL('http://www.twitter.com/').catch(err => console.error('An error occurred', err))} /></Col>
            <Col style={{ alignItems: 'center' }}><Icon style={{ fontSize: 18 }} name='logo-youtube' onPress={() => Linking.openURL('http://www.youtube.com/').catch(err => console.error('An error occurred', err))} /></Col>
            <Col style={{ alignItems: 'center' }}><Icon style={{ fontSize: 18 }} name='logo-snapchat' onPress={() => Linking.openURL('http://www.snapchat.com/').catch(err => console.error('An error occurred', err))} /></Col>
          </Grid>
        </View>
      </View>
    );
  }

  back() {
    var animationConfig = {
      duration: 150,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.scaleXY,
      },
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    };
    LayoutAnimation.configureNext(animationConfig);
    this.setState({ subMenu: false, subMenuItems: [], clickedItem: '' })
  }

  renderSecondaryList() {
    let secondaryItems = [];
    menusSecondaryItems.map((item, i) => {
      secondaryItems.push(
        <ListItem
          last
          icon
          key={item.id}
          button={true}
          onPress={() => this.menuClicked(item.key)}
        >
          <Left>
            <Icon style={{ fontSize: 18 }} name={item.icon} />
          </Left>
          <Body style={{ marginLeft: -15 }}>
            <Text style={{ fontSize: 16 }}>{item.title}</Text>
          </Body>
        </ListItem>
      );
    });
    return secondaryItems;
  }

  menuClicked(key) {
    switch(key) {
      case 'signout': {
        AsyncStorage.removeItem('session', () => {
          Actions.jump('loginScreen');
        })
        break;
      }
      case 'orders': {
        Actions.jump('ordersScreen');
        break;
      }
      case 'refresh': {
        AsyncStorage.clear();
        Actions.jump('loginScreen');
      }
      default:
        console.log('key pressed: ' + key);
    }
  }

}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd'
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(189, 195, 199, 0.6)',
    marginTop: 10,
    marginBottom: 10
  }
};

const menusSecondaryItems = [
  {
    id: 190,
    title: 'My Orders',
    icon: 'cube',
    key: 'orders'
  },
  {
    id: 21,
    key: 'contact',
    title: 'Contact Us',
    icon: 'md-phone-portrait',
    key: 'contact'
  },
  {
    id: 23,
    key: 'newsletter',
    title: 'Newsletter',
    icon: 'md-paper',
    key: 'newsletter'
  },
  {
    id: 19,
    title: 'Signout',
    icon: 'exit',
    key: 'signout'
  },
  {
    id: 123,
    title: 'Refresh',
    icon: 'refresh',
    key: 'refresh'
  }
];

export default DrawerContent;