import ResultBlock from '../components/ResultDisplay';
import React, { Component } from 'react';
import {StyleSheet,ScrollView, View, Text, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'


class ResultScreen extends Component{
  constructor(props) {
    super(props);

    this.state = {
      resultArray: []
    };

    /*
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (error, stores) => {
        stores.map((result, i, store) => {
          console.log({ [store[i][0]]: store[i][1] });
          return true;
        });
      });
    });
    */
  }

  render() {
    const { navigation} = this.props;
    AsyncStorage.getItem("ResultStore").then((data) => {
      var userData = JSON.parse(data);
      this.setState({resultArray:userData});
   }).done();

    return(    
      <ScrollView>
    <View style={styles.container}>
      <Text style={styles.text}>Result Screen</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Home')}>
      <Text style={styles.buttonText}>Go to Home Screen</Text>
      </TouchableOpacity>
      <Text> ------------------------------ </Text>
      
      {this.state.resultArray.map((result,index) => {
            return (
            <TouchableOpacity key={index}
              style={styles.resultButtonContainer}>
              <ResultBlock key={index} dataBlock={result}></ResultBlock>
            </TouchableOpacity>)
            })}
      
    </View>
    </ScrollView>)
  }
}

/*
Timestamp:
Accuracy:
Result:

*/



export default ResultScreen

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ebebeb'
    },
    text: {
      color: '#101010',
      fontSize: 24,
      fontWeight: 'bold'
    },
    buttonContainer: {
      backgroundColor: '#222',
      borderRadius: 5,
      padding: 10,
      margin: 20
    },
    resultButtonContainer: {
      backgroundColor: '#222',
      borderRadius: 1,
      padding: 5,
      margin: 10
    },
    buttonText: {
      fontSize: 20,
      color: '#fff'
    }
  })
  var displayBlock = {
    accuracyPercentText: 100,
    UTCTimestamp: Date.now(),
    resultState: 3
  }

