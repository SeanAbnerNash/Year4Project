import { RNCamera } from 'react-native-camera';
import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';


export default class CameraScreen extends Component {



    render() {
        return (
            <View>
            <Text>C</Text>
            <RNCamera ref={ref => {this.camera = ref;}} style={{ flex: 1, width: '100%',}}>
                
            </RNCamera>
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