import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, Switch } from 'react-native';


export default class component3 extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      textValue: 'Hello',
      switchValue: false
    };
  }

  onChangeText(value){
    this.setState({
      textValue: value
    })
  }

  onSubmit(){
    console.log('entered')
  }
  onSwitchChange(value){
    this.setState({
      switchValue: value
    })
  }
  render() {
    return (
      <View>
        <Text>
          Welcome to Component 3
        </Text>
        <TextInput 
          placeholder="Enter Text"
          value={this.state.textValue}
          onChangeText={(value) => this.onChangeText(value)}
          onSubmitEditing={this.onSubmit}/>
        <Text>{this.state.textValue}</Text>
        <Switch 
          value={this.state.switchValue}
          onValueChange={(value) => this.onSwitchChange(value)}/>
      </View>
    );
  }
}

//53.27



AppRegistry.registerComponent('component3', () => component3);
