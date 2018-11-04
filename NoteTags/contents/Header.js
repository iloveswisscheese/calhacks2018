import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity
    } from 'react-native';


export default class Header extends React.Component {
  render() {
    return (
            <View style = {styles.header}>
                  <Text style = {styles.headerText}> - NoteTags - </Text>
            </View>
    );
  }
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#252525',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 10,
        borderBottomColor: '#482734'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        borderTopWidth: 15,
        borderTopColor: '#ddd',
        padding: 15
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
    },
    searchBar: {
      color: 'black',
      backgroundColor: '#E91E63'
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#dddddd',
        borderTopWidth:2,
        borderTopColor: '#ededed'
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
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
      