import React, { Component } from 'react';
import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import AsyncStorage from '@react-native-community/async-storage'


class CameraScreen extends Component {
  constructor(props) {
    super(props);

    //let objCopy = Object.assign({}, displayBlock);
   // objCopy.accuracyPercentText = 50;

    this.state = {
      loading: false
    };
  }

 

render() {
  const { navigation } = this.props.navigation;
  return (
<View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}

        />
        <ActivityIndicator size="large" color="#ffffff" animating={this.state.loading}/>

        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.sendToServer.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}

takePicture = async() => {
  if (this.camera) {
    const options = { quality: 0.5, base64: true };
    const data = await this.camera.takePictureAsync(options);
    console.log("FINSIHED");
    return data;
  }
};

sendToServer = async() =>
{
  this.setState({loading: true});
  console.log("STARTING TO TAKE PIC");
  var picture = await this.takePicture();
  console.log("FINISHED WITH THE PIC");

  
  /*
  Put a loading screen here.
  Stuff Happens server gets data then sends it back.
  */
  var pictureData = {
    resultValue: 'Negative',
    accuracyPercentText: 100,
    UTCTimestamp: Date.now(),
    resultState: 3
  }


  AsyncStorage.getItem("ResultStore").then((data) => {
    var userData = JSON.parse(data);
    console.log(userData, 'Get Values', userData.length);

    userData.push(pictureData);
    const bookmarksString = JSON.stringify(userData);
    AsyncStorage.setItem('ResultStore',bookmarksString);
 }).done();



  this.setState({loading: false});
  this.props.navigation.navigate('Result', {data: pictureData});
};

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
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

export default CameraScreen

