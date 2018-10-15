import React, { Component } from 'react';
import {Button, Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

class ModalScreen extends Component {

  static navigationOptions = {
    title: 'Modal Screen',
  };

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text style = {{textAlign: 'center', fontSize: 20}}>This is a Modal!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style = {{color: 'blue'}}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
          <Button style = {{width: '20%'}}
            title= "Show Modal"
            onPress={() => {this.setModalVisible(true); }}
          />
    
      </View>
    );
  }
}

ModalScreen.propTypes = {

};

export default ModalScreen;