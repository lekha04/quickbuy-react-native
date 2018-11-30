import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated
} from 'react-native';

export default class FlipCard extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    })
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    })
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })
    this.frontOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [1, 0]
    })
    this.backOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [0, 1]
    })
    this.frontZIndex = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [100, 10]
    })
    this.backZIndex = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [10, 100]
    })
  }

  flipCard() {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }

  }

  render() {
    const frontAnimatedStyle = {
      transform: [
        { rotateY: this.frontInterpolate }
      ]
    }
    const backAnimatedStyle = {
      transform: [
        { rotateY: this.backInterpolate }
      ]
    }

    return (
      <View style={[styles.container]}>
        <TouchableOpacity onPress={() => this.flipCard()}>
          <View>
            <Animated.View style={[this.props.flipStyle, frontAnimatedStyle, { opacity: this.frontOpacity, zIndex: this.frontZIndex }]}>
              {this.props.children[0]}
            </Animated.View>
            <Animated.View style={[this.props.flipStyle, styles.flipCardBack, backAnimatedStyle, { opacity: this.backOpacity, zIndex: this.backZIndex }]}>
              {this.props.children[1]}
            </Animated.View>
          </View>
        </TouchableOpacity>
        {this.props.children.slice(2)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flipCard: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    backfaceVisibility: 'hidden',
  },
  flipCardBack: {
    position: "absolute",
    top: 0,
  },
  flipText: {
    width: 90,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  }
});