import React, { Component } from 'react';
import { AppRegistry, Text, View, ListView, StyleSheet } from 'react-native';

const users = [
	{name: 'Jesse Soldat'},
	{name: 'Nate Soldat'},
	{name: 'Mark Soldat'}, 
	{name: 'Marcia Soldat'}

]

export default class Component4 extends Component {
	constructor(props) {
	  super(props);
	  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	
	  this.state = {
	  	userDataSource: ds.cloneWithRows(users)
	  };
	}

	renderRow(user, sectionId, rowId, highlightRow){
		return(
			<View style={styles.row}>
				<Text style={styles.rowText}>{user.name}</Text>
			</View>
		)
	}

  render() {
    return (
    		<View>
    			<Text>
    				Component 4
    			</Text>
	        <ListView
	        	dataSource={this.state.userDataSource}
	        	renderRow={this.renderRow.bind(this)}
	        />
	      </View>
    
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

AppRegistry.registerComponent('Component4', () => Component4);
