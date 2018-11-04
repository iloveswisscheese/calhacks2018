import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity
    } from 'react-native';


export default class AddNoteButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 35,
        backgroundColor: '#E91E63',
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    }
})