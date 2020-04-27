import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';


class CameraScreen extends Component {
  constructor(props) {
    super(props);

    //let objCopy = Object.assign({}, displayBlock);
   // objCopy.accuracyPercentText = 50;

    //this.state = {
      //resultArray: [displayBlock,objCopy]
    //};
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
  console.log("STARTING TO TAKE PIC");
  var picture = await this.takePicture();
  console.log("FINISHED WITH THE PIC");
  /*
  Put a loading screen here.
  Stuff Happens server gets data then sends it back.
  */
  var pictureData = {
    resultValue: 11,
    accuracyPercentText: 1111,
    dateValue: '11/11/11',
    timeValue: '11:11',
    resultState: 1
  }
  this.props.navigation.navigate('Result', {data: 1});
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

