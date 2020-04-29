import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

export default class ResultBlock extends Component 
{
  constructor(props) {
    super(props);
    this.state = {
      resultText: "Result: ",
      accuracyText: 'Accuracy: ',
      dateText: 'Date: ',
      timeText: 'Time: ',
    };
  }
  
  renderImage(){
    let resultIcon;
    if (this.props.dataBlock.accuracyPercentText < 50)
    {
      this.props.dataBlock.resultState = 3;
    }
    switch(this.props.dataBlock.resultState) {
        case 1:
           this.props.dataBlock.resultText = "Negative";
           resultIcon =  <Image
            style={{width: 100, height: 100}}
            source={require('../assets/images/check.png')}/>
          break;
        case 2:
           this.props.dataBlock.resultText = "Positive";
            resultIcon =  <Image
            style={{width: 100, height: 100}}
            source={require('../assets/images/cross.png')}/>
          break;  
        case 3:
           this.props.dataBlock.resultText = "Inconclusive";
            resultIcon =  <Image
            style={{width: 100, height: 100}}
            source={require('../assets/images/question.png')}/>
           break;
        default:
           this.props.dataBlock.resultText = "Inconclusive";
            resultIcon =  <Image
            style={{width: 100, height: 100}}
            source={require('../assets/images/question.png')}/>
      }
      return resultIcon;
  }


  render() {
    return (
        <View style={{
            height: 120,
            width: 330,
            backgroundColor: '#9ADEEF',
            flexDirection: 'row',
            padding: 5,
            }}>
                

           {this.renderImage()}

            <View style={{
                flexDirection: 'column',
                }}>

                <Text style={styles.baseText}>
                    <Text style={styles.baseText}>
                        {this.state.resultText}{this.props.dataBlock.resultText}{'\n'}{'\n'}
                    </Text>

                    <Text style={styles.baseText}>
                    {this.state.accuracyText}{this.props.dataBlock.accuracyPercentText}{'% \n'}{'\n'}
                    </Text>

                    <Text style={styles.baseText}>
                        {this.state.dateText}{new Date(this.props.dataBlock.UTCTimestamp).getUTCDate()} / {new Date(this.props.dataBlock.UTCTimestamp).getUTCMonth()+1} / {new Date(this.props.dataBlock.UTCTimestamp).getUTCFullYear()} {'\n'}{'\n'}
                    </Text>

                    <Text style={styles.baseText}>
                        {this.state.timeText}{new Date(this.props.dataBlock.UTCTimestamp).getUTCHours()+1} : {new Date(this.props.dataBlock.UTCTimestamp).getUTCMinutes()}{'\n'}{'\n'}
                    </Text>
                </Text>
            </View>
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


//Expected Datablock Template
/**
 * 
 * var displayBlock = {
  resultValue: 20,
  accuracyPercentText: 2220,
  dateValue: '12/12/12',
  timeValue: '12:12',
  resultState: 3
}
 */