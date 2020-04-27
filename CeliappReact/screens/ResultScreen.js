import ResultBlock from '../components/ResultDisplay';
import React, { Component } from 'react';
import { StyleSheet,ScrollView, View, Text, TouchableOpacity } from 'react-native'

class ResultScreen extends Component 

{
  picture = require('../assets/images/cross.png');

  state = {   
     data: '',
     resultArray: [displayBlock]
  }
  componentDidMount = () => {
    fetch('http://34.255.119.32:5000/home', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        answer: 'Hello',
        UserResult: 'Hello',
        Username: 'Hello'

      }),
    })
    .then(response => response)
    .then(function (response) {
      console.log(response);
      console.log("HEre");
    })
    .catch((error) => {
      console.error(error);
    });
  }










/*

{
  constructor(props) {
    super(props);

    let objCopy = Object.assign({}, displayBlock);
    objCopy.accuracyPercentText = 50;

    this.state = {
      data: '',
      resultArray: [displayBlock],
      
    };

    }
*/
  render() {
    const { navigation,route } = this.props;
    //const { data } = route.params
    //console.log(this.props);
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
      <TouchableOpacity onPress={this.doSomethingWithServer.bind(this)} style={styles.buttonContainer}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>



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

  doSomethingWithServer = async() =>
  {
    const timeout = new Promise((resolve, reject) => {
      setTimeout(reject, 300, 'Request timed out');
  });

  const request = fetch('34.255.119.32');

  return Promise
      .race([timeout, request])
      .then(response => alert('It worked :)'))
      .catch(error => alert('It timed out :('));
  
  };

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

