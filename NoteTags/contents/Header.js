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
        <View>
            <View style = {styles.header}>
                <Text style = {styles.headerText}> - NoteTags - </Text>
            </View>
            <View style = {styles.searchBar}>
                <TextInput style = {styles.searchBarText}
                placeholder = 'Search'
                placeholderTextColor = 'silver'>
                </TextInput>
            </View>
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
        justifyContent:'center'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        borderTopWidth: 40,
        borderTopColor: '#ddd',
        padding: 15
    },
    searchBar: {
        alignItems: 'stretch',
        justifyContent:'center',
        backgroundColor: '#482734',
    },
    searchBarText: {
        color: 'white',
        fontSize: 15,
        padding: 12
    }
})
      