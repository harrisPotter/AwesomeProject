import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';

class ImageScreen extends Component {
  static navigationOptions = {
    title: 'Images',
  };

  render() {
    return (
      <View>
        <Image style = {[styles.fit]}
          source = {require('../pics/fd.jpg')}
        />
        <Image style = {[styles.stretch]}
          source={require('../pics/cover.jpg')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stretch: {
    width: 500,
    height: 250,
  },
  fit: {
    width: 300,
    height: 300
  }
});

AppRegistry.registerComponent('ImageScreen', () => ImageScreen);

ImageScreen.propTypes = {

};

export default ImageScreen;