import ResultBlock from '../components/ResultDisplay';
import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet,ScrollView, View, Text, TouchableOpacity } from 'react-native'
import { defined } from 'react-native-reanimated';

class ResultScreen extends Component{
  constructor(props) {
    super(props);
    let objCopy = Object.assign({}, displayBlock);
    objCopy.accuracyPercentText = 50;

    this.state = {
      data: '',
      resultArray: [displayBlock],
      
    };
  }

  render() {
    const { navigation,route } = this.props;
    //const {data} = route.params;
    //if(data)
    //{
    //  console.log("DEFINED?");
    //}
    //else
    //{
    //  console.log("UNDEFINED?");
    //}
    //console.log(data);
    return(    
      <ScrollView>
    <View style={styles.container}>
      <Text style={styles.text}>Result Screen</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Go to Home Screen</Text>
      </TouchableOpacity>

      <Text> RESULTS!</Text>
      {this.state.resultArray.map((result) => {
            return (
            <TouchableOpacity
              style={styles.resultButtonContainer}
              onPress={() => this.props.navigation.navigate('Home')}>
                
              <ResultBlock dataBlock={result}></ResultBlock>
        
            </TouchableOpacity>
            )})}
      
    </View>
    </ScrollView>)
  }
}

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
    resultValue: 'Negative',
    accuracyPercentText: 100,
    dateValue: '12/20/12',
    timeValue: '12:12',
    resultState: 3
  }

