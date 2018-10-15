import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, TextInput, Image, KeyboardAvoidingView } from 'react-native';

const window = Dimensions.get('window');
export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width /7;


class KeyboardAvoidingViewScreen extends Component {
  static navigationOptions = {
    title: 'Keyboard Avoiding View',
  };

  render() {
    return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <TextInput
        placeholder="Email"
        style={styles.input}
      />
      <TextInput
        placeholder="Username"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm Password"
        style={styles.input}
      />
     
    </KeyboardAvoidingView>
  );
};
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4c69a5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 5,
   // paddingVertical: 5,
    // paddingHorizontal: 15,
    width: window.width - 100,
  },  
});

KeyboardAvoidingViewScreen.propTypes = {

};

export default KeyboardAvoidingViewScreen;