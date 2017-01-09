import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class component1 extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Jesse',
      age: 36,
      showName: false
    }
  }
  render() {
      let name = this.state.showName ? this.state.name : 'No Name';
    return (
      <View>
        <Text>This is Component 1</Text> 
        <Text>{this.props.message}</Text> 
        <Text>{this.state.age}</Text>
        <Text>{name}</Text>    

      </View>
    );
  }
}



AppRegistry.registerComponent('component1', () => component1);
