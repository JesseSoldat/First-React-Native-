import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Component1  from './components/Component1/Component1';
import Component2  from './components/Component2/Component2';
import Component3  from './components/Component3/Component3';


export default class myapp extends Component {
  render() {
    console.log('react is cool');
    return (
      <View>
        <Text>
          Welcome to JLab
        </Text>
       
        <Component1 message="hello world"/>
        <Component2 />
        <Component3 />


      </View>
    );
  }
}



AppRegistry.registerComponent('myapp', () => myapp);
