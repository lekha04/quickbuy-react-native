// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Stack, Lightbox, Drawer, Router, Scene, Tabs } from 'react-native-router-flux';
import { Icon } from 'react-native-elements'

import HomeScreen from './screens/HomeScreen';
import StoreScreen from './screens/StoreScreen';
import CategoryScreen from './screens/CategoryScreen';
import ProductScreen from './screens/ProductScreen';
import DrawerContent from './components/drawer/DrawerContent';
import Authentication from './components/Authentication';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  var icon = (function(title) {  
    switch(title) {
      case 'Home':
        return 'home';
      case 'Cart':
        return 'shopping-cart';
      case 'Search':
        return 'search';
      default:
        return '';
    }
  })(title);
  
  return (
    <Icon name={icon}/>
  );
}

const App = () => {
  return (
    <Router navigationBarStyle={styles.navBar}>
      <Lightbox key="lightbox">
        <Scene key="root" title="QuickBuy">
          <Scene
            component={Authentication}
            hideNavBar
            // initial
            key='Authentication'
            title='Authentication'
          />
          {/* <Stack>
            <Scene key="loginScreen"></Scene>
            <Scene key="registerScreen"></Scene>
          </Stack> */}
          <Drawer
            hideNavBar
            initial
            key="drawer"
            onExit={() => {
              console.log('Drawer closed');
            }}
            onEnter={() => {
              console.log('Drawer opened');
            }}
            contentComponent={DrawerContent}
            // drawerImage={MenuIcon}
            drawerWidth={300}
          >
            <Scene hideNavBar panHandlers={null}>
              {/* Tab Container */}
              <Tabs
                key="tabbar"
                backToInitial
                tabBarStyle={{ backgroundColor: '#FFFFFF' }}
              >
                {/* Tab and it's scenes */}
                <Stack key="homeTab" icon={TabIcon} title="Home">
                  <Scene key="homeScreen"
                    component={HomeScreen}
                    title="QuickBuy"
                  />
                  <Scene
                    key="storeScreen"
                    component={StoreScreen}
                    back
                  />
                  <Scene
                    key="categoryScreen"
                    component={CategoryScreen}
                    back
                  />
                  <Scene
                    key="productScreen"
                    component={ProductScreen}
                    back
                  />
                </Stack>

                {/* Tab and it's scenes */}
                <Scene key="cartTab" title="Cart" icon={TabIcon}>
                  <Scene
                    key="blue"
                    component={HomeScreen}
                  />
                  <Scene
                    key="maize"
                    component={StoreScreen}
                    title="Maize"
                  />
                </Scene>

                {/* Tab and it's scenes */}
                <Scene key="searchTab" title="Search" icon={TabIcon}>
                  <Scene
                    key="gold"
                    component={HomeScreen}
                  />
                  <Scene
                    key="black"
                    component={StoreScreen}
                  />
                </Scene>
              </Tabs>
            </Scene>
          </Drawer>
        </Scene>
      </Lightbox>
    </Router>
  );
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#7C4DFF',
  }
});

export default App;