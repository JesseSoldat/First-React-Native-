import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class component1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Jesse',
      age: 36,
      showName: false,
      message: this.props.message
    }
  }

  static defaultProps = {
    message: 'This is the default props'
  }
  
  render() {
      let name = this.state.showName ? this.state.name : 'No Name';
    return (
      <View>
        <Text>This is Component 1</Text> 
        <Text>{this.state.message}</Text> 
        <Text>{this.state.age}</Text>
        <Text>{name}</Text>    

      </View>
    );
  }
}



AppRegistry.registerComponent('component1', () => component1);
