import React from 'react'

import AppNavigator from './navigation/AppNavigation'
import AsyncStorage from '@react-native-community/async-storage'

export default function App() {
  var testArray = [];
  const bookmarksString = JSON.stringify(testArray);
  
  AsyncStorage.setItem('ResultStore',bookmarksString);
  return <AppNavigator />
}