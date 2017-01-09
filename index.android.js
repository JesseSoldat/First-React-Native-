import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Component1  from './components/Component1/Component1';
export default class myapp extends Component {
  render() {
    return (
      <View>
        <Text>
          Welcome to JLab
        </Text>
       
        <Component1 message="hello world"/>
      </View>
    );
  }
}



AppRegistry.registerComponent('myapp', () => myapp);
