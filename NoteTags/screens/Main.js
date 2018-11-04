import React, { Component } from 'react';
import Header from '../contents/Header';
import NotesContainer from '../contents/NotesContainer';
import AddNoteButton from '../contents/AddNoteButton';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity
    } from 'react-native';


export default class Main extends Component {
  render() {
    return (
        <View style = {styles.container}>
          <Header />
          <NotesContainer />
          <AddNoteButton />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    }
})