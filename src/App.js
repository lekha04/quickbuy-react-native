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
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import OrdersScreen from './screens/OrdersScreen';
import SearchScreen from './screens/SearchScreen';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  var icon = (function (title) {
    switch (title) {
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
    <Icon name={icon} />
  );
}

const App = () => {
  return (
    <Router navigationBarStyle={styles.navBar}>
      <Lightbox key="lightbox">
        <Scene key="root" title="QuickBuy">
          <Stack hideNavBar key="unauthScreen">
            <Scene
              key="loginScreen"
              inital
              component={LoginScreen}></Scene>
            <Scene
              key="signupScreen"
              component={SignupScreen}></Scene>
          </Stack>
          <Drawer
            hideNavBar
            key="authScreen"
            contentComponent={DrawerContent}
            drawerWidth={300}
            drawerIcon={<Icon name='menu' size={28}/>}
          >
            <Scene hideNavBar panHandlers={null}>
              {/* Tab Container */}
              <Tabs
                key="tabbar"
                backToInitial
                lazy
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
                <Scene key="cartTab" icon={TabIcon} title="Cart">
                  <Scene
                    key="cartScreen"
                    component={CartScreen}
                    title="Cart"
                  />
                  <Scene
                    key="checkoutScreen"
                    component={CheckoutScreen}
                    title="Checkout"
                    back
                  />
                  <Scene
                    key="ordersScreen"
                    component={OrdersScreen}
                    title="Orders"
                  />
                </Scene>

                {/* Tab and it's scenes */}
                <Scene key="searchTab" title="Search" icon={TabIcon}>
                  <Scene
                    key="searchScreen"
                    component={SearchScreen}
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