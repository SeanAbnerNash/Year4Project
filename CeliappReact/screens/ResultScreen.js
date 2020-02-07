import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import ResultBlock from '../components/ResultDisplay';



export default class ResultScreen extends React.Component {
    render() {
      return (
            <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center' }}>
                <Text> RESULTS!</Text>
            <ResultBlock dataBlock={displayBlock}></ResultBlock>
            <ResultBlock dataBlock={displayBlock}></ResultBlock>
            <ResultBlock dataBlock={displayBlock}></ResultBlock>
            <ResultBlock dataBlock={displayBlock}></ResultBlock>
            <ResultBlock dataBlock={displayBlock}></ResultBlock>
          </View>
        );
      }

    };

    
var displayBlock = {
    resultValue: 'Negative',
    accuracyPercentText: 100,
    dateValue: '12/20/12',
    timeValue: '12:12',
    resultState: 3
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