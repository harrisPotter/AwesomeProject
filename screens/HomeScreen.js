import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, DrawerLayoutAndroid } from 'react-native';



class HomeScreen extends Component {
  static navigationOptions = {
    title: 'HomeScreen',
  };

  render () {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>This is the DrawerLayoutAndroid Navigation!</Text>

        <Button 
              title="Go to ActivityIndicator"
              onPress={() => this.props.navigation.navigate('Activity')}
            />
           
        <Button 
              title="Go to FlatList"
              onPress={() => this.props.navigation.navigate('Flat')}
            />

        <Button 
              title="Go to Image"
              onPress={() => this.props.navigation.navigate('Image')}
            />
      </View>
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>

       <View style={[styles.container]}>
          <Text>This is the Home Screen</Text>
          <Text>Drag the screen from the left to see the Navigation!</Text>
          </View>
      </DrawerLayoutAndroid>
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
  

HomeScreen.propTypes = {

};

export default HomeScreen;