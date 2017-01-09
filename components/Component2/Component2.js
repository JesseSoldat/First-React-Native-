import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
export default class component2 extends Component {
 onPress1(){
    console.log('Area Pressed 1');
  }
  onPress2(){
    console.log('Area Pressed 2');
  }

  render() { 
    return (
      <View>
        <View style={{backgroundColor: '#000000'}}>
          <Text style={{color: 'red'}}>
            Hello from Component 2
          </Text>
        </View>
        <View style={styles.myView}>
          <Text style={styles.myText}>I'm learning React</Text>
        </View>
   
        <View style={styles.container}>
          <TouchableHighlight 
            style={styles.v1}
            onPress={this.onPress1}
            underlayColor="blue">
            <View >
              <Text>View 1</Text>
            </View>
          </TouchableHighlight>

          <TouchableOpacity
            onPress={this.onPress2}
            style={styles.v2}>
            <View>
              <Text>View 2</Text>
            </View>
          </TouchableOpacity>

          
          <View style={styles.v3}>
            <Text style={{color: 'white'}}>View 3</Text>
          </View>
        </View>
       

      </View>
    );
  }
}

const styles = StyleSheet.create({
  myView: { 
    backgroundColor: 'blue'
  },
  myText: {
    color: 'white'
  },
  container: {
    flexDirection: 'row',
    height: 100
  },
  v1: {
    flex: 1,
    backgroundColor: 'red',
    padding: 10
  },
   v2: {
    flex: 1,
    backgroundColor: 'green',
    padding: 10
  },
   v3: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10
  }

})

AppRegistry.registerComponent('component2', () => component2);