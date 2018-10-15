import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class FlatListScreen extends Component {
    static navigationOptions = {
      title: 'Flat List',
    };

  render() {
    return (
        <View style = {[styles.container]}>
          <Text>This is the FlatList Screen. </Text>
        </View>
       );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },    
  });

FlatListScreen.propTypes = {

};

export default FlatListScreen;