import React, { Component } from 'react';
import { AppRegistry, Text, View, Navigator } from 'react-native';
import Component1  from './components/Component1/Component1';
import Component2  from './components/Component2/Component2';
import Component3  from './components/Component3/Component3';
import Component4  from './components/Component4/Component4';
import Component5  from './components/Component5/Component5';
import Component6  from './components/Component6/Component6';



export default class myapp extends Component {
  renderScene(route, navigator){
    switch(route.id){
      case 'component5':
        return (<Component5 navigator={navigator} title="component5" />)
      case 'component6':
        return (<Component6 user={route.user} navigator={navigator} title="component6" />)
    }
  }
  render() {
    console.log('react is cool');
    return (
      <Navigator
        initialRoute={{id: 'component5'}}
        renderScene={this.renderScene}
        configureScreen={(route, routeStack)=> Navigaotor.SceneConfigs.FloatFromBottom}

      />
    );
  }
}



AppRegistry.registerComponent('myapp', () => myapp);
