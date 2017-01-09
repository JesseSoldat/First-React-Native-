import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput } from 'react-native';


export default class component3 extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      textValue: 'Hello'
    };
  }
  render() {
    return (
      <View>
        <Text>
          Welcome to Component 3
        </Text>
        <TextInput 
          placeholder="Enter Text"
          value={this.state.textValue}/>
      </View>
    );
  }
}

//53.27



AppRegistry.registerComponent('component3', () => component3);
