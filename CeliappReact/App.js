import React from 'react'

import AppNavigator from './navigation/AppNavigation'
import AsyncStorage from '@react-native-community/async-storage'

export default function App() {
  var displayBlock = {
    accuracyPercentText: 100,
    UTCTimestamp: Date.now(),
    resultState: 3
  }
  var testArray = [displayBlock];
  const bookmarksString = JSON.stringify(testArray);
  
  AsyncStorage.setItem('ResultStore',bookmarksString);
  return <AppNavigator />
}