import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
//import ResultBlock from '.../components/ResultDisplay';

export default class MainScreen extends Component {



    render() {
        return (
            <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Scdadasdasreen</Text>
          </View>
        );
      }

}
const styles = StyleSheet.create({
    container:{

    },
  baseText: {
    paddingLeft: 20,
    paddingTop: 15,
    fontFamily: 'Cochin',
    textAlign: 'left',
    lineHeight: 12,
    fontSize: 18,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});