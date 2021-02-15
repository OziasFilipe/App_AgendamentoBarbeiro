import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//Import Telas
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/pages/Login';
//
import Router from './src/routes/router'

export default function App() {
  return (
    <NavigationContainer >
      <Router/>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#24303C',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
