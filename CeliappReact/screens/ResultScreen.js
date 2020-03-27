import ResultBlock from '../components/ResultDisplay';
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

function ResultScreen(props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Result Screen</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Go to Home Screen</Text>
      </TouchableOpacity>
      <Text> RESULTS!</Text>
            <ResultBlock dataBlock={displayBlock}></ResultBlock>
    </View>
  )
}

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
export default ResultScreen
