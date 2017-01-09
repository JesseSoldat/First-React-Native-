import React, { Component } from 'react';
import { AppRegistry, Text, View, ListView, StyleSheet, TouchableHighlight } from 'react-native';


export default class component5 extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  
    this.state = {
      userDataSource: ds,
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  // fetchUsers(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((resposne) => {
  //       this.setState({
  //         userDataSource: this.state.userDataSource.cloneWithRows(response)
  //       });
  //     });
  // }

  fetchUsers(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    userDataSource: this.state.userDataSource.cloneWithRows(response)
                });
            });
    }

  onPress(user){
    console.log(user);
    this.props.navigator.push({
      id: 'component6',
      user: user
    });
  }

  renderRow(user, sectionId, rowId, highlightRow){
    return(
      <TouchableHighlight onPress={() => {this.onPress(user)}}>
        <View style={styles.row}>
          <Text style={styles.rowText}>{user.name}: {user.email}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  
  render() {
   
    return (
      <ListView 
            dataSource={this.state.userDataSource}
            renderRow={this.renderRow.bind(this)}
        />
    );
  }
}

const styles = StyleSheet.create({
  row: { 
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f4f4f4',
    marginBottom: 3 
  },
  rowText: {
    flex: 1
  }
});



AppRegistry.registerComponent('component5', () => component5);
