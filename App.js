import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import ActivityIndicatorScreen from './screens/ActivityIndicatorScreen'
import FlatListScreen from './screens/FlatListScreen'
import ImageScreen from './screens/ImageScreen'



const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    Activity: {
      screen: ActivityIndicatorScreen,
    },
    Flat: {
      screen: FlatListScreen,
    },
    Image: {
      screen: ImageScreen,
    }
  },
  {
    initialRouteName: 'Home',
  }
);



export default class App extends React.Component {
  render() {
    return <RootStack />;
    
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